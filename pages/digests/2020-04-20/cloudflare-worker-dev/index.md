## Cloudflare makes a local dev environment for workers

https://blog.cloudflare.com/trailblazing-a-development-environment-for-workers/

I use Cloudflare workers for a couple things: blocking access to sourcemaps on productions sites, proxying to free webflow hosted sites (sorry, webflow), occasional HTML rewriting, and more. I've never had to use an npm module - which means I've never had to build a bundle with webpack or rollup and copy and paste the transpiled javascript into the Cloudflare worker editor. Not that I'd have to anymore, because the wrangler CLI solved for the build and deploy inconvenience. Now, "wrangler dev" sets up local dev environment, in which you can ping localhost instead of a Cloudflare hosted preview URL, making it easier to use Postman or other API development tooling - easier to test in CI/CD too, probably.
