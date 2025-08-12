
'use client';

import Link from 'next/link';

export default function JobSearchStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-['Pacifico'] text-2xl text-[#005BAC]">CareerForward</Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#services" className="text-gray-700 hover:text-[#005BAC] font-medium">サービス</Link>
              <Link href="/#success-stories" className="text-gray-700 hover:text-[#005BAC] font-medium">成功事例</Link>
              <Link href="/#knowhow" className="text-gray-700 hover:text-[#005BAC] font-medium">転職ノウハウ</Link>
              <Link href="/#faq" className="text-gray-700 hover:text-[#005BAC] font-medium">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-[#005BAC] hover:underline">ホーム</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/#knowhow" className="text-[#005BAC] hover:underline">転職ノウハウ</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">効率的な転職活動の進め方</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            効率的な転職活動の進め方
          </h1>
          <p className="text-lg text-gray-600 mb-8">
           限られた時間で最大の成果を出すための転職活動戦略と具体的な進め方を詳しく解説します。現職を続けながらの転職活動では、戦略的なアプローチが成功の鍵です。効率化のポイントと実践的なノウハウをお伝えします。
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <i className="ri-calendar-line mr-2"></i>
            <span className="mr-6">2024年2月5日</span>
            <i className="ri-time-line mr-2"></i>
            <span>読了時間: 約18分</span>
          </div>
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20business%20strategy%20planning%20workspace%20with%20organized%20documents%2C%20laptop%20computer%2C%20calendar%2C%20and%20planning%20materials%20on%20modern%20executive%20desk%2C%20strategic%20business%20planning%20atmosphere%2C%20corporate%20efficiency%20concept%2C%20clean%20office%20environment%20with%20natural%20lighting&width=800&height=400&seq=strategy002&orientation=landscape"
            alt="効率的転職活動戦略イメージ"
            className="w-full h-64 object-cover object-top rounded-xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">転職活動の全体戦略</h2>
            
            <div className="bg-[#005BAC]/5 border-l-4 border-[#005BAC] p-6 mb-8">
              <h3 className="font-bold text-lg text-[#005BAC] mb-3">効率的な転職活動の3つの原則</h3>
              <p className="text-gray-700">
                現職を続けながらの転職活動では、時間とエネルギーが限られています。成功するためには、戦略的な計画と効率的な実行が不可欠です。以下の原則に基づいて活動を進めましょう。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">選択と集中</h3>
                <p className="text-gray-600 text-sm">
                  多数の企業に応募するより、厳選した企業に集中してアプローチする
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">計画的な実行</h3>
                <p className="text-gray-600 text-sm">
                  段階的なスケジュールを立て、各ステップで明確な目標を設定する
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">継続的な改善</h3>
                <p className="text-gray-600 text-sm">
                  活動の結果を分析し、アプローチを継続的に最適化していく
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">転職活動の4段階プロセス</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">第1段階：準備フェーズ（1-2週間）</h3>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-4">準備段階のチェックリスト</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-[#005BAC] mb-2">自己分析・目標設定</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>□ 転職理由・目的の明確化</li>
                    <li>□ 希望条件の整理・優先順位付け</li>
                    <li>□ スキル・経験の棚卸し</li>
                    <li>□ 市場価値の客観的評価</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-[#005BAC] mb-2">書類・ツール準備</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>□ 履歴書・職務経歴書の作成</li>
                    <li>□ 転職サイト・エージェント登録</li>
                    <li>□ ポートフォリオ・実績資料整理</li>
                    <li>□ 推薦状・推薦者の確保</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">第2段階：情報収集・企業選定フェーズ（2-3週間）</h3>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#005BAC] pl-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">効率的な企業情報収集方法</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-700 mb-2">転職サイト活用</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 複数サイトの比較検索</li>
                      <li>• アラート機能の設定</li>
                      <li>• 企業ページ詳細確認</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-700 mb-2">業界ネットワーク</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• LinkedIn活用</li>
                      <li>• 業界イベント参加</li>
                      <li>• 知人からの情報収集</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-700 mb-2">企業研究</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 公式サイト・IR情報</li>
                      <li>• 口コミサイト確認</li>
                      <li>• ニュース・プレスリリース</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">第3段階：応募・選考フェーズ（4-8週間）</h3>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-lg text-gray-900 mb-4">効率的な応募戦略</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#005BAC] rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">優先度別の応募スケジュール</h5>
                    <p className="text-sm text-gray-600">
                      第一希望群（5-7社）→第二希望群（8-12社）→第三希望群（その他）の順で段階的に応募
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#005BAC] rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">企業別カスタマイズ</h5>
                    <p className="text-sm text-gray-600">
                      志望動機・自己PRを企業ごとに最適化。テンプレートベースで効率化しつつ個別性を確保
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#005BAC] rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">進捗管理システム</h5>
                    <p className="text-sm text-gray-600">
                      Excelやツールで応募状況、選考段階、面接日程を一元管理
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">第4段階：内定・意思決定フェーズ（2-3週間）</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold text-green-700 mb-3">内定獲得後の対応</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 内定条件の詳細確認</li>
                  <li>• 年収・待遇の交渉</li>
                  <li>• 入社時期の調整</li>
                  <li>• 他社選考との調整</li>
                  <li>• 最終的な意思決定</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-blue-700 mb-3">退職準備・引き継ぎ</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 退職意思の伝達</li>
                  <li>• 引き継ぎ計画の作成</li>
                  <li>• 業務の整理・文書化</li>
                  <li>• 後任者への引き継ぎ</li>
                  <li>• 円満退職の実現</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">時間管理と効率化テクニック</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">現職との両立方法</h3>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-4">週間スケジュール例</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">時間帯</th>
                      <th className="p-2 text-left">平日</th>
                      <th className="p-2 text-left">土日</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b">
                      <td className="p-2 font-bold">早朝（6-8時）</td>
                      <td className="p-2">求人検索・企業研究</td>
                      <td className="p-2">履歴書・職務経歴書作成</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-bold">昼休み（12-13時）</td>
                      <td className="p-2">転職エージェント連絡</td>
                      <td className="p-2">面接準備・模擬面接</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-bold">夜間（19-21時）</td>
                      <td className="p-2">応募書類作成・送付</td>
                      <td className="p-2">業界研究・スキルアップ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">転職活動の効率化ツール</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3">進捗管理ツール</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Excel/Googleスプレッドシート：</strong>応募企業一覧、選考状況管理</li>
                  <li><strong>Trello/Notion：</strong>タスク管理、スケジュール調整</li>
                  <li><strong>カレンダーアプリ：</strong>面接日程、締切管理</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3">情報収集ツール</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>転職サイトアプリ：</strong>外出先での求人チェック</li>
                  <li><strong>企業口コミサイト：</strong>実際の働き方・社風調査</li>
                  <li><strong>業界ニュースアプリ：</strong>市場動向の把握</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">転職エージェント活用戦略</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">エージェント選択と使い分け</h3>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#FFB703] pl-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">総合型エージェント（2-3社）</h4>
                <p className="text-gray-700 text-sm mb-2">
                  幅広い業界・職種の求人を扱う大手エージェント
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• 求人数が豊富で選択肢が多い</li>
                  <li>• 転职市場の全体動向を把握できる</li>
                  <li>• 書類添削・面接対策のサポートが充実</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#FFB703] pl-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">特化型エージェント（1-2社）</h4>
                <p className="text-gray-700 text-sm mb-2">
                  特定の業界・職種に特化した専門エージェント
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• 業界の深い知識と専門性</li>
                  <li>• 非公開求人や独占求人へのアクセス</li>
                  <li>• 業界特有の選考対策</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">エージェントとの効果的な付き合い方</h3>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-blue-900 mb-4">コミュニケーションのコツ</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">効果的なアプローチ</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 希望条件を具体的に伝える</li>
                    <li>• 定期的な連絡・状況報告</li>
                    <li>• フィードバックの積極的な共有</li>
                    <li>• 複数エージェント利用の開示</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">注意すべき点</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 同じ求人への重複応募</li>
                    <li>• エージェントへの過度な依存</li>
                    <li>• 条件交渉の丸投げ</li>
                    <li>• 連絡不足による関係悪化</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">選考対策の効率化</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">面接準備の標準化</h3>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-lg text-gray-900 mb-4">面接対策テンプレート</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-[#005BAC] mb-2">基本質問への回答準備</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 自己紹介（1分版・3分版）</li>
                    <li>• 転职理由（ネガティブ→ポジティブ変換）</li>
                    <li>• 志望動機（企業別カスタマイズ）</li>
                    <li>• 強み・弱み（具体例付き）</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-[#005BAC] mb-2">STAR法による実績説明</h5>
                  <p className="text-xs text-gray-600 mb-2">Situation（状況）→ Task（課題）→ Action（行動）→ Result（結果）</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 主要プロジェクト3つの準備</li>
                    <li>• 数値を含む具体的な成果</li>
                    <li>• 困難克服のエピソード</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">オンライン面接の活用</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold text-green-700 mb-3">オンライン面接のメリット</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 移動時間・交通費の節約</li>
                  <li>• 現職バレのリスク軽減</li>
                  <li>• 面接回数の増加が可能</li>
                  <li>• 資料参照がしやすい環境</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="font-bold text-yellow-700 mb-3">成功のポイント</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 安定したネット環境の確保</li>
                  <li>• 適切な照明・背景設定</li>
                  <li>• カメラ目線・姿勢の意識</li>
                  <li>• 音声品質の事前確認</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">転職活動のリスク管理</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">現職バレ対策</h3>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-red-700 mb-4">バレやすい行動パターンと対策</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="ri-alert-line text-red-600 mr-2 mt-1"></i>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">面接での外出・早退の増加</h5>
                    <p className="text-xs text-gray-600">→ 有給取得理由を事前に準備、医療機関受診などの口実活用</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-alert-line text-red-600 mr-2 mt-1"></i>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">服装・身だしなみの変化</h5>
                    <p className="text-xs text-gray-600">→ 段階的な変化、面接当日の着替え準備</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-alert-line text-red-600 mr-2 mt-1"></i>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">PC・スマホでの転職サイト閲覧</h5>
                    <p className="text-xs text-gray-600">→ 個人端末の使用、プライベートブラウザの活用</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">メンタル管理・モチベーション維持</h3>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-blue-900 mb-4">転職活動における心理的負担への対処</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">ストレス要因</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 現職との両立による疲労</li>
                    <li>• 不採用によるモチベーション低下</li>
                    <li>• 長期化による焦りと不安</li>
                    <li>• 家族・周囲からのプレッシャー</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">対処方法</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 現実的な期間設定（3-6ヶ月）</li>
                    <li>• 小さな成功体験の積み重ね</li>
                    <li>• 信頼できる相談相手の確保</li>
                    <li>• 適度な休息・リフレッシュ</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">転職活動成功の指標</h2>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-green-700 mb-4">活動効果の測定方法</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">量的指標</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 書類通過率（目標30%以上）</li>
                    <li>• 面接実施率（目標20%以上）</li>
                    <li>• 内定獲得率（目標10%以上）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">質的指標</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 希望条件とのマッチ度</li>
                    <li>• 面接での手応え・フィードバック</li>
                    <li>• 企業からの評価・期待度</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">効率指標</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 1社あたりの準備時間</li>
                    <li>• 面接から内定までの期間</li>
                    <li>• 活動全体の総コスト</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#FFB703]/10 border border-[#FFB703] rounded-lg p-6 mb-8">
              <h3 className="font-bold text-[#FFB703] mb-3 flex items-center">
                <i className="ri-lightbulb-line mr-2"></i>
                効率的転職活動の成功法則
              </h3>
              <p className="text-gray-700 text-sm">
                転職活動は「質×量×継続性」で決まります。多くの企業に闇雲に応募するより、厳選した企業に対して質の高いアプローチを継続することが成功の鍵です。また、現職を続けながらの活動では、時間管理と体調管理が何より重要。無理のないペースで着実に進めていきましょう。
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/articles/career-timing" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20timing%20concept%20with%20elegant%20clock%20and%20calendar%20on%20executive%20mahogany%20desk%2C%20modern%20corporate%20office%20environment%2C%20strategic%20planning%20atmosphere%2C%20business%20decision%20making%20scene%2C%20natural%20lighting&width=400&height=300&seq=timing003&orientation=landscape"
                  alt="転職タイミング"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    転職タイミングの見極め方
                  </h3>
                  <p className="text-gray-600 text-sm">
                    市場動向と個人の状況を踏まえた最適な転職タイミングの判断基準を解説。
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/articles/interview-preparation" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20job%20interview%20scene%20in%20modern%20office%20conference%20room%2C%20business%20meeting%20environment%2C%20natural%20lighting%2C%20corporate%20interview%20setting%2C%20professional%20atmosphere&width=400&height=300&seq=interview005&orientation=landscape"
                  alt="面接対策ガイド"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    面接で差をつける対策法
                  </h3>
                  <p className="text-gray-600 text-sm">
                    よくある質問への回答例と、面接官に好印象を与える振る舞い方を実例で紹介。
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/articles/salary-negotiation" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20salary%20negotiation%20meeting%20at%20executive%20conference%20table%2C%20corporate%20handshake%20moment%2C%20modern%20office%20interior%20with%20city%20view%2C%20professional%20atmosphere%2C%20successful%20business%20deal&width=400&height=300&seq=salary004&orientation=landscape"
                  alt="年収交渉術"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    年収交渉の成功テクニック
                  </h3>
                  <p className="text-gray-600 text-sm">
                    内定後の年収交渉で失敗しないための準備と、効果的な交渉方法を具体例で解説。
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#005BAC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            効率的な転職活動を始めよう
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            本記事の戦略を活用して、計画的で効率的な転職活動を実践してください。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-['Pacifico'] text-2xl text-[#FFB703] mb-4">CareerForward</div>
            <p className="text-gray-300 mb-4">
              30代〜40代ホワイトカラーの転職を専門的にサポートする情報サイトです。
            </p>
            <div className="flex justify-center space-x-6 mb-8">
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CareerForward. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
