#!/bin/bash
mkdir -p output
cd book
pandoc \
  -f gfm \
  -o ../output/ClearCode.epub \
  --metadata-file=../metadata.yml \
  --metadata title="wuz's guide to clear code" \
  --toc \
  -s \
  *.md
pandoc \
  -f gfm \
  --lua-filter ../plugins/pagebreak.lua \
  --pdf-engine=wkhtmltopdf \
  --css ../assets/pdf.css \
  -o ../output/ClearCode.pdf \
  --metadata title="wuz's guide to clear code" \
  --toc \
  --columns=80 \
  -s \
  *.md
cd ..
