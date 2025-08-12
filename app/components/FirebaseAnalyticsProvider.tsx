'use client';
import { useEffect } from 'react';
import { initFirebase } from '../lib/firebaseClient';

// シンプルに初期化を一度呼ぶだけのクライアントコンポーネント
export function FirebaseAnalyticsProvider() {
  useEffect(() => {
    initFirebase();
  }, []);
  return null;
}
