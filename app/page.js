export const dynamic = 'force-dynamic';
export default function Page() {
  return (
    <main style={{maxWidth:640,margin:'0 auto',padding:'4rem 1.5rem'}}>
      <p style={{fontFamily:'monospace',fontSize:'0.7rem',letterSpacing:'0.16em',textTransform:'uppercase',color:'#ff7c5c'}}>Cloudways · Node.js</p>
      <h1 style={{fontSize:'2rem',margin:'0.4rem 0'}}>Next.js — Custom server</h1>
      <p style={{color:'#9a97a6',lineHeight:1.6}}>
        This app boots through a custom <code style={{fontFamily:'monospace',color:'#eaeaf0'}}>server.js</code> entry
        file wrapping Next. Try <code style={{fontFamily:'monospace',color:'#eaeaf0'}}>/healthz</code> — it's handled
        by the custom server, outside Next's router. Cloudways Entry File = <code style={{fontFamily:'monospace',color:'#eaeaf0'}}>server.js</code>.
      </p>
      <p style={{fontFamily:'monospace',fontSize:'0.8rem',color:'#ff7c5c',marginTop:'2rem'}}>
        served via custom server · node {process.version}
      </p>
    </main>
  );
}
