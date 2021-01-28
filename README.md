# What is this?

This is a project I built with `[puppeteer]`(https://pptr.dev/) and `[node-cron]`(https://github.com/node-cron/node-cron). 

This cron job pings my portfolio websites every 20 minutes. 

I run it during business hours so that my apps are always booted up and ready to be used.

## Available Scripts

In the project directory, you can run:

### `node index.js`

This script does two things:
1. It pings Dashboard, takes a screenshot, and saves to the `/screenshots` dir.
2. It pings Noteful, signs in (so that the backend gets pinged as well), takes a screenshot, and saves to the `/screenshots` dir.
