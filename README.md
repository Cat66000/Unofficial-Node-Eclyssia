# Node-Eclyssia

A non-official wrapper for the Eclyssia API.

## Installation

```
npm install node-eclyssia --save
```

## Example

```js
const eclyssia = require("node-eclyssia");
const fs = require("fs");

// Here we use fs to save our transformed image
// Note : the third parameter (username) is only needed for captcha and phvideo endpoints

eclyssia.get("captcha", "https://tse3.mm.bing.net/th?id=OIP.YQiA-ZUJloPvmf6hzU3M6AAAAA&pid=Api", "BongoCat")
    .then(data => {
        // data is a buffer
        fs.writeFileSync("./exemple.png", data, "binary");
    })
    .catch(console.error);

eclyssia.get("beautiful", "https://tse3.mm.bing.net/th?id=OIP.YQiA-ZUJloPvmf6hzU3M6AAAAA&pid=Api")
    .then(data => {
        // data is a buffer
        fs.writeFileSync("./exemple2.png", data, "binary");
    })
    .catch(console.error);
```

## Endpoints

```js
// These two properties returns an array of endpoints
// May not be up to date, I recommends you to read the official documentation

eclyssia.endpoints.filters // Filters category
eclyssia.endpoints.image // Image category
```

[Full Eclyssia API documentation](https://docs.eclyssia-api.tk/)

## Links

*   [Website](https://eclyssia-api.tk/)
*   [Documentation](https://docs.eclyssia-api.tk/)
*   [Discord (Eclyssia)](https://discord.gg/V5X2t9z)
*   [Discord (Personnal)](https://discord.gg/894y5YS)
*   [Github (source)](https://github.com/Cat66000/Node-Eclyssia)
*   [NPM](https://www.npmjs.com/package/node-eclyssia)
