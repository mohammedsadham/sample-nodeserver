// Import the express module
const express = require('express');
const port = 3000;

// Create an Express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/getUser', (req, res) => {
    res.json({"welcome": "created successfully"});
  });

app.post('/login', (req, res) => {
    // Access the data sent in the request body
    const { username, password } = req.body;
    console.log(req.body)
    // Check if data exists
    if (!username || !password) {
        return res.status(400).json({ message: 'username and password are required!' });
    }

    // Respond with a success message
    res.status(200).json({
        message: `Received data: username = ${username}, password = ${password}`,
    });
});
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
