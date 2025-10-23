# 🤝 CONTRIBUTING GUIDE - 貢献ガイド

このドキュメントは、**LUMINOSウェブサイトをカスタマイズ・改善したい方向けのガイド**です。

---

## 📋 目次

1. [はじめに](#はじめに)
2. [開発環境のセットアップ](#開発環境のセットアップ)
3. [コーディング規約](#コーディング規約)
4. [カスタマイズ方法](#カスタマイズ方法)
5. [プルリクエストの作成](#プルリクエストの作成)
6. [バグ報告](#バグ報告)

---

## 👋 はじめに

LUMINOSプロジェクトへの貢献に興味を持っていただき、ありがとうございます！

このガイドでは、プロジェクトへの貢献方法を説明します。

### 貢献の種類

- 🐛 **バグ報告** - 問題を見つけたら報告
- 💡 **機能提案** - 新しいアイデアを提案
- 📝 **ドキュメント改善** - 説明をわかりやすく
- 🎨 **デザイン改善** - UIの改善
- 🔧 **コード改善** - バグ修正や機能追加

---

## ⚙️ 開発環境のセットアップ

詳細は **[SETUP.md](SETUP.md)** を参照してください。

### クイックスタート

```bash
# 1. リポジトリをフォーク（GitHubのUIで）

# 2. フォークをクローン
git clone https://github.com/[あなたのユーザー名]/luminos-website.git
cd luminos-website

# 3. ローカルサーバーを起動
python -m http.server 8000

# 4. ブラウザで確認
# http://localhost:8000
```

---

## 📜 コーディング規約

### HTML

#### インデント
- **2スペース**を使用
- タブは使用しない

#### セマンティックHTML
- 適切なタグを使用（`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`など）
- `<div>`の乱用を避ける

#### 例

```html
<!-- Good ✅ -->
<section class="py-20 px-4">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold">タイトル</h2>
    <p class="text-gray-600">本文</p>
  </div>
</section>

<!-- Bad ❌ -->
<div class="py-20 px-4">
<div class="container mx-auto">
<div class="text-4xl font-bold">タイトル</div>
<div class="text-gray-600">本文</div>
</div>
</div>
```

---

### CSS（Tailwind）

#### クラス名の順序

1. レイアウト（`flex`, `grid`, `block`など）
2. サイズ（`w-`, `h-`, `p-`, `m-`など）
3. 見た目（`bg-`, `text-`, `border-`など）
4. その他（`hover:`, `transition`など）

#### 例

```html
<!-- Good ✅ -->
<button class="flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition">
  クリック
</button>

<!-- Bad ❌ -->
<button class="text-white bg-primary hover:bg-primary-dark rounded-full px-6 transition py-3 flex items-center">
  クリック
</button>
```

---

### JavaScript

#### コーディングスタイル
- **2スペース**インデント
- セミコロンを使用
- シングルクォート（`'`）を優先

#### 関数名
- キャメルケース（`camelCase`）を使用
- 動詞で始める（`toggleAccordion`, `handleClick`など）

#### 例

```javascript
// Good ✅
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  content.classList.toggle('active');
}

// Bad ❌
function Toggle_Accordion(button)
{
    var content=button.nextElementSibling
    content.classList.toggle('active')
}
```

---

### コミットメッセージ

#### フォーマット

```
<type>: <subject>

<body>（オプション）
```

#### Type（種類）

- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント変更
- `style`: コードスタイル変更（動作に影響なし）
- `refactor`: リファクタリング
- `test`: テスト追加・修正
- `chore`: その他（ビルド、設定など）

#### 例

```bash
# Good ✅
git commit -m "feat: Add testimonials section"
git commit -m "fix: Fix accordion animation bug"
git commit -m "docs: Update README.md"

# Bad ❌
git commit -m "changes"
git commit -m "update"
git commit -m "fix bug"
```

---

## 🎨 カスタマイズ方法

### 色の変更

#### プライマリカラーの変更

`index.html` の `<script>` タグ内を編集：

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#YOUR_COLOR',           // メインカラー
                'primary-dark': '#DARKER_COLOR',  // ホバー時の色
                'primary-light': '#LIGHTER_COLOR', // 明るいバリエーション
            }
        }
    }
}
```

#### 推奨カラーパレット

- **オレンジ**（現在）: `#f47b25`
- **ブルー**: `#3b82f6`
- **グリーン**: `#10b981`
- **パープル**: `#8b5cf6`
- **ピンク**: `#ec4899`

---

### フォントの変更

#### Google Fontsから選ぶ

1. [Google Fonts](https://fonts.google.com/) にアクセス
2. フォントを選択
3. `<link>` タグをコピー

#### HTML に適用

```html
<!-- index.html の <head> 内 -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

#### Tailwind設定を更新

```javascript
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['YOUR_FONT', 'sans-serif'],
            }
        }
    }
}
```

---

### セクションの追加

#### 新しいセクションのテンプレート

```html
<section id="new-section" class="py-20 px-4 bg-gray-50">
    <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            セクションタイトル
        </h2>
        
        <!-- コンテンツ -->
        <div class="grid md:grid-cols-2 gap-8">
            <!-- カード1 -->
            <div class="bg-white rounded-2xl p-8 shadow-lg">
                <h3 class="text-2xl font-bold mb-4">見出し</h3>
                <p class="text-gray-600">本文</p>
            </div>
            
            <!-- カード2 -->
            <div class="bg-white rounded-2xl p-8 shadow-lg">
                <h3 class="text-2xl font-bold mb-4">見出し</h3>
                <p class="text-gray-600">本文</p>
            </div>
        </div>
    </div>
</section>
```

---

### 画像の追加

#### プロジェクトに画像を追加

```bash
# imagesフォルダを作成
mkdir images

# 画像をコピー
cp /path/to/your/image.jpg images/
```

#### HTMLで画像を使用

```html
<img 
    src="images/your-image.jpg" 
    alt="説明文" 
    class="w-full h-auto rounded-xl shadow-lg"
>
```

#### レスポンシブ画像

```html
<picture>
    <source media="(max-width: 768px)" srcset="images/mobile.jpg">
    <source media="(min-width: 769px)" srcset="images/desktop.jpg">
    <img src="images/desktop.jpg" alt="説明文">
</picture>
```

---

### アニメーションの追加

#### ホバーエフェクト

```html
<div class="transform transition hover:scale-105 hover:shadow-2xl">
    <!-- コンテンツ -->
</div>
```

#### フェードイン

```html
<div class="opacity-0 animate-fade-in">
    <!-- コンテンツ -->
</div>
```

#### カスタムアニメーション

`<style>` タグに追加：

```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
}
```

---

## 🔀 プルリクエストの作成

### ワークフロー

```bash
# 1. 最新のmainブランチを取得
git checkout main
git pull origin main

# 2. 新しいブランチを作成
git checkout -b feature/your-feature-name

# 3. 変更を加える
# (ファイルを編集)

# 4. 変更をコミット
git add .
git commit -m "feat: Add your feature"

# 5. ブランチをプッシュ
git push origin feature/your-feature-name

# 6. GitHubでプルリクエストを作成
```

### プルリクエストのテンプレート

```markdown
## 概要
この変更の目的を簡潔に説明

## 変更内容
- 変更点1
- 変更点2
- 変更点3

## スクリーンショット
（該当する場合）

## テスト
- [ ] ローカルで動作確認済み
- [ ] レスポンシブ対応確認済み
- [ ] 各ブラウザで動作確認済み

## 関連Issue
Closes #123
```

---

## 🐛 バグ報告

### Issueテンプレート

```markdown
## バグの説明
何が起きているか簡潔に説明

## 再現手順
1. ページを開く
2. ボタンをクリック
3. エラーが表示される

## 期待される動作
本来どうなるべきか

## 実際の動作
実際に何が起きているか

## 環境
- OS: Windows 10 / macOS / Linux
- ブラウザ: Chrome 120 / Firefox 121 / Safari 17
- デバイス: PC / タブレット / スマホ

## スクリーンショット
（可能であれば）
```

---

## ✅ チェックリスト

プルリクエストを作成する前に確認：

- [ ] コードが正しく動作する
- [ ] コーディング規約に従っている
- [ ] レスポンシブデザインが崩れていない
- [ ] 各ブラウザで動作確認済み
- [ ] コミットメッセージが適切
- [ ] 不要なファイルが含まれていない

---

## 🎓 学習リソース

### HTML/CSS
- [MDN Web Docs](https://developer.mozilla.org/ja/)
- [HTML Living Standard](https://html.spec.whatwg.org/multipage/)

### Tailwind CSS
- [公式ドキュメント](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)

### JavaScript
- [JavaScript.info](https://ja.javascript.info/)
- [MDN JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript)

### Git/GitHub
- [Git公式ドキュメント](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/ja)

---

## 🤝 行動規範

### 私たちの約束

- 尊重と敬意を持って接する
- 建設的なフィードバックを提供する
- 他者の意見を受け入れる
- コミュニティの成長を支援する

---

## 🎉 貢献者

このプロジェクトに貢献してくださったすべての方に感謝します！

---

## 📞 サポート

質問やサポートが必要な場合：

1. **ドキュメントを確認**
   - [START_HERE.md](START_HERE.md)
   - [SETUP.md](SETUP.md)
   - [GITHUB_SETUP.md](GITHUB_SETUP.md)

2. **Issueを作成**
   - バグ報告や機能提案

3. **公式LINEで相談**
   - https://lin.ee/2Z2p07i

---

**貢献してくださり、ありがとうございます！** 🙏✨

---

**© 2024 LUMINOS. All rights reserved.**
