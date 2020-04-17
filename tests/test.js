const eclyssia = require("../index.js");
const fs = require("fs");

// (Crappy code, I know, but it is only for the example)

// Here we use fs to save our transformed image

// The username parameter is required by captcha & phvideo endpoints
// The top and bottom parameters are required by meme endpoint, width and height are optional

// The params for each endpoint are found in the official Eclyssia documentation
// eclyssia.get(endpoint, params)
eclyssia.get("beautiful", {
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
        }, 2000);
    })
    .catch(console.error);

// It returns a promise, when it is resolved you will obtain an array with all the endpoints
eclyssia.endpoints();
