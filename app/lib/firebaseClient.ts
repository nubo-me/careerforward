// Firebase クライアント初期化（ブラウザ専用）
// 機微情報（apiKey等）はFirebase公開用Webキーであり秘匿不要だが、慣習的に環境変数化し差し替え可能にする
// SSR/Edge で Analytics を呼ばないよう分離

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;

export function initFirebase() {
  if (typeof window === 'undefined') return { app: undefined, analytics: undefined };
  // 必須キーが欠ける場合は初期化しない（ビルド時未設定でも安全にスキップ）
  const {
    NEXT_PUBLIC_FIREBASE_API_KEY: apiKey,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: authDomain,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: projectId,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: storageBucket,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: messagingSenderId,
    NEXT_PUBLIC_FIREBASE_APP_ID: appId,
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: measurementId,
  } = process.env as Record<string, string | undefined>;

  if (!getApps().length) {
    if (!apiKey || !authDomain || !projectId || !appId) {
      return { app: undefined, analytics: undefined };
    }
    app = initializeApp({
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      measurementId,
    });
  }
  if (app && !analytics) {
    isSupported().then((ok: boolean) => {
      if (ok) analytics = getAnalytics(app!);
    }).catch(() => {});
  }
  return { app, analytics };
}
