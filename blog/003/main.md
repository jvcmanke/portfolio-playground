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
