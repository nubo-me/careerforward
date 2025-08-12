# Firebase サービスアカウント設定ガイド

GitHub Actions の「Context access might be invalid: FIREBASE_SERVICE_ACCOUNT_JSON」警告は、Secret 未設定時の正常な表示です。以下の手順で解消されます。

## 🔑 Firebase サービスアカウントキー取得

### 1. Firebase Console アクセス
1. [Firebase Console](https://console.firebase.google.com/) にアクセス
2. プロジェクト `careerforward-aea32` を選択

### 2. サービスアカウント作成
1. **プロジェクト設定** (歯車アイコン) をクリック
2. **サービス アカウント** タブを選択
3. **新しい秘密鍵の生成** をクリック
4. **キーの生成** で JSON ファイルがダウンロード

### 3. 権限設定（重要）
生成されたサービスアカウントの権限を最小化：
1. [Google Cloud Console](https://console.cloud.google.com/) へ移動
2. IAM と管理 > IAM を選択
3. 生成されたサービスアカウントを探す
4. 権限を以下に限定：
   - `Firebase Hosting Admin`
   - `Firebase Rules Admin` (必要に応じて)

## 🔒 GitHub Secrets 設定

### 1. リポジトリ設定
1. GitHub リポジトリページを開く
2. **Settings** タブをクリック
3. 左メニューから **Secrets and variables** > **Actions** を選択

### 2. Secret 追加
1. **New repository secret** をクリック
2. Name: `FIREBASE_SERVICE_ACCOUNT_JSON`
3. Secret: ダウンロードした JSON ファイルの **全内容** をコピー&ペースト
4. **Add secret** で保存

### 3. 設定確認
```json
{
  "type": "service_account",
  "project_id": "careerforward-aea32",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "...@careerforward-aea32.iam.gserviceaccount.com",
  "client_id": "...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/..."
}
```

## ✅ 動作確認

### Secret 登録後
1. main ブランチに何かコミット & プッシュ
2. Actions タブで「Deploy to Firebase Hosting」ワークフローを確認
3. 成功すれば https://careerforward-aea32.web.app でサイト公開

### トラブルシューティング
- **権限エラー**: サービスアカウントに `Firebase Hosting Admin` 権限を付与
- **プロジェクトID不一致**: JSON の `project_id` が `careerforward-aea32` か確認
- **JSON 形式エラー**: 改行・インデントを含めて完全にコピー

## 🚫 セキュリティ注意事項

### DO ✅
- サービスアカウント権限を最小限に設定
- 定期的にキーをローテーション（6-12ヶ月）
- GitHub Organization の場合は Secrets 共有設定を確認

### DON'T ❌
- JSON キーをコードにコミット
- 不要な権限を付与
- パブリックリポジトリで JSON キーを誤公開

---

**この設定完了後、GitHub Actions の警告は自動で解消されます。**
