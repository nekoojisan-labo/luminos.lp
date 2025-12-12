import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

export default function ColumnDetail() {
  return (
    <div className="pt-24 pb-20">
      {/* Article Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/ai-column-bg.png" 
            alt="AI Article" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <Link href="/columns">
            <Button variant="ghost" className="mb-8 text-white/70 hover:text-white hover:bg-white/10 pl-0">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Columns
            </Button>
          </Link>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-prism-green/20 text-prism-green text-xs font-bold border border-prism-green/20 flex items-center gap-1">
              <Tag className="w-3 h-3" /> AI
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium flex items-center gap-1">
              <Calendar className="w-3 h-3" /> 2025.07.11
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" /> 10 min read
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
            "hello world"
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-white/90 leading-snug text-balance">
            AIとお話しと基本の「き」
          </h2>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
              <img src="/images/hero-bg.jpg" alt="Author" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-sm">nekoojisan</div>
              <div className="text-xs text-muted-foreground">AI Creator / Luminous Lecturer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container max-w-3xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-12">
            「ChatGPTを使ってみたけど、思ったような答えが返ってこない...」「プロンプトエンジニアリングって難しそう...」そんな経験、ありませんか？実は、多くの人がつまずくのは、プロンプトの書き方ではなく、その前段階なんです。
          </p>

          <p>
            コンピューターがどんな風に「考えて」いるかを知らずに、いきなりプロンプトエンジニアリングを始めるのは、地図を持たずに知らない街を歩くようなもの。
          </p>

          <p>
            今回は、プログラミングの超基礎を通して、AIとうまく付き合うための「設計準備の考え方」をお教えします。
          </p>

          <p>
            プログラミング経験はゼロでも大丈夫。日常会話のような親しみやすい内容で、「なるほど、そういうことか！」と腹に落ちる体験をしていただけると思います。
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-8 text-prism-cyan">コンピューターとの「会話」とは何か</h2>
          
          <h3 className="text-2xl font-bold mt-12 mb-6">人間同士の会話 vs コンピューターとの会話</h3>
          
          <p>
            まず、普段の人間同士の会話を思い出してみてください。
          </p>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10 my-6">
            <p className="text-white leading-relaxed mb-2">友人との会話例：</p>
            <p className="text-muted-foreground">あなた：「今度の土曜日、どこか行こうか」</p>
            <p className="text-muted-foreground">友人：「いいね！映画でも見る？」</p>
          </div>
          <p>
            この短いやり取りで、友人は以下のことを「察して」くれています：
          </p>
          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>「どこか」= 娯楽施設</li>
            <li>時間帯は昼間か夜</li>
            <li>予算はそれなりの範囲</li>
            <li>お互いの好みを考慮</li>
          </ul>
          <p>
            すごいですよね。
          </p>

          <p>
            たった一言で、これだけの情報を推測してくれるんです。
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-6">コンピューターが本当に理解できるのは「0」と「1」だけ</h3>
          
          <p>
            実は、コンピューターが本当に理解できるのは、「0」と「1」の組み合わせだけなんです。
          </p>

          <p>
            例えば、「Hello」という5文字をコンピューターはこんな風に認識しています：
          </p>
          <div className="bg-black/50 p-6 rounded-xl border border-white/10 font-mono text-sm my-6">
            H → 01001000<br />
            e → 01100101<br />
            l → 01101100<br />
            l → 01101100<br />
            o → 01101111
          </div>
          <p>
            「なんじゃこりゃ？」って感じですよね。
          </p>

          <p>
            でも、これがコンピューターの「母国語」なんです。
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-8 text-prism-cyan">AIも同じ仕組みで動いている</h2>
          
          <p>
            ChatGPTなどのAIも、基本的には同じ仕組みで動いています。
          </p>

          <p>
            あなたが入力した日本語は、以下のようなプロセスを経て処理されます：
          </p>
          <ol className="list-decimal pl-6 space-y-2 my-6">
            <li>トークン化（単語や文字の単位に分解）</li>
            <li>数値化（それぞれに数字を割り当て）</li>
            <li>ベクトル変換（多次元の数値データに変換）</li>
            <li>計算処理（膨大な行列計算）</li>
            <li>逆変換（数値から文字へ戻す）</li>
          </ol>
          <p>
            つまり、AIとの会話も「翻訳」を前提としているんです。
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-8 text-prism-cyan">なぜニュアンスが伝わらないのか</h2>
          
          <p>
            この違いには、深い理由があります。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-prism-magenta">人間の言葉（自然言語）の特徴</h4>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>文脈依存：「あれ取って」で通じる</li>
                <li>感情表現：「ちょっと...」で困惑を表現</li>
                <li>省略が多い：主語や目的語を省く</li>
                <li>曖昧さ許容：「いい感じに」でも通じる</li>
              </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="font-bold text-lg mb-4 text-prism-cyan">機械言語の特徴</h4>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>文脈非依存：全てを明示的に指定</li>
                <li>感情なし：論理と数値のみ</li>
                <li>省略禁止：全てを正確に記述</li>
                <li>曖昧さ排除：1つの指示に1つの意味</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-8 text-prism-cyan">実際の例で見る「翻訳」の必要性</h2>
          
          <p>
            「今度の企画、どう思う？」とAIに聞くと、AIは困ってしまいます。
          </p>

          <p>
            「どの企画？」「何を評価したい？」「どんな観点で？」と。
          </p>

          <p>
            AIが理解できる形に「翻訳」すると、こうなります：
          </p>
          <div className="bg-black/50 p-6 rounded-xl border border-white/10 my-6">
            <p className="font-bold mb-4">以下の新商品企画について、実現可能性の観点で評価してください：</p>
            <p className="mb-2">【企画概要】</p>
            <ul className="list-disc pl-6 mb-4 text-sm">
              <li>商品名：スマート調理器具「クックアシスト」</li>
              <li>ターゲット：30-40代の共働き世帯</li>
              <li>価格：15万円</li>
              <li>主要機能：AI調理サポート、栄養管理</li>
            </ul>
            <p className="mb-2">【評価項目】</p>
            <ul className="list-disc pl-6 mb-4 text-sm">
              <li>技術的実現可能性</li>
              <li>市場ニーズの存在</li>
              <li>競合との差別化</li>
              <li>収益性の見通し</li>
            </ul>
          </div>
          <p>
            この「翻訳」作業こそが、AI活用の鍵なんです。
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-8 text-prism-cyan">設計準備の考え方</h2>
          
          <p>
            プログラマーが複雑な問題に取り組むとき、必ずやるのが「分解」です。
          </p>

          <p>
            例えば、「ECサイトを作る」という大きなタスクを、「ユーザー登録」「商品表示」「決済機能」といった小さな部品に分けて、一つずつ解決していきます。
          </p>

          <p>
            この「分解思考」は、普通の仕事でも威力を発揮します。
          </p>

          <p>
            「売上を上げたい」という漠然とした課題も、以下のように分解すると「何をすべきか」が明確になります。
          </p>
          <div className="bg-gradient-to-r from-prism-blue/10 to-prism-cyan/10 p-8 rounded-xl border border-prism-cyan/20 my-8">
            <h4 className="font-bold text-lg mb-4">売上アップの分解思考</h4>
            <ul className="space-y-4">
              <li>
                <span className="font-bold text-prism-cyan">1. 現状分析</span>
                <p className="text-sm text-muted-foreground mt-1">現在の売上は？主要な売上源は？傾向は？</p>
              </li>
              <li>
                <span className="font-bold text-prism-cyan">2. 要因分解</span>
                <p className="text-sm text-muted-foreground mt-1">売上 = 客数 × 客単価。客数を増やすには？単価を上げるには？</p>
              </li>
              <li>
                <span className="font-bold text-prism-cyan">3. 具体的施策</span>
                <p className="text-sm text-muted-foreground mt-1">新規獲得、リピート率向上、クロスセル...</p>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-8 text-prism-cyan">まとめ</h2>
          
          <p>
            プログラミング的思考（分解、条件分岐、ループ）を取り入れることで、AIへの指示出し（プロンプトエンジニアリング）だけでなく、日常の業務改善や問題解決の質も劇的に向上します。
          </p>

          <p>
            まずは、目の前の課題を「分解」することから始めてみませんか？
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-prism-blue/20 to-prism-magenta/20 border border-white/10 text-center">
          <h3 className="text-2xl font-bold mb-4">もっと詳しく学びたい方へ</h3>
          <p className="text-muted-foreground mb-8">
            LUMINOUSでは、AI活用だけでなく、それを支えるマインドセットやライティング技術も総合的に学べます。
          </p>
          <Link href="/line">
            <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90 font-bold">
              LINEで無料情報をゲット
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
