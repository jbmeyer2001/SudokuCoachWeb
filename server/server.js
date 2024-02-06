  
const express = require('express');
const app = express();

app.get("/test", (req, res) => {
    res.json({"test": ["one", "two", "three"]})
})

let PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})