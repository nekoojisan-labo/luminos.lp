import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg-restored.png" 
            alt="LUMINOUS Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-6 md:px-6">
          <div className="max-w-4xl mx-auto text-left md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs md:text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="w-2 h-2 rounded-full bg-prism-green animate-pulse" />
              NEW GENERATION COMMUNITY
            </div>
            
            <h1 className="text-[2.75rem] leading-[1.15] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 md:mb-10 md:leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              秘めたる<br />
              想いを、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-prism-blue via-prism-purple to-prism-pink animate-gradient-x" style={{WebkitTextStroke: '1px rgba(100, 150, 255, 0.3)'}}>
                輝きに。
              </span>
            </h1>
            
            <p className="text-base leading-relaxed sm:text-lg md:text-2xl text-white/80 mb-10 md:mb-12 max-w-2xl md:leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 text-balance">
              メンタル・ライティング・AI。3つの要素を掛け合わせ、あなたの内なる価値を世界へ届けるためのクリエイティブコミュニティ。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105" asChild>
                <Link href="/contact">
                  無料で参加する <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white font-medium text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 backdrop-blur-sm transition-all hover:scale-105" asChild>
                <Link href="/courses">
                  コースを見る
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce delay-1000">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </div>
      </section>

      {/* Concept Movie Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(100,100,255,0.1)] border border-white/10 animate-in fade-in zoom-in duration-1000 view-transition-name:video-section">
            <iframe 
              src="https://player.vimeo.com/video/1143721649?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
              className="absolute top-0 left-0 w-full h-full"
              title="LUMINOUS Concept Movie"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-prism-blue/10 via-transparent to-transparent opacity-50" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-prism-blue font-bold tracking-wider uppercase text-sm mb-4 block">Concept</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
              「個」の時代を生き抜く<br />
              3つの武器
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              AIの進化により、誰もがクリエイターになれる時代。<br />
              しかし、ツールを使うだけでは人の心は動かせません。<br />
              LUMINOUSでは、AIスキルだけでなく、それを支える「言葉」と「心」を同時に磨きます。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mental",
                jpTitle: "メンタル",
                desc: "発信への恐怖を乗り越え、自分軸で活動し続けるためのマインドセット。",
                color: "from-prism-pink to-rose-500",
                delay: "delay-0"
              },
              {
                title: "Writing",
                jpTitle: "ライティング",
                desc: "AIには書けない、あなたの体温が伝わる言葉の紡ぎ方。",
                color: "from-prism-purple to-violet-500",
                delay: "delay-200"
              },
              {
                title: "AI Skill",
                jpTitle: "AIスキル",
                desc: "ChatGPTやMidjourneyを使いこなし、想像を形にする技術。",
                color: "from-prism-blue to-cyan-500",
                delay: "delay-400"
              }
            ].map((item, i) => (
              <div key={i} className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 ${item.delay}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-2">{item.title}</h3>
                  <span className="text-sm font-bold text-white/50 mb-6 block">{item.jpTitle}</span>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Atmosphere Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-prism-purple font-bold tracking-wider uppercase text-sm mb-4 block">Atmosphere</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
              LUMINOUSの日常
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              一人で頑張る必要はありません。<br />
              同じ志を持つ仲間と共に学び、刺激し合える環境がここにあります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <img 
                src="/images/community_lounge_new.png" 
                alt="Community Lounge" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-bold text-lg">オンラインラウンジでの交流</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <img 
                src="/images/community_chat.png" 
                alt="Community Chat" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-bold text-lg">活発なチャットコミュニケーション</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <img 
                src="/images/community_slide.png" 
                alt="Learning Materials" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-bold text-lg">充実した学習資料と講座</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <img 
                src="/images/community_gemini.png" 
                alt="AI Tools Practice" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-bold text-lg">実践的なAIツールの活用</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
