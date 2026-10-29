# Daddy's Dollhouse

A static marketing site for the Daddy's Dollhouse adult forum: a homepage plus
a handful of information pages, all sharing one visual shell.

## Layout language

**Container**:
The single centred column that carries the page background and the vertical
gradient borders. All content sits inside it.
_Avoid_: Wrapper, shell

**Gutter**:
The strip of page left uncovered when the viewport is narrower than the
Container. The Tile shows through there.
_Avoid_: Margin, frame, border

**Tile**:
The repeating decorative pattern painted behind the Container, visible only in
the Gutters.
_Avoid_: Background, wallpaper, texture

**Hero**:
The wide banner image at the top of a page.
_Avoid_: Banner, header image, background image

**Breakpoint**:
The viewport width at which the landing page changes layout mode. There is one,
at 960px: the three-column grid above it, a stacked single column below it.
_Avoid_: Media query
