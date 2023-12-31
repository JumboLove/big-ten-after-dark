# Big 10 After Dark

## A silly site to celebrate and scorn Big 10 from sea to boiling sea

Very much a site in progress. Built with [Space Madness](https://spacemadness.dev/)

## The nerdy details

A turbo repo that includes everything you need to run your backend in Sanity and your frontend in Astro.

The monorepo is configured with apps as the primary hosted sites.

Packages are code that is shared across the sites.

```bash
.
├── apps
│   ├── site-astro
│   └── site-sanity
└── packages
    ├── content-models
    ├── sanity-astro-embeds
    └── sanity-zod-types
```

Navigate to each folder's `README.md` for more details.

## Getting Started

See the [Space Madness Docs](https://spacemadness.dev/docs/) for detailed instructions on installing and runnig your app.

1. `export SANITY_STUDIO_PROJECT_ID=<sanity-id>`

   or

   `set SANITY_STUDIO_PROJECT_ID=<sanity-id>`

1. `turbo dev`

## Deploying

Deploying is supported for any hosting platform that supports static site hosting.

## Hosting the Astro site

### Build command

`turbo build --filter=site-space-madness-astro`

### Publish directory

`/apps/site-astro/dist/`

## Hosting the Sanity site

Deploying is supported for any hosting platform that supports static site hosting.

### Build command

`turbo build --filter=site-space-madness-sanity`

### Publish directory

`/apps/site-sanity/dist/`

## Contributing

Contributions are welcome.

If your code editor does not support Pretier out of the box, you can run `npm run format` from the `site-astro` directory before committing your changes.

Please make all pull requests to `main`.
