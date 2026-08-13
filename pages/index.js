
export default function Home() {
  return (
    <div style={{background: 'linear-gradient(180deg, #42A5F5 0%, #1E88E5 50%, #0D47A1 100%)', color: '#FFF', minHeight: '100vh', textAlign: 'center', padding: '60px 20px', fontFamily: 'Arial'}}>
      <h1 style={{fontSize: '60px'}}>NEPTUNE OS 🔱</h1>
      <p style={{fontSize: '22px'}}>Wind King OS for Supersonic Processing</p>
      <div style={{background: 'rgba(255,255,255,0.15)', padding: '20px', margin: '40px auto', borderRadius: '15px', maxWidth: '600px'}}>
        <h2>Wind Speed: 2100 km/h 🌪️</h2>
        <p>Status: SUPERSONIC ACTIVE | Storm: MONITORED</p>
      </div>
      <a href="/dashboard" style={{background: '#FFF', color: '#0D47A1', padding: '15px 40px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold'}}>Enter Wind Command</a>
    </div>
  )
}
