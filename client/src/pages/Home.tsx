import { Button } from "@/components/ui/button";
import { Sparkles, PenTool, Brain, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black z-0"></div>
          <img 
            src="/images/hero-main.png" 
            alt="LUMINOUS Android" 
            className="w-full h-full object-cover object-top opacity-90 md:object-[center_20%]"
          />
          {/* Gradient Overlays for Text Readability and Theme Integration */}
          {/* 顔周りを避けるようにグラデーションを調整 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-transparent md:via-black/20 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,0,85,0.15),transparent_50%)] z-10 mix-blend-screen"></div>
        </div>

        <div className="container relative z-20 flex flex-col items-start text-left max-w-6xl mx-auto px-4">
          {/* テキストコンテナの幅を制限して左側に寄せる */}
          <div className="max-w-2xl md:max-w-xl lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="w-2 h-2 rounded-full bg-prism-cyan animate-pulse"></span>
              <span className="text-xs font-medium tracking-wider uppercase text-white/80">New Generation Community</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 text-balance">
              <span className="block text-white drop-shadow-lg">秘めたる想いを、</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-prism-cyan via-prism-blue to-prism-magenta drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
                輝きに。
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/90 mb-12 leading-relaxed font-medium drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 text-pretty">
              メンタル・ライティング・AI。3つの要素を掛け合わせ、あなたの内なる価値を世界へ届けるためのクリエイティブコミュニティ。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Link href="/line">
                <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-white/90 font-bold text-base w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  無料で参加する <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-white/20 bg-black/40 hover:bg-white/10 text-white font-medium text-base backdrop-blur-md w-full sm:w-auto">
                  コースを見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 relative overflow-hidden bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-prism-magenta/10">
              <iframe
                src="https://player.vimeo.com/video/1143721649?autoplay=0&loop=1&title=0&byline=0&portrait=0"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="LUMINOS Showcase"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-prism-blue to-prism-magenta opacity-20 blur-3xl rounded-full"></div>
              <img 
                src="/images/mind-category.jpg" 
                alt="Concept Art" 
                loading="lazy"
                className="relative rounded-2xl border border-white/10 shadow-2xl aspect-[4/3] object-cover w-full"
              />
              
              {/* Floating Cards removed as requested */}
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-prism-cyan font-bold tracking-wider uppercase text-sm mb-4 block">Concept</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-balance">
                「個」の時代を生き抜く
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 block mt-2">3つの武器</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
                LUMINOUSでは、現代のクリエイターに必要な3つのスキルを統合的に学びます。単なるノウハウではなく、あなたの「在り方」から変革を起こします。
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Brain, title: "Mindset", desc: "揺るがない自分軸と継続力", color: "text-prism-magenta" },
                  { icon: PenTool, title: "Writing", desc: "想いを言語化し、人を動かす力", color: "text-prism-cyan" },
                  { icon: Sparkles, title: "AI Creative", desc: "テクノロジーで表現を拡張する", color: "text-prism-green" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className={`mt-1 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Grid Section */}
      <section className="py-32 bg-white/5 relative">
        <div className="absolute inset-0 bg-[url('/images/ai-category.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-prism-magenta font-bold tracking-wider uppercase text-sm mb-4 block">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">LUMINOUSで得られるもの</h2>
            <p className="text-muted-foreground text-lg text-pretty max-w-2xl mx-auto">
              オンライン学習とコミュニティの力を掛け合わせ、あなたの成長を加速させる環境を用意しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "動画講義見放題",
                desc: "マインド、ライティング、AI活用に関する50本以上の動画コンテンツがいつでも視聴可能。",
                bg: "from-prism-blue/20 to-transparent"
              },
              {
                title: "Discordコミュニティ",
                desc: "同じ志を持つ仲間との交流、日報、作業会。孤独になりがちな副業・創作活動をサポート。",
                bg: "from-prism-magenta/20 to-transparent"
              },
              {
                title: "月1回のグループコンサル",
                desc: "講師に直接質問できる機会。今の課題を明確にし、次のアクションプランを策定します。",
                bg: "from-prism-cyan/20 to-transparent"
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Gallery Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-prism-green font-bold tracking-wider uppercase text-sm mb-4 block">Community</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">はじめての方も安心</h2>
            <p className="text-muted-foreground text-lg text-pretty max-w-2xl mx-auto">
              「AIって難しそう…」「noteの書き方がわからない…」そんな初心者の方も大歓迎。マインドセットやお金の知識まで、ゼロから一緒に学べる環境があります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { image: "/images/community-1.jpg", title: "気軽に話せるDiscord交流" },
              { image: "/images/community-2.jpg", title: "初心者向け動画講座" },
              { image: "/images/community-3.jpg", title: "AIで遊びながら学ぶ" },
              { image: "/images/community-4.jpg", title: "わからないことは何でも相談" },
            ].map((item, i) => (
              <div key={i} className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-sm font-medium border border-white/10">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
