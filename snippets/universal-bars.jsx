export const UniversalBars = ({ title, subtitle, series = [], data = [] }) => {
  const legend = (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 8, color: '#374151', fontSize: 12 }}>
      {series.map((s) => (
        <span key={s.key} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 12, height: 12, background: s.color, borderRadius: 2, display: 'inline-block' }} />
          {s.name}
        </span>
      ))}
    </div>
  );

  const Row = ({ label, entries }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '160px repeat(' + series.length + ', 1fr)', gap: 12, alignItems: 'center', padding: '8px 0', borderTop: '1px dashed #E5E7EB' }}>
      <div style={{ fontWeight: 600, color: '#111827' }}>{label}</div>
      {series.map((s) => {
        const v = Number(entries[s.key] ?? 0);
        return (
          <div key={s.key} style={{ position: 'relative', height: 18, background: '#F3F4F6', borderRadius: 9999, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, width: `${Math.max(0, Math.min(100, v))}%`, background: s.color, borderRadius: 9999 }} />
            <span style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', fontSize: 12, fontWeight: 700, color: '#111827' }}>{isNaN(v) ? '-' : `${v}%`}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="not-prose" style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 12, padding: 12, marginTop: 12, marginBottom: 12 }}>
      {title ? <div style={{ fontWeight: 700, color: '#111827', marginBottom: 4 }}>{title}</div> : null}
      {subtitle ? <div style={{ color: '#6B7280', fontSize: 12, marginBottom: 8 }}>{subtitle}</div> : null}
      {legend}
      <div style={{ display: 'grid', gridTemplateColumns: '160px repeat(' + series.length + ', 1fr)', gap: 12, color: '#6B7280', fontSize: 12, fontWeight: 500, padding: '4px 0' }}>
        <div></div>
        {series.map((s) => (
          <div key={s.key}>{s.name}</div>
        ))}
      </div>
      {data.map((row) => (
        <Row key={row.label} label={row.label} entries={row} />
      ))}
    </div>
  );
};

