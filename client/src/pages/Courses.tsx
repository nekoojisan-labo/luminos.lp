import { Button } from "@/components/ui/button";
import { Check, PlayCircle, FileText, Users, Clock } from "lucide-react";
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
            3名の専門講師による、メンタル・ライティング・AI活用の総合的な学習プログラム。基礎から応用まで、体系的に学べるカリキュラムを用意しています。
          </p>
        </div>
      </section>

      {/* Course List */}
      <section className="container space-y-32">
        {/* Course 1: Mindset */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-prism-magenta/20 blur-3xl rounded-full"></div>
            <img 
              src="/images/mind-category.jpg" 
              alt="Mindset Course" 
              className="relative rounded-2xl border border-white/10 shadow-2xl w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prism-magenta/10 border border-prism-magenta/20 text-prism-magenta text-xs font-bold mb-6">
              Foundation
            </div>
            <h2 className="text-4xl font-bold mb-6">Mindset Master Class</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              副業や創作活動を継続するための土台となるマインドセットを構築します。自己理解を深め、目標設定から日々の習慣化までをサポート。「なぜやるのか」を明確にし、迷いのない行動力を手に入れます。
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "自己肯定感を高めるワーク",
                "挫折しない目標設定（OKR/SMART）",
                "時間の使い方と習慣化の技術",
                "アンガーマネジメントと感情コントロール"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-prism-magenta/20 flex items-center justify-center text-prism-magenta shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4" />
                <span>動画講義 12本</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>合計 3.5時間</span>
              </div>
            </div>
          </div>
        </div>

        {/* Course 2: Writing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prism-cyan/10 border border-prism-cyan/20 text-prism-cyan text-xs font-bold mb-6">
              Skill
            </div>
            <h2 className="text-4xl font-bold mb-6">Writing & Expression</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              あなたの想いや知識を、読者に届く言葉に変換する技術を学びます。基礎的な文章構成から、セールスライティング、ストーリーテリングまで。「書くこと」を通じて、ファンを作り、信頼を築く力を養います。
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "読まれる文章の型（PREP法など）",
                "共感を生むストーリーテリング",
                "SEOライティングの基礎",
                "SNSでの発信戦略とプロフィール作成"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-prism-cyan/20 flex items-center justify-center text-prism-cyan shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4" />
                <span>動画講義 18本</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>ワークシート付</span>
              </div>
            </div>
          </div>
          <div className="relative order-2">
            <div className="absolute -inset-4 bg-prism-cyan/20 blur-3xl rounded-full"></div>
            <img 
              src="/images/writing-category.jpg" 
              alt="Writing Course" 
              className="relative rounded-2xl border border-white/10 shadow-2xl w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>

        {/* Course 3: AI Creative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-prism-green/20 blur-3xl rounded-full"></div>
            <img 
              src="/images/ai-category.jpg" 
              alt="AI Course" 
              className="relative rounded-2xl border border-white/10 shadow-2xl w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prism-green/10 border border-prism-green/20 text-prism-green text-xs font-bold mb-6">
              Technology
            </div>
            <h2 className="text-4xl font-bold mb-6">AI Creative Lab</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              ChatGPTやMidjourneyなどの生成AIツールを使いこなし、制作効率とクオリティを飛躍的に向上させる方法を学びます。プロンプトエンジニアリングの基礎から、実践的な活用事例まで。
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "ChatGPTによる壁打ち・アイデア出し",
                "Midjourneyでの画像生成テクニック",
                "AIを使ったブログ記事作成フロー",
                "最新AIツールの活用事例紹介"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-prism-green/20 flex items-center justify-center text-prism-green shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4" />
                <span>動画講義 15本</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>プロンプト集配布</span>
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
          <Link href="/line">
            <Button size="lg" className="h-14 px-10 rounded-full bg-white text-black hover:bg-white/90 font-bold">
              メンバーシップ詳細を見る
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
