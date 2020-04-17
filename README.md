# Unofficial-Node-Eclyssia

A non-official wrapper for the Eclyssia API.

## Installation

```
npm install unofficial-node-eclyssia --save
```

## Example

```js
const eclyssia = require("../index.js");
const fs = require("fs");

// (Crappy code, I know, but it is only for the example)

// Here we use fs to save our transformed image

// The username parameter is required by captcha & phvideo endpoints
// The top and bottom parameters are required by meme endpoint, width and height are optional

// The params for each endpoint are found in the official Eclyssia documentation
// eclyssia.get(endpoint, params)
eclyssia.get("captcha", {
    url: "https://tse3.mm.bing.net/th?id=OIP.YQiA-ZUJloPvmf6hzU3M6AAAAA&pid=Api",
    username: "BongoCat"
})
    .then(data => {
        // data is a buffer
        fs.writeFileSync("./example.png", data, "binary");

        // There is a ratelimit of 1.5 seconds per request
        setTimeout(() => {
            eclyssia.get("meme",
                {
                    url: "https://tse3.mm.bing.net/th?id=OIP.YQiA-ZUJloPvmf6hzU3M6AAAAA&pid=Api",
                    top: "Hello, world!",
                    bottom: "This endpoint works fine",
                    // optionals :
                    width: 1000,
                    height: 1000
                }
            )
                .then(data => {
                    // data is a buffer
                    fs.writeFileSync("./example2.png", data, "binary");
                })
                .catch(console.error);
        }, 1600);
    })
    .catch(console.error);
```

## Endpoints

```js
// It returns a promise, when it is resolved it will returns an array with all the endpoints
eclyssia.endpoints();
```

[Full Eclyssia API documentation](https://docs.eclyssia.xyz)

## Links

*   [Website](https://eclyssia.xyz)
*   [Documentation](https://docs.eclyssia.xyz)
*   [Discord (Eclyssia)](https://discord.gg/V5X2t9z)
*   [Discord (Personal)](https://discord.gg/ZXtEVJm)
*   [Github (source)](https://github.com/Cat66000/Unofficial-Node-Eclyssia)
*   [NPM](https://www.npmjs.com/package/unofficial-node-eclyssia)
