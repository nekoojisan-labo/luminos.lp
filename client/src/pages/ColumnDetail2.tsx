import { useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, Clock, Tag, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ColumnDetail2() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Header */}
      <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <img 
          src="/images/writing-category.jpg" 
          alt="Writing Column" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12">
          <div className="container max-w-4xl mx-auto">
            <Badge className="mb-4 bg-prism-magenta/20 text-prism-magenta hover:bg-prism-magenta/30 border-prism-magenta/50 backdrop-blur-md">
              Writing
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">
              【悪用厳禁？】あなたのnoteが驚くほど読まれる！今日からできる「魔法の誘導投稿」5つのコツ
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>2025.10.10</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                <span>SNS運用</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                <span>ライティング</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-3xl mx-auto px-6 mt-12">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            「渾身のnote記事を書いたのに、全然読まれない…」<br />
            「Threadsでシェアしても、インプレッションは増えるけど、noteへのアクセスはさっぱり…」<br />
            そんな悩みを抱えていませんか？
          </p>

          <p>
            この記事では、難しいライティング理論は一切なし！<br />
            この記事を読み終える頃には、あなたのSNS投稿は劇的に変わり、noteへのアクセス数も目に見えて変化するはずです。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-prism-magenta border-l-4 border-prism-magenta pl-4">
            なぜ、「誘導投稿」がnoteの命運を分けるのか？
          </h2>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-8">
            <p className="mb-4">
              <strong className="text-prism-cyan">SNSの役割：</strong><br />
              まだあなたのことを知らない人（未来の読者）に「ここに面白そうな情報がありますよ！」と知らせ、興味を持ってもらう【認知・興味喚起】
            </p>
            <p>
              <strong className="text-prism-magenta">noteの役割：</strong><br />
              興味を持ってくれた読者に対して、じっくりと価値ある情報を提供し、あなたのファンになってもらう【価値提供・ファン化】
            </p>
          </div>

          <p>
            この役割分担を意識することが、全ての始まりです。<br />
            SNSは、いわばお店の前にいる「呼び込み担当」。呼び込みが魅力的でなければ、いくら店内（note）に素晴らしい商品（記事）を並べていても、お客様は入ってきてはくれませんよね。
          </p>

          <p className="font-bold text-lg my-6">
            だからこそ、「誘導投稿」のクオリティが、あなたのnoteの命運を分けると言っても過言ではないのです。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-prism-magenta border-l-4 border-prism-magenta pl-4">
            読者の心を掴み、思わずnoteへのリンクをクリックさせてしまう「魔法の誘導投稿」、5つのコツ
          </h2>

          <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2">
            <span className="bg-prism-magenta text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            冒頭で「未来」を見せる！ベネフィットの法則
          </h3>
          
          <p>
            人が行動を起こすのは、それによって「得られる未来（ベネフィット）」に魅力を感じた時です。あなたの記事を読むことで、読者の悩みはどのように解決し、どんな素敵な未来が待っているのでしょうか？<br />
            それを、投稿の一番最初に提示してあげましょう。
          </p>

          <div className="bg-prism-magenta/10 border border-prism-magenta/30 p-6 rounded-xl my-6">
            <h4 className="font-bold text-prism-magenta mb-2">【心を掴むOK例】</h4>
            <p className="italic text-muted-foreground">
              もし、あなたの文章で「ありがとう」と言われるようになったら嬉しくないですか？<br />
              私が実践してたった3ヶ月で「あなたの文章、ファンです！」と言われるようになった、具体的な文章術をnoteにまとめました。小手先のテクニックではありません。<br />
              👉 [noteのリンク]
            </p>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2">
            <span className="bg-prism-magenta text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
            「誰の」ための記事かを明確にする！ターゲットの法則
          </h3>

          <p>
            「誰にでも読んでほしい」という想いで書いた文章は、悲しいことに誰にも届きません。<br />
            あなたの記事は、一体「誰」の、どんな悩みを解決するために書いたものですか？<br />
            投稿文に、その「誰か」を呼びかける一言を入れてみましょう。
          </p>

          <div className="bg-prism-magenta/10 border border-prism-magenta/30 p-6 rounded-xl my-6">
            <h4 className="font-bold text-prism-magenta mb-2">【心を掴むOK例】</h4>
            <p className="italic text-muted-foreground">
              夜泣きで寝不足のママさんへ<br />
              もしかして「自分の時間が全くない…」と追い詰められていませんか？<br />
              大丈夫、あなただけじゃありません。<br />
              私がワンオペ育児で絶望の淵から這い上がった「たった5分で心に余裕を取り戻す方法」をシェアします。<br />
              👉 [noteのリンク]
            </p>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2">
            <span className="bg-prism-magenta text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
            数字は正義！具体性の法則
          </h3>

          <p>
            「すごく良い」「たくさん」「効果的」といった曖昧な言葉は、残念ながら読者の心に響きません。<br />
            人間は、具体的な数字に反応しやすい生き物です。<br />
            あなたの伝えたいことに、数字を入れられないか探してみましょう。
          </p>

          <div className="bg-prism-magenta/10 border border-prism-magenta/30 p-6 rounded-xl my-6">
            <h4 className="font-bold text-prism-magenta mb-2">【心を掴むOK例】</h4>
            <p className="italic text-muted-foreground">
              noteのアクセス数が1ヶ月で8倍になった私がやった、たった3つの改善ポイントを解説します。<br />
              難しいことは一切なし。<br />
              誰でも明日から真似できる再現性の高い方法だけを厳選しました。<br />
              👉 [noteのリンク]
            </p>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2">
            <span className="bg-prism-magenta text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
            結論からズバリ！PREP法の応用
          </h3>

          <p>
            SNSのタイムラインは、猛スピードで情報が流れていきます。<br />
            読者は「この記事、読む価値あるかな？」を0.5秒で判断している、と思ってください。
          </p>

          <div className="bg-prism-magenta/10 border border-prism-magenta/30 p-6 rounded-xl my-6">
            <h4 className="font-bold text-prism-magenta mb-2">【心を掴むOK例】</h4>
            <p className="italic text-muted-foreground">
              結論、会社員がフリーランスを目指すなら、まずやるべきは「実績作り」です。<br />
              なぜなら、スキルがあっても実績がないと信頼されず、仕事に繋がらないから。<br />
              私が未経験から単価10万円の案件を獲得できた「具体的な実績作りの3ステップ」をnoteで完全公開します。<br />
              👉 [noteのリンク]
            </p>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2">
            <span className="bg-prism-magenta text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
            問いかけで引き込む！「自分ごと化」の法則
          </h3>

          <p>
            「最近、本を読んでいますか？」<br />
            もし「読みたいけど時間がない…」と思っているなら、人生の半分を損しているかもしれません。<br />
            1日たった15分の読書で、年収が2倍になった人もいます。<br />
            忙しいあなたでも絶対に読み切れる、人生を変えるレベルの3冊を厳選しました。<br />
            👉 [noteのリンク]
          </p>

        </div>

        <Separator className="my-12 bg-white/10" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Button 
            variant="outline" 
            onClick={() => setLocation("/columns")}
            className="group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            コラム一覧に戻る
          </Button>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-prism-magenta/10 hover:text-prism-magenta">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-prism-cyan/10 hover:text-prism-cyan">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button className="bg-gradient-to-r from-prism-magenta to-prism-purple hover:opacity-90 text-white border-0">
              この記事をシェアする
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
