# Let's get this project going!

## What's gonna get done today, you say?

Well...:

- Setup a basic `Next.js` project for a personal website;
- Create a basic landing page;
- Add some extra functionality to justify all the effort;
- Deploy it somewhere;
- BONUS: Get a killer domain name.

## The baseline app

So for this one I'll just use next's `create-next-app` TypeScript template to generate the base boilerplate:

```sh
npx create-next-app@latest --typescript
```

And then install and init `TailwindCSS` with their own cli setup:

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Until any change is necessary I'll just use the defaults, the only thing I'll configure beforehand is paths in the `tsconfig.json` file to be able to import stuff from the `src` folder with:

```
import { something } from "~/somefolder/somefile";
```

Because next already supports `paths` and `baseUrl` out of the box, the only thing we need to do is add the following to `tsconfig.json`:

```JSON
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    }
  }
}
```

Last for this part I'll just delete some unneeded files and install some extensions so we get completion for tailwind and avoid our editor bugging us with some linting rules:

- **Tailwind CSS IntelliSense**;
- **PostCSS Language Support**.

## The wireframe

What I've done now is set up a basic unstyled wireframe, a basic header-content-footer style, with a nav on the right side of the header.

```
+---------------------+
|       Header        | <- Sticky, maybe shrink on scroll, with a basic nav
+---------------------+
|                     |
|       Content       | <- Whatever the page wants to render
|                     |
+---------------------+
|       Footer        | <- At the bottom, will likely contain some external links
+---------------------+
```

I've set up a simple structure that I'm accostumed with, where I scope my components by page inside a `components` folder and the shared ones I can put in a `shared` folders inside it.

Each component has its own folder, as when they start getting more complex I like to split them into multiple files for styling, hooks, etc., so might as well keep it consistent from the jump.

## The "extra" functionality

Alright, just so this website is minimally useful to me I'll add some links to download some stuff that I might need on the go:

- My current CV (I'm planning on building a new web version eventually);
- My current VSCode config (might as well).

I'll put both on the footer, plus a button on the header for the CV as well.

# What's next?

TBD.
