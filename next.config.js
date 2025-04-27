// next.config.js
module.exports = {
    env: {
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,        // your Stripe secret
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      PRICE_ID: process.env.PRICE_ID,                          // the Stripe Price ID
      WEBHOOK_URL: 'https://discord.com/api/webhooks/1365286560077054005/PU-ho392z-vs_BKaBv36lriCZLVEk479Q4lRGmAbCAVD_tyBwl9Cvq16kVJmzeHudqRd',
      DOMAIN: process.env.DOMAIN                               // e.g. https://your-app.vercel.app
    }
  };
  