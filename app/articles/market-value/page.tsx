
'use client';

import Link from 'next/link';
import Head from 'next/head';

export default function MarketValuePage() {
  return (
    <>
      <Head>
        <title>市場価値の正しい測り方 | CareerForward</title>
        <meta name="description" content="転職市場における自身の価値を正確に把握する方法を解説。30代〜40代ホワイトカラーのキャリア戦略をサポート。" />
      </Head>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-['Pacifico'] text-2xl text-[#005BAC]">CareerForward</Link>
            <nav className="hidden md:flex space-x-8">
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
            <span className="text-gray-700">市場価値の正しい測り方</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            市場価値の正しい測り方
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            自分のスキルと経験を客観視し、適正年収を把握するための診断方法を詳しく解説します。転職活動を始める前に、まずは現在のあなたの市場価値を正確に把握することが成功への第一歩です。
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <i className="ri-calendar-line mr-2"></i>
            <span className="mr-6">2024年1月25日</span>
            <i className="ri-time-line mr-2"></i>
            <span>読了時間: 約12分</span>
          </div>
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20business%20market%20analysis%20dashboard%20on%20computer%20screen%20with%20charts%20and%20graphs%2C%20modern%20office%20workspace%2C%20financial%20data%20visualization%2C%20market%20value%20assessment%20tools%2C%20clean%20contemporary%20office%20environment%2C%20business%20analytics%20concept&width=800&height=400&seq=market001&orientation=landscape"
            alt="市場価値診断イメージ"
            className="w-full h-64 object-cover object-top rounded-xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">市場価値を測る4つの要素</h2>
            
            <div className="bg-[#005BAC]/5 border-l-4 border-[#005BAC] p-6 mb-8">
              <h3 className="font-bold text-lg text-[#005BAC] mb-3">市場価値 = スキル × 経験 × 実績 × 需要</h3>
              <p className="text-gray-700">
                市場価値は単純にスキルの高さだけで決まるものではありません。経験の深さ、実績の大きさ、そして市場での需要の高さが複合的に作用して決まります。まずはこの4つの要素を正しく理解することから始めましょう。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-tools-line text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">スキル（Skills）</h3>
                <p className="text-gray-600 text-sm mb-3">
                  専門的な技術力や知識、資格など
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• プログラミング言語</li>
                  <li>• マネジメント能力</li>
                  <li>• 語学力・資格</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">経験（Experience）</h3>
                <p className="text-gray-600 text-sm mb-3">
                  業界・職種での実務経験年数と質
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• 業界経験年数</li>
                  <li>• プロジェクト規模</li>
                  <li>• 責任範囲・権限</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-trophy-line text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">実績（Achievement）</h3>
                <p className="text-gray-600 text-sm mb-3">
                  具体的な成果・貢献度の大きさ
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• 売上・利益への貢献</li>
                  <li>• コスト削減効果</li>
                  <li>• 業務効率化実績</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-line-chart-line text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">需要（Demand）</h3>
                <p className="text-gray-600 text-sm mb-3">
                  市場でのニーズの高さ・希少性
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• 求人数の多さ</li>
                  <li>• 競合人材の少なさ</li>
                  <li>• 成長分野での経験</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">市場価値診断の実践ステップ</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">ステップ1: スキルの棚卸し</h3>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-3">スキル棚卸しシート</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-bold text-gray-700 mb-2">技術スキル</h5>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>□ プログラミング言語</li>
                    <li>□ データ分析ツール</li>
                    <li>□ プロジェクト管理ツール</li>
                    <li>□ 業界特有のソフト</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-700 mb-2">ビジネススキル</h5>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>□ マネジメント経験</li>
                    <li>□ 企画・戦略立案</li>
                    <li>□ 営業・交渉力</li>
                    <li>□ プレゼンテーション</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-700 mb-2">ヒューマンスキル</h5>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>□ コミュニケーション力</li>
                    <li>□ チームワーク</li>
                    <li>□ 問題解決能力</li>
                    <li>□ 語学力</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">ステップ2: 実績の数値化</h3>

            <p className="text-gray-700 mb-6">
              実績を数値で表現することで、あなたの価値を客観的に示すことができます。以下の観点で整理してみましょう。
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#005BAC] pl-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">売上・利益への貢献</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-bold text-red-700 mb-2">❌ 曖昧な表現</h5>
                    <p className="text-sm text-gray-700">「営業成績が良く、会社に貢献した」</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-700 mb-2">✅ 数値化した表現</h5>
                    <p className="text-sm text-gray-700">「年間売上3億円達成、前年比150%を3年連続で実現」</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-[#005BAC] pl-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">コスト削減・効率化</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-bold text-red-700 mb-2">❌ 曖昧な表現</h5>
                    <p className="text-sm text-gray-700">「業務効率を改善した」</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-700 mb-2">✅ 数値化した表現</h5>
                    <p className="text-sm text-gray-700">「システム導入により月間40時間の業務時間削減、年間コスト800万円削減」</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">ステップ3: 市場調査の実施</h3>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-lg text-gray-900 mb-4">効果的な市場調査方法</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-[#005BAC] mb-2">求人サイトでの調査</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 同じ職種・業界の求人年収レンジ</li>
                    <li>• 必要スキル・経験年数の確認</li>
                    <li>• 求人数の多さ（需要の高さ）</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-[#005BAC] mb-2">転職エージェントへの相談</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 専門家による客観的評価</li>
                    <li>• 市場動向の最新情報</li>
                    <li>• 類似経歴者の転職実績</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">年代・職種別市場価値の特徴</h2>

            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">30代前半（28-35歳）の市場価値</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-[#005BAC] mb-2">高評価ポイント</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 専門スキルの深化</li>
                      <li>• 成長意欲とポテンシャル</li>
                      <li>• チームリーダー経験</li>
                      <li>• 新技術への適応力</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FFB703] mb-2">注意点</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• マネジメント経験の不足</li>
                      <li>• 業界経験の浅さ</li>
                      <li>• 実績の定量化不足</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">30代後半〜40代（35-45歳）の市場価値</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-[#005BAC] mb-2">高評価ポイント</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 豊富なマネジメント経験</li>
                      <li>• 業界の深い知識・人脈</li>
                      <li>• 大きな実績・成果</li>
                      <li>• 戦略的思考力</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FFB703] mb-2">注意点</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 新技術への対応</li>
                      <li>• 年収期待値の高さ</li>
                      <li>• キャリアチェンジの難しさ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">市場価値を高める戦略</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">短期的な価値向上施策（3-6ヶ月）</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#005BAC] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-book-line text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">資格・スキル取得</h4>
                <p className="text-gray-600 text-sm">
                  業界で評価される資格や、需要の高いスキルを習得する
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#005BAC] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-file-text-line text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">実績の整理</h4>
                <p className="text-gray-600 text-sm">
                  過去の成果を数値化し、アピールポイントを明確にする
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#005BAC] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-team-line text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">人脈形成</h4>
                <p className="text-gray-600 text-sm">
                  業界イベントやセミナーに参加し、ネットワークを拡大する
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">中長期的な価値向上施策（1-3年）</h3>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-green-700 mb-3">戦略的キャリア設計</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>成長市場・注目分野での経験積み上げ</li>
                <li>マネジメント・リーダーシップ能力の強化</li>
                <li>専門性と汎用性のバランス取り</li>
                <li>副業・社外活動での実績作り</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">市場価値診断チェックリスト</h2>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-4">あなたの市場価値を5段階で自己診断</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-700">業界での専門性・知識レベル</span>
                  <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">低</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                    </div>
                    <span className="text-xs text-gray-500">高</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-700">マネジメント・リーダーシップ経験</span>
                  <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">なし</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                    </div>
                    <span className="text-xs text-gray-500">豊富</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-700">定量的な実績・成果</span>
                  <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">不明確</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                    </div>
                    <span className="text-xs text-gray-500">明確</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-700">市場での需要・希少性</span>
                  <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">低</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                    </div>
                    <span className="text-xs text-gray-500">高</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">ネットワーク・人脈の広さ</span>
                  <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">狭い</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                    </div>
                    <span className="text-xs text-gray-500">広い</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFB703]/10 border border-[#FFB703] rounded-lg p-6 mb-8">
              <h3 className="font-bold text-[#FFB703] mb-3 flex items-center">
                <i className="ri-lightbulb-line mr-2"></i>
                市場価値向上のポイント
              </h3>
              <p className="text-gray-700 text-sm">
                市場価値は一朝一夕で上がるものではありません。継続的な学習と経験の積み重ね、そして定期的な見直しが重要です。転職を考えていない時期でも、常に自分の市場価値を意識してキャリアを築いていくことが、将来の選択肢を広げる鍵となります。
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
            <Link href="/articles/salary-negotiation" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20salary%20negotiation%20meeting%20at%20executive%20conference%20table%2C%20corporate%20handshake%20moment%2C%20modern%20office%20interior%20with%20city%20view%2C%20professional%20atmosphere%2C%20successful%20business%20deal&width=400&height=300&seq=salary003&orientation=landscape"
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

            <Link href="/articles/resume-writing" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20resume%20document%20on%20clean%20modern%20desk%20workspace%20with%20laptop%20and%20business%20materials%2C%20organized%20office%20environment%2C%20natural%20lighting%20through%20window%2C%20document%20preparation%20concept&width=400&height=300&seq=resume003&orientation=landscape"
                  alt="履歴書作成ガイド"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    通る履歴書の書き方
                  </h3>
                  <p className="text-gray-600 text-sm">
                    採用担当者の目に留まる履歴書の構成と、職歴を魅力的に表現する方法を詳しく解説。
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/articles/interview-preparation" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20job%20interview%20scene%20in%20modern%20office%20conference%20room%2C%20business%20meeting%20environment%2C%20natural%20lighting%2C%20corporate%20interview%20setting%2C%20professional%20atmosphere&width=400&height=300&seq=interview004&orientation=landscape"
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#005BAC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            市場価値を正しく把握しよう
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            本記事の診断方法を活用して、あなたの適正年収を把握してください。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-['Pacifico'] text-2xl text-[#FFB703] mb-4">CareerForward</div>
            <p className="text-gray-300 mb-4">
              働くすべての人の転職・キャリア形成を支援する情報サイトです。
            </p>
            <div className="flex justify-center space-x-6 mb-8">
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CareerForward. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
