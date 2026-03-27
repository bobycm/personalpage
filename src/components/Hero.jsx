const Hero = () => {
  return (
    <section className="hero-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
          Hi, 我是 <span style={{ color: 'var(--accent-color)' }}>獨立遊戲開發者</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--secondary-color)', maxWidth: '600px', margin: '0 auto', fontWeight: '400' }}>
          熱愛遊戲，主要使用 Unity 3D 進行遊戲開發。
        </p>
      </div>
    </section>
  );
};

export default Hero;
