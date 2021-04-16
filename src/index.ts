import Usables from './config/env';
import app from './config/app';
import { Stripe } from "stripe";

const stripClient = new Stripe(Usables.stripeToken, { apiVersion: '2020-08-27' });

const converter: (num: number) => number = num => {
    return num * 100;
}

const calculateOrderAmount = () => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripClient.paymentIntents.create({
        amount: converter(0.60),
        currency: "brl"
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
});

app.listen(4242, () => console.log('Node server listening on port 4242!'));