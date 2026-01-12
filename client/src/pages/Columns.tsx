import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { ScrollReveal, StaggerContainer } from "@/components/ScrollReveal";
import { TextReveal } from "@/components/TextReveal";
import { motion } from "framer-motion";

export default function Columns() {
  const [filter, setFilter] = useState("All");

  const articles = [
    {
      id: 1,
      category: "Money",
      date: "2025.12.12",
      title: "マネーリテラシー：現役金融マン×ダイナミックマインドコーチが語る、本当の豊かさへの道",
      desc: "お金の知識とマインドセットの両輪があってこそ実現する真の豊かさ。金融の現場で働くプロが、実践的な金融知識と心理学・認知科学を統合したアプローチを語ります。",
      image: "/images/columns-bg.jpg"
    },
    {
      id: 2,
      category: "AI",
      date: "2025.07.11",
      title: "プロンプトエンジニアリング基本のき：\"hello world\" AIとお話しと基本の「き」",
      desc: "「ChatGPTを使ってみたけど、思ったような答えが返ってこない...」そんな経験ありませんか？プログラミング的思考でAIとの対話を劇的に改善する方法。",
      image: "/images/ai-category.jpg"
    },
    {
      id: 3,
      category: "Writing",
      date: "2025.10.10",
      title: "【悪用厳禁？】あなたのnoteが驚くほど読まれる！今日からできる「魔法の誘導投稿」5つのコツ",
      desc: "「渾身のnote記事を書いたのに、全然読まれない…」そんな悩みを解決する、SNSからの誘導投稿テクニックを5つ紹介します。",
      image: "/images/writing-category.jpg"
    }
  ];

  const filteredArticles = filter === "All" ? articles : articles.filter(article => article.category === filter);

  return (
    <div className="pt-24 pb-20">
      <section className="container mb-16">
        <div className="max-w-3xl">
          <ScrollReveal direction="up" delay={0}>
            <span className="text-prism-green font-bold tracking-wider uppercase text-sm mb-4 block">Free Columns</span>
          </ScrollReveal>
          
          <TextReveal className="text-5xl md:text-7xl font-black tracking-tighter mb-6" delay={0.1}>
            Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-prism-green to-prism-blue">Base</span>
          </TextReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              マインドセット、ライティング技術、AI活用法に関する学習コンテンツを無料で公開しています。あなたの活動に役立つヒントを見つけてください。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="container mb-12">
        <ScrollReveal direction="left" delay={0.3}>
          <div className="flex flex-wrap gap-4">
            {["All", "Money", "Writing", "AI"].map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-6 transition-all duration-300 ${
                  filter === cat 
                    ? "bg-white text-black hover:bg-white/90 border-transparent" 
                    : "bg-transparent border-white/20 text-white hover:bg-white/10"
                }`}
                data-magnet
              >
                {cat}
              </Button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Articles Grid */}
      <section className="container">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredArticles.map((article, index) => (
            <motion.div 
              key={article.id}
              layout
              initial={{ opacity: 0, x: -50, rotateY: 15, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, rotateY: -15, scale: 0.9 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{ perspective: 1000 }}
            >
              <Link href={article.id === 1 ? "/columns/money-literacy" : article.id === 2 ? "/columns/ai-basics" : article.id === 3 ? "/columns/note-tips" : "/columns"}>
                <div 
                  className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-prism-cyan/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all duration-500 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      loading="lazy"
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
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
