const functions = require('firebase-functions');

exports.logRequestBody = functions.https.onRequest((req, res) => {
  console.log('Request Body:', req.body);
  res.status(200).send('Request body logged successfully.');
});