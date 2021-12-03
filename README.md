# CV

![Build and Deploy](https://github.com/marcomontalbano/cv/workflows/Build%20and%20Deploy/badge.svg)

## Why this repo?

Like always, I love to experiment new stuff and ways of working.
When I finally had time to revamp my old website I decided to revamp my cv as well (of course update the information inside it is another story :joy:).

A cv should be a pdf that you can send via email, upload on the company's website to apply for a new position or simply print.
Instead of using already existing online tools or any word processor, I decided to create a new <u>*website that builds into pdf*</u>.

Yes, you read that right!

I wanted to play with **JAMStack** approach, so why not build and publish a fully static ~~website~~ pdf with every `git push`?

## Development

I'm using [Netlify CMS](https://www.netlifycms.org/) to make instant changes to the pdf. I configured Netlify CMS to store all data in `.json` format inside the `./content` folder.

I created this script [`netlify-cms-json-exporter`](https://github.com/marcomontalbano/netlify-cms-json-exporter) which is able to read all data from json and create a javascript object resolving relations between different collections. This object is then used by [Preact CLI](https://github.com/preactjs/preact-cli) to prerender the data.

Last but not least, I'm using [GitHub Actions](https://github.com/features/actions) to build and publish the pdf. I choose the `macos` image because it makes the pdf text selectable and searchable without any effort.

### Hosting

If you like this approch you can host your own cv.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/marcomontalbano/video-to-markdown)

After the deploy, you need to enable the Identity feature. You can follow the official documentation "[Setup and settings](https://docs.netlify.com/visitor-access/git-gateway/#setup-and-settings)".

### Available scripts

`npm run dev` starts local development

- admin - http://localhost:3000/admin/
- web - http://localhost:8080

`npm run build:cv` :sparkles: builds website to pdf

### Local Development

You can [connect Netlify CMS to a local Git repository](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository), instead of working with a live repo.

1. Navigate to a local Git repository configured with the CMS.
1. Run `npx netlify-cms-proxy-server` from the root directory.
1. Add the top-level property `local_backend: true` configuration to your `config.yml`.
1. Run `npx serve src/static/admin` from the root directory.
