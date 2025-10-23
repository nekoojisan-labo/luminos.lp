# 🎹 LUMINOS - nagi先生のオンライン伴奏レッスン

プロの伴奏者nagi先生が提供する、オンライン伴奏レッスンの公式ウェブサイトです。

## 🌟 プロジェクト概要

**LUMINOS（ルミノス）**は、音楽の輝き（Luminosity）をコンセプトに、ピアノ伴奏の技術と音楽性を学べるオンラインレッスンサービスです。

### 主な特徴

- ✅ **プロから学ぶ** - 現役プロ伴奏者nagi先生による直接指導
- ✅ **完全オンライン** - 自宅から質の高いレッスンを受講可能
- ✅ **個別サポート** - 一人ひとりに合わせたきめ細やかな指導
- ✅ **実践的カリキュラム** - 基礎から実践まで段階的に学習

## 🚀 クイックスタート

このサイトはGitHub Pagesで公開されています。

### デプロイ方法

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/[ユーザー名]/[リポジトリ名].git
   cd [リポジトリ名]
   ```

2. **GitHub Pagesを有効化**
   - GitHubリポジトリの **Settings** → **Pages**
   - **Source**: 「**GitHub Actions**」を選択

3. **自動デプロイ**
   - `.github/workflows/deploy.yml` が自動的にサイトをデプロイします
   - `main`ブランチへのプッシュで自動デプロイが実行されます

## 📁 プロジェクト構造

```
luminos-website/
├── index.html                      # メインページ
├── privacy.html                    # プライバシーポリシー
├── README.md                       # このファイル
├── START_HERE.md                   # 最初に読むガイド
├── DEPLOYMENT_CHECKLIST.md         # デプロイ手順
├── GITHUB_SETUP.md                 # GitHub初心者向けガイド
├── SETUP.md                        # ローカル環境構築
├── CONTRIBUTING.md                 # 貢献ガイド
├── LICENSE                         # MITライセンス
├── .gitignore                      # Git除外設定
└── .github/
    └── workflows/
        └── deploy.yml              # GitHub Actions設定
```

## 🛠️ 技術スタック

- **HTML5** - セマンティックマークアップ
- **Tailwind CSS** - CDN版使用、レスポンシブデザイン
- **JavaScript** - バニラJS（依存関係なし）
- **GitHub Pages** - 静的サイトホスティング
- **GitHub Actions** - 自動デプロイ

### 使用ライブラリ

- **Tailwind CSS** (v3.x) - CDN経由
- **Google Fonts** - Plus Jakarta Sans, Noto Sans JP
- **Material Symbols** - アイコン

## 💻 ローカル開発

### 前提条件

- Python 3.x（または任意のHTTPサーバー）

### ローカルサーバーの起動

```bash
# Pythonを使用
python -m http.server 8000

# または Node.js の場合
npx http-server -p 8000
```

ブラウザで `http://localhost:8000` を開いてください。

詳細は [SETUP.md](SETUP.md) を参照してください。

## 📖 ドキュメント

### 初めての方

👉 **[START_HERE.md](START_HERE.md)** - まずはここから読んでください

### デプロイガイド

👉 **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - デプロイ手順の詳細

### GitHub初心者向け

👉 **[GITHUB_SETUP.md](GITHUB_SETUP.md)** - GitHubの使い方から丁寧に解説

### ローカル環境構築

👉 **[SETUP.md](SETUP.md)** - ローカルでの開発環境セットアップ

### 貢献方法

👉 **[CONTRIBUTING.md](CONTRIBUTING.md)** - プロジェクトへの貢献ガイド

## 🎨 デザインシステム

### カラーパレット

- **Primary**: `#f47b25` (オレンジ)
- **Primary Dark**: `#d66a1f`
- **Primary Light**: `#ff8c3a`

### タイポグラフィ

- **英語**: Plus Jakarta Sans
- **日本語**: Noto Sans JP

## 🔗 リンク

- **公式LINE**: https://lin.ee/2Z2p07i
- **GitHub Pages**: `https://[ユーザー名].github.io/[リポジトリ名]/`

## 📱 機能一覧

### 実装済み機能

- ✅ レスポンシブデザイン（PC・タブレット・スマホ対応）
- ✅ ヒーローセクション
- ✅ コンセプト紹介（3つの特徴カード）
- ✅ 講師紹介セクション
- ✅ Q&Aアコーディオン
- ✅ 利用者の声（テスティモニアル）
- ✅ 成果物ギャラリー
- ✅ CTAボタン（公式LINE誘導）
- ✅ プライバシーポリシー
- ✅ スムーススクロール
- ✅ ホバーアニメーション

## 🧪 ブラウザ対応

- ✅ Chrome (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ Edge (最新版)
- ✅ モバイルブラウザ

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) を参照

## 👤 講師紹介

**nagi 先生**
- 武蔵野音楽大学ピアノ科卒業
- プロ伴奏者として10年以上の実績
- 声楽・器楽伴奏を中心に、コンサート、コンクール、レコーディングなど幅広く活動

## 🤝 お問い合わせ

ご質問やご相談は、公式LINEからお気軽にどうぞ：

👉 **[公式LINE](https://lin.ee/2Z2p07i)**

---

**© 2024 LUMINOS. All rights reserved.**
