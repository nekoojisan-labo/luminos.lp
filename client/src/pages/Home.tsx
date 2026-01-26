import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal, StaggerContainer } from "@/components/ScrollReveal";
import { HeroTextReveal } from "@/components/TextReveal";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxBackground
        imageSrc="/images/hero-bg-restored.webp"
        imageAlt="LUMINOUS Hero Background"
        speed={0.3}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        enableMeshGradient={true}
      >
        {/* Content */}
        <div className="container relative z-10 px-6 md:px-6">
          <div className="max-w-4xl mx-auto text-left md:text-left">
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs md:text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-prism-green animate-pulse" />
              NEW GENERATION COMMUNITY
            </motion.div>
            
            <HeroTextReveal
              className="text-[2.75rem] leading-[1.15] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 md:mb-10 md:leading-[1.1]"
              lines={[
                { text: "秘めたる" },
                { text: "想いを、" },
                { text: "輝きに。", gradient: true, gradientColors: "from-prism-blue via-prism-purple to-prism-pink" }
              ]}
              baseDelay={0.4}
            />
            
            <motion.p 
              className="text-base leading-relaxed sm:text-lg md:text-2xl text-white/80 mb-10 md:mb-12 max-w-2xl md:leading-relaxed text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              メンタル・ライティング・AI。3つの要素を掛け合わせ、あなたの内なる価値を世界へ届けるためのクリエイティブコミュニティ。
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white font-medium text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 backdrop-blur-sm transition-all hover:scale-105" 
                asChild
                data-magnet
              >
                <Link href="/courses">
                  コースを見る
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <motion.div 
            className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </ParallaxBackground>

      {/* Concept Movie Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <ScrollReveal className="container max-w-5xl mx-auto px-4" direction="up" enable3D={false}>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(100,100,255,0.1)] border border-white/10">
            <iframe 
              src="https://player.vimeo.com/video/1143721649?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
              className="absolute top-0 left-0 w-full h-full"
              title="LUMINOUS Concept Movie"
            ></iframe>
          </div>
        </ScrollReveal>
      </section>

      {/* Concept Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-prism-blue/10 via-transparent to-transparent opacity-50" />
        
        <div className="container relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-20" direction="up">
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
          </ScrollReveal>

          <StaggerContainer 
            className="grid md:grid-cols-3 gap-8"
            staggerDelay={0.15}
            direction="left"
          >
            {[
              {
                title: "Mental",
                jpTitle: "メンタル",
                desc: "発信への恐怖を乗り越え、自分軸で活動し続けるためのマインドセット。",
                color: "from-prism-pink to-rose-500",
              },
              {
                title: "Writing",
                jpTitle: "ライティング",
                desc: "AIには書けない、あなたの体温が伝わる言葉の紡ぎ方。",
                color: "from-prism-purple to-violet-500",
              },
              {
                title: "AI Skill",
                jpTitle: "AIスキル",
                desc: "ChatGPTやMidjourneyを使いこなし、想像を形にする技術。",
                color: "from-prism-blue to-cyan-500",
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-2">{item.title}</h3>
                  <span className="text-sm font-bold text-white/50 mb-6 block">{item.jpTitle}</span>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-prism-purple/10 via-transparent to-transparent opacity-50" />
        
        <div className="container relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-16" direction="up">
            <span className="text-prism-cyan font-bold tracking-wider uppercase text-sm mb-4 block">Membership</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
              料金プラン
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              すべてのコンテンツにアクセスできるシンプルな月額制
            </p>
          </ScrollReveal>

          <ScrollReveal className="max-w-lg mx-auto" direction="up">
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
          </ScrollReveal>
        </div>
      </section>

      {/* Lecturers Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-20" direction="up">
            <span className="text-prism-magenta font-bold tracking-wider uppercase text-sm mb-4 block">Lecturers</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
              講師紹介
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              各分野のプロフェッショナルがあなたの成長をサポートします
            </p>
          </ScrollReveal>

          <StaggerContainer 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            staggerDelay={0.15}
            direction="up"
          >
            {/* Lily */}
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-prism-pink/50 transition-colors duration-500 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/lecturer_lily.webp" 
                  alt="Lily" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Lily</h3>
                <p className="text-prism-pink text-sm font-bold mb-4">マネー×マインド講師 / 認定心理士</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  金融業界16年×認定心理士として、「お金」と「心」の両面からあなたをサポート。「自分なんか…才能もない、能力もない」そんなあなたの味方でありたい。Threads4ヶ月で200万円超の収益を達成した実践メソッドと、現役大学院生として学ぶ心理学の知識で、マネーリテラシーとマインドセットの両輪から伴走します。コンサル実績500名超。
                </p>
              </div>
            </div>

            {/* Nagi */}
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-prism-cyan/50 transition-colors duration-500 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/lecturer_nagi.webp" 
                  alt="Nagi" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Nagi</h3>
                <p className="text-prism-cyan text-sm font-bold mb-4">文章術×編集術講師 / 編集者・ライター歴35年</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  大手出版社での雑誌編集を経てフリーランスとして独立。数多くの書籍、Webメディアの編集・執筆に携わる。言葉の力を信じ、「伝わる」文章を追求。AIを使いこなす「文章術」と「編集術」をお伝えします。あなた自身の「想い」や「人間味」を掛け合わせれば、誰にも真似できない魅力的な文章が書けるようになります。
                </p>
              </div>
            </div>

            {/* nekoojisan */}
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-prism-purple/50 transition-colors duration-500 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/lecturer_nekoojisan.webp" 
                  alt="nekoojisan" 
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
          </StaggerContainer>
        </div>
      </section>

      {/* Community Atmosphere Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-20" direction="up">
            <span className="text-prism-green font-bold tracking-wider uppercase text-sm mb-4 block">Atmosphere</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">
              LUMINOUSの日常
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              一人で頑張る必要はありません。<br />
              同じ志を持つ仲間と共に学び、刺激し合える環境がここにあります。
            </p>
          </ScrollReveal>

          <StaggerContainer 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
            staggerDelay={0.1}
            direction="right"
          >
            {[
              { src: "/images/community_lounge_new.webp", alt: "Community Lounge", label: "オンラインラウンジでの交流" },
              { src: "/images/community_chat.webp", alt: "Community Chat", label: "活発なチャットコミュニケーション" },
              { src: "/images/community_slide.webp", alt: "Learning Materials", label: "充実した学習資料と講座" },
              { src: "/images/community_gemini.webp", alt: "AI Tools Practice", label: "実践的なAIツールの活用" },
            ].map((item, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-bold text-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
