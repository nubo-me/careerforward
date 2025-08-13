
'use client';

import Link from 'next/link';
import Head from 'next/head';

export default function ResumeWritingPage() {
  return (
    <>
      <Head>
        <title>履歴書・職務経歴書の書き方 | CareerForward</title>
        <meta name="description" content="採用担当者の目に留まる履歴書の構成と、職歴を魅力的に表現する方法を詳しく解説。30代〜40代ホワイトカラー向けの転職ノウハウをご紹介。" />
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
            <span className="text-gray-700">通る履歴書の書き方</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            通る履歴書の書き方
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            採用担当者の目に留まる履歴書の構成と、職歴を魅力的に表現する方法を詳しく解説します。現役キャリアコンサルタントが実際の成功事例をもとに、書類選考を突破するためのポイントをお伝えします。
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <i className="ri-calendar-line mr-2"></i>
            <span className="mr-6">2024年1月15日</span>
            <i className="ri-time-line mr-2"></i>
            <span>読了時間: 約8分</span>
          </div>
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20resume%20document%20on%20clean%20modern%20desk%20with%20laptop%20computer%20and%20pen%2C%20well-organized%20workspace%2C%20natural%20lighting%2C%20business%20document%20photography%2C%20minimalist%20office%20environment%2C%20high%20quality%20professional%20setting&width=800&height=400&seq=resume001&orientation=landscape"
            alt="履歴書作成イメージ"
            className="w-full h-64 object-cover object-top rounded-xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">履歴書で最も重要な3つのポイント</h2>
            
            <div className="bg-[#005BAC]/5 border-l-4 border-[#005BAC] p-6 mb-8">
              <h3 className="font-bold text-lg text-[#005BAC] mb-3">採用担当者が履歴書を見る時間は平均わずか6秒</h3>
              <p className="text-gray-700">
                多くの応募書類の中から、あなたの履歴書が選ばれるためには、短時間で強い印象を与える必要があります。以下の3つのポイントを押さえることで、書類選考通過率を大幅に向上させることができます。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">見やすいレイアウト</h3>
                <p className="text-gray-600 text-sm">
                  情報が整理され、一目で理解できる構成にすることが重要です。
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">具体的な実績</h3>
                <p className="text-gray-600 text-sm">
                  数字を使って成果を定量的に表現し、説得力を高めます。
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">企業との適合性</h3>
                <p className="text-gray-600 text-sm">
                  応募企業が求める人材像に合わせた内容にカスタマイズします。
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">基本情報欄の書き方</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">写真の選び方</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>スーツ着用で清潔感のある写真を選ぶ</li>
              <li>背景は白またはグレーの無地</li>
              <li>3ヶ月以内に撮影した写真を使用</li>
              <li>笑顔は控えめに、真剣な表情を心がける</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">連絡先情報</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-gray-900 mb-2">✓ チェックポイント</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• メールアドレスは必ずPCで確認できるものを記載</li>
                <li>• 電話番号は日中連絡の取れる番号を記載</li>
                <li>• 住所は都道府県から正確に記載</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">職歴欄の効果的な書き方</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">職歴を魅力的に見せる5つのテクニック</h3>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#005BAC] pl-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">1. 数字で成果を表現する</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-bold text-red-700 mb-2">❌ 悪い例</h5>
                    <p className="text-sm text-gray-700">「営業成績が良く、チームに貢献した」</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-700 mb-2">✅ 良い例</h5>
                    <p className="text-sm text-gray-700">「年間売上目標120%達成、チーム内売上1位を3年連続で獲得」</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-[#005BAC] pl-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">2. 業務内容を具体的に記載</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-bold text-red-700 mb-2">❌ 悪い例</h5>
                    <p className="text-sm text-gray-700">「システム開発に従事」</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-700 mb-2">✅ 良い例</h5>
                    <p className="text-sm text-gray-700">「ECサイトの決済システム開発（Java, MySQL使用）で月間100万PVのサイトを構築」</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">志望動機の書き方</h2>

            <p className="text-gray-700 mb-6">
              志望動機は履歴書の中で最も重要な項目の一つです。採用担当者は、あなたがなぜその会社を選んだのか、どのような価値を提供できるのかを知りたがっています。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">効果的な志望動機の構成</h3>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>なぜその業界・企業なのか</strong> - 具体的な理由を述べる</li>
                <li><strong>自分の経験・スキルとの関連性</strong> - どう活かせるかを説明</li>
                <li><strong>入社後の貢献・目標</strong> - 具体的な成果をイメージさせる</li>
              </ol>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">志望動機の実例</h3>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-blue-900 mb-3">IT業界からコンサルティング業界への転職例</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                「御社の『テクノロジーで企業変革を支援する』というミッションに強く共感いたします。前職では5年間システムエンジニアとして従事し、クライアント企業のDX推進プロジェクトに携わってまいりました。特に製造業A社では、基幹システム刷新により業務効率30%向上を実現し、年間コスト削減効果2億円を達成いたしました。この経験で培ったテクノロジーの知見と課題解決力を活かし、御社でより幅広い企業の変革支援に貢献したいと考え、志望いたします。」
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">履歴書作成時の注意点</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-bold text-red-700 mb-4 flex items-center">
                  <i className="ri-close-circle-line mr-2"></i>
                  やってはいけないこと
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 誤字脱字がある</li>
                  <li>• 写真が古い、不適切</li>
                  <li>• 職歴の空白期間の説明がない</li>
                  <li>• 志望動機が曖昧・抽象的</li>
                  <li>• フォーマットが統一されていない</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold text-green-700 mb-4 flex items-center">
                  <i className="ri-check-circle-line mr-2"></i>
                  必ずやるべきこと
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 複数人でチェックしてもらう</li>
                  <li>• 企業ごとにカスタマイズする</li>
                  <li>• 定量的な成果を盛り込む</li>
                  <li>• 見やすいレイアウトを心がける</li>
                  <li>• 印刷して最終確認する</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">年代別履歴書のポイント</h2>

            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">30代前半（20代後半〜35歳）</h3>
                <p className="text-gray-700 text-sm mb-3">
                  専門性とリーダーシップの芽を強調することが重要です。
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 専門スキルの深化をアピール</li>
                  <li>• チームでの役割・責任を明確に</li>
                  <li>• 学習意欲・成長性を示す</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">30代後半〜40代（35歳〜45歳）</h3>
                <p className="text-gray-700 text-sm mb-3">
                  マネジメント経験と戦略的思考力をアピールしましょう。
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• マネジメント実績を数字で表現</li>
                  <li>• 事業への貢献度を具体化</li>
                  <li>• 業界知識・人脈の価値を示す</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#FFB703]/10 border border-[#FFB703] rounded-lg p-6 mb-8">
              <h3 className="font-bold text-[#FFB703] mb-3 flex items-center">
                <i className="ri-lightbulb-line mr-2"></i>
                プロからのアドバイス
              </h3>
              <p className="text-gray-700 text-sm">
                履歴書は「あなたという商品」のカタログです。採用担当者に「この人に会ってみたい」と思わせることが最大の目的です。完璧を求めすぎず、あなたの魅力が伝わる履歴書作りを心がけてください。
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
            <Link href="/articles/interview-preparation" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20job%20interview%20scene%20in%20modern%20office%20conference%20room%2C%20two%20business%20people%20having%20discussion%2C%20natural%20lighting%2C%20corporate%20meeting%20environment%2C%20professional%20handshake%20moment&width=400&height=300&seq=interview001&orientation=landscape"
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

            <Link href="/articles/market-value" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20analytics%20chart%20on%20computer%20screen%20showing%20market%20data%20and%20statistics%2C%20modern%20office%20workspace%2C%20financial%20graphs%20visualization%2C%20business%20analysis%20concept&width=400&height=300&seq=market001&orientation=landscape"
                  alt="市場価値診断"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    市場価値の正しい測り方
                  </h3>
                  <p className="text-gray-600 text-sm">
                    自分のスキルと経験を客観視し、適正年収を把握するための診断方法を解説。
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/articles/salary-negotiation" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20negotiation%20meeting%20at%20conference%20table%2C%20corporate%20handshake%20scene%2C%20modern%20office%20environment%2C%20salary%20discussion%20atmosphere%2C%20business%20contract%20signing&width=400&height=300&seq=salary001&orientation=landscape"
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
            履歴書作成のポイントを活用しよう
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            本記事のテクニックを活用して、魅力的な履歴書を作成してください。
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
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CareerForward. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
