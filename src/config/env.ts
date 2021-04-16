import 'dotenv/config';

export default {
    stripeToken: process.env.STRIPE_KEY || ''
};
