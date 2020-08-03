#!/bin/bash
mkdir -p output
pandoc -f gfm --lua-filter plugins/pagebreak.lua --css assets/style.css -o output/ClearCode.pdf *.md --metadata-file=metadata.yml --toc
sleep 5
# open output/CleanCode.epub
# cp ./output/CleanCode.pdf .
# rm -rf output
