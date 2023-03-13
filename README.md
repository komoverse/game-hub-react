# Komoverse game hub

## Directory

- components: containing general or reusable component.
- features: containing a components that are specific to a page, so there will be sub directory that are similar name to the page name here.
- helper: a directory containing helper function or helper variable.
- hooks: a place where all our custom hooks reside.
- layout: a directory to place our general layout system of the website.
- locales: a directory to put aout multilanguage variable.
- pages: contain the pages of the website.
- service: directory where we put our service files, basically all of our api request function are place in here.
- store: a global state management folder, we are currently using redux so all operation for global state management are place in here.
- styles: directory for custom global style
- theme: directory where we put our custom config of the MUI or other style.
- utils: directory where we place a utility function.

## Where to start
You might assign yourself a trello task and made a git branch on those card. if you are working on a feature specific page you can start by check if the page was exist in the page and features directory. then you can create the component that relate tou yoru task.

to start the project you can follow the instrcutions bellow
```bash
# install the dependencies of the project
yarn

# run the project
yarn dev
```

During development we will use develop branch, made your feature branch from those branch and when creating a PR target the development branch. we will be using master just when we release a feature. remember to squash when merge the PR.
