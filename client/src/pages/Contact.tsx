import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      <section className="container mb-16 text-center">
        <span className="text-prism-blue font-bold tracking-wider uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Get in Touch</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-prism-blue to-prism-cyan">Us</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          LUMINOUSに関するご質問やご相談は、こちらのフォームからお送りください。<br />
          通常3営業日以内に返信いたします。
        </p>
      </section>

      <section className="container max-w-2xl">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <form className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-medium">お名前 <span className="text-prism-red">*</span></Label>
              <Input 
                id="name" 
                placeholder="山田 太郎" 
                className="bg-black/50 border-white/10 focus:border-prism-cyan h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">メールアドレス <span className="text-prism-red">*</span></Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                className="bg-black/50 border-white/10 focus:border-prism-cyan h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="text-base font-medium">お問い合わせ種別 <span className="text-prism-red">*</span></Label>
              <select 
                id="category"
                className="w-full h-12 px-3 rounded-md bg-black/50 border border-white/10 focus:border-prism-cyan text-base text-foreground focus:outline-none focus:ring-1 focus:ring-prism-cyan"
              >
                <option value="">選択してください</option>
                <option value="membership">メンバーシップについて</option>
                <option value="course">コース内容について</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-medium">お問い合わせ内容 <span className="text-prism-red">*</span></Label>
              <Textarea 
                id="message" 
                placeholder="ご質問内容をご記入ください" 
                className="bg-black/50 border-white/10 focus:border-prism-cyan min-h-[200px] text-base resize-none"
              />
            </div>

            <Button className="w-full h-14 rounded-full bg-gradient-to-r from-prism-blue to-prism-cyan hover:opacity-90 text-white font-bold text-lg shadow-[0_0_20px_rgba(0,229,255,0.3)]">
              送信する <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
