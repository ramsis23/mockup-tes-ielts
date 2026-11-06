"""Generate the app icon (original artwork): desktop/icon.png, icon.ico (Windows), icon.icns (macOS).

    python desktop/make-icon.py

Design: rounded tile with an indigo-to-sky gradient, white headphones over an open book
(Listening + Reading) and an amber badge with a tick (practice / results). Needs Pillow.
"""
import math
import os

from PIL import Image, ImageDraw, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
S = 4096                      # draw large, then downsample for smooth edges
K = S / 1024                  # design units are on a 1024 grid


def u(*v):
    return [round(x * K) for x in v]


def gradient(size, c1, c2):
    """Diagonal linear gradient from top-left c1 to bottom-right c2."""
    small = Image.new('RGB', (256, 256))
    px = small.load()
    for y in range(256):
        for x in range(256):
            t = (x + y) / 510
            px[x, y] = tuple(round(a + (b - a) * t) for a, b in zip(c1, c2))
    return small.resize((size, size), Image.BICUBIC)


def rounded_mask(box, radius):
    m = Image.new('L', (S, S), 0)
    ImageDraw.Draw(m).rounded_rectangle(u(*box), radius=round(radius * K), fill=255)
    return m


BOOK = dict(cx=512, top=610, width=290, height=200)


def page_top(t):
    """y of a page's top edge at fraction t (0 = spine, 1 = outer edge): rises outwards, slightly bowed."""
    return BOOK['top'] - 40 * t - 22 * math.sin(math.pi * t)


def page_bottom(t):
    return BOOK['top'] + BOOK['height'] - 34 * t - 14 * math.sin(math.pi * t)


def book_page(left):
    sx = -1 if left else 1
    n = 48
    pts = [(BOOK['cx'] + sx * BOOK['width'] * i / n, page_top(i / n)) for i in range(n + 1)]
    pts += [(BOOK['cx'] + sx * BOOK['width'] * i / n, page_bottom(i / n)) for i in range(n, -1, -1)]
    return [(round(x * K), round(y * K)) for x, y in pts]


def build():
    img = Image.new('RGBA', (S, S), (0, 0, 0, 0))

    # Soft shadow under the tile.
    shadow = Image.new('L', (S, S), 0)
    ImageDraw.Draw(shadow).rounded_rectangle(u(70, 92, 954, 976), radius=round(200 * K), fill=110)
    shadow = shadow.filter(ImageFilter.GaussianBlur(28 * K))
    img.paste((15, 23, 42, 255), (0, 0), shadow)

    # Tile with gradient.
    tile = gradient(S, (67, 56, 202), (14, 165, 233)).convert('RGBA')
    img.paste(tile, (0, 0), rounded_mask((64, 64, 960, 960), 200))

    # Soft glow behind the artwork (blurred, so no hard edge).
    glow = Image.new('L', (S, S), 0)
    ImageDraw.Draw(glow).ellipse(u(200, 160, 824, 784), fill=60)
    glow = glow.filter(ImageFilter.GaussianBlur(90 * K))
    glow = Image.composite(glow, Image.new('L', (S, S), 0), rounded_mask((64, 64, 960, 960), 200))
    img.paste((255, 255, 255, 255), (0, 0), glow)

    d = ImageDraw.Draw(img)
    white = (255, 255, 255, 255)
    deep = (49, 46, 129, 255)

    # Headphones (Listening): band arc + ear cups, above the book.
    d.arc(u(232, 190, 792, 750), start=192, end=348, fill=white, width=round(54 * K))
    for x0 in (214, 706):
        d.rounded_rectangle(u(x0, 400, x0 + 104, 556), radius=round(42 * K), fill=white)
        inner = x0 + 104 - 30 if x0 < 500 else x0 + 6
        d.rounded_rectangle(u(inner, 424, inner + 24, 532), radius=round(12 * K), fill=deep)

    # Open book (Reading).
    d.polygon(book_page(True), fill=white)
    d.polygon(book_page(False), fill=white)
    d.line(u(512, BOOK['top'] - 2, 512, BOOK['top'] + BOOK['height'] + 2), fill=deep, width=round(10 * K))
    for off in (52, 96, 140):           # text lines following the page curve
        for side in (-1, 1):
            pts = [(BOOK['cx'] + side * BOOK['width'] * t, page_top(t) + off) for t in [0.14 + i * 0.03 for i in range(24)]]
            d.line([(round(x * K), round(y * K)) for x, y in pts], fill=(165, 180, 252, 255), width=round(13 * K), joint='curve')

    # Badge with a tick, bottom-right.
    bx, by, br = 790, 790, 112
    d.ellipse(u(bx - br - 14, by - br - 14, bx + br + 14, by + br + 14), fill=white)
    d.ellipse(u(bx - br, by - br, bx + br, by + br), fill=(245, 158, 11, 255))
    d.line(u(bx - 62, by + 2, bx - 16, by + 50, bx + 66, by - 50), fill=white, width=round(34 * K), joint='curve')

    return img.resize((1024, 1024), Image.LANCZOS)


if __name__ == '__main__':
    icon = build()
    icon.save(os.path.join(HERE, 'icon.png'))
    icon.save(os.path.join(HERE, 'icon.ico'), sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
    icon.save(os.path.join(HERE, 'icon.icns'))
    print('Wrote desktop/icon.png, icon.ico, icon.icns')
