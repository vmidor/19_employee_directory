const express = require('express');
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.static('react19/build'))

app.listen(PORT, () => console.log('listening on PORT', PORT))