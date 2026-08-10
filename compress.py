import os
from PIL import Image

# Point this to the root of your project
TARGET_DIR = "." 

# Folders to skip so it doesn't compress images inside dependencies or build files
IGNORE_DIRS = {'node_modules', '.git', '.next', 'dist', 'build', 'venv', '.venv', '__pycache__'}

def compress_to_webp(directory):
    for root, dirs, files in os.walk(directory):
        # Modify dirs in-place to skip ignored directories
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                # Create new filename with .webp extension
                webp_path = os.path.splitext(filepath)[0] + ".webp"
                
                # Skip if the webp version already exists to avoid duplicate work
                if os.path.exists(webp_path):
                    continue
                
                try:
                    with Image.open(filepath) as img:
                        # Convert to RGB if saving as WebP (removes alpha channel issues for jpegs)
                        if img.mode in ("RGBA", "P"):
                            img = img.convert("RGB")
                        
                        # Save compressed WebP
                        img.save(webp_path, "webp", quality=75)
                        print(f"Compressed: {filepath} -> {webp_path}")
                        
                        # Optional: remove original file to clean up
                        # os.remove(filepath) 
                except Exception as e:
                    print(f"Failed to process {filepath}: {e}")

if __name__ == "__main__":
    print("Starting compression...")
    compress_to_webp(TARGET_DIR)
    print("Done!")