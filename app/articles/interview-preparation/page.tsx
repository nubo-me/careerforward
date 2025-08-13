
'use client';

import Link from 'next/link';
import Head from 'next/head';

export default function InterviewPreparationPage() {
  return (
    <>
      <Head>
        <title>面接対策と成功のコツ | CareerForward</title>
        <meta name="description" content="転職面接を成功に導く準備方法と実践的なコツを解説。30代〜40代ホワイトカラー向けの面接対策をご紹介。" />
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
            <span className="text-gray-700">面接で差をつける対策法</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            面接で差をつける対策法
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            よくある質問への回答例と、面接官に好印象を与える振る舞い方を実例で紹介します。30代〜40代の転職では、経験値と人間性の両方をアピールすることが重要です。現役面接官の視点から、本当に効果的な面接対策をお伝えします。
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <i className="ri-calendar-line mr-2"></i>
            <span className="mr-6">2024年1月20日</span>
            <i className="ri-time-line mr-2"></i>
            <span>読了時間: 約10分</span>
          </div>
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20meeting%20room%20with%20professional%20furniture%2C%20clean%20conference%20table%2C%20natural%20lighting%20from%20large%20windows%2C%20business%20environment%20without%20people%2C%20contemporary%20interior%20design%2C%20corporate%20atmosphere&width=800&height=400&seq=interview003&orientation=landscape"
            alt="面接対策イメージ"
            className="w-full h-64 object-cover object-top rounded-xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">面接成功の3つの柱</h2>
            
            <div className="bg-[#005BAC]/5 border-l-4 border-[#005BAC] p-6 mb-8">
              <h3 className="font-bold text-lg text-[#005BAC] mb-3">面接官が評価する3つのポイント</h3>
              <p className="text-gray-700">
                30代〜40代の転職面接では、単なるスキルマッチングを超えて、組織への貢献度と将来性が重視されます。以下の3つの観点で評価されることを理解し、それぞれに対する準備を怠らないことが重要です。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-user-line text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">人物評価</h3>
                <p className="text-gray-600 text-sm">
                  コミュニケーション能力、人間性、価値観の一致度を評価
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-bar-chart-line text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">能力評価</h3>
                <p className="text-gray-600 text-sm">
                  専門スキル、実績、問題解決能力、マネジメント経験
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-rocket-line text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">将来性評価</h3>
                <p className="text-gray-600 text-sm">
                  成長意欲、適応力、長期的なキャリアビジョン
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">よくある質問と模範回答例</h2>

            <div className="space-y-8 mb-12">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-[#005BAC] mb-4">
                  Q1. 「自己紹介をお願いします」
                </h3>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">回答のコツ</h4>
                  <p className="text-sm text-gray-700">
                    3分以内で、経歴→実績→志望動機の流れで簡潔に。応募職種に関連する経験を重点的に。
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">模範回答例</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    「田中と申します。大学卒業後、A社でシステムエンジニアとして8年間従事し、主に金融系システムの開発に携わりました。特に○○銀行の基幹システム刷新プロジェクトでは、チームリーダーとして15名のメンバーをまとめ、予定より1ヶ月早い納期で完了させました。この経験で身につけた技術力とプロジェクト管理能力を活かし、御社のDX推進事業に貢献したいと考え、応募いたしました。」
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-[#005BAC] mb-4">
                  Q2. 「転職理由を教えてください」
                </h3>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">回答のコツ</h4>
                  <p className="text-sm text-gray-700">
                    ネガティブな理由は避け、キャリアアップや新しい挑戦への意欲を前面に。
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-bold text-red-700 mb-2">❌ 避けるべき回答</h5>
                    <p className="text-xs text-gray-700">
                      「上司と合わない」「給料が安い」「残業が多い」
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-700 mb-2">✅ 良い回答例</h5>
                    <p className="text-xs text-gray-700">
                      「より幅広い領域で経験を積み、自分の可能性を広げたい」
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-[#005BAC] mb-4">
                  Q3. 「あなたの強みは何ですか」
                </h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">効果的な回答構成</h4>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>強みを一言で表現</li>
                    <li>具体的なエピソード・実績で証明</li>
                    <li>その強みを応募企業でどう活かすか</li>
                  </ol>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">面接当日の振る舞い方</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">第一印象を決める5つのポイント</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#005BAC] rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">服装・身だしなみ</h4>
                    <p className="text-sm text-gray-600">
                      清潔で控えめな服装。業界に合わせた適切な服装選択が重要。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#005BAC] rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">到着時間</h4>
                    <p className="text-sm text-gray-600">
                      15分前には到着。早すぎも迷惑になるため、近くで時間調整。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#005BAC] rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">挨拶・お辞儀</h4>
                    <p className="text-sm text-gray-600">
                      明るく元気な挨拶。相手の目を見て、適度なお辞儀を心がける。
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#005BAC] rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">座り方・姿勢</h4>
                    <p className="text-sm text-gray-600">
                      背筋を伸ばし、手は膝の上に。リラックスしつつも真剣な姿勢。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#005BAC] rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">話し方・表情</h4>
                    <p className="text-sm text-gray-600">
                      ゆっくり、はっきりと話す。適度な笑顔と真剣な表情のバランス。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">面接タイプ別対策</h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#FFB703] pl-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">一次面接（人事面接）</h3>
                <p className="text-gray-700 mb-3">基本的なスキルマッチと人物評価が中心</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 履歴書・職務経歴書の内容確認</li>
                  <li>• 転職理由と志望動機の深掘り</li>
                  <li>• 基本的なコミュニケーション能力の評価</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#FFB703] pl-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">二次面接（現場責任者面接）</h3>
                <p className="text-gray-700 mb-3">専門性とチームフィットの評価</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 専門スキルの詳細確認</li>
                  <li>• 具体的な業務経験の深掘り</li>
                  <li>• チームでの働き方・協調性の確認</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#FFB703] pl-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">最終面接（役員面接）</h3>
                <p className="text-gray-700 mb-3">企業理念との適合性と将来性の評価</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 企業理念・ビジョンへの共感度</li>
                  <li>• 長期的なキャリアプラン</li>
                  <li>• リーダーシップ・マネジメント能力</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">逆質問で差をつける</h2>

            <p className="text-gray-700 mb-6">
              「何か質問はありますか？」は面接の最後によく聞かれる質問です。この逆質問で、あなたの企業研究度と入社意欲をアピールできます。
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold text-green-700 mb-4">効果的な逆質問例</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 「入社後、最初にお任せいただく業務について教えてください」</li>
                  <li>• 「チームの雰囲気や文化について教えてください」</li>
                  <li>• 「この職種で活躍する人の共通点はありますか？」</li>
                  <li>• 「今後の事業展開や成長戦略を教えてください」</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-bold text-red-700 mb-4">避けるべき逆質問</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 「残業はどのくらいありますか？」</li>
                  <li>• 「有給は取りやすいですか？」</li>
                  <li>• 「ホームページに載っていることの再確認」</li>
                  <li>• 「特にありません」</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">面接後のフォローアップ</h2>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-4">面接当日にやるべきこと</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>面接の振り返りをノートに記録</li>
                <li>気づいた点や改善点をメモ</li>
                <li>お礼メール（24時間以内）的送信検討</li>
                <li>次回面接の準備開始</li>
              </ol>
            </div>

            <div className="bg-[#FFB703]/10 border border-[#FFB703] rounded-lg p-6 mb-8">
              <h3 className="font-bold text-[#FFB703] mb-3 flex items-center">
                <i className="ri-lightbulb-line mr-2"></i>
                面接成功の秘訣
              </h3>
              <p className="text-gray-700 text-sm">
                面接は「相互理解の場」です。企業があなたを評価すると同時に、あなたも企業を評価する機会として捉えましょう。自然体で臨みつつ、準備した内容を適切にアピールすることが成功の鍵です。
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
            <Link href="/articles/resume-writing" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20resume%20document%20on%20clean%20modern%20desk%20workspace%20with%20laptop%20and%20business%20materials%2C%20organized%20office%20environment%2C%20natural%20lighting%20through%20window&width=400&height=300&seq=resume002&orientation=landscape"
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

            <Link href="/articles/salary-negotiation" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20salary%20negotiation%20meeting%20at%20executive%20conference%20table%2C%20corporate%20handshake%20moment%2C%20modern%20office%20interior%20with%20city%20view%2C%20professional%20atmosphere&width=400&height=300&seq=salary002&orientation=landscape"
                  alt="年収交渉術"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    年収交渉の成功テクニック
                  </h3>
                  <p className="text-gray-600 text-sm">
                    内定後の年収交渉で失敗しないたための準備と、効果的な交渉方法を具体例で解説。
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/articles/career-timing" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20timing%20concept%20with%20calendar%20and%20clock%20on%20executive%20desk%2C%20modern%20office%20workspace%2C%20corporate%20planning%20atmosphere%2C%20strategic%20decision%20making%20environment&width=400&height=300&seq=timing001&orientation=landscape"
                  alt="転職タイミング"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    転職タイミングの見極め方
                  </h3>
                  <p className="text-gray-600 text-sm">
                    市場動向と個人の状況を踏まえた最適な転職タイミングの判断基準を紹介。
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
            面接対策のポイントを実践しよう
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            本記事の面接テクニックを参考に、自信を持って面接に臨んでください。
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
    </>
  );
}
