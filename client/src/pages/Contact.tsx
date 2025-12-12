import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      <section className="container mb-16 text-center">
        <span className="text-prism-green font-bold tracking-wider uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Get in Touch</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-prism-green to-white">Us</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-pretty">
          LUMINOUSへのお問い合わせは、公式LINEにて受け付けております。<br />
          以下のQRコード、またはボタンから友だち追加の上、メッセージをお送りください。
        </p>
      </section>

      <section className="container max-w-2xl">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 flex flex-col items-center gap-10">
          
          <div className="p-4 bg-white rounded-2xl shadow-[0_0_30px_rgba(0,255,0,0.2)] animate-in zoom-in duration-700">
            <img 
              src="https://qr-official.line.me/gs/M_665edwjz_GW.png?oat_content=qr" 
              alt="LINE QR Code" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>
          
          <a 
            href="https://line.me/R/ti/p/@665edwjz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full max-w-md"
          >
            <Button size="lg" className="w-full h-16 rounded-full bg-[#06C755] text-white hover:bg-[#06C755]/90 font-bold text-lg shadow-[0_0_30px_rgba(6,199,85,0.4)] hover:shadow-[0_0_50px_rgba(6,199,85,0.6)] transition-all duration-500 flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 2.5C6.5 2.5 2 6.6 2 11.7c0 2.9 1.4 5.5 3.8 7.2.2.1.4.4.3.7-.1.5-.4 1.8-.4 1.9 0 .2.1.4.3.4.1 0 .1 0 .2-.1 1.9-.5 4.1-1.2 4.3-1.2.2 0 .5.1.7.1 1 .1 1.9.1 2.8.1 5.5 0 10-4.1 10-9.2S17.5 2.5 12 2.5z"/>
              </svg>
              公式LINEで友だち追加
            </Button>
          </a>

          <p className="text-sm text-muted-foreground text-center">
            ※ お問い合わせへの返信には、通常1〜3営業日ほどお時間をいただいております。
          </p>
        </div>
      </section>
    </div>
  );
}
