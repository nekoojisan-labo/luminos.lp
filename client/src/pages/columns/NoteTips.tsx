import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NoteTips() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prism-green/10 border border-prism-green/20 text-prism-green text-xs font-bold mb-6">
            Writing
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
            【悪用厳禁？】あなたのnoteが驚くほど読まれる！<br />
            今日からできる「魔法の誘導投稿」5つのコツ
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <time>2025.10.10</time>
            <span>•</span>
            <span>uru</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
                <p className="text-white leading-relaxed italic mb-3">
                  「渾身のnote記事を書いたのに、全然読まれない…」
                </p>
                <p className="text-white leading-relaxed italic">
                  「Threadsでシェアしても、インプレッションは増えるけど、noteへのアクセスはさっぱり…」
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                そんな悩みを抱えていませんか？
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                こんにちは！元編集者、フリーライターとして活動しているuruです。
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                私自身もnoteを始めた当初は、アクセス解析の数字を見てはため息をつく毎日でした。
              </p>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
                <p className="text-white leading-relaxed italic mb-2">
                  「きっと、私の文章が面白くないんだ…」
                </p>
                <p className="text-white leading-relaxed italic">
                  「有名人でもない限り、読んでもらうなんて無理なのかも…」
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                もし、あなたが同じように感じているなら、それは大きな誤解です！
              </p>

              <p className="text-white font-semibold text-lg mb-6">
                あなたの記事が読まれないのは、決して内容がつまらないからではありません。
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                原因は、SNSでの「伝え方」にほんの少し、改善の余地があるだけかも。
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                実は、読者はあなたのnote記事そのものを「読んでいない」のではなく、その手前にあるSNSの投稿を見て「読むかどうか」を一瞬で判断しています。
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                この記事では、難しいライティング理論は一切なし！
              </p>

              <p className="text-white font-semibold mb-8">
                今日から、いえ、このnoteを読み終えた10分後からすぐに実践できる、読者があなたのnoteを「読みたい！」と思ってくれるような、魔法の誘導投稿の書き方のコツを5つ、厳選してお伝えします。
              </p>

              <p className="text-muted-foreground leading-relaxed mb-12">
                この記事を読み終える頃には、あなたのSNS投稿は劇的に変わり、noteへのアクセス数も目に見えて変化するはずです。
              </p>

              <p className="text-muted-foreground leading-relaxed mb-12">
                ぜひ、最後までお付き合いくださいね。
              </p>

              <div className="border-t border-white/10 pt-12 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">なぜ、「誘導投稿」がnoteの命運を分けるのか？</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  本題に入る前に、少しだけSNSとnoteの関係性についてお話しさせてください。
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  多くの方が、noteの記事を書き上げた後、そのリンクをThreadsに「投稿しました！」の一言でシェアしてしまっています。
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  もちろん、それも一つの方法ですが、<strong className="text-white">非常にもったいない！</strong>
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  考えてみてください。情報の洪水であるSNSのタイムラインで、あなたの投稿が目に留まるのはほんの一瞬です。
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  その一瞬で、読者は「この記事は、自分にとって読む価値があるか？」をシビアに判断しています。
                </p>

                <div className="bg-gradient-to-r from-prism-green/10 to-prism-blue/10 rounded-2xl p-6 border border-white/10 mb-6">
                  <p className="text-white font-semibold mb-3">SNSの役割：</p>
                  <p className="text-muted-foreground mb-4">まだあなたのことを知らない人（未来の読者）に「ここに面白そうな情報がありますよ！」と知らせ、興味を持ってもらう【認知・興味喚起】</p>
                  
                  <p className="text-white font-semibold mb-3">noteの役割：</p>
                  <p className="text-muted-foreground">興味を持ってくれた読者に対して、じっくりと価値ある情報を提供し、あなたのファンになってもらう【価値提供・ファン化】</p>
                </div>

                <p className="text-white font-semibold mb-6">
                  この役割分担を意識することが、全ての始まりです。
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  SNSは、いわばお店の前にいる「呼び込み担当」。呼び込みが魅力的でなければ、いくら店内（note）に素晴らしい商品（記事）を並べていても、お客様は入ってきてはくれませんよね。
                </p>

                <p className="text-white font-semibold text-lg">
                  だからこそ、「誘導投稿」のクオリティが、あなたのnoteの命運を分けると言っても過言ではないのです。
                </p>
              </div>

              <div className="border-t border-white/10 pt-12 mb-12">
                <h2 className="text-3xl font-bold mb-8 text-white">読者の心を掴み、思わずnoteへのリンクをクリックさせてしまう「魔法の誘導投稿」、5つのコツ</h2>
                
                <div className="space-y-12">
                  {/* コツ1 */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                      <span className="text-prism-pink">コツ1：</span>
                      冒頭で「未来」を見せる！ベネフィットの法則
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      人が行動を起こすのは、それによって「得られる未来（ベネフィット）」に魅力を感じた時です。
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      あなたの記事を読むことで、読者の悩みはどのように解決し、どんな素敵な未来が待っているのでしょうか？それを、投稿の一番最初に提示してあげましょう。
                    </p>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-4">
                      <p className="text-red-400 font-semibold mb-3">【よくあるNG例】</p>
                      <p className="text-muted-foreground leading-relaxed">
                        noteを更新しました！今回は「読まれる文章術」について書いています。文章力を上げたい方はぜひ読んでみてください！<br />
                        👉[noteのリンク]
                      </p>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
                      <p className="text-green-400 font-semibold mb-3">【心を掴むOK例】</p>
                      <p className="text-muted-foreground leading-relaxed">
                        もし、あなたの文章で「ありがとう」と言われるようになったら嬉しくないですか？<br />
                        私が実践してたった3ヶ月で「あなたの文章、ファンです！」と言われるようになった、具体的な文章術をnoteにまとめました。小手先のテクニックではありません。<br />
                        👉 [noteのリンク]
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      NG例も悪くはありませんが、「文章力を上げたい人」という漠然としたターゲットにしか響きません。
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      一方、OK例では「ありがとうと言われる」「ファンです！と言われる」という、読者が手に入れられる具体的な未来（ベネフィット）を最初に提示しています。
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      読者は「え、そんな未来が手に入るの？」と、自分ごととして捉え、続きを読むモチベーションが格段にアップするのです。
                    </p>
                  </div>

                  {/* コツ2 */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                      <span className="text-prism-blue">コツ2：</span>
                      「誰の」ための記事かを明確にする！ターゲットの法則
                    </h3>
                    <p className="text-white font-semibold mb-4">
                      「誰にでも読んでほしい」という想いで書いた文章は、悲しいことに誰にも届きません。
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      あなたの記事は、一体「誰」の、どんな悩みを解決するために書いたものですか？
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      投稿文に、その「誰か」を呼びかける一言を入れてみましょう。
                    </p>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-4">
                      <p className="text-red-400 font-semibold mb-3">【よくあるNG例】</p>
                      <p className="text-muted-foreground leading-relaxed">
                        子育てに関するnoteを書きました。<br />
                        子育て中の方はぜひ！<br />
                        👉[noteのリンク]
                      </p>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
                      <p className="text-green-400 font-semibold mb-3">【心を掴むOK例】</p>
                      <p className="text-muted-foreground leading-relaxed">
                        夜泣きで寝不足のママさんへ<br />
                        もしかして「自分の時間が全くない…」と追い詰められていませんか？<br />
                        大丈夫、あなただけじゃありません。<br />
                        私がワンオペ育児で絶望の淵から這い上がった「たった5分で心に余裕を取り戻す方法」をシェアします。<br />
                        👉[noteのリンク]
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      OK例では、「夜泣きで寝不足のママ」「自分の時間がなくて追い詰められている」という、非常に具体的な人物像を想定しています。
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      この投稿を見た当事者は、「え、私のことだ…！」と、強烈に引きつけられます。
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      ターゲットを絞ることは、読者を減らすことではなく、「深く刺さる」読者を増やすことなのです。
                    </p>
                  </div>

                  {/* コツ3 */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                      <span className="text-prism-green">コツ3：</span>
                      数字は正義！具体性の法則
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      「すごく良い」「たくさん」「効果的」といった曖昧な言葉は、残念ながら読者の心に響きません。
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      人間は、具体的な数字に反応しやすい生き物です。あなたの伝えたいことに、数字を入れられないか探してみましょう。
                    </p>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-4">
                      <p className="text-red-400 font-semibold mb-3">【よくあるNG例】</p>
                      <p className="text-muted-foreground leading-relaxed">
                        noteのアクセスアップに効果的な方法をまとめました。<br />
                        これをやれば、たくさんの人に見てもらえます！<br />
                        👉 [noteのリンク]
                      </p>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
                      <p className="text-green-400 font-semibold mb-3">【心を掴むOK例】</p>
                      <p className="text-muted-foreground leading-relaxed">
                        noteのアクセス数が1ヶ月で8倍になった私がやった、たった3つの改善ポイントを解説します。<br />
                        難しいことは一切なし。<br />
                        誰でも明日から真似できる再現性の高い方法だけを厳選しました。<br />
                        👉 [noteのリンク]
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      「1ヶ月で8倍」「3つの改善ポイント」「明日から」という具体的な数字が入ることで、投稿の信頼性と魅力が一気に増しますよね。
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      「この記事を読めば、自分にもできそうだ」「どれくらいの効果があるのか知りたい」と、読者のクリック欲を刺激することができます。
                    </p>
                  </div>

                  {/* コツ4 */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                      <span className="text-prism-yellow">コツ4：</span>
                      結論からズバリ！PREP法の応用
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      SNSのタイムラインは、猛スピードで情報が流れていきます。読者は「この記事、読む価値あるかな？」を0.5秒で判断している、と思ってください。
                    </p>
                    <p className="text-white font-semibold mb-4">
                      起承転結で悠長に語っている暇はありません。
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      ビジネスシーンで使われるPREP法（Point：結論 → Reason：理由 → Example：具体例 → Point：結論）を応用し、投稿の冒頭で「この記事の結論（読むと何がわかるか）」をズバリと提示しましょう。
                    </p>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-4">
                      <p className="text-red-400 font-semibold mb-3">【よくあるNG例】</p>
                      <p className="text-muted-foreground leading-relaxed">
                        最近、働き方について考えることがあって…（長々とした前置き）。そこで、フリーランスという選択肢についてnoteに書いてみました。<br />
                        👉[noteのリンク]
                      </p>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
                      <p className="text-green-400 font-semibold mb-3">【心を掴むOK例】</p>
                      <p className="text-muted-foreground leading-relaxed">
                        結論、会社員がフリーランスを目指すなら、まずやるべきは「実績作り」です。<br />
                        なぜなら、スキルがあっても実績がないと信頼されず、仕事に繋がらないから。<br />
                        私が未経験から単価10万円の案件を獲得できた「具体的な実績作りの3ステップ」をnoteで完全公開します。<br />
                        👉[noteのリンク]
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      OK例では、最初に「結論」を言い切っています。読者は「なるほど、実績作りの話か。詳しく知りたいな」と、その先の情報を能動的に求め始めます。最初にゴールを示すことで、読者は安心してあなたの文章を読み進めてくれるのです。
                    </p>
                  </div>

                  {/* コツ5 */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                      <span className="text-prism-pink">コツ5：</span>
                      問いかけで引き込む！「自分ごと化」の法則
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      一方的な情報発信は、読者にとってただの「情報」でしかありません。しかし、投稿の中に「問いかけ」を入れることで、読者は思わず考え、あなたの投稿を「自分ごと」として捉え始めます。
                    </p>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-4">
                      <p className="text-red-400 font-semibold mb-3">【よくあるNG例】</p>
                      <p className="text-muted-foreground leading-relaxed">
                        読書は自己投資になります。<br />
                        メリットがたくさんあるので、本を読みましょう。<br />
                        おすすめの本をnoteで紹介しています。<br />
                        👉 [noteのリンク]
                      </p>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
                      <p className="text-green-400 font-semibold mb-3">【心を掴むOK例】</p>
                      <p className="text-muted-foreground leading-relaxed">
                        「最近、本を読んでいますか？」<br />
                        もし「読みたいけど時間がない…」と思っているなら、人生の半分を損しているかもしれません。<br />
                        1日たった15分の読書で、年収が2倍になった人もいます。<br />
                        忙しいあなたでも絶対に読み切れる、人生を変えるレベルの3冊を厳選しました。<br />
                        👉 [noteのリンク]
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      「〜ですか？」「〜なんて経験、ありませんか？」という問いかけは、読者の足を止め、自分の頭で考えさせる強力なフックになります。問いかけによって生まれた「なぜだろう？」「私の場合はどうだろう？」という小さな疑問が、答えを求めるクリックへと繋がるのです。
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-12 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">まとめ：ライティング術は魔法の杖ではなく、想いを届ける技術</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  いかがでしたか？今回ご紹介した5つのコツを、もう一度おさらいしましょう。
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-prism-pink font-bold">1.</span>
                    <div>
                      <p className="text-white font-semibold">ベネフィットの法則：</p>
                      <p className="text-muted-foreground">冒頭で、読者が得られる「素敵な未来」を見せる。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-prism-blue font-bold">2.</span>
                    <div>
                      <p className="text-white font-semibold">ターゲットの法則：</p>
                      <p className="text-muted-foreground">「誰の」ための記事かを明確にし、呼びかける。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-prism-green font-bold">3.</span>
                    <div>
                      <p className="text-white font-semibold">具体性の法則：</p>
                      <p className="text-muted-foreground">数字を使って、信頼性と魅力を一気に高める。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-prism-yellow font-bold">4.</span>
                    <div>
                      <p className="text-white font-semibold">PREP法の応用：</p>
                      <p className="text-muted-foreground">結論からズバリと伝え、読む理由を提示する。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-prism-pink font-bold">5.</span>
                    <div>
                      <p className="text-white font-semibold">「自分ごと化」の法則：</p>
                      <p className="text-muted-foreground">問いかけで読者を引き込み、当事者意識を持たせる。</p>
                    </div>
                  </div>
                </div>

                <p className="text-white font-semibold mb-4">
                  これらは、読者を操るための小手先のテクニックではありません。
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  あなたが丹精込めて書いた記事の価値を、必要としている人に、正しく、そして魅力的に届けるための「技術」です。
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  ぜひ、次の投稿から一つでもいいので試してみてください。きっと、今までとは違う読者の反応に驚くはずです。
                </p>
              </div>

              <div className="border-t border-white/10 pt-12">
                <h2 className="text-2xl font-bold mb-6 text-white">【PR】さらに深く学びたいあなたへ</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  今回ご紹介したテクニックは、すぐに実践できる基本的なものばかりです。
                </p>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
                  <p className="text-white leading-relaxed italic mb-2">
                    「もっとアクセスを増やして、自分のファンを作りたい！」
                  </p>
                  <p className="text-white leading-relaxed italic">
                    「noteを収益に繋げるための、具体的な戦略を知りたい！」
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  そんな、本気度の高いあなたのために、さらに踏み込んだこちらもご用意しました。文章と動画で学ぶことができ、さらにここがいちばんの大特典！プロ編集者視点の『note添削』付きです✨
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  まずはこの無料記事で紹介した5つのコツを試し、その効果を実感してみてください。そして、あなたのnoteを次のステージへ進めたいと感じたら、ぜひ扉を叩きに来てくださいね。
                </p>

                <p className="text-white font-semibold">
                  添削によって自分の文章の素敵なところ、自分では気づけなかった苦手な部分や弱い部分を知ることができますよ！
                </p>

                <p className="text-muted-foreground leading-relaxed mt-6">
                  あなたの発信が、それを必要としている多くの人に届くことを、心から応援しています！
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">LUMINOUSで学びを深めませんか？</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              プロ編集者から学ぶライティング術で、あなたの「秘めたる想い」を世界に届けましょう。
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
