# CareerForward - 転職成功サポートサイト

30代〜40代ホワイトカラー向け転職情報サイト。現役キャリアコンサルタントが監修し、実例ベースのノウハウで失敗しない転職をサポート。

## 🚀 技術構成

- **フレームワーク**: Next.js 15 (Static Export)
- **スタイリング**: Tailwind CSS
- **ホスティング**: Firebase Hosting  
- **アナリティクス**: Firebase Analytics
- **CI/CD**: GitHub Actions

## 🔧 開発環境セットアップ

### 1. 依存関係インストール
```powershell
npm install
```

### 2. 環境変数設定
```powershell
# .env.local を作成 (サンプルをコピー)
Copy-Item .env.example .env.local
```

### 3. 開発サーバー起動
```powershell
npm run dev
```
→ http://localhost:3000 でアクセス

### 4. 本番ビルド
```powershell
npm run build        # Next.js ビルド + 静的エクスポート
```

## 🌐 デプロイ

### Firebase Hosting (推奨)

1. **Firebase CLI ログイン**
```powershell
firebase login
```

2. **プロジェクト関連付け**
```powershell
firebase use careerforward-aea32
```

3. **手動デプロイ**
```powershell
npm run deploy       # ビルド + Firebase デプロイ
```

### GitHub Actions 自動デプロイ

1. **リポジトリ作成・プッシュ**
```powershell
# Git がインストール済みの場合
git init
git add .
git commit -m "feat: initial commit with firebase setup"
git branch -M main
git remote add origin https://github.com/<あなたのアカウント>/careerforward.git
git push -u origin main
```

2. **GitHub Secrets 設定**
- 詳細手順: [`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md) を参照
- Secret 名: `FIREBASE_SERVICE_ACCOUNT_JSON`
- 値: Firebase Console で生成したサービスアカウントキー（JSON全文）

**注意**: ワークフロー警告「Context access might be invalid」は Secret 未設定時の正常な表示です。Secret 登録後に自動解消されます。

3. **自動デプロイ**
- main ブランチへ push すると `.github/workflows/deploy.yml` が自動実行
- Firebase Hosting へ自動デプロイ

## 📁 プロジェクト構造

```
├── app/
│   ├── components/
│   │   └── FirebaseAnalyticsProvider.tsx  # Analytics 初期化
│   ├── lib/
│   │   └── firebaseClient.ts               # Firebase クライアント
│   ├── articles/                           # 記事ページ
│   ├── layout.tsx                          # ルートレイアウト
│   └── page.tsx                            # トップページ
├── .github/workflows/
│   └── deploy.yml                          # GitHub Actions CI/CD
├── firebase.json                           # Firebase Hosting 設定
├── .env.example                            # 環境変数サンプル
└── README.md
```

## 🔒 セキュリティ

- Firebase API キーは Web 向け公開キー（秘匿性不要）だが環境変数化で管理
- サービス アカウント鍵は GitHub Secrets のみ保存
- 静的エクスポートによりサーバー攻撃面を最小化
- 脆弱性監査: `npm audit` を定期実行

## 📈 運用・監視

### アナリティクス確認
- Firebase Console > Analytics で PV・ユーザー行動を確認

### パフォーマンス最適化
- 静的アセットに長期キャッシュヘッダー設定済み
- Next.js Image 最適化 (`unoptimized: true` で Static Export 対応)

### SEO 最適化
- メタデータ設定済み (`layout.tsx`)
- 構造化データ・サイトマップは必要に応じて追加

## 🛠 今後の拡張案

- [ ] Contact フォーム (Firebase Functions)
- [ ] お問い合わせ管理 (Firestore)
- [ ] A/B テスト (Firebase Remote Config)
- [ ] エラー監視 (Sentry)
- [ ] CMS 連携 (Headless CMS)

## 📝 ライセンス

Private - 個人/企業用途のみ
