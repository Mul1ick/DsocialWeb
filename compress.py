import os
from PIL import Image

TARGET_DIR = "." 

IGNORE_DIRS = {'node_modules', '.git', '.next', 'dist', 'build', 'venv', '.venv', '__pycache__'}

def compress_to_webp(directory):
    for root, dirs, files in os.walk(directory):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        
        for file in files:
            # Look for original PNGs/JPGs
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                webp_path = os.path.splitext(filepath)[0] + ".webp"
                
                try:
                    with Image.open(filepath) as img:
                        # Convert palette (P/PA) images with transparency to RGBA
                        if img.mode in ("P", "PA"):
                            img = img.convert("RGBA")
                        elif img.mode not in ("RGB", "RGBA"):
                            img = img.convert("RGB")
                        
                        # Save WebP with transparency preserved
                        img.save(webp_path, "webp", quality=80)
                        print(f"Fixed: {filepath} -> {webp_path}")
                        
                except Exception as e:
                    print(f"Failed to process {filepath}: {e}")

if __name__ == "__main__":
    print("Re-compressing and preserving transparency...")
    compress_to_webp(TARGET_DIR)
    print("Done!")