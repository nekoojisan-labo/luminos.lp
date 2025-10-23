# 🐙 GITHUB SETUP GUIDE - GitHub初心者向け完全ガイド

このドキュメントは、**GitHubを初めて使う方向けの詳細ガイド**です。アカウント作成からデプロイまで、順番に解説します。

---

## 📋 目次

1. [GitHubとは？](#githubとは)
2. [アカウント作成](#アカウント作成)
3. [Gitのインストール](#gitのインストール)
4. [基本的な用語](#基本的な用語)
5. [リポジトリの作成](#リポジトリの作成)
6. [ローカルとの接続](#ローカルとの接続)
7. [よくあるエラーと対処法](#よくあるエラーと対処法)

---

## 🤔 GitHubとは？

### GitHubの概要

**GitHub**は、コードを保存・共有・管理するためのオンラインプラットフォームです。

### 主な機能

- **コードの保存** - クラウド上にコードを保存
- **バージョン管理** - 変更履歴を記録
- **ウェブサイト公開** - GitHub Pagesで無料公開
- **共同作業** - チームでの開発が可能

### なぜGitHubを使うのか？

- ✅ **無料** - 基本機能は無料で使える
- ✅ **信頼性** - 世界中で使われている
- ✅ **簡単** - GitHub Pagesで簡単にウェブサイトを公開
- ✅ **学習** - 実際のプロジェクトで学べる

---

## 📝 アカウント作成

### ステップ1: GitHubにアクセス

https://github.com を開きます。

### ステップ2: サインアップ

1. 「**Sign up**」ボタンをクリック
2. 以下の情報を入力：
   - **Email address**: メールアドレス
   - **Password**: パスワード（強力なものを設定）
   - **Username**: ユーザー名（後で変更可能）
3. 「**Create account**」をクリック

### ステップ3: メール認証

1. 入力したメールアドレスに認証メールが届く
2. メール内のリンクをクリックして認証

### ステップ4: プロフィール設定（オプション）

1. プロフィール写真を設定
2. 自己紹介を記入
3. 完了！

---

## 💻 Gitのインストール

GitHubを使うには、**Git**というツールをインストールする必要があります。

### Windows

#### 方法1: Git for Windowsをインストール

1. https://git-scm.com/download/win にアクセス
2. インストーラーをダウンロード
3. インストーラーを実行
4. すべてデフォルト設定でOK（「Next」を押し続ける）

#### 方法2: GitHub Desktopをインストール（初心者向け）

1. https://desktop.github.com/ にアクセス
2. 「Download for Windows」をクリック
3. インストーラーを実行
4. GitHubアカウントでログイン

### macOS

#### 方法1: Homebrewを使う（推奨）

```bash
# Homebrewがインストールされていない場合
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Gitをインストール
brew install git
```

#### 方法2: Xcodeコマンドラインツール

```bash
xcode-select --install
```

#### 方法3: GitHub Desktopをインストール

1. https://desktop.github.com/ にアクセス
2. 「Download for macOS」をクリック
3. インストーラーを実行

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install git
```

### インストール確認

ターミナル（またはコマンドプロンプト）で以下を実行：

```bash
git --version
```

バージョン番号が表示されればOKです！

---

## 📚 基本的な用語

GitHubを使う上で知っておくべき基本用語を解説します。

### リポジトリ (Repository)

**リポジトリ**は、プロジェクトのファイルと変更履歴を保存する場所です。

- **ローカルリポジトリ**: 自分のPC上のリポジトリ
- **リモートリポジトリ**: GitHub上のリポジトリ

### コミット (Commit)

**コミット**は、変更を記録することです。

```bash
git commit -m "メッセージ"
```

- スナップショットのようなもの
- 後で元に戻すことができる

### プッシュ (Push)

**プッシュ**は、ローカルの変更をGitHub（リモート）に送信することです。

```bash
git push
```

### プル (Pull)

**プル**は、GitHub（リモート）の変更をローカルに取得することです。

```bash
git pull
```

### ブランチ (Branch)

**ブランチ**は、作業の分岐点です。

- `main`（または`master`）: メインブランチ
- 機能追加や修正は別ブランチで行い、後でメインに統合

### クローン (Clone)

**クローン**は、GitHubのリポジトリを自分のPCにコピーすることです。

```bash
git clone https://github.com/ユーザー名/リポジトリ名.git
```

---

## 🏗️ リポジトリの作成

### ステップ1: GitHubでリポジトリを作成

1. GitHubにログイン
2. 右上の「**+**」→「**New repository**」をクリック

### ステップ2: リポジトリ情報を入力

- **Repository name**: `luminos-website`（または任意の名前）
- **Description**: `LUMINOS - nagi先生のオンライン伴奏レッスン`
- **Public** を選択（GitHub Pages無料版はPublicのみ）
- ❌ **"Add a README file"はチェックしない**
- ❌ **".gitignore"は選択しない**
- ❌ **"Choose a license"は選択しない**

### ステップ3: リポジトリを作成

「**Create repository**」をクリック

---

## 🔗 ローカルとの接続

### ステップ1: Gitの初期設定

初めてGitを使う場合、以下を実行：

```bash
# ユーザー名の設定
git config --global user.name "あなたの名前"

# メールアドレスの設定
git config --global user.email "あなたのメールアドレス"
```

**例:**
```bash
git config --global user.name "Nagi Sensei"
git config --global user.email "nagi@example.com"
```

### ステップ2: プロジェクトディレクトリに移動

```bash
cd /path/to/luminos-website
```

### ステップ3: Gitリポジトリを初期化

```bash
git init
```

### ステップ4: ファイルをステージング

```bash
git add .
```

**説明:**
- `.`はすべてのファイルを意味します
- 特定のファイルだけ追加する場合: `git add index.html`

### ステップ5: コミット

```bash
git commit -m "🚀 Initial commit"
```

**コミットメッセージのコツ:**
- 何をしたか簡潔に書く
- 絵文字を使うとわかりやすい（オプション）

### ステップ6: リモートリポジトリを追加

```bash
git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git
```

**例:**
```bash
git remote add origin https://github.com/nagisensei/luminos-website.git
```

### ステップ7: ブランチ名をmainに変更（必要に応じて）

```bash
git branch -M main
```

### ステップ8: プッシュ

```bash
git push -u origin main
```

**初回プッシュの注意:**
- 認証を求められる場合があります
- ユーザー名とパスワード（またはトークン）を入力

---

## 🔐 認証設定

### Personal Access Token（推奨）

GitHubでは、パスワードの代わりに**Personal Access Token**を使います。

#### トークンの作成

1. GitHub → **Settings** → **Developer settings**
2. **Personal access tokens** → **Tokens (classic)**
3. 「**Generate new token**」→「**Generate new token (classic)**」
4. 以下を設定：
   - **Note**: `LUMINOS Website`（任意）
   - **Expiration**: `90 days`（または任意）
   - **Scopes**: `repo`にチェック
5. 「**Generate token**」をクリック
6. **トークンをコピーして保存**（二度と表示されません！）

#### トークンの使用

プッシュ時にパスワードを求められたら、トークンを入力します。

---

## ❌ よくあるエラーと対処法

### エラー1: `fatal: not a git repository`

**原因:** Gitリポジトリが初期化されていない

**対処法:**
```bash
git init
```

---

### エラー2: `fatal: remote origin already exists`

**原因:** すでにリモートが追加されている

**対処法:**
```bash
# 既存のリモートを削除
git remote remove origin

# 再度追加
git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git
```

---

### エラー3: `error: failed to push some refs`

**原因:** リモートに新しい変更がある

**対処法:**
```bash
# リモートの変更を取得
git pull origin main --rebase

# 再度プッシュ
git push origin main
```

---

### エラー4: `Permission denied (publickey)`

**原因:** SSH認証の設定が必要

**対処法A: HTTPSを使う（簡単）**
```bash
# HTTPSのURLに変更
git remote set-url origin https://github.com/[ユーザー名]/[リポジトリ名].git
```

**対処法B: SSHキーを設定（推奨）**
1. SSHキーを生成
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. 公開鍵をコピー
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
3. GitHub → **Settings** → **SSH and GPG keys**
4. 「**New SSH key**」をクリック
5. 公開鍵を貼り付け

---

### エラー5: `Updates were rejected because the tip of your current branch is behind`

**原因:** ローカルがリモートより古い

**対処法:**
```bash
# リモートの変更を取得してマージ
git pull origin main

# 再度プッシュ
git push origin main
```

---

## 🎓 次のステップ

### ✅ デプロイする

リポジトリの作成とプッシュが完了したら、次はデプロイです！

👉 **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** へ

### ✅ もっと学ぶ

- [Git公式ドキュメント](https://git-scm.com/doc)
- [GitHub公式ガイド](https://docs.github.com/ja)
- [Git入門（日本語）](https://backlog.com/ja/git-tutorial/)

---

## 💡 Tips

### GitHub Desktop（GUI）を使う

コマンドラインが苦手な方は、**GitHub Desktop**がおすすめです。

1. https://desktop.github.com/ からダウンロード
2. インストール後、GitHubアカウントでログイン
3. GUI操作でコミット、プッシュが可能

### VSCodeと連携

**Visual Studio Code**には、Git機能が統合されています。

1. VSCodeでプロジェクトを開く
2. 左サイドバーの「ソース管理」アイコンをクリック
3. GUI操作でGit操作が可能

---

## 🤝 サポート

わからないことがあれば：

1. **ドキュメントを確認**
   - [START_HERE.md](START_HERE.md)
   - [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)

2. **公式LINEで相談**
   - https://lin.ee/2Z2p07i

---

## 🎉 完了！

GitHubの基本的な使い方を理解できました！

次は実際にデプロイしてみましょう 🚀

👉 **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** へ

---

**© 2024 LUMINOS. All rights reserved.**
