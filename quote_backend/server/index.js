const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//Generic endpoint
app.get("/", (req, res) => {
    res.send("Express App")
})

//end point named api
app.get("/api", (req, res) => {
    res.json({message: "Hello from node backend!"});
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});