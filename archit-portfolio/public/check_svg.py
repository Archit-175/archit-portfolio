import re

with open('archit.svg', 'r') as f:
    content = f.read()

paths = re.findall(r'<path d="([^"]*)" fill="([^"]*)"', content)

for i, (d, fill) in enumerate(paths):
    # just look for 1110 or 979 or close to it
    if '1110' in d or '979' in d or '1100' in d or '970' in d:
        print(f"Suspicious path {i}: fill {fill} - {d[:100]}...")

