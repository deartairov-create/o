function esc(v){return String(v ?? '').replace(/[&<>]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[s]));}
function line(k,v){ if(Array.isArray(v)) v=v.join(', '); return `<b>${esc(k)}:</b> ${esc(v || '-')}`; }

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false, error:'Only POST allowed' });
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token) return res.status(500).json({ ok:false, error:'TELEGRAM_BOT_TOKEN missing in Vercel Environment Variables' });
  if (!chatId) return res.status(500).json({ ok:false, error:'TELEGRAM_CHAT_ID missing in Vercel Environment Variables' });

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  if (body.website) return res.status(200).json({ ok:true });

  const text = [
    '💌 <b>For O — yangi javob</b>',
    '',
    line('Ism/laqab', body.name),
    line('Kayfiyat', body.mood),
    line('Kayfiyat bal', body.moodLevel),
    line('Kecha nima bo‘ldi', body.whatHappened),
    line('Blok statusi', body.blockStatus),
    line('Ego verdict', body.ego),
    line('Seshanba', body.tuesday),
    line('Soat', body.time),
    line('Dars', body.classPlan),
    line('Jarima variantlari', body.fines),
    line('Yarashish ehtimoli', body.chance ? body.chance + '%' : ''),
    line('Oxirgi xabar', body.finalMessage)
  ].join('\n');

  const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ chat_id: chatId, text, parse_mode:'HTML' })
  });
  const result = await tg.json().catch(() => ({}));
  if (!tg.ok || !result.ok) return res.status(500).json({ ok:false, error: result.description || 'Telegram send failed' });
  return res.status(200).json({ ok:true });
}
