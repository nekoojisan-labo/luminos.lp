import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, Play } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const works = [
    { id: 1, title: "Neon Dreams", category: "AI Art", image: "/images/hero-bg.jpg", author: "Member A", type: "image" },
    { id: 2, title: "Mind Flow", category: "Graphic", image: "/images/mind-category.jpg", author: "Member B", type: "image" },
    { id: 3, title: "Cyber City", category: "AI Art", image: "/images/ai-category.jpg", author: "Member C", type: "image" },
    { id: 4, title: "Golden Pen", category: "Photo", image: "/images/writing-category.jpg", author: "Member D", type: "image" },
    { id: 5, title: "Abstract Waves", category: "Graphic", image: "/images/columns-bg.jpg", author: "Member E", type: "image" },
    { id: 6, title: "Prism Light", category: "AI Art", image: "/images/hero-bg.jpg", author: "Member F", type: "image" },
    { id: 7, title: "Network Loop", category: "Motion", image: "/images/abstract-network.mp4", author: "Member G", type: "video" },
  ];

  const filteredWorks = filter === "All" ? works : works.filter(work => work.category === filter);

  return (
    <div className="pt-24 pb-20">
      <section className="container mb-16 text-center">
        <span className="text-prism-magenta font-bold tracking-wider uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Showcase</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Member's <span className="text-transparent bg-clip-text bg-gradient-to-r from-prism-magenta to-prism-cyan">Gallery</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-pretty">
          LUMINOUSメンバーが制作した作品の数々。AIアート、グラフィックデザイン、写真、動画など、多様な表現が集まる場所。
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="container mb-12">
        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {["All", "AI Art", "Graphic", "Photo", "Motion"].map((cat) => (
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

      {/* Gallery Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <Dialog key={work.id}>
              <DialogTrigger asChild>
                <div 
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 animate-in fade-in zoom-in-95 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {work.type === "video" ? (
                    <video 
                      src={work.image} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      muted
                      loop
                      playsInline
                      onMouseOver={(e) => e.currentTarget.play()}
                      onMouseOut={(e) => e.currentTarget.pause()}
                    />
                  ) : (
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-prism-cyan text-xs font-bold uppercase tracking-wider mb-2">{work.category}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{work.title}</h3>
                    <p className="text-sm text-white/70">by {work.author}</p>
                    <div className="mt-4 p-2 rounded-full bg-white/10 text-white">
                      {work.type === "video" ? <Play className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black/90 border-white/10 p-0 overflow-hidden">
                <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                  {work.type === "video" ? (
                    <video 
                      src={work.image} 
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                    />
                  ) : (
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                <div className="p-6 bg-background">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{work.title}</h3>
                      <p className="text-muted-foreground">Created by {work.author}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium border border-white/10">
                      {work.category}
                    </span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </div>
  );
}
