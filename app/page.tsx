
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-['Pacifico'] text-2xl text-[#005BAC]">CareerForward</Link>
            <nav className="hidden md:flex space-x-8">
              <a href="#success-stories" className="text-gray-700 hover:text-[#005BAC] font-medium">成功事例</a>
              <a href="#knowhow" className="text-gray-700 hover:text-[#005BAC] font-medium">転職ノウハウ</a>
              <a href="#faq" className="text-gray-700 hover:text-[#005BAC] font-medium">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center bg-top" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 91, 172, 0.3), rgba(0, 91, 172, 0.3)), url('https://readdy.ai/api/search-image?query=Confident%20professional%20Japanese%20businesswoman%20standing%20in%20modern%20office%20with%20city%20skyline%20view%2C%20wearing%20elegant%20business%20suit%2C%20natural%20sunlight%20through%20large%20windows%2C%20successful%20career%20woman%20portrait%2C%20contemporary%20corporate%20environment%2C%20inspiring%20leadership%20pose&width=1600&height=900&seq=hero002&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                転職で、人生を3歩先へ。
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
                キャリアの専門家が"本音"で語る、失敗しない転職戦略。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">転職でよくある課題と解決策</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              多くの転職希望者が直面する問題を、当サイトがどのように解決するかご紹介します。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-close-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">転職エージェント選びで失敗</h3>
              <p className="text-gray-600 mb-6">
                どのエージェントが良いかわからず、結果的に自分に合わないサービスを選んでしまう。
              </p>
              <div className="border-t pt-6">
                <div className="w-16 h-16 bg-[#005BAC]/10 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-check-line text-[#005BAC] text-2xl"></i>
                </div>
                <h4 className="font-bold text-[#005BAC] mb-2">専門家による厳選比較</h4>
                <p className="text-gray-600">
                  現役キャリアコンサルタントが実際に利用し、本当におすすめできるエージェントのみを厳選して比較。
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-question-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">転職活動の進め方が不明</h3>
              <p className="text-gray-600 mb-6">
                履歴書の書き方から面接対策まで、何から始めればいいかわからない。
              </p>
              <div className="border-t pt-6">
                <div className="w-16 h-16 bg-[#005BAC]/10 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-file-text-line text-[#005BAC] text-2xl"></i>
                </div>
                <h4 className="font-bold text-[#005BAC] mb-2">実例ベースのノウハウ</h4>
                <p className="text-gray-600">
                  実際の転職成功者の事例をもとに、段階的な転職戦略を具体的に解説。
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-time-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">市場価値の把握不足</h3>
              <p className="text-gray-600 mb-6">
                自分のスキルがどの程度評価されるか、適正年収がわからない。
              </p>
              <div className="border-t pt-6">
                <div className="w-16 h-16 bg-[#005BAC]/10 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-bar-chart-line text-[#005BAC] text-2xl"></i>
                </div>
                <h4 className="font-bold text-[#005BAC] mb-2">大手〜スタートアップ求人網羅</h4>
                <p className="text-gray-600">
                  幅広い企業規模の求人情報から、あなたの市場価値を正確に診断。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">転職成功事例</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              実際に当サイトを通じて転職を成功させた方々の体験談をご紹介します。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20businessman%20in%20his%20thirties%20wearing%20business%20suit%2C%20confident%20smile%2C%20clean%20corporate%20headshot%20photography%2C%20natural%20lighting%2C%20professional%20background%2C%20high%20quality%20portrait&width=400&height=400&seq=success001&orientation=squarish"
                  alt="転職成功者T.S.さんの写真"
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">T.S.さん（35歳）</h3>
                  <p className="text-gray-600">IT業界 → コンサルティング</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4">
                「年収350万から580万へアップ。専門家のアドバイスで自分の強みを明確にでき、理想的なポジションに転職できました。面接対策も的確で、3社中2社から内定をいただけました。」
              </blockquote>
              <div className="text-[#FFB703] font-bold">年収230万円アップ</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20businesswoman%20in%20her%20late%20thirties%2C%20confident%20expression%2C%20wearing%20professional%20attire%2C%20clean%20corporate%20headshot%20photography%2C%20natural%20lighting%2C%20modern%20office%20background&width=400&height=400&seq=success002&orientation=squarish"
                  alt="転職成功者M.K.さんの写真"
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">M.K.さん（42歳）</h3>
                  <p className="text-gray-600">金融 → スタートアップCFO</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4">
                「大手金融機関から急成長スタートアップのCFOへ。リスクもありましたが、詳細な企業分析と将来性の検討で、キャリアの幅が大きく広がりました。ワークライフバランスも改善しました。」
              </blockquote>
              <div className="text-[#FFB703] font-bold">CFOポジション獲得</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20businessman%20in%20his%20early%20forties%2C%20warm%20smile%2C%20wearing%20business%20casual%20attire%2C%20clean%20corporate%20headshot%20photography%2C%20natural%20lighting%2C%20contemporary%20office%20setting&width=400&height=400&seq=success003&orientation=squarish"
                  alt="転職成功者H.N.さんの写真"
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">H.N.さん（38歳）</h3>
                  <p className="text-gray-600">製造業 → IT企業PM</p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4">
                「異業種転職は不安でしたが、スキルの棚卸しから始めて、製造業での経験をITプロジェクト管理に活かせると発見。転職活動期間わずか2ヶ月で理想の企業に内定しました。」
              </blockquote>
              <div className="text-[#FFB703] font-bold">異業種転職成功</div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Articles */}
      <section id="knowhow" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">転職ノウハウ</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              専門家が教える実践的な転職テクニックを詳しく解説します。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/articles/resume-writing" className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20resume%20document%20on%20modern%20desk%20with%20laptop%20and%20coffee%2C%20clean%20office%20environment%2C%20business%20document%20photography%2C%20natural%20lighting%2C%20minimalist%20workspace%20setup%2C%20high%20quality%20business%20photography&width=400&height=300&seq=knowhow001&orientation=landscape"
                  alt="履歴書作成ガイド"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    通る履歴書の書き方
                  </h3>
                  <p className="text-gray-600 mb-4">
                    採用担当者の目に留まる履歴書の構成と、職歴を魅力的に表現する方法を詳しく解説。
                  </p>
                  <div className="text-[#005BAC] font-medium">詳しく読む →</div>
                </div>
              </div>
            </Link>

            <Link href="/articles/interview-preparation" className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20job%20interview%20preparation%20scene%20in%20modern%20corporate%20office%2C%20business%20meeting%20setup%20with%20conference%20table%20and%20chairs%2C%20natural%20lighting%20through%20large%20windows%2C%20clean%20contemporary%20office%20interior%20without%20people%2C%20professional%20business%20environment&width=400&height=300&seq=interview001&orientation=landscape"
                  alt="面接対策ガイド"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    面接で差をつける対策法
                  </h3>
                  <p className="text-gray-600 mb-4">
                    よくある質問への回答例と、面接官に好印象を与える振る舞い方を実例で紹介。
                  </p>
                  <div className="text-[#005BAC] font-medium">詳しく読む →</div>
                </div>
              </div>
            </Link>

            <Link href="/articles/market-value" className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20chart%20and%20analytics%20on%20computer%20screen%2C%20market%20data%20visualization%2C%20modern%20office%20setting%2C%20financial%20graphs%20and%20statistics%2C%20clean%20workspace%20with%20laptop%2C%20business%20analysis%20concept&width=400&height=300&seq=knowhow003&orientation=landscape"
                  alt="市場価値診断"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    市場価値の正しい測り方
                  </h3>
                  <p className="text-gray-600 mb-4">
                    自分のスキルと経験を客観視し、適正年収を把握するための診断方法を解説。
                  </p>
                  <div className="text-[#005BAC] font-medium">詳しく読む →</div>
                </div>
              </div>
            </Link>

            <Link href="/articles/salary-negotiation" className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20salary%20negotiation%20meeting%2C%20business%20discussion%20at%20conference%20table%2C%20corporate%20handshake%2C%20modern%20office%20environment%2C%20professional%20atmosphere%2C%20business%20contract%20signing%20scene&width=400&height=300&seq=knowhow004&orientation=landscape"
                  alt="年収交渉術"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    年収交渉の成功テクニック
                  </h3>
                  <p className="text-gray-600 mb-4">
                    内定後の年収交渉で失敗しないための準備と、効果的な交渉方法を具体例で解説。
                  </p>
                  <div className="text-[#005BAC] font-medium">詳しく読む →</div>
                </div>
              </div>
            </Link>

            <Link href="/articles/career-timing" className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20timing%20concept%20with%20elegant%20clock%20and%20calendar%20on%20executive%20mahogany%20desk%2C%20modern%20corporate%20office%20environment%2C%20strategic%20planning%20atmosphere%2C%20business%20decision%20making%20scene%2C%20natural%20lighting%20through%20large%20windows&width=400&height=300&seq=knowhow005&orientation=landscape"
                  alt="転職タイミングの見極め方"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    転職タイミングの見極め方
                  </h3>
                  <p className="text-gray-600 mb-4">
                    市場動向と個人の状況を踏まえた最適な転職タイミングの判断基準を詳しく解説。
                  </p>
                  <div className="text-[#005BAC] font-medium">詳しく読む →</div>
                </div>
              </div>
            </Link>

            <Link href="/articles/job-search-strategy" className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20strategy%20planning%20workspace%20with%20organized%20documents%2C%20laptop%20computer%2C%20calendar%2C%20and%20planning%20materials%20on%20modern%20executive%20desk%2C%20strategic%20business%20planning%20atmosphere%2C%20corporate%20efficiency%20concept%2C%20clean%20office%20environment%20with%20natural%20lighting&width=400&height=300&seq=knowhow006&orientation=landscape"
                  alt="効率的な転職活動の進め方"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    効率的な転職活動の進め方
                  </h3>
                  <p className="text-gray-600 mb-4">
                    限られた時間で最大の成果を出すための転職活動戦略と具体的な進め方を解説。
                  </p>
                  <div className="text-[#005BAC] font-medium">詳しく読む →</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">よくある質問</h2>
            <p className="text-lg text-gray-600">
              転職に関してよく寄せられる質問にお答えします。
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">転職エージェントは本当に無料で使えますか？</h3>
              <p className="text-gray-600">
                はい、転職エージェントは求職者の方は完全無料でご利用いただけます。企業側が成功報酬として費用を支払う仕組みになっているため、転職希望者の方に費用が発生することはありません。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">在職中でも転職活動はできますか？</h3>
              <p className="text-gray-600">
                もちろん可能です。むしろ在職中の転職活動をおすすめします。収入が安定している状態で活動できるため、焦らずに理想の転職先を見つけることができます。面談は平日夜間や土日でも対応可能です。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">転職活動はどのくらいの期間がかかりますか？</h3>
              <p className="text-gray-600">
                一般的に3〜6ヶ月程度が目安です。ただし、ご希望の条件や市場状況、転職活動にかけられる時間によって変わります。急いで転職する必要がある場合は、より短期間での転職も可能です。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">複数の転職エージェントを同時に利用しても大丈夫ですか？</h3>
              <p className="text-gray-600">
                問題ありません。複数のエージェントを利用することで、より多くの求人に触れることができ、転職成功の可能性が高まります。ただし、同じ企業に複数のエージェント経由で応募することは避けてください。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">年収アップは本当に可能ですか？</h3>
              <p className="text-gray-600">
                はい、適切な戦略を立てることで年収アップは十分可能です。当サイト経由での転職成功者の平均年収アップ率は約65%※です。スキルの棚卸しと市場価値の正確な把握が重要なポイントになります。
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">未経験の業界への転職は可能ですか？</h3>
              <p className="text-gray-600">
                30代〜40代でも未経験業界への転職は可能です。重要なのは、これまでの経験で身につけたスキルを新しい業界でどう活かせるかを明確にすることです。業界研究と適切なアピール方法を専門家がサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#005BAC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            転職成功のための情報をお届け
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            専門家による転職ノウハウと最新の市場情報で、あなたの転職活動をサポートします。
          </p>
          <p className="text-blue-100 mt-4 text-sm">
            実践的な転職情報 • 市場価値診断 • 成功事例紹介
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
