# A little showcase

A little showcase to discuss issue [TODO](todo)

## Context

The newly added `page` from `$app/state` exposes runes in client mode but not in server mode.  
This means that runes created with `$derived` based on `page.params` or others will work as expected in client but not in server...

## Reproduction

Clone this repo, run `npm ci` and `npm run build`.

Notice that in the prerendered routes:

* in `build/Rich.html` you can find the text `Route name as uppercase RICH`
* in `build/Simon.html` you can find the text `Route name as uppercase RICH` !!!
