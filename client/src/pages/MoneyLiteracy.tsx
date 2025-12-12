import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, TrendingUp, Users, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function MoneyLiteracy() {
  return (
    <div className="pt-24 pb-20">
      {/* Back Button */}
      <div className="container mb-8">
        <Link href="/courses">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            コース一覧に戻る
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <section className="container mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prism-yellow/10 border border-prism-yellow/20 text-prism-yellow text-xs font-bold mb-6">
            Money Literacy
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
            現役金融マン×ダイナミックマインドコーチが語る、<span className="text-transparent bg-clip-text bg-gradient-to-r from-prism-yellow to-prism-orange">本当の豊かさへの道</span>
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="container">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Introduction */}
          <section className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">はじめに</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                こんにちは。私は現役金融マンとして長年、お金と向き合ってきました。同時に、ダイナミックマインドコーチとして、多くの方の内面の輝きを引き出すお手伝いをしています。
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                この二つの経験から、私は確信しています。真の豊かさは、お金の知識とマインドセットの両輪があってこそ実現するのだと。
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                LUMINOUSコミュニティでは、皆さんの「秘めたる想い」を輝きに変えるために、金融知識とマインドセットの両面からサポートしていきます。
              </p>
            </div>
          </section>

          {/* Why Both */}
          <section>
            <h2 className="text-3xl font-bold mb-8">なぜ「お金の知識」と「マインドセット」なのか？</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-prism-red/20 flex items-center justify-center text-prism-red mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">お金の知識だけでは足りない理由</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  金融の現場で働いていると、こんな方々に出会います。
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-prism-red mt-1">•</span>
                    <span>十分な収入があるのに、いつもお金の不安を抱えている人</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-prism-red mt-1">•</span>
                    <span>資産運用の知識はあるのに、なかなか行動に移せない人</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-prism-red mt-1">•</span>
                    <span>節約しているのに、なぜか心が満たされない人</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  これらの問題の根本には、実は「マインドセット」の問題が隠れています。どれだけ金融知識を持っていても、自分自身の内面が整っていなければ、お金との健全な関係は築けないのです。
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-prism-blue/20 flex items-center justify-center text-prism-blue mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">マインドセットだけでも不十分</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  一方で、どれだけ前向きな気持ちを持っていても、現実的な金融知識なしには、夢を具体的な形にすることは難しいものです。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  理想を実現するには、適切な資金計画、リスク管理、そして賢明な金融判断が必要です。
                </p>
                <p className="text-white font-bold text-lg">
                  だからこそ、この二つを統合することが重要なのです。
                </p>
              </div>
            </div>
          </section>

          {/* Three Pillars */}
          <section>
            <h2 className="text-3xl font-bold mb-8">LUMINOUSで学べる3つの柱</h2>
            
            <div className="space-y-12">
              {/* Pillar 1 */}
              <div className="bg-gradient-to-br from-prism-magenta/10 to-transparent border border-prism-magenta/20 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-prism-magenta/20 flex items-center justify-center text-prism-magenta font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">マインドセットの変革：心理学・認知科学で「自分」を紐解く</h3>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  「私なんて何もできない」「自分には価値がない」「どうせ無理」
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  こうした言葉が、心の中で繰り返されていませんか？
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  実は、これらの思い込みは、長年の経験や環境によって無意識のうちに形成された認知のパターンです。LUMINOUSでは、心理学と認知科学の知見を活用しながら、これらのパターンを丁寧に紐解いていきます。
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-prism-magenta">お金との関係を根本から見直す</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      まず、お金に対する「思い込み」を探っていきます。
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-prism-magenta mt-1">•</span>
                        <span>「お金を稼ぐことは悪いこと」という罪悪感</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-prism-magenta mt-1">•</span>
                        <span>「自分にはお金を増やす才能がない」という思い込み</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-prism-magenta mt-1">•</span>
                        <span>「お金について考えるのは俗っぽい」という偏見</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-prism-magenta">そして、自己認識そのものを変革する</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      さらに深く、あなたの自己認識に影響を与えている「制限的な信念」を見つけ出します。
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-prism-magenta mt-1">•</span>
                        <span>なぜ「私なんて」という言葉が出てくるのか</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-prism-magenta mt-1">•</span>
                        <span>その思考パターンはいつ、どのように形成されたのか</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-prism-magenta mt-1">•</span>
                        <span>それは本当にあなた自身の声なのか、それとも過去の誰かの声なのか</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      心理学の理論（認知行動療法、自己効力感理論など）と認知科学のアプローチを用いて、これらの問いに向き合います。そして、あなたの中に眠る本来の可能性を、科学的な裏付けとともに引き出していきます。
                    </p>
                  </div>
                </div>

                <p className="text-white font-bold text-lg mt-8">
                  ダイナミックマインドコーチとして、あなたの内なる可能性を最大限に引き出すサポートをします。
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-gradient-to-br from-prism-yellow/10 to-transparent border border-prism-yellow/20 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-prism-yellow/20 flex items-center justify-center text-prism-yellow font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">実践的な金融知識：現役金融マンが教える本当に役立つお金の話</h3>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  理論だけでなく、現場で培った実践的な知識をお伝えします。
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  日本の学校教育では、お金のことをほとんど教えてくれません。だからこそ、多くの人が大人になってから「お金のことがわからない」「どうすればいいのかわからない」と悩んでいるのです。
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  LUMINOUSでは、学校では教えてくれない金融知識を、わかりやすく丁寧にお伝えします。難しい金融用語を使わず、誰にでもわかる言葉で、すぐに実践できる知識をお届けします。
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  そして、あなた自身が学ぶことで、お子さんにも正しい金融教育を伝えることができるようになります。次の世代に豊かさを繋いでいく、それもLUMINOUSの大切な目標の一つです。
                </p>
                <p className="text-white font-bold text-lg">
                  親子で一緒に金融リテラシーを高め、家族全体で豊かな未来を築いていきましょう。
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-gradient-to-br from-prism-cyan/10 to-transparent border border-prism-cyan/20 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-prism-cyan/20 flex items-center justify-center text-prism-cyan font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">統合：知識とマインドを行動につなげる</h3>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  知っているだけでは意味がありません。LUMINOUSでは、学んだことを実際の行動に移すためのサポートも行います。
                </p>
                <ul className="space-y-3 text-muted-foreground text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-prism-cyan mt-1">•</span>
                    <span>個人の価値観に合った資金計画の立て方</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-prism-cyan mt-1">•</span>
                    <span>恐れを乗り越えて一歩を踏み出す方法</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-prism-cyan mt-1">•</span>
                    <span>継続的に学び、成長し続けるコミュニティ作り</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Community Features */}
          <section>
            <h2 className="text-3xl font-bold mb-8">LUMINOUSコミュニティの特徴</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-prism-green/20 flex items-center justify-center text-prism-green mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">安心して学べる環境</h3>
                <p className="text-muted-foreground leading-relaxed">
                  お金の話は、なかなか人に相談しづらいもの。LUMINOUSでは、お互いを尊重し、支え合える安全な場を提供します。
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-prism-magenta/20 flex items-center justify-center text-prism-magenta mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">一人ひとりに寄り添う</h3>
                <p className="text-muted-foreground leading-relaxed">
                  「正解」は人それぞれ。あなたの価値観、ライフスタイル、夢に合わせたアドバイスを心がけています。
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-prism-blue/20 flex items-center justify-center text-prism-blue mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">継続的な成長</h3>
                <p className="text-muted-foreground leading-relaxed">
                  一度学んで終わりではなく、継続的に学び、実践し、振り返るサイクルを大切にします。
                </p>
              </div>
            </div>
          </section>

          {/* Target Audience */}
          <section className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8">こんな方におすすめです</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-prism-yellow text-2xl">✓</span>
                <span className="text-muted-foreground">お金のことを学びたいけど、何から始めればいいかわからない方</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-prism-yellow text-2xl">✓</span>
                <span className="text-muted-foreground">収入はあるのに、なぜかお金が貯まらない方</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-prism-yellow text-2xl">✓</span>
                <span className="text-muted-foreground">将来の不安を解消し、自信を持って人生を歩みたい方</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-prism-yellow text-2xl">✓</span>
                <span className="text-muted-foreground">自分の夢や目標を実現するための具体的な方法を知りたい方</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-prism-yellow text-2xl">✓</span>
                <span className="text-muted-foreground">お金に対する罪悪感やブロックを手放したい方</span>
              </li>
            </ul>
          </section>

          {/* Closing Message */}
          <section className="bg-gradient-to-r from-prism-yellow/20 via-prism-orange/20 to-prism-red/20 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">最後に：あなたの「秘めたる想い」を輝かせるために</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                お金は、あなたの夢を実現するための強力なツールです。そして、その夢を描き、実現していく力は、あなたの内側にすでに存在しています。
              </p>
              <p>
                必要なのは、正しい知識と、自分自身を信じるマインドセット。そして、一歩を踏み出す勇気です。
              </p>
              <p className="text-white font-bold text-xl">
                LUMINOUSコミュニティで、私たちと一緒に、あなたの「秘めたる想い」を輝きに変えていきませんか？
              </p>
              <p>
                お金の不安から解放され、自分らしい豊かさを手に入れる。そんな未来への第一歩を、今日から始めましょう。
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-12">
            <p className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-prism-yellow via-prism-orange to-prism-red">
              あなたの輝きが、世界を照らす光になる。
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              LUMINOUSは、そのための場所です。
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              共に学び、共に成長し、共に輝きましょう。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/line">
                <Button size="lg" className="h-14 px-10 rounded-full bg-gradient-to-r from-prism-yellow to-prism-orange hover:opacity-90 text-black font-bold">
                  無料で参加する
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/20 hover:bg-white/10 font-medium">
                  他のコースも見る
                </Button>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-muted-foreground">
                現役金融マン×ダイナミックマインドコーチ
              </p>
              <p className="text-white font-bold text-lg mt-2">
                リリーより
              </p>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}
