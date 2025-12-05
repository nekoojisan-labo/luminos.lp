import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

export default function Gallery() {
  const works = [
    { id: 1, title: "Pink Dream", image: "/images/gallery-pink-hair-cat.jpeg", author: "Member A" },
    { id: 2, title: "Ballet Practice", image: "/images/gallery-ballet-studio.jpeg", author: "Member B" },
    { id: 3, title: "Cosmic Journey", image: "/images/gallery-scifi-planet.jpeg", author: "Member C" },
    { id: 4, title: "Midnight Cat", image: "/images/gallery-black-cat-illustration.jpeg", author: "Member D" },
    { id: 5, title: "Moon Monk", image: "/images/gallery-moon-monk.jpeg", author: "Member E" },
    { id: 6, title: "Dark Knights", image: "/images/gallery-dark-knights.jpeg", author: "Member F" },
    { id: 7, title: "Emergency", image: "/images/gallery-emergency.jpeg", author: "Member G" },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="container mb-16 text-center">
        <span className="text-prism-magenta font-bold tracking-wider uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Showcase</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          AI Art <span className="text-transparent bg-clip-text bg-gradient-to-r from-prism-magenta to-prism-cyan">Gallery</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-pretty">
          LUMINOUSメンバーが制作したAIアート作品の数々。創造性と技術が融合した、新しい表現の世界。
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <Dialog key={work.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 animate-in fade-in zoom-in-95 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-prism-cyan text-xs font-bold uppercase tracking-wider mb-2">AI Art</span>
                    <h3 className="text-xl font-bold text-white mb-1">{work.title}</h3>
                    <p className="text-sm text-white/70">by {work.author}</p>
                    <div className="mt-4 p-2 rounded-full bg-white/10 text-white">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black/90 border-white/10 p-0 overflow-hidden">
                <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 bg-background">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{work.title}</h3>
                      <p className="text-muted-foreground">Created by {work.author}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium border border-white/10">
                      AI Art
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
