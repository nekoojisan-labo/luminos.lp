import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-prism-red mb-8 animate-pulse">
        <AlertTriangle className="w-10 h-10" />
      </div>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-prism-red to-prism-magenta">
        404
      </h1>
      <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-10 text-pretty">
        お探しのページは見つかりませんでした。URLが間違っているか、ページが移動・削除された可能性があります。
      </p>
      <Link href="/">
        <Button size="lg" className="rounded-full px-8">
          ホームに戻る
        </Button>
      </Link>
    </div>
  );
}
