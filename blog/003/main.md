# Make it pretty, please!

## Some styling is overdue

So let's start with some more direct stuff and then some more taste related:

- Setup tailwind's prettier plugin;
- Add an icon package;
- Make the landing page responsive;
- Choose and apply a (simple) color pallete;
- BONUS: Should we be bold and choose a font?

## Make code prettier

Since we'll be making a lot of changes in styling, I've been wanting to check out tailwind's prettier plugin. It basically rearranges tailwind classes on `className` props, so they follow a standardized order. This should help keep the code consistent throughout commits as styling with me is mostly iterative.

Since I'm using prettier defaults and it auto loads plugins, the only thing we need to do is install both packages.

```
npm install -D prettier prettier-plugin-tailwindcss
```

Well, we do need to run prettier on the files as well, I could just wait till I go in and save each file, as they will end up correcting overtime, but I'll just format them all upfront just to see it in work:

```
npx prettier --write src
```

## I can be your Icon

Alright, enought tomfoolery, code styling doesn't count for this website.

Let's get things going by replacing those "ARROW" texts with actual arrows. For this I'll use a icon library so I don't have to creat them myself.

I don't have a prefered icon library, it usually depends what each project is already using or I tend to stick to a "sister library" of somthing I'm already using, as they usually work better together. This time around I chose `@heroicons/react` by the same guys from tailwind.

I ended up scrapping the back to top arrow on the header, wasn't really fitting there IMO, but the downward one on the hero section looks great! Since we removed the arrow, I think a quick github icon link to the ol' profile on the header can be useful, so let's do that.
