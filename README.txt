<!doctype html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>For O — blokdan chiqish missiyasi</title>
  <style>
    :root{
      --bg1:#120817;--bg2:#28102f;--card:rgba(255,255,255,.12);--stroke:rgba(255,255,255,.22);
      --text:#fff7fb;--muted:#f3cfe1;--hot:#ff4f8b;--gold:#ffd36e;--ok:#70f0b1;
    }
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Arial,sans-serif;background:radial-gradient(circle at 20% 10%,#682557 0,#28102f 34%,#120817 74%);color:var(--text);min-height:100vh;overflow-x:hidden}
    .blob{position:fixed;inset:auto;filter:blur(22px);opacity:.65;pointer-events:none;animation:float 7s ease-in-out infinite}.b1{width:220px;height:220px;border-radius:60% 40% 55% 45%;background:#ff4f8b;left:-70px;top:70px}.b2{width:260px;height:260px;border-radius:44% 56% 36% 64%;background:#7c4dff;right:-90px;top:280px;animation-delay:1.2s}.b3{width:180px;height:180px;border-radius:50%;background:#ffd36e;left:48%;bottom:-80px;animation-delay:2s}@keyframes float{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-22px) rotate(7deg)}}
    .wrap{width:min(1120px,94vw);margin:0 auto;padding:34px 0 54px}.nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:34px}.brand{font-weight:900;letter-spacing:.2px;display:flex;gap:10px;align-items:center}.pill{padding:10px 14px;border:1px solid var(--stroke);border-radius:999px;background:rgba(255,255,255,.08);color:var(--muted);font-weight:700;font-size:13px}
    .hero{display:grid;grid-template-columns:1.05fr .95fr;gap:28px;align-items:center}.card{border:1px solid var(--stroke);background:linear-gradient(145deg,rgba(255,255,255,.17),rgba(255,255,255,.07));box-shadow:0 24px 80px rgba(0,0,0,.34);backdrop-filter:blur(18px);border-radius:34px}.heroText{padding:42px}.tag{display:inline-flex;gap:8px;align-items:center;background:rgba(255,79,139,.16);border:1px solid rgba(255,79,139,.32);padding:10px 13px;border-radius:999px;color:#ffd7e4;font-weight:800;font-size:13px}.hero h1{font-size:clamp(38px,6vw,76px);line-height:.93;margin:18px 0 16px;letter-spacing:-2.2px}.hero p{font-size:18px;line-height:1.65;color:var(--muted);margin:0}.cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}.btn{border:0;border-radius:18px;padding:15px 18px;font-weight:900;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:8px;transition:.18s transform,.18s filter}.btn:hover{transform:translateY(-2px);filter:brightness(1.05)}.primary{background:linear-gradient(135deg,var(--hot),#ff8fb8);color:white}.secondary{background:rgba(255,255,255,.12);border:1px solid var(--stroke);color:white}
    .phone{padding:20px}.chat{background:#0e0712;border:1px solid rgba(255,255,255,.12);border-radius:28px;padding:18px;min-height:460px;position:relative;overflow:hidden}.chat:before{content:"";position:absolute;inset:-80px;background:radial-gradient(circle at 30% 10%,rgba(255,79,139,.25),transparent 36%),radial-gradient(circle at 80% 60%,rgba(255,211,110,.12),transparent 40%)}.chatHead{position:relative;z-index:1;display:flex;align-items:center;gap:12px;border-bottom:1px solid rgba(255,255,255,.1);padding-bottom:14px}.ava{width:44px;height:44px;border-radius:16px;background:linear-gradient(135deg,#ff4f8b,#ffd36e);display:grid;place-items:center;font-weight:900}.dot{width:9px;height:9px;border-radius:50%;background:#70f0b1;box-shadow:0 0 14px #70f0b1}.msgs{position:relative;z-index:1;margin-top:18px;display:grid;gap:12px}.msg{width:fit-content;max-width:86%;padding:12px 14px;border-radius:18px;line-height:1.45;font-weight:650}.left{background:rgba(255,255,255,.11);border-top-left-radius:6px}.right{justify-self:end;background:linear-gradient(135deg,#ff4f8b,#ff8fb8);border-top-right-radius:6px}.tiny{font-size:12px;color:#dab7c9;margin-top:4px}
    .section{margin-top:30px;padding:28px}.section h2{font-size:clamp(28px,4vw,44px);margin:0 0 10px;letter-spacing:-1px}.section p{color:var(--muted);line-height:1.7;margin:0 0 20px}.progress{height:10px;background:rgba(255,255,255,.13);border-radius:999px;overflow:hidden;margin:12px 0 24px}.bar{height:100%;width:25%;background:linear-gradient(90deg,var(--hot),var(--gold));border-radius:999px;transition:.25s}
    .steps{display:grid;gap:18px}.step{display:none}.step.active{display:block}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.field{display:grid;gap:7px;margin-bottom:14px}.field label{font-weight:850;color:#ffe4ef}.field small{color:#d8abc0}.input,textarea,select{width:100%;border:1px solid rgba(255,255,255,.18);background:rgba(0,0,0,.22);color:white;border-radius:16px;padding:14px 14px;font:inherit;outline:none}.input:focus,textarea:focus,select:focus{border-color:#ff8fb8;box-shadow:0 0 0 4px rgba(255,79,139,.12)}textarea{min-height:110px;resize:vertical}option{color:#111}.choices{display:flex;flex-wrap:wrap;gap:10px}.choice{padding:12px 13px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);border-radius:16px;cursor:pointer;font-weight:800}.choice input{margin-right:7px}.rangeBox{display:flex;align-items:center;gap:14px}.rangeBox input{width:100%}.bigEmoji{font-size:34px;width:54px;text-align:center}.actions{display:flex;gap:12px;justify-content:space-between;margin-top:18px}.actions .btn{min-width:120px}.hide{display:none}.status{margin-top:14px;border-radius:16px;padding:14px;border:1px solid rgba(255,255,255,.15);display:none}.status.ok{display:block;background:rgba(112,240,177,.13);color:#caffdf}.status.err{display:block;background:rgba(255,79,79,.13);color:#ffd1d1}
    .footer{text-align:center;color:#d8abc0;margin-top:28px;font-size:14px}.hp{position:absolute;left:-9999px;opacity:0}.confetti{position:fixed;top:-20px;font-size:22px;animation:fall 1.7s linear forwards;z-index:99}@keyframes fall{to{transform:translateY(110vh) rotate(720deg);opacity:.1}}
    @media(max-width:850px){.hero{grid-template-columns:1fr}.heroText{padding:28px}.grid{grid-template-columns:1fr}.chat{min-height:390px}.actions{flex-direction:column-reverse}.actions .btn{width:100%}}
  </style>
</head>
<body>
  <div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div>
  <main class="wrap">
    <nav class="nav"><div class="brand">💌 For O</div><div class="pill">anti-blok missiya</div></nav>
    <section class="hero">
      <div class="card heroText">
        <div class="tag">✨ mayus emas, kulgili yarashuv sahifasi</div>
        <h1>Blok devorini kulgi bilan yumshatamiz.</h1>
        <p>Bu sahifa urushni kattalashtirish uchun emas. Faqat kayfiyatni ko‘tarish, biroz kuldirish va “seshanba kuni gaplashamizmi?” degan savolni chiroyliroq berish uchun.</p>
        <div class="cta"><a class="btn primary" href="#form">Javob qoldirish 💬</a><a class="btn secondary" href="#chat">Oldin kulib olaylik 😄</a></div>
      </div>
      <div class="card phone" id="chat">
        <div class="chat">
          <div class="chatHead"><div class="ava">O</div><div><b>For O</b><div class="tiny"><span class="dot" style="display:inline-block"></span> blokdan chiqish ehtimoli bor</div></div></div>
          <div class="msgs">
            <div class="msg left">Kecha nimadir noto‘g‘ri ketdi shekilli...</div>
            <div class="msg right">Men ham aniq bilmay qoldim 😅</div>
            <div class="msg left">Kayfiyatni ko‘taradigan gap bormi?</div>
            <div class="msg right">Bor: “5 daqiqa gaplashsak, men gap bo‘lmayman” 😇</div>
            <div class="msg left">Ego masalasi-chi?</div>
            <div class="msg right">Ego dam olsin. Biz seshanba rejani aniqlaylik 😂</div>
          </div>
        </div>
      </div>
    </section>
    <section class="card section" id="form">
      <h2>Mini savol-javob</h2>
      <p>Javoblar Telegramga boradi. Xohlamasangiz yubormasangiz ham bo‘ladi — bu sahifada bosim yo‘q, faqat yumshoq kayfiyat bor.</p>
      <div class="progress"><div class="bar" id="bar"></div></div>
      <form id="loveForm">
        <input class="hp" name="website" autocomplete="off" />
        <div class="steps">
          <div class="step active">
            <div class="grid">
              <div class="field"><label>Ismingiz yoki laqabingiz</label><input class="input" name="name" placeholder="Masalan: O" required /></div>
              <div class="field"><label>Hozirgi kayfiyat</label><select name="mood" required><option value="">Tanlang</option><option>😄 yaxshi</option><option>😐 o‘rtacha</option><option>😤 hali jahl bor</option><option>😂 kulgim kelyapti</option><option>🤔 o‘ylab ko‘raman</option></select></div>
            </div>
            <div class="field"><label>Kayfiyat balingiz: <span id="moodNum">5</span>/10</label><div class="rangeBox"><input type="range" name="moodLevel" min="0" max="10" value="5" id="moodRange" /><div class="bigEmoji" id="emoji">🙂</div></div></div>
          </div>
          <div class="step">
            <div class="field"><label>Kecha nima bo‘ldi deb o‘ylaysiz?</label><textarea name="whatHappened" placeholder="Xohlasangiz qisqa yozing..."></textarea></div>
            <div class="field"><label>Blok statusi</label><div class="choices"><label class="choice"><input type="radio" name="blockStatus" value="blok hali turibdi">Blok hali turibdi 😅</label><label class="choice"><input type="radio" name="blockStatus" value="o‘ylab ko‘raman">O‘ylab ko‘raman 🤔</label><label class="choice"><input type="radio" name="blockStatus" value="blok yumshashi mumkin">Yumshashi mumkin ✨</label></div></div>
            <div class="field"><label>Ego verdict — yumshoq variantda</label><select name="ego"><option value="">Tanlang</option><option>Ego bugun dam olsin 😄</option><option>Ikkalamiz ham biroz qaysar bo‘ldik</option><option>Gaplashsak tushunamiz</option><option>Men avval tinglayman</option></select></div>
          </div>
          <div class="step">
            <div class="grid">
              <div class="field"><label>Seshanba ko‘rishamizmi?</label><select name="tuesday"><option value="">Tanlang</option><option>Ha, ko‘rishamiz</option><option>Balki</option><option>Hali bilmayman</option><option>Darsga qarab</option></select></div>
              <div class="field"><label>Nechida?</label><input class="input" name="time" placeholder="Masalan: 14:00 yoki darsdan keyin" /></div>
            </div>
            <div class="field"><label>Darsga kirasizmi?</label><div class="choices"><label class="choice"><input type="radio" name="classPlan" value="kiraman">Kiraman 📚</label><label class="choice"><input type="radio" name="classPlan" value="kirmayman">Kirmayman 😄</label><label class="choice"><input type="radio" name="classPlan" value="hali aniq emas">Hali aniq emas</label></div></div>
          </div>
          <div class="step">
            <div class="field"><label>Yarashuv jarimasi sifatida nimalar o‘tadi?</label><div class="choices"><label class="choice"><input type="checkbox" name="fines" value="shokolad">Shokolad 🍫</label><label class="choice"><input type="checkbox" name="fines" value="muzqaymoq">Muzqaymoq 🍦</label><label class="choice"><input type="checkbox" name="fines" value="samimiy uzr">Samimiy uzr 🙏</label><label class="choice"><input type="checkbox" name="fines" value="5 daqiqa bo‘lmasdan tinglash">5 daqiqa bo‘lmasdan tinglash 😇</label></div></div>
            <div class="field"><label>Yarashish ehtimoli: <span id="chanceNum">50</span>%</label><input type="range" name="chance" min="0" max="100" value="50" id="chance" /></div>
            <div class="field"><label>Oxirgi xabar</label><textarea name="finalMessage" placeholder="Xohlagan gapingizni yozing..."></textarea></div>
          </div>
        </div>
        <div class="actions"><button type="button" class="btn secondary hide" id="prev">Orqaga</button><button type="button" class="btn primary" id="next">Keyingisi</button><button type="submit" class="btn primary hide" id="send">Telegramga yuborish 💌</button></div>
        <div id="status" class="status"></div>
      </form>
    </section>
    <div class="footer">Bu sahifa mehr uchun. Javob berish majburiy emas. Hurmat birinchi o‘rinda.</div>
  </main>
  <script>
    const steps=[...document.querySelectorAll('.step')],bar=document.getElementById('bar'),prev=document.getElementById('prev'),next=document.getElementById('next'),send=document.getElementById('send'),statusBox=document.getElementById('status');let current=0;
    function show(){steps.forEach((s,i)=>s.classList.toggle('active',i===current));bar.style.width=((current+1)/steps.length*100)+'%';prev.classList.toggle('hide',current===0);next.classList.toggle('hide',current===steps.length-1);send.classList.toggle('hide',current!==steps.length-1);statusBox.className='status';statusBox.textContent=''}
    next.onclick=()=>{if(current<steps.length-1){current++;show()}};prev.onclick=()=>{if(current>0){current--;show()}};
    const moodRange=document.getElementById('moodRange'),moodNum=document.getElementById('moodNum'),emoji=document.getElementById('emoji');moodRange.oninput=()=>{const v=+moodRange.value;moodNum.textContent=v;emoji.textContent=v<3?'😤':v<5?'😐':v<8?'🙂':'😄'};
    const chance=document.getElementById('chance'),chanceNum=document.getElementById('chanceNum');chance.oninput=()=>chanceNum.textContent=chance.value;
    function confetti(){['💖','✨','😄','🌸','💌','🫶'].forEach((e,i)=>{for(let j=0;j<5;j++){const s=document.createElement('span');s.className='confetti';s.textContent=e;s.style.left=Math.random()*100+'vw';s.style.animationDelay=(Math.random()*.35)+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),2100)}})}
    document.getElementById('loveForm').addEventListener('submit',async(e)=>{e.preventDefault();statusBox.className='status';statusBox.textContent='Yuborilyapti...';const fd=new FormData(e.target);const data={};for(const [k,v] of fd.entries()){if(data[k]){data[k]=Array.isArray(data[k])?[...data[k],v]:[data[k],v]}else data[k]=v}try{const r=await fetch('/api/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});const json=await r.json().catch(()=>({}));if(!r.ok||!json.ok)throw new Error(json.error||'Xabar yuborilmadi');statusBox.className='status ok';statusBox.textContent='Yuborildi ✅ Telegramga borishi kerak.';confetti();e.target.reset();current=0;show()}catch(err){statusBox.className='status err';statusBox.textContent='Xato: '+err.message}});
  </script>
</body>
</html>
