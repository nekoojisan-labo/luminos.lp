import { Button } from "@/components/ui/button";
import { Check, Sparkles, PenTool, Brain, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Courses() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="container mb-20">
        <div className="max-w-3xl">
          <span className="text-prism-cyan font-bold tracking-wider uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Courses</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-prism-blue to-prism-magenta">Path</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-pretty">
            LUMINOUSでは、3名の専門講師による多角的なアプローチで、あなたのクリエイティブな可能性を引き出します。
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mb-32">
        <div className="max-w-lg mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-prism-blue to-prism-cyan text-white text-sm font-bold">
              STANDARD PLAN
            </div>
            
            <div className="mt-4 mb-8">
              <span className="text-6xl md:text-7xl font-black text-white">¥5,980</span>
              <span className="text-xl text-white/60 ml-2">/月</span>
            </div>
            
            <p className="text-muted-foreground mb-8">
              税込価格・いつでも解約可能
            </p>
            
            <div className="space-y-4 text-left mb-10">
              {[
                "全コース・全講座が見放題",
                "オンラインラウンジへの参加",
                "メンバー限定コミュニティ",
                "講師への質問・相談",
                "月1回のライブセッション",
                "メンバー限定イベント参加権"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-prism-cyan/20 flex items-center justify-center text-prism-cyan shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="w-full rounded-full bg-white text-black hover:bg-white/90 font-bold text-lg h-14 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:scale-105" 
              asChild
              data-magnet
            >
              <Link href="/contact">
                メンバーシップに参加する <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lecturers Section */}
      <section className="container mb-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Lecturers</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Lecturer 1: Lily */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-prism-pink/50 transition-colors duration-500 group">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/lecturer_lily.png" 
                alt="Lily" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Lily</h3>
              <p className="text-prism-pink text-sm font-bold mb-4">マネー×マインド講師 / 認定心理士</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                金融業界16年×認定心理士として、「お金」と「心」の両面からあなたをサポート。「自分なんか…才能もない、能力もない」そんなあなたの味方でありたい。Threads4ヶ月で200万円超の収益を達成した実践メソッドと、現役大学院生として学ぶ心理学の知識で、マネーリテラシーとマインドセットの両輪から伴走します。コンサル実績500名超。知識を学ぶだけでなく、実践し結果を出すまで寄り添います。あなたの中に眠る可能性を一緒に開花させましょう。
              </p>
            </div>
          </div>

          {/* Lecturer 2: Nagi */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-prism-cyan/50 transition-colors duration-500 group">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/lecturer_nagi.jpeg" 
                alt="Nagi" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Nagi</h3>
              <p className="text-prism-cyan text-sm font-bold mb-4">文章術×編集術講師 / 編集者・ライター歴35年</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                大手出版社での雑誌編集を経てフリーランスとして独立。数多くの書籍、Webメディアの編集・執筆に携わる。言葉の力を信じ、「伝わる」文章を追求。あなたの「書きたい」想いを、最高の形で読者に届けるお手伝いをします。「SNSで発信したいけど、文章が苦手…」「AIに書かせても、なんだか無個性な文章になっちゃう」そんな風に感じていませんか？AIを使いこなす「文章術」と「編集術」をお伝えします。あなた自身の「想い」や「人間味」を掛け合わせれば、誰にも真似できない、あなただけの魅力的な文章が書けるようになりますよ。いくつになっても挑戦がモットー。文章で悩むあなたの味方になれたら嬉しいです！
              </p>
            </div>
          </div>

          {/* Lecturer 3: Nekoojisan */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-prism-purple/50 transition-colors duration-500 group">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/lecturer_nekoojisan.jpeg" 
                alt="Nekoojisan" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">nekoojisan</h3>
              <p className="text-prism-purple text-sm font-bold mb-4">AI講師 / Founder</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI関連を担当します。プロンプト作りや、動画、画像などの生成が得意。AI情報の発信、プロンプト作りや動画の構成づくりなど、または何か作るにあたっての考え方、AIへの質問力を上げるお手伝いをします。初心者でも大丈夫！質問には全力でお答えしますよ！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Learn Section */}
      <section className="container space-y-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What You Can Learn</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            LUMINOUSで得られる3つのコアスキル。これらを組み合わせることで、独自の価値を生み出します。
          </p>
        </div>

        {/* Topic 1: Mindset & Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-prism-magenta/20 blur-3xl rounded-full"></div>
            <div className="relative rounded-2xl border border-white/10 bg-black/50 p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-prism-magenta/10 to-transparent opacity-50"></div>
               <Brain className="w-32 h-32 text-prism-magenta opacity-80" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prism-magenta/10 border border-prism-magenta/20 text-prism-magenta text-xs font-bold mb-6">
              Foundation
            </div>
            <h2 className="text-4xl font-bold mb-6">Mindset & Branding</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              自分自身の価値を再発見し、発信活動を継続するための強固なマインドセットを構築します。
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "自己理解と強みの発掘",
                "継続するための習慣化テクニック",
                "ファンを作るパーソナルブランディング",
                "発信へのメンタルブロック解除"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-prism-magenta/20 flex items-center justify-center text-prism-magenta shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Topic 2: Writing & Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prism-cyan/10 border border-prism-cyan/20 text-prism-cyan text-xs font-bold mb-6">
              Expression
            </div>
            <h2 className="text-4xl font-bold mb-6">Writing & Storytelling</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              AI時代だからこそ重要な「人の心を動かす言葉」を紡ぐ力を養います。
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "共感を生むストーリーテリング",
                "読者を惹きつける文章構成",
                "SNS・ブログでの効果的な発信術",
                "自分の言葉で語るための言語化トレーニング"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-prism-cyan/20 flex items-center justify-center text-prism-cyan shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-2">
            <div className="absolute -inset-4 bg-prism-cyan/20 blur-3xl rounded-full"></div>
            <div className="relative rounded-2xl border border-white/10 bg-black/50 p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-prism-cyan/10 to-transparent opacity-50"></div>
               <PenTool className="w-32 h-32 text-prism-cyan opacity-80" />
            </div>
          </div>
        </div>

        {/* Topic 3: AI & Creative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-prism-green/20 blur-3xl rounded-full"></div>
            <div className="relative rounded-2xl border border-white/10 bg-black/50 p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-prism-green/10 to-transparent opacity-50"></div>
               <Sparkles className="w-32 h-32 text-prism-green opacity-80" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prism-green/10 border border-prism-green/20 text-prism-green text-xs font-bold mb-6">
              Technology
            </div>
            <h2 className="text-4xl font-bold mb-6">AI & Creative</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              最新のAIツールを使いこなし、想像を形にするクリエイティブスキルを習得します。
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Midjourneyによる画像生成テクニック",
                "ChatGPTを活用したアイデア出しと壁打ち",
                "AIツールを組み合わせた効率化ワークフロー",
                "クリエイティブの質を高めるプロンプトエンジニアリング"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-prism-green/20 flex items-center justify-center text-prism-green shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mt-32">
        <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-prism-red via-prism-green to-prism-blue"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">学びを始める準備はできましたか？</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto text-pretty">
            月額5,980円で全てのコースにアクセス。あなたのペースで、好きな場所から学びをスタートできます。
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-white/90 font-bold">
              メンバーシップに参加する
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
