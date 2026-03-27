const Skills = () => {
  const skills = [
    'Unity 3D', 'C#', '遊戲設計',
    '問題解決', '邏輯思考'
  ];

  return (
    <section id="skills" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <h2 className="section-title">技能專長</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
          {skills.map(skill => (
            <span key={skill} style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--border-color)',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'transform 0.2s ease, border-color 0.2s ease',
              cursor: 'default'
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'var(--accent-color)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
