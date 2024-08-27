const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51N1G8MSDLO2cWbVCjSQvppoXbdUUAK0LgszmUokyz3LYzilH6NHs9eN9kDPk0LfxGDDxYlcCltG6TKviQn1u7LXk00Tnz9vaxr');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/quickmart-d8164/us-central1/api
