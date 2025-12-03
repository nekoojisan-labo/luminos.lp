import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

export default function Columns() {
  const [filter, setFilter] = useState("All");

  const articles = [
    {
      id: 1,
      category: "AI",
      date: "2025.07.11",
      title: "\"hello world\" AIとお話しと基本の「き」",
      desc: "「ChatGPTを使ってみたけど、思ったような答えが返ってこない...」そんな経験ありませんか？プログラミング的思考でAIとの対話を劇的に改善する方法。",
      image: "/images/ai-category.jpg"
    },
    {
      id: 2,
      category: "Writing",
      date: "2024.11.28",
      title: "読まれる文章の書き方・基礎編",
      desc: "プロの編集者が教える、読者を引き込む文章テクニック。文章構成の基本から実践的なコツまで。",
      image: "/images/writing-category.jpg"
    },
    {
      id: 3,
      category: "AI",
      date: "2024.11.25",
      title: "ChatGPTを使った効率的なライティング",
      desc: "AIをライティングパートナーとして活用する方法。プロンプトの書き方から、アウトプットの質を高めるコツまで。",
      image: "/images/ai-category.jpg"
    },
    {
      id: 4,
      category: "AI",
      date: "2024.11.22",
      title: "Midjourneyで作る印象的なビジュアル",
      desc: "AI画像生成ツールMidjourneyの基本的な使い方。プロンプトの構造とパラメータ調整の実践ガイド。",
      image: "/images/hero-bg.jpg"
    },
    {
      id: 5,
      category: "Mind",
      date: "2024.11.20",
      title: "目標達成のフレームワーク",
      desc: "漠然とした目標を具体的なアクションに落とし込む方法。SMARTゴール設定とOKRの活用法。",
      image: "/images/columns-bg.jpg"
    },
    {
      id: 6,
      category: "Writing",
      date: "2024.11.18",
      title: "SEOライティングの基礎",
      desc: "検索エンジンに評価される文章の書き方。キーワード選定からメタディスクリプションまで。",
      image: "/images/writing-category.jpg"
    }
  ];

  const filteredArticles = filter === "All" ? articles : articles.filter(article => article.category === filter);

  return (
    <div className="pt-24 pb-20">
      <section className="container mb-16">
        <div className="max-w-3xl">
          <span className="text-prism-green font-bold tracking-wider uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Free Columns</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-prism-green to-prism-blue">Base</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-pretty">
            マインドセット、ライティング技術、AI活用法に関する学習コンテンツを無料で公開しています。あなたの活動に役立つヒントを見つけてください。
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="container mb-12">
        <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {["All", "Mind", "Writing", "AI"].map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-6 ${
                filter === cat 
                  ? "bg-white text-black hover:bg-white/90 border-transparent" 
                  : "bg-transparent border-white/20 text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Link key={article.id} href={article.id === 1 ? "/columns/ai-basics" : "/columns"}>
              <div 
                className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-prism-cyan/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold border border-white/10">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-muted-foreground mb-3">{article.date}</div>
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-prism-cyan transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {article.desc}
                  </p>
                  <div className="text-sm font-bold text-prism-cyan flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
