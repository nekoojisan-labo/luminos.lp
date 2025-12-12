import { Button } from "@/components/ui/button";
import { Check, PlayCircle, FileText, Users, Clock, Sparkles, PenTool, Brain } from "lucide-react";
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
              <p className="text-prism-pink text-sm font-bold mb-4">AI Creator / Designer</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                （ここに紹介文が入ります。リリーさんの専門分野や、どのような視点で受講生をサポートするかなど、魅力的な紹介文を後ほど掲載いたします。）
              </p>
            </div>
          </div>

          {/* Lecturer 2: Nagi */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-prism-blue/50 transition-colors duration-500 group">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/lecturer_nagi.jpeg" 
                alt="Nagi" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Nagi</h3>
              <p className="text-prism-blue text-sm font-bold mb-4">Prompt Engineer / Strategist</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                （ここに紹介文が入ります。なぎさんの専門分野や、どのような視点で受講生をサポートするかなど、魅力的な紹介文を後ほど掲載いたします。）
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
              <p className="text-prism-purple text-sm font-bold mb-4">Founder / Mentor</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                （ここに紹介文が入ります。nekoojisanの専門分野や、どのような視点で受講生をサポートするかなど、魅力的な紹介文を後ほど掲載いたします。）
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

        {/* Topic 4: Money Literacy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prism-yellow/10 border border-prism-yellow/20 text-prism-yellow text-xs font-bold mb-6">
              Financial Wisdom
            </div>
            <h2 className="text-4xl font-bold mb-6">Money Literacy</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              現役金融マン×ダイナミックマインドコーチが語る、本当の豊かさへの道。
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "お金とマインドセットの統合的アプローチ",
                "実践的な金融知識と資金計画",
                "心理学・認知科学で紐解くお金のブロック",
                "親子で学ぶ金融教育の基礎"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-prism-yellow/20 flex items-center justify-center text-prism-yellow shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-2">
            <div className="absolute -inset-4 bg-prism-yellow/20 blur-3xl rounded-full"></div>
            <div className="relative rounded-2xl border border-white/10 bg-black/50 p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-prism-yellow/10 to-transparent opacity-50"></div>
               <svg className="w-32 h-32 text-prism-yellow opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
          </div>
        </div>

        {/* Money Literacy Article Section */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <h3 className="text-3xl font-bold mb-6 text-white">現役金融マン×ダイナミックマインドコーチが語る、本当の豊かさへの道</h3>
              
              <div className="border-l-4 border-prism-pink pl-6 my-8">
                <h4 className="text-xl font-bold mb-4 text-white">はじめに</h4>
                <p className="text-muted-foreground leading-relaxed">
                  こんにちは。私は現役金融マンとして長年、お金と向き合ってきました。同時に、ダイナミックマインドコーチとして、多くの方の内面の輝きを引き出すお手伝いをしています。
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  この二つの経験から、私は確信しています。<strong className="text-white">真の豊かさは、お金の知識とマインドセットの両輪があってこそ実現する</strong>のだと。
                </p>
              </div>

              <div className="space-y-8 mt-12">
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-white">なぜ「お金の知識」と「マインドセット」なのか？</h4>
                  
                  <h5 className="text-xl font-semibold mb-3 text-prism-blue">お金の知識だけでは足りない理由</h5>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    金融の現場で働いていると、こんな方々に出会います。
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-prism-pink mt-1">•</span>
                      <span>十分な収入があるのに、いつもお金の不安を抱えている人</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-prism-pink mt-1">•</span>
                      <span>資産運用の知識はあるのに、なかなか行動に移せない人</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-prism-pink mt-1">•</span>
                      <span>節約しているのに、なぜか心が満たされない人</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    これらの問題の根本には、実は「マインドセット」の問題が隠れています。どれだけ金融知識を持っていても、自分自身の内面が整っていなければ、お金との健全な関係は築けないのです。
                  </p>

                  <h5 className="text-xl font-semibold mb-3 mt-6 text-prism-purple">マインドセットだけでも不十分</h5>
                  <p className="text-muted-foreground leading-relaxed">
                    一方で、どれだけ前向きな気持ちを持っていても、現実的な金融知識なしには、夢を具体的な形にすることは難しいものです。理想を実現するには、適切な資金計画、リスク管理、そして賢明な金融判断が必要です。
                  </p>
                  <p className="text-white font-semibold mt-4">
                    だからこそ、この二つを統合することが重要なのです。
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-2xl font-bold mb-6 text-white">LUMINOUSで学べる3つの柱</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-lg font-semibold mb-2 text-prism-magenta">1. マインドセットの変革：心理学・認知科学で「自分」を紐解く</h5>
                      <p className="text-muted-foreground leading-relaxed">
                        「私なんて何もできない」「自分には価値がない」「どうせ無理」——こうした言葉が、心の中で繰り返されていませんか？ 実は、これらの思い込みは、長年の経験や環境によって無意識のうちに形成された認知のパターンです。LUMINOUSでは、心理学と認知科学の知見を活用しながら、これらのパターンを丁寧に紐解いていきます。
                      </p>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold mb-2 text-prism-cyan">2. 実践的な金融知識：現役金融マンが教える本当に役立つお金の話</h5>
                      <p className="text-muted-foreground leading-relaxed">
                        理論だけでなく、現場で培った実践的な知識をお伝えします。日本の学校教育では、お金のことをほとんど教えてくれません。だからこそ、多くの人が大人になってから「お金のことがわからない」と悩んでいるのです。そして、あなた自身が学ぶことで、お子さんにも正しい金融教育を伝えることができるようになります。
                      </p>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold mb-2 text-prism-green">3. 統合：知識とマインドを行動につなげる</h5>
                      <p className="text-muted-foreground leading-relaxed">
                        知っているだけでは意味がありません。LUMINOUSでは、学んだことを実際の行動に移すためのサポートも行います。個人の価値観に合った資金計画の立て方、恐れを乗り越えて一歩を踏み出す方法、継続的に学び、成長し続けるコミュニティ作りを大切にしています。
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-4 text-white">こんな方におすすめです</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-prism-pink mt-1 text-xl">✓</span>
                      <span>お金のことを学びたいけど、何から始めればいいかわからない方</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-prism-pink mt-1 text-xl">✓</span>
                      <span>収入はあるのに、なぜかお金が貯まらない方</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-prism-pink mt-1 text-xl">✓</span>
                      <span>将来の不安を解消し、自信を持って人生を歩みたい方</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-prism-pink mt-1 text-xl">✓</span>
                      <span>自分の夢や目標を実現するための具体的な方法を知りたい方</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-prism-pink mt-1 text-xl">✓</span>
                      <span>お金に対する罪悪感やブロックを手放したい方</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h4 className="text-2xl font-bold mb-4 text-white">最後に：あなたの「秘めたる想い」を輝かせるために</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    お金は、あなたの夢を実現するための強力なツールです。そして、その夢を描き、実現していく力は、あなたの内側にすでに存在しています。
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    必要なのは、正しい知識と、自分自身を信じるマインドセット。そして、一歩を踏み出す勇気です。
                  </p>
                  <p className="text-white font-semibold text-lg">
                    あなたの輝きが、世界を照らす光になる。
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    LUMINOUSは、そのための場所です。共に学び、共に成長し、共に輝きましょう。
                  </p>
                  <p className="text-right text-muted-foreground mt-8 italic">
                    現役金融マン×ダイナミックマインドコーチ<br />
                    リリーより
                  </p>
                </div>
              </div>
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
            LUMINOUSメンバーシップに参加して、全てのコースにアクセスしましょう。あなたのペースで、好きな場所から学びをスタートできます。
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-white/90 font-bold">
              メンバーシップ詳細を見る
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
