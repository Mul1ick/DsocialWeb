import os
from PIL import Image

# Point this to your public folder
TARGET_DIR = "./public" 

def compress_to_webp(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                # Create new filename with .webp extension
                webp_path = os.path.splitext(filepath)[0] + ".webp"
                
                try:
                    with Image.open(filepath) as img:
                        # Convert to RGB if saving as WebP (removes alpha channel issues for jpegs)
                        if img.mode in ("RGBA", "P"):
                            img = img.convert("RGB")
                        
                        # Save compressed WebP
                        img.save(webp_path, "webp", quality=75)
                        print(f"Compressed: {file} -> {os.path.basename(webp_path)}")
                        
                        # Optional: remove original file to clean up
                        # os.remove(filepath) 
                except Exception as e:
                    print(f"Failed to process {file}: {e}")

if __name__ == "__main__":
    print("Starting compression...")
    compress_to_webp(TARGET_DIR)
    print("Done!")