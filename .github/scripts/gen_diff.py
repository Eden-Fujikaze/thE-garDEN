import tomllib, os, shutil

with open("/tmp/old_index.toml", "rb") as f:
    old = tomllib.load(f)
with open("/tmp/new_index.toml", "rb") as f:
    new = tomllib.load(f)

old_files = {entry["file"] for entry in old.get("files", [])}
new_files = {entry["file"] for entry in new.get("files", [])}
added = new_files - old_files

os.makedirs("diff/serverModDif", exist_ok=True)

for entry in new.get("files", []):
    if entry["file"] in added:
        src = os.path.join("server", entry["file"])
        dst = os.path.join("diff/serverModDif", entry["file"])
        if os.path.exists(src):
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            shutil.copy2(src, dst)
        else:
            print(f"Warning: {src} not found (likely a .pw.toml metadata file, not a jar)")
