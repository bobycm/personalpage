const PortfolioItem = ({ title, description, imagePlaceholder, imageUrl, tags, link }) => {
  return (
    <div className="card">
      {imageUrl ? (
        <div style={{ height: '220px', overflow: 'hidden' }}>
          <img 
            src={imageUrl} 
            alt={title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }} 
            className="portfolio-image"
          />
        </div>
      ) : (
        <div style={{ 
          height: '220px', 
          backgroundColor: 'var(--border-color)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'var(--secondary-color)',
          fontSize: '1.2rem',
          fontWeight: '500'
        }}>
          {imagePlaceholder}
        </div>
      )}
      <div style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: link ? '1.5rem' : '0' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontSize: '0.8rem',
              padding: '0.35rem 0.85rem',
              backgroundColor: 'var(--primary-color)',
              color: 'var(--bg-color)',
              borderRadius: '20px',
              fontWeight: '600'
            }}>
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            padding: '0.6rem 1.2rem',
            backgroundColor: 'var(--accent-color)',
            color: '#fff',
            borderRadius: '6px',
            fontSize: '0.9rem',
            fontWeight: '600',
            textDecoration: 'none',
            textAlign: 'center',
            transition: 'opacity 0.2s ease, transform 0.2s ease'
          }}
          onMouseEnter={(e) => { e.target.style.opacity = '0.8'; e.target.style.transform = 'translateY(-2px)' }}
          onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'none' }}
          >
            查看詳細網站
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
