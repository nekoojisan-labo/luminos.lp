import { useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        style: {
          shape: string;
          color: string;
          layout: string;
          label: string;
        };
        createSubscription: (data: unknown, actions: {
          subscription: {
            create: (config: { plan_id: string }) => Promise<string>;
          };
        }) => Promise<string>;
        onApprove: (data: { subscriptionID: string }, actions: unknown) => void;
      }) => {
        render: (selector: string) => void;
      };
    };
  }
}

export default function Payment() {
  useEffect(() => {
    // PayPal SDKを動的に読み込む
    const existingScript = document.querySelector('script[src*="paypal.com/sdk"]');
    if (existingScript) {
      // 既にスクリプトがある場合はボタンをレンダリング
      renderPayPalButton();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=Aeb6qoyt2xkNWhTZHHAFakWjQ-plWu5sPmynwG4e6IGJ8CAw5z4IaDFdIaJ1TJaFD7d1nKf9EUYQnbI0&vault=true&intent=subscription";
    script.setAttribute("data-sdk-integration-source", "button-factory");
    script.async = true;
    script.onload = () => {
      renderPayPalButton();
    };
    document.body.appendChild(script);

    return () => {
      // クリーンアップ時にボタンコンテナをクリア
      const container = document.getElementById("paypal-button-container-P-5RD596030U921994WNF3UABY");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  const renderPayPalButton = () => {
    const container = document.getElementById("paypal-button-container-P-5RD596030U921994WNF3UABY");
    if (!container || !window.paypal) return;
    
    // 既にボタンがレンダリングされている場合はスキップ
    if (container.children.length > 0) return;

    window.paypal.Buttons({
      style: {
        shape: "pill",
        color: "gold",
        layout: "vertical",
        label: "subscribe"
      },
      createSubscription: function(_data, actions) {
        return actions.subscription.create({
          plan_id: "P-5RD596030U921994WNF3UABY"
        });
      },
      onApprove: function(data) {
        // 成功時の処理
        alert("サブスクリプションが完了しました！\nサブスクリプションID: " + data.subscriptionID);
        // ここで成功ページへリダイレクトなどの処理を追加可能
      }
    }).render("#paypal-button-container-P-5RD596030U921994WNF3UABY");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ヒーローセクション */}
      <section className="relative py-32 overflow-hidden">
        {/* 背景エフェクト */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              >
                MEMBERSHIP
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                  LUMINOUSに参加する
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
                メンタル・ライティング・AI。3つの要素を掛け合わせ、<br />
                あなたの内なる価値を世界へ届けるためのクリエイティブコミュニティ。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-lg mx-auto">
              {/* プランカード */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-card/50 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden"
              >
                {/* グラデーションボーダー */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 pointer-events-none" />
                
                <div className="relative p-8 md:p-10">
                  {/* プラン名 */}
                  <div className="text-center mb-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold mb-4">
                      STANDARD PLAN
                    </span>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-lg text-foreground/60">¥</span>
                      <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        5,980
                      </span>
                      <span className="text-lg text-foreground/60">/月</span>
                    </div>
                    <p className="text-sm text-foreground/50">（税込）</p>
                  </div>

                  {/* 特典リスト */}
                  <ul className="space-y-4 mb-10">
                    {[
                      "全コース・全講座が見放題",
                      "オンラインラウンジへの参加",
                      "メンバー限定コミュニティ",
                      "講師への質問・相談",
                      "月1回のライブセッション",
                      "メンバー限定イベント参加権"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* PayPalボタン */}
                  <div className="space-y-4">
                    <div id="paypal-button-container-P-5RD596030U921994WNF3UABY" className="min-h-[150px]" />
                    <p className="text-center text-xs text-foreground/40">
                      PayPalアカウントまたはクレジットカードでお支払いいただけます
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 注意事項 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 text-center text-sm text-foreground/50 space-y-2"
              >
                <p>※ サブスクリプションはいつでもキャンセル可能です</p>
                <p>※ 決済はPayPalの安全なシステムで処理されます</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* サポートセクション */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">ご不明な点がございましたら</h2>
              <p className="text-foreground/60 mb-6">
                決済やサービスについてご質問がある場合は、<br />
                お気軽に公式LINEからお問い合わせください。
              </p>
              <a
                href="https://lin.ee/yourlinelink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#06C755] hover:bg-[#05b04c] text-white rounded-full font-medium transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                LINEでお問い合わせ
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
