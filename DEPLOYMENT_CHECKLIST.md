# 🚀 DEPLOYMENT CHECKLIST - LUMINOSウェブサイトデプロイガイド

このドキュメントは、LUMINOSウェブサイトをGitHub Pagesにデプロイするための**詳細な手順書**です。

---

## 📋 目次

1. [デプロイ前の確認](#デプロイ前の確認)
2. [デプロイ手順](#デプロイ手順)
3. [GitHub Pages設定](#github-pages設定)
4. [デプロイ後の確認](#デプロイ後の確認)
5. [トラブルシューティング](#トラブルシューティング)
6. [よくある質問](#よくある質問)

---

## ✅ デプロイ前の確認

### 必須項目チェックリスト

- [ ] GitHubアカウントを持っている
- [ ] Gitがインストールされている
- [ ] すべてのファイルが揃っている
- [ ] 公式LINEのURLが正しい

### ファイル確認

以下のファイルが存在することを確認してください：

```
luminos-website/
├── index.html                      ✅
├── privacy.html                    ✅
├── README.md                       ✅
├── START_HERE.md                   ✅
├── DEPLOYMENT_CHECKLIST.md         ✅ (このファイル)
├── GITHUB_SETUP.md                 ✅
├── SETUP.md                        ✅
├── CONTRIBUTING.md                 ✅
├── LICENSE                         ✅
├── .gitignore                      ✅
└── .github/
    └── workflows/
        └── deploy.yml              ✅
```

---

## 🚀 デプロイ手順

### ステップ1: GitHubリポジトリを作成

#### 1-1. GitHubにログイン

https://github.com にアクセスし、ログインします。

**GitHubアカウントを持っていない方**は👉 [GITHUB_SETUP.md](GITHUB_SETUP.md)

#### 1-2. 新しいリポジトリを作成

1. 右上の「**+**」→「**New repository**」をクリック
2. 以下を入力：
   - **Repository name**: `luminos-website`（または任意の名前）
   - **Description**: `LUMINOS - nagi先生のオンライン伴奏レッスン`
   - **Public** を選択（GitHub Pages無料版はPublicのみ）
   - ❌ **"Add a README file"はチェックしない**
   - ❌ **".gitignore"は選択しない**
   - ❌ **"Choose a license"は選択しない**
3. 「**Create repository**」をクリック

---

### ステップ2: ローカルリポジトリとリモートを接続

#### 2-1. 現在のGit状態を確認

```bash
cd /path/to/luminos-website
git status
```

#### 2-2. すべてのファイルをコミット

```bash
# すべてのファイルをステージング
git add .

# コミット
git commit -m "🚀 Initial deployment of LUMINOS website"
```

#### 2-3. リモートリポジトリを追加

```bash
# GitHubリポジトリを追加（[ユーザー名]と[リポジトリ名]を置き換えてください）
git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git

# リモート確認
git remote -v
```

**例:**
```bash
git remote add origin https://github.com/yourusername/luminos-website.git
```

#### 2-4. プッシュ

```bash
# mainブランチにプッシュ
git push -u origin main
```

**エラーが出た場合（ブランチ名がmasterの場合）:**
```bash
# ブランチ名をmainに変更
git branch -M main
git push -u origin main
```

---

### ステップ3: GitHub Pages設定

#### 3-1. リポジトリのSettingsを開く

1. GitHubで自分のリポジトリページを開く
2. 「**Settings**」タブをクリック

#### 3-2. Pagesセクションを開く

1. 左サイドバーの「**Pages**」をクリック
2. **Build and deployment**セクションを確認

#### 3-3. Sourceを設定

1. **Source**のドロップダウンをクリック
2. 「**GitHub Actions**」を選択

**重要:** 「Deploy from a branch」ではなく、「**GitHub Actions**」を選択してください。

---

### ステップ4: 自動デプロイの開始

#### 4-1. Actionsタブを確認

1. リポジトリの「**Actions**」タブをクリック
2. 「**Deploy to GitHub Pages**」ワークフローが実行されているのを確認
3. 緑のチェックマーク✅が表示されるまで待つ（通常1-3分）

#### 4-2. デプロイ完了の確認

緑のチェックマーク✅が表示されたら、デプロイ成功です！

---

## 🌐 デプロイ後の確認

### 公開URLの確認

#### 方法1: Settings → Pagesで確認

1. **Settings** → **Pages**
2. 上部に「**Your site is live at https://...**」と表示される
3. URLをクリックして確認

#### 方法2: 直接アクセス

以下のフォーマットでアクセス：

```
https://[ユーザー名].github.io/[リポジトリ名]/
```

**例:**
```
https://yourusername.github.io/luminos-website/
```

---

### 動作確認チェックリスト

- [ ] トップページが正しく表示される
- [ ] ヘッダーのナビゲーションが動作する
- [ ] すべてのセクションが表示される
- [ ] 「公式LINEへ」ボタンが動作する
- [ ] プライバシーポリシーにアクセスできる
- [ ] スマホで正しく表示される（レスポンシブ対応）
- [ ] PCで正しく表示される
- [ ] アコーディオン（Q&A）が動作する

---

## 🔧 トラブルシューティング

### 問題1: 404エラーが表示される

**原因:**
- GitHub Pagesの設定が完了していない
- デプロイがまだ完了していない

**対処法:**
1. **Settings** → **Pages** で設定を確認
2. **Actions**タブでワークフローが完了しているか確認
3. 5-10分待ってから再度アクセス
4. ブラウザのキャッシュをクリア（Ctrl+Shift+R / Cmd+Shift+R）

---

### 問題2: Actionsでエラーが発生する

**原因:**
- `.github/workflows/deploy.yml`の設定に問題がある
- リポジトリのPermissions設定が不足している

**対処法:**

#### 対処法A: Permissionsの確認
1. **Settings** → **Actions** → **General**
2. **Workflow permissions**セクションを確認
3. 「**Read and write permissions**」を選択
4. 「**Allow GitHub Actions to create and approve pull requests**」にチェック
5. 「**Save**」をクリック

#### 対処法B: deploy.ymlの確認
1. `.github/workflows/deploy.yml`が正しく存在するか確認
2. インデント（スペース）が正しいか確認

---

### 問題3: CSSが適用されない

**原因:**
- Tailwind CSSのCDNが読み込まれていない
- インターネット接続の問題

**対処法:**
1. ブラウザの開発者ツールでエラーを確認（F12キー）
2. Consoleタブでエラーメッセージを確認
3. NetworkタブでCDNリソースが読み込まれているか確認

---

### 問題4: 画像が表示されない

**原因:**
- 画像パスが間違っている
- 画像ファイルがリポジトリにコミットされていない

**対処法:**
1. 画像ファイルがリポジトリに含まれているか確認
2. HTMLの画像パスが正しいか確認
3. 相対パスを使用しているか確認

---

### 問題5: 公式LINEリンクが動かない

**原因:**
- URLが間違っている

**対処法:**
1. `index.html`と`privacy.html`で`https://lin.ee/2Z2p07i`を検索
2. 正しいURLに置換
3. コミット＆プッシュ

```bash
git add .
git commit -m "Fix LINE URL"
git push
```

---

### 問題6: レイアウトが崩れている

**原因:**
- ブラウザの互換性問題
- キャッシュの問題

**対処法:**
1. ブラウザのキャッシュをクリア
   - Chrome: Ctrl+Shift+Del（Windows） / Cmd+Shift+Del（Mac）
2. シークレットモード/プライベートブラウジングで開く
3. 別のブラウザで確認

---

## ❓ よくある質問

### Q1: デプロイにどのくらい時間がかかりますか？

**A:** 通常1-3分で完了します。初回は最大10分かかることがあります。

---

### Q2: 変更をプッシュした後、反映されません

**A:** 以下を確認してください：

1. **Actionsの完了を待つ**
   - Actionsタブで緑のチェックマーク✅を確認

2. **ブラウザのキャッシュをクリア**
   - Ctrl+Shift+R（Windows/Linux）
   - Cmd+Shift+R（Mac）

3. **5-10分待つ**
   - CDNのキャッシュがクリアされるまで時間がかかることがあります

---

### Q3: 独自ドメインを使いたいです

**A:** GitHub Pagesでカスタムドメインを設定できます：

1. ドメインを購入
2. **Settings** → **Pages** → **Custom domain**
3. ドメイン名を入力
4. DNSレコードを設定

詳細は[GitHub公式ドキュメント](https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site)を参照してください。

---

### Q4: HTTPSを有効にしたいです

**A:** GitHub Pagesは自動的にHTTPSを提供します：

1. **Settings** → **Pages**
2. 「**Enforce HTTPS**」にチェックを入れる

---

### Q5: プライベートリポジトリでも公開できますか？

**A:** GitHub Proプランが必要です。無料プランではPublicリポジトリのみGitHub Pagesを使用できます。

---

## 🎉 成功！次のステップ

デプロイが成功したら、以下を試してみましょう：

### ✅ カスタマイズ

- 色やフォントを変更
- セクションを追加
- 画像を差し替え

詳しくは👉 [CONTRIBUTING.md](CONTRIBUTING.md)

### ✅ SEO対策

- メタタグの最適化
- Open Graph設定
- Googleアナリティクスの導入

### ✅ パフォーマンス最適化

- 画像の最適化
- 不要なCSSの削除
- 読み込み速度の改善

---

## 📞 サポート

それでも問題が解決しない場合：

1. **GitHubのIssuesで質問**
2. **公式LINEで相談**
   - https://lin.ee/2Z2p07i

---

## 🎊 おめでとうございます！

デプロイが完了しました。これで全世界の人があなたのウェブサイトにアクセスできます！

**次のステップ:**
- URLをSNSでシェア
- Google Search Consoleに登録
- 定期的に更新・改善

**頑張ってください！** 🚀✨

---

**© 2024 LUMINOS. All rights reserved.**
