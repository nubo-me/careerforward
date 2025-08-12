# 🔐 Firebase 設定とセキュリティについて

## Firebase Web API キーの性質

### ✅ 公開されても直接的な害がない理由
- **設計上公開される**: Firebase Web API キーはクライアント（ブラウザ）で動作する前提
- **認証ではない**: APIキー自体に認証機能はなく、単なる接続情報
- **制限可能**: Firebase Console でドメイン制限・API制限が設定可能

### ⚠️ ただし予防措置として
1. **ドメイン制限**: Firebase Console でHTTPリファラー制限を設定
2. **API制限**: 不要なAPIを無効化
3. **定期ローテーション**: 6ヶ月〜1年ごとにキー再生成
4. **監視**: Firebase Console で異常な使用量をチェック

## 🛡️ 実施済みセキュリティ対策

### プロジェクトレベル
- ✅ Service Account 権限最小化（Hosting Admin のみ）
- ✅ GitHub Secrets での秘匿情報管理
- ✅ 静的サイト（サーバー攻撃面ゼロ）
- ✅ CSP・XSS対策ヘッダー設定

### リポジトリレベル  
- ✅ `.env.example` のプレースホルダー化
- ✅ `.gitignore` で `.env.local` 除外
- ✅ 依存関係脆弱性監査（Dependabot）

## 🔄 Firebase API キー再生成手順（必要時）

1. Firebase Console > プロジェクト設定 > 全般
2. 「アプリ」セクションで Web アプリを選択
3. 「設定」アイコン > 「Firebase SDK snippet」
4. 新しいキーを生成して `.env.local` を更新
5. 古いキーを削除

## 📋 ドメイン制限設定（推奨）

1. [Google Cloud Console](https://console.cloud.google.com/)
2. APIs & Services > Credentials
3. API キーを選択
4. Website restrictions で以下を設定:
   - `careerforward-aea32.web.app/*`
   - `careerforward-aea32.firebaseapp.com/*`
   - 開発用: `localhost:3000/*`

これにより、指定ドメイン以外からのAPI使用を制限できます。
