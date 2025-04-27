// pages/index.js
import Head from 'next/head';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

export default function Home() {
  const [discordUser, setDiscordUser] = useState('');
  const [discordID, setDiscordID]     = useState('');
  const [plan, setPlan]               = useState('starter');
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  const buy = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ discordUser, discordID, plan })
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <>
      <Head>
        <title>Volex Payments</title>
      </Head>
      <div style={{
        textAlign: 'center',
        padding: '4rem',
        background: 'linear-gradient(135deg, #6a0dad, #a020f0)',
        color: '#fff'
      }}>
        <h1 style={{ fontSize: '3rem' }}>Volex GUI Payments</h1>
        <p>Secure & Instant License Delivery</p>

        <div style={{ margin: '2rem auto', maxWidth: '400px', textAlign: 'left' }}>
          <label>Discord Username</label>
          <input
            type="text"
            value={discordUser}
            onChange={e => setDiscordUser(e.target.value)}
            style={inputStyle}
          />

          <label>Discord ID</label>
          <input
            type="text"
            value={discordID}
            onChange={e => setDiscordID(e.target.value)}
            style={inputStyle}
          />

          <label>Plan</label>
          <select
            value={plan}
            onChange={e => setPlan(e.target.value)}
            style={inputStyle}
          >
            <option value="starter">Starter – $3</option>
            <option value="pro">Pro – $10</option>
            <option value="elite">Elite – $20</option>
          </select>

          <button onClick={buy} style={btnStyle}>
            Pay Now
          </button>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  margin: '0.5rem 0',
  borderRadius: '5px',
  border: 'none'
};

const btnStyle = {
  width: '100%',
  padding: '0.75rem',
  marginTop: '1rem',
  background: '#fff',
  color: '#6a0dad',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};
