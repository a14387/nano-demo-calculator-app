const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
const baseUrl="/calculator"
app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.json('Hello Wold!');
});

baseRouter.post('/add', (req, res) => {
    const sum= req.body.first+req.body.second;
    res.json({ "result": sum });
});


baseRouter.post('/subtract', (req, res) => {
    const sum= req.body.first-req.body.second;
    res.json({ "result": sum });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});