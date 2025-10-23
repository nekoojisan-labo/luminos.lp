# ⚙️ SETUP GUIDE - ローカル環境構築ガイド

このドキュメントは、**LUMINOSウェブサイトをローカル環境で開発・テストする方法**を解説します。

---

## 📋 目次

1. [前提条件](#前提条件)
2. [プロジェクトのセットアップ](#プロジェクトのセットアップ)
3. [ローカルサーバーの起動](#ローカルサーバーの起動)
4. [ブラウザでの確認](#ブラウザでの確認)
5. [開発ワークフロー](#開発ワークフロー)
6. [トラブルシューティング](#トラブルシューティング)

---

## ✅ 前提条件

### 必須

- **テキストエディタ** または **IDE**
  - 推奨: [Visual Studio Code](https://code.visualstudio.com/)
  - その他: Sublime Text, Atom, WebStorm など

### オプション（推奨）

- **Python 3.x**（ローカルサーバー用）
- **Node.js**（代替のローカルサーバー用）
- **Git**（バージョン管理用）
- **ブラウザ開発者ツール**の基本知識

---

## 📦 プロジェクトのセットアップ

### 方法1: GitHubからクローン（推奨）

```bash
# リポジトリをクローン
git clone https://github.com/[ユーザー名]/luminos-website.git

# プロジェクトディレクトリに移動
cd luminos-website
```

### 方法2: ファイルを直接ダウンロード

1. GitHubリポジトリページを開く
2. 「**Code**」→「**Download ZIP**」
3. ZIPファイルを解凍
4. 解凍したフォルダを開く

---

## 🚀 ローカルサーバーの起動

静的HTMLファイルをブラウザで開く場合、一部の機能が正しく動作しないことがあります。
ローカルサーバーを起動することで、本番環境に近い状態でテストできます。

### 方法1: Python（推奨）

#### Python 3.x

```bash
# プロジェクトディレクトリで実行
python -m http.server 8000
```

または

```bash
python3 -m http.server 8000
```

**アクセス:** http://localhost:8000

#### Python 2.x（古いバージョン）

```bash
python -m SimpleHTTPServer 8000
```

---

### 方法2: Node.js

#### http-serverをインストール

```bash
# グローバルにインストール
npm install -g http-server

# プロジェクトディレクトリで実行
http-server -p 8000
```

**アクセス:** http://localhost:8000

---

### 方法3: PHP

```bash
php -S localhost:8000
```

**アクセス:** http://localhost:8000

---

### 方法4: VSCode Live Server拡張機能（初心者向け）

#### インストール

1. VSCodeを開く
2. 拡張機能タブ（Ctrl+Shift+X / Cmd+Shift+X）
3. 「**Live Server**」を検索
4. インストール

#### 使用方法

1. VSCodeで `index.html` を開く
2. 右クリック → 「**Open with Live Server**」
3. ブラウザが自動的に開く

**特徴:**
- ファイル保存時に自動リロード
- 便利な開発ツール

---

## 🌐 ブラウザでの確認

### デスクトップ表示の確認

1. ブラウザで http://localhost:8000 を開く
2. すべてのセクションが正しく表示されるか確認

### モバイル表示の確認

#### 方法1: ブラウザの開発者ツール（推奨）

1. **Chrome/Edge**: F12 → デバイスツールバーアイコンをクリック（Ctrl+Shift+M）
2. **Firefox**: F12 → レスポンシブデザインモードアイコンをクリック（Ctrl+Shift+M）
3. **Safari**: 開発メニュー → レスポンシブデザインモード

#### 方法2: ブラウザウィンドウのサイズ変更

ブラウザウィンドウを狭くして、レスポンシブデザインを確認

#### 方法3: 実機でテスト

ローカルネットワーク上の実機から確認：

1. PCのIPアドレスを確認
   ```bash
   # Windows
   ipconfig
   
   # macOS/Linux
   ifconfig
   # または
   ip addr show
   ```

2. スマホのブラウザで以下にアクセス
   ```
   http://[PCのIPアドレス]:8000
   ```
   
   例: `http://192.168.1.100:8000`

---

## 🛠️ 開発ワークフロー

### 基本的なワークフロー

```
1. コードを編集
   ↓
2. ファイルを保存
   ↓
3. ブラウザでリロード（F5）
   ↓
4. 確認
   ↓
5. 満足したらコミット
```

### 推奨エディタ設定（VSCode）

#### 便利な拡張機能

1. **Live Server** - 自動リロード
2. **Prettier** - コード整形
3. **HTML CSS Support** - HTML/CSS補完
4. **Auto Rename Tag** - タグの自動リネーム
5. **Path Intellisense** - パス補完

#### settings.json（VSCode）

```json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "files.autoSave": "onFocusChange",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

## 🔍 テストチェックリスト

### 機能テスト

- [ ] すべてのセクションが表示される
- [ ] ナビゲーションリンクが動作する
- [ ] スムーススクロールが動作する
- [ ] Q&Aアコーディオンが開閉する
- [ ] 公式LINEボタンが正しいURLにリンクしている
- [ ] プライバシーポリシーページに遷移できる
- [ ] トップページに戻るリンクが動作する

### レスポンシブテスト

- [ ] PC（1920px以上）で正しく表示される
- [ ] タブレット（768px〜1024px）で正しく表示される
- [ ] スマホ（375px〜768px）で正しく表示される
- [ ] 小さいスマホ（320px）で正しく表示される

### ブラウザ互換性テスト

- [ ] Chrome で動作する
- [ ] Firefox で動作する
- [ ] Safari で動作する
- [ ] Edge で動作する

### パフォーマンステスト

- [ ] ページの読み込みが速い（3秒以内）
- [ ] 画像が最適化されている
- [ ] CSSが最小化されている（本番環境）

---

## 🎨 カスタマイズガイド

### 色を変更する

`index.html` の `tailwind.config` セクションを編集：

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#f47b25',      // ← ここを変更
                'primary-dark': '#d66a1f',
                'primary-light': '#ff8c3a',
            }
        }
    }
}
```

### フォントを変更する

Google Fontsのリンクを変更：

```html
<link href="https://fonts.googleapis.com/css2?family=新しいフォント&display=swap" rel="stylesheet">
```

`tailwind.config` のフォント設定を変更：

```javascript
fontFamily: {
    sans: ['新しいフォント', 'sans-serif'],
}
```

### テキストを変更する

HTMLファイルを直接編集してテキストを変更します。

### 画像を追加する

1. 画像ファイルをプロジェクトに追加（例: `images/` フォルダ）
2. HTMLで画像を参照
   ```html
   <img src="images/your-image.jpg" alt="説明">
   ```

---

## ❌ トラブルシューティング

### 問題1: サーバーが起動しない

**原因:** ポート8000がすでに使用されている

**対処法:**
```bash
# 別のポートを使用
python -m http.server 8080
```

---

### 問題2: CSSが適用されない

**原因:** Tailwind CDNが読み込まれていない

**対処法:**
1. インターネット接続を確認
2. ブラウザの開発者ツール（F12）でConsoleエラーを確認
3. キャッシュをクリア（Ctrl+Shift+R / Cmd+Shift+R）

---

### 問題3: 変更が反映されない

**原因:** ブラウザのキャッシュ

**対処法:**
- **強制リロード**
  - Windows/Linux: Ctrl+Shift+R
  - Mac: Cmd+Shift+R
- **キャッシュをクリア**
  - Chrome: Ctrl+Shift+Del（Windows） / Cmd+Shift+Del（Mac）
  - 「キャッシュされた画像とファイル」を選択してクリア

---

### 問題4: アイコンが表示されない

**原因:** Material Iconsが読み込まれていない

**対処法:**
1. インターネット接続を確認
2. `<link>` タグが正しく記述されているか確認
3. CDNのURLが正しいか確認

---

### 問題5: Live Serverが動作しない

**原因:** VSCodeの拡張機能の問題

**対処法:**
1. VSCodeを再起動
2. 拡張機能を無効化→有効化
3. 別のローカルサーバー方法を試す（Python、Node.js）

---

## 📊 開発ツール

### ブラウザ開発者ツールの使い方

#### Elementsタブ（要素検証）
- HTML構造を確認
- CSSを一時的に編集してテスト

#### Consoleタブ（コンソール）
- JavaScriptエラーを確認
- デバッグ用のログを出力

#### Networkタブ（ネットワーク）
- リソースの読み込み状況を確認
- 読み込み時間を測定

#### Lighthouseタブ（パフォーマンス測定）
- パフォーマンス、アクセシビリティ、SEOをチェック
- 改善提案を取得

---

## 🎓 次のステップ

### ✅ ローカルテストが完了したら

デプロイの準備をしましょう！

👉 **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** へ

### ✅ カスタマイズしたい

詳しいカスタマイズ方法を確認：

👉 **[CONTRIBUTING.md](CONTRIBUTING.md)** へ

---

## 🤝 サポート

わからないことがあれば：

1. **ドキュメントを確認**
   - [START_HERE.md](START_HERE.md)
   - [GITHUB_SETUP.md](GITHUB_SETUP.md)

2. **公式LINEで相談**
   - https://lin.ee/2Z2p07i

---

## 🎉 開発環境の準備完了！

ローカル環境での開発準備が整いました。

快適なコーディングをお楽しみください！ 🚀✨

---

**© 2024 LUMINOS. All rights reserved.**
