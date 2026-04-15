import base64
import binascii
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
OUTPUT_DIR = ROOT / "assets" / "types"


def extract_js_object(source: str, marker: str):
    start = source.index(marker) + len(marker)
    if source[start] != "{":
        raise ValueError(f"Expected object after marker: {marker}")

    depth = 0
    in_string = False
    escaped = False
    quote = ""

    for index in range(start, len(source)):
        char = source[index]
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                in_string = False
            continue

        if char in {'"', "'"}:
            in_string = True
            quote = char
            continue

        if char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0:
                return source[start : index + 1]

    raise ValueError(f"Failed to extract object for marker: {marker}")


def code_to_asset_name(code: str):
    normalized = re.sub(r"[^a-z0-9]+", "-", code.lower()).strip("-")
    return normalized or "type"


def parse_data_url(data_url: str):
    match = re.match(r"^data:image/([a-zA-Z0-9.+-]+);base64,(.+)$", data_url, re.S)
    if not match:
        raise ValueError("Unsupported data URL format")
    image_format = match.group(1).lower()
    payload = match.group(2)
    extension = "jpg" if image_format == "jpeg" else image_format
    return extension, payload


def main():
    source = (ROOT / "main.js").read_text(encoding="utf-8")
    images = json.loads(extract_js_object(source, "const TYPE_IMAGES = "))

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    written = 0
    for code, data_url in images.items():
        extension, payload = parse_data_url(data_url)
        try:
            image_bytes = base64.b64decode(payload)
        except binascii.Error as exc:
            raise ValueError(f"Invalid base64 image for {code}") from exc

        target = OUTPUT_DIR / f"{code_to_asset_name(code)}.{extension}"
        target.write_bytes(image_bytes)
        written += 1

    print(f"Generated {written} type assets in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
