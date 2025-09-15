export const CNUrbanRuralBars = () => {
  const data = [
    { label: '食品', urban: 28.8, rural: 32.3 },
    { label: '居住', urban: 23.2, rural: 19.7 },
    { label: '交通通信', urban: 14.1, rural: 14.0 },
    { label: '教育文化娱乐', urban: 11.4, rural: 11.1 },
    { label: '医疗保健', urban: 8.5, rural: 10.4 },
    { label: '衣着', urban: 5.5, rural: 5.0 },
    { label: '生活用品及服务', urban: 5.5, rural: 5.4 },
    { label: '其他用品及服务', urban: 3.0, rural: 2.0 },
  ];

  const Bar = ({ value, color }) => (
    <div style={{ position: 'relative', height: 18, background: '#F3F4F6', borderRadius: 9999, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, width: `${value}%`, background: color, borderRadius: 9999 }} />
      <span style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', fontSize: 12, fontWeight: 700, color: '#111827' }}>{value.toFixed(1)}%</span>
    </div>
  );

  return (
    <div className="not-prose" style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 12, padding: 12 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 8, color: '#374151', fontSize: 12 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 12, height: 12, background: '#16A34A', borderRadius: 2, display: 'inline-block' }} />
          城镇（%）
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 12, height: 12, background: '#07C983', borderRadius: 2, display: 'inline-block' }} />
          农村（%）
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', gap: 12, color: '#111827', fontSize: 14, fontWeight: 600, padding: '4px 0' }}>
        <div></div>
        <div style={{ color: '#6B7280', fontSize: 12, fontWeight: 500 }}>城镇</div>
        <div style={{ color: '#6B7280', fontSize: 12, fontWeight: 500 }}>农村</div>
      </div>

      {data.map((row) => (
        <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', gap: 12, alignItems: 'center', padding: '8px 0', borderTop: '1px dashed #E5E7EB' }}>
          <div style={{ fontWeight: 600 }}>{row.label}</div>
          <Bar value={row.urban} color="#16A34A" />
          <Bar value={row.rural} color="#07C983" />
        </div>
      ))}
    </div>
  );
};

