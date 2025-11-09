const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.post('/submit', (req, res) => {
//     const data = req.body;
//     res.json({ message: 'Data received successfully', data: data });
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});