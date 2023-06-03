# Set up

`npx create-react-app`

`npm i react-icons --save`

`npm i clipboard-copy`

`npm i react-bootstrap`
___
### gh pages
`npm i gh-pages --save-dev`

```
add home page to package.json 
"homepage": "http://<githubname>.github.io/<reponame>",

"scripts": {
    //...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"

},
```
`npm run deploy`
