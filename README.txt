ENG OSON DEPLOY:
1) GitHub repo yarating yoki eski repo ichini tozalang.
2) ZIP ichidagi fayllarni repo root'iga yuklang. Root'da index.html va api papkasi darrov ko'rinsin.
3) Vercel repo'ni import qiladi. Build command, output directory kerak emas.
4) BotFather'dan yangi token oling.
5) O'z botingizga /start yozing.
6) @userinfobot ga /start yozing va Id raqamingizni oling.
7) Vercel -> Environment Variables:
   TELEGRAM_BOT_TOKEN = yangi token
   TELEGRAM_CHAT_ID = @userinfobot bergan Id
8) Redeploy qiling.
9) /api/check ochib tekshiring.
