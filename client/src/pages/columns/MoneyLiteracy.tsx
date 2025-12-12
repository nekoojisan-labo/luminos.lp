import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function MoneyLiteracy() {
  return (
    <div className="pt-24 pb-20">
      {/* Back Button */}
      <section className="container mb-8">
        <Link href="/columns">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            コラム一覧に戻る
          </Button>
        </Link>
      </section>

      {/* Article Header */}
      <section className="container mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prism-yellow/10 border border-prism-yellow/20 text-prism-yellow text-xs font-bold mb-6">
            Money
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            現役金融マン×ダイナミックマインドコーチが語る、本当の豊かさへの道
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <time>2025.12.12</time>
            <span>•</span>
            <span>リリー</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
              
              <h2 className="text-3xl font-bold mb-6 text-white">はじめに</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                こんにちは。私は現役金融マンとして長年、お金と向き合ってきました。同時に、ダイナミックマインドコーチとして、多くの方の内面の輝きを引き出すお手伝いをしています。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                この二つの経験から、私は確信しています。<strong className="text-white">真の豊かさは、お金の知識とマインドセットの両輪があってこそ実現する</strong>のだと。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-12">
                LUMINOUSコミュニティでは、皆さんの「秘めたる想い」を輝きに変えるために、金融知識とマインドセットの両面からサポートしていきます。
              </p>

              <div className="border-t border-white/10 pt-12 mb-12">
                <h2 className="text-3xl font-bold mb-8 text-white">なぜ「お金の知識」と「マインドセット」なのか？</h2>
                
                <h3 className="text-2xl font-bold mb-4 text-white">お金の知識だけでは足りない理由</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  金融の現場で働いていると、こんな方々に出会います。
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                  <li>十分な収入があるのに、いつもお金の不安を抱えている人</li>
                  <li>資産運用の知識はあるのに、なかなか行動に移せない人</li>
                  <li>節約しているのに、なぜか心が満たされない人</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  これらの問題の根本には、実は「マインドセット」の問題が隠れています。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  どれだけ金融知識を持っていても、自分自身の内面が整っていなければ、お金との健全な関係は築けないのです。
                </p>

                <h3 className="text-2xl font-bold mb-4 text-white">マインドセットだけでも不十分</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  一方で、どれだけ前向きな気持ちを持っていても、現実的な金融知識なしには、夢を具体的な形にすることは難しいものです。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  理想を実現するには、適切な資金計画、リスク管理、そして賢明な金融判断が必要です。
                </p>
                <p className="text-white font-semibold text-lg mb-8">
                  だからこそ、この二つを統合することが重要なのです。
                </p>
              </div>

              <div className="border-t border-white/10 pt-12 mb-12">
                <h2 className="text-3xl font-bold mb-8 text-white">LUMINOUSで学べる3つの柱</h2>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                      <span className="text-prism-pink">1.</span>
                      マインドセットの変革：心理学・認知科学で「自分」を紐解く
                    </h3>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-4">
                      <p className="text-white leading-relaxed italic">
                        「私なんて何もできない」「自分には価値がない」「どうせ無理」
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      こうした言葉が、心の中で繰り返されていませんか？
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      実は、これらの思い込みは、長年の経験や環境によって無意識のうちに形成された<strong className="text-white">認知のパターン</strong>です。
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      LUMINOUSでは、心理学と認知科学の知見を活用しながら、これらのパターンを丁寧に紐解いていきます。
                    </p>

                    <h4 className="text-xl font-bold mb-3 text-white">お金との関係を根本から見直す</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      まず、お金に対する「思い込み」を探っていきます。
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>「お金を稼ぐことは悪いこと」という罪悪感</li>
                      <li>「自分にはお金を増やす才能がない」という思い込み</li>
                      <li>「お金について考えるのは俗っぽい」という偏見</li>
                    </ul>

                    <h4 className="text-xl font-bold mb-3 text-white">そして、自己認識そのものを変革する</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      さらに深く、あなたの自己認識に影響を与えている「制限的な信念」を見つけ出します。
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                      <li>なぜ「私なんて」という言葉が出てくるのか</li>
                      <li>その思考パターンはいつ、どのように形成されたのか</li>
                      <li>それは本当にあなた自身の声なのか、それとも過去の誰かの声なのか</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      心理学の理論（認知行動療法、自己効力感理論など）と認知科学のアプローチを用いて、これらの問いに向き合います。
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      そして、あなたの中に眠る本来の可能性を、科学的な裏付けとともに引き出していきます。
                    </p>
                    <p className="text-white font-semibold">
                      ダイナミックマインドコーチとして、あなたの内なる可能性を最大限に引き出すサポートをします。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                      <span className="text-prism-blue">2.</span>
                      実践的な金融知識：現役金融マンが教える本当に役立つお金の話
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      理論だけでなく、現場で培った実践的な知識をお伝えします。
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      日本の学校教育では、お金のことをほとんど教えてくれません。だからこそ、多くの人が大人になってから「お金のことがわからない」「どうすればいいのかわからない」と悩んでいるのです。
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      LUMINOUSでは、学校では教えてくれない金融知識を、わかりやすく丁寧にお伝えします。
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      難しい金融用語を使わず、誰にでもわかる言葉で、すぐに実践できる知識をお届けします。
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      そして、あなた自身が学ぶことで、お子さんにも正しい金融教育を伝えることができるようになります。
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      次の世代に豊かさを繋いでいく、それもLUMINOUSの大切な目標の一つです。
                    </p>
                    <p className="text-white font-semibold mt-4">
                      親子で一緒に金融リテラシーを高め、家族全体で豊かな未来を築いていきましょう。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                      <span className="text-prism-green">3.</span>
                      統合：知識とマインドを行動につなげる
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      知っているだけでは意味がありません。
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      LUMINOUSでは、学んだことを実際の行動に移すためのサポートも行います。
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>個人の価値観に合った資金計画の立て方</li>
                      <li>恐れを乗り越えて一歩を踏み出す方法</li>
                      <li>継続的に学び、成長し続けるコミュニティ作り</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-12 mb-12">
                <h2 className="text-3xl font-bold mb-8 text-white">LUMINOUSコミュニティの特徴</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">安心して学べる環境</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      お金の話は、なかなか人に相談しづらいもの。LUMINOUSでは、お互いを尊重し、支え合える安全な場を提供します。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">一人ひとりに寄り添う</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      「正解」は人それぞれ。あなたの価値観、ライフスタイル、夢に合わせたアドバイスを心がけています。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">継続的な成長</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      一度学んで終わりではなく、継続的に学び、実践し、振り返るサイクルを大切にします。
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-12 mb-12">
                <h2 className="text-3xl font-bold mb-8 text-white">こんな方におすすめです</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                  <li>お金のことを学びたいけど、何から始めればいいかわからない方</li>
                  <li>収入はあるのに、なぜかお金が貯まらない方</li>
                  <li>将来の不安を解消し、自信を持って人生を歩みたい方</li>
                  <li>自分の夢や目標を実現するための具体的な方法を知りたい方</li>
                  <li>お金に対する罪悪感やブロックを手放したい方</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-12">
                <h2 className="text-3xl font-bold mb-6 text-white">最後に：あなたの「秘めたる想い」を輝かせるために</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  お金は、あなたの夢を実現するための強力なツールです。そして、その夢を描き、実現していく力は、あなたの内側にすでに存在しています。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  必要なのは、正しい知識と、自分自身を信じるマインドセット。そして、一歩を踏み出す勇気です。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  LUMINOUSコミュニティで、私たちと一緒に、あなたの「秘めたる想い」を輝きに変えていきませんか？
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  お金の不安から解放され、自分らしい豊かさを手に入れる。<br />
                  そんな未来への第一歩を、今日から始めましょう。
                </p>

                <div className="bg-gradient-to-r from-prism-yellow/10 to-prism-pink/10 rounded-2xl p-8 border border-white/10 mt-8">
                  <p className="text-white font-semibold text-2xl text-center mb-4">
                    あなたの輝きが、世界を照らす光になる。
                  </p>
                  <p className="text-muted-foreground text-center mb-4">
                    LUMINOUSは、そのための場所です。
                  </p>
                  <p className="text-white text-center font-medium">
                    共に学び、共に成長し、共に輝きましょう。
                  </p>
                </div>

                <div className="text-right mt-8">
                  <p className="text-muted-foreground">現役金融マン×ダイナミックマインドコーチ</p>
                  <p className="text-white font-semibold text-lg">リリーより</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">LUMINOUSで学びを深めませんか？</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              金融知識とマインドセットの両面から、あなたの「秘めたる想い」を輝きに変えるサポートをします。
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-white/90 font-bold">
                無料で参加する
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
