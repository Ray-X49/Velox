// pages/success.js
import Link from 'next/link';

export default function Success() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem',
      background: '#fff',
      color: '#6a0dad'
    }}>
      <h1>🎉 Thank you for your purchase!</h1>
      <p>Your license key will be delivered via Discord shortly.</p>
      <Link href="/"><a style={{ color: '#6a0dad', textDecoration: 'underline' }}>Go back home</a></Link>
    </div>
  );
}
