// pages/api/create-checkout-session.js
import Stripe from 'stripe';
import fetch from 'node-fetch';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { discordUser, discordID, plan } = req.body;

  // Map plan to actual Price IDs if you have multiple
  const priceMap = {
    starter: process.env.PRICE_ID, 
    pro:     process.env.PRICE_ID,
    elite:   process.env.PRICE_ID
  };
  const price = priceMap[plan];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price, quantity: 1 }],
    mode: 'payment',
    success_url: `${process.env.DOMAIN}/success`,
    cancel_url: process.env.DOMAIN,
    metadata: { discordUser, discordID, plan }
  });

  // Send Discord webhook
  await fetch(process.env.WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: `🛒 New Purchase\n• Plan: ${plan}\n• User: ${discordUser}\n• ID: ${discordID}\n• Session: ${session.id}`
    })
  });

  res.status(200).json({ url: session.url });
}
