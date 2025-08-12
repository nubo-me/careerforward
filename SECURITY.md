# Security Policy

## 公開Firebaseキーについて
Web向けFirebase APIキーはクライアントに配布される設計で秘匿情報ではありません。ただし、利用制限 (ドメイン制限等) を Firebase コンソールで設定し、不正利用やQuota消費リスクを軽減してください。

## レート制御 / 乱用防止
現在は静的コンテンツのみ。今後 Functions や Firestore を追加する場合は以下を実施:
- Security Rules (Firestore/Storage) を `allow read` の乱用防止で認証条件/フィールド制約を明示
- Cloud Functions で AppCheck / reCAPTCHA Enterprise を導入
- 無制限CORS許可を避け、必要なオリジンのみ許可

## 依存パッケージ
`npm audit` をCIに組込み、Critical/High の検出でPRをブロックするワークフロー追加を推奨。

## GitHub Secrets
- `FIREBASE_SERVICE_ACCOUNT_JSON`: サービスアカウント(JSON全文) をGitHubリポジトリSecretsに保存
- (任意) `SENTRY_DSN` 等を追加する際は `NEXT_PUBLIC_` prefix 付与で公開可否区別

## Supply Chain 対策
- CIで `npm ci` を使用（lockfile厳格インストール）
- Dependabot を有効化しPatch自動PR

## その他
- `output: export` によりサーバーレンダリングなし=> 攻撃面最小化
- HTTPレスポンスで静的資産に長期Cache + HTMLはデフォルト(短期)で最新配信
