# Let's setup a cool env!

Alright, let's start small.

## On this episode

...of, whatever this is:

- Describe a basic VSCode setup;
- I like to work with shiny things.

## Soooo

I'm setting up VSCode (my editor of choice) on my new computer, so no better time to install some extentions that make my life easier.

The main problem is: my work computer is not around and I don't remember what I have in there, so let's take a look around to find some cool extensions and or recomended settings.

## Cool extensions

### General:

**One Dark Theme:**

This is my preferred theme for VSCode, it is just a bit different from the default `Dark +`, but at little less bright. It also has a great text highlighting color scheme.

**Material Icon Theme:**

I usually work with some standard file names and folder name that have a specific funcionality tied to them, like `index.ts`, `hooks.ts`, `components` folder, etc.

These icons make them easy to find visually on the explorer tree.

What I like from `Material Icon Theme` is the fact that I can configure what icons I want for the "non-standard" files and folders, also the defaults are pretty great and the variety is amazing.

**Thunder Client:**

While developing fullstack web apps is much useful to have a request client to test out api routes.

I used to use Postman, but `Thunder Client` satisfies all my needs within the editor itself. The less I leave VSCode the better.

**EditorConfig for VSCode:**

I generally have a `.editorconfig` file on every repo I own, while the formatters will generally correct the same styling options, this helps the code start out on the correct style.

### Javascript/Typescript:

**Prettier:**

How does anyone live without `Prettier` in a Javascript world?

I generally stick to the deafults, but this extension can follow your repo's config as well. Having the auto formatting is all I need, honestly.

**ESLint:**

Just like with `Prettier`, `ESLint` is so great to keep your code in check and in good shape.

The defaults are pretty sensible as well, extending for the repo specifics is also pretty simple with the config file.

**Auto Rename Tag:**

Not really mandatory, a lot of times I just end up manually multi-selecting and replacing both ends of the tag out of instinct, but for some large trees during prototyping this if pretty useful.

### CSS

**Stylelint:**

Same as `ESLint`, and most the time no config is really needed outside the defaults.

## Settings

The settings are very straight forward, I like to modify as little as possible for simplicity.

I use Git-Bash as my default terminal, as I work with windows at my job (in this new computer as well for now) and got used to using it as it is easy to set up whetever.

Other than that, it's just some preference like format on save and removing autocomplete on enter.

I like the bracket guides VSCode now has, and, of course, lets add a custom folder icon for this block folder.

Here's the final config file:

```JSON
{
  "editor.acceptSuggestionOnEnter": "off",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.guides.bracketPairs": true,
  "editor.tabSize": 2,
  "explorer.compactFolders": false,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "workbench.colorTheme": "One Dark",
  "workbench.iconTheme": "material-icon-theme",

  "material-icon-theme.activeIconPack": "react",
  "material-icon-theme.folders.associations": {
    "blog": "docs"
  },
  "oneDark.italic": false
}
```

# What's next?

I think for the following episode (is that what we're calling it?) I should spin up a simple `Next.js` project and try deploying it to Vercel or something.

---

[Next Post](../002/main.md)
