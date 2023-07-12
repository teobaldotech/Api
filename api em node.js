
const expresss = require('express');
const app =expresss();

app.get("/" , (req,res) => {
res.send("api teste");
});

app.listen(8080, () => {
    console.log('servidor funciona na port 8080')
});
