const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;


app.use(cors());


let serviceStatus = 'up';


app.get('/api/status', (req, res) => {
  res.json({ status: serviceStatus });
});


app.get('/api/set-status/:status', (req, res) => {
  serviceStatus = req.params.status;
  res.json({ message: `Status set to ${serviceStatus}` });
});

app.listen(port, () => {
  console.log(`Status API listening at http://localhost:${port}`);
});