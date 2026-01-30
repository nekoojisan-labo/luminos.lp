import { Button } from "@/components/ui/button";
import { Check, ArrowRight, CreditCard } from "lucide-react";
import { Link } from "wouter";

export default function Line() {
  return (
    <div className="pt-24 pb-20">
      <section className="container mb-16 text-center">
        <span className="text-prism-green font-bold tracking-wider uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Membership</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-prism-green to-prism-cyan">LUMINOUS</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-pretty">
          LUMINOUSへの参加は、LINE公式アカウントから。登録後すぐに、限定コンテンツと特典を受け取ることができます。
        </p>
      </section>

      <section className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Benefits Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm animate-in fade-in slide-in-from-left-8 duration-700 delay-300">
            <h2 className="text-2xl font-bold mb-6">登録特典</h2>
            <ul className="space-y-4">
              {[
                "有料級コラム「0→1突破ロードマップ」",
                "AIライティング・プロンプト集（厳選10選）",
                "月1回の無料ウェビナー参加権",
                "Discordコミュニティへの招待",
                "最新情報の優先配信"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-prism-green/20 flex items-center justify-center text-prism-green shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code / Action Card */}
          <div className="bg-gradient-to-br from-prism-green/20 to-prism-blue/20 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            <div className="w-48 h-48 bg-white rounded-xl mb-8 flex items-center justify-center">
              {/* Placeholder for QR Code */}
              <div className="text-black font-bold text-lg">QR CODE</div>
            </div>
            <p className="text-lg font-bold mb-2">スマホでスキャンして登録</p>
            <p className="text-sm text-muted-foreground mb-8">または下のボタンをクリック</p>
            
            <a href="https://line.me/R/ti/p/@665edwjz" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size="lg" className="w-full h-14 rounded-full bg-[#06C755] hover:bg-[#05b54c] text-white font-bold text-lg shadow-lg shadow-[#06C755]/20">
                LINEで友だち追加
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 有料メンバーシップセクション */}
      <section className="container mt-20 max-w-4xl">
        <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold mb-6">
            PREMIUM MEMBERSHIP
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            本格的に学びたい方へ
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            全コース・全講座が見放題の有料メンバーシップ。<br />
            講師への直接質問やライブセッションなど、充実のサポート体制。
          </p>
          
          <div className="flex items-baseline justify-center gap-1 mb-8">
            <span className="text-lg text-muted-foreground">月額</span>
            <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ¥5,980
            </span>
            <span className="text-lg text-muted-foreground">（税込）</span>
          </div>

          <Link href="/payment">
            <Button size="lg" className="h-16 px-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 transition-all hover:scale-105">
              <CreditCard className="mr-3 w-6 h-6" />
              有料メンバーシップに申し込む
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
          
          <p className="text-xs text-muted-foreground mt-6">
            ※ PayPalまたはクレジットカードでお支払いいただけます
          </p>
        </div>
      </section>

      <section className="container mt-20 text-center max-w-2xl">
        <h3 className="text-xl font-bold mb-4">よくある質問</h3>
        <div className="space-y-6 text-left">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="font-bold mb-2 text-prism-cyan">Q. 初心者でも大丈夫ですか？</h4>
            <p className="text-muted-foreground text-sm">A. はい、もちろんです。基礎から学べるカリキュラムを用意していますので、安心してご参加ください。</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="font-bold mb-2 text-prism-cyan">Q. 費用はかかりますか？</h4>
            <p className="text-muted-foreground text-sm">A. LINE登録と一部コンテンツは無料です。より深い学びを希望される方向けの有料プラン（月額5,980円）もご用意しています。</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="font-bold mb-2 text-prism-cyan">Q. 有料プランはいつでも解約できますか？</h4>
            <p className="text-muted-foreground text-sm">A. はい、サブスクリプションはいつでもキャンセル可能です。PayPalの管理画面から簡単に解約できます。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
