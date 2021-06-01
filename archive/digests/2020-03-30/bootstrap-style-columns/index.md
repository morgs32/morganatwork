## Avoid margin on individual components in a column

https://mxstbr.com/thoughts/margin

I must admit, I still apply a lot of margin (and padding) to individual components when creating vertical spacing in a column of content. This is so often a bigger challenge than it has to be. Such as, you can give every individual a bottom margin but not the last element. However! If you have a bunch of conditional content at the end (display a photo if you have a photo, display a byline if you have an author, etc), then you don't know which element should NOT have bottom spacing. So, you start to give every element top spacing except for the first element. And so it goes...

So you ought to use a parent element to space its children. Which sounds obvious when you think of how Bootstrap, the oldest and wisest of all CSS frameworks, organizes columns in a grid. It's with a parent "row" element and gutters. Duh. That's what we want for our vertically oriented content too.
