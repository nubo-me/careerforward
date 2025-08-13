
'use client';

import Link from 'next/link';
import Head from 'next/head';

export default function CareerTimingPage() {
  return (
    <>
      <Head>
        <title>転職のベストタイミング | CareerForward</title>
        <meta name="description" content="転職に最適なタイミングの見極め方と市場動向を解説。30代〜40代ホワイトカラーの転職戦略をサポート。" />
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
            <span className="text-gray-700">転職タイミングの見極め方</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            転職タイミングの見極め方
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            市場動向と個人の状況を踏まえた最適な転職タイミングの判断基準を詳しく解説します。30代〜40代の転職では、タイミングが成功を大きく左右します。業界トレンドと個人のキャリア状況を総合的に分析し、ベストなタイミングを見極める方法をお伝えします。
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <i className="ri-calendar-line mr-2"></i>
            <span className="mr-6">2024年1月30日</span>
            <i className="ri-time-line mr-2"></i>
            <span>読了時間: 約15分</span>
          </div>
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20business%20timing%20concept%20with%20elegant%20clock%20and%20calendar%20on%20executive%20mahogany%20desk%2C%20modern%20corporate%20office%20environment%2C%20strategic%20planning%20atmosphere%2C%20business%20decision%20making%20scene%2C%20natural%20lighting%20through%20large%20office%20windows%2C%20sophisticated%20workspace&width=800&height=400&seq=timing002&orientation=landscape"
            alt="転職タイミング判断イメージ"
            className="w-full h-64 object-cover object-top rounded-xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">転職タイミングを決める5つの要因</h2>

            <div className="bg-[#005BAC]/5 border-l-4 border-[#005BAC] p-6 mb-8">
              <h3 className="font-bold text-lg text-[#005BAC] mb-3">転職成功率は「タイミング」で大きく変わる</h3>
              <p className="text-gray-700">
                同じスキル・経験を持った人でも、転職するタイミングによって年収や条件が大きく変わることがあります。市場の動向、個人の状況、企業の採用ニーズなど、複数の要因を総合的に判断することが重要です。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-line-chart-line text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">市場要因</h3>
                <p className="text-gray-600 text-sm mb-3">
                  業界の成長性や求人動向
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• 業界の成長トレンド</li>
                  <li>• 求人数の増減</li>
                  <li>• 競合他社の動向</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-user-line text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">個人要因</h3>
                <p className="text-gray-600 text-sm mb-3">
                  あなた自身のキャリア状況
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• スキル・経験の蓄積</li>
                  <li>• 現職での立場・評価</li>
                  <li>• ライフステージの変化</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-building-line text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">企業要因</h3>
                <p className="text-gray-600 text-sm mb-3">
                  転職先企業の採用ニーズ
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• 事業拡大局面</li>
                  <li>• 組織改革・DX推進</li>
                  <li>• 経験者の採用強化</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <i className="ri-calendar-2-line text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">時期要因</h3>
                <p className="text-gray-600 text-sm mb-3">
                  季節性や年度の影響
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• 4月・10月の採用強化</li>
                  <li>• 年末年始の採用減少</li>
                  <li>• 決算期の影響</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">転職に最適な時期とタイミング</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">年間を通した転職市場の動向</h3>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-4">月別転職市場の特徴</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-bold text-green-700 mb-2">活発期（1-3月、7-9月）</h5>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>• 求人数が最も多い</li>
                    <li>• 企業の採用意欲が高い</li>
                    <li>• 年度切り替えに向けた補強</li>
                    <li>• 競争は激しいが選択肢豊富</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-blue-700 mb-2">安定期（4-6月、10-11月）</h5>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>• 求人数は中程度</li>
                    <li>• 競争相手が少なめ</li>
                    <li>• 質の高い求人が中心</li>
                    <li>• じっくり選考が可能</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-red-700 mb-2">低調期（12月、GW、お盆）</h5>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>• 求人数が減少</li>
                    <li>• 企業の採用活動が停滞</li>
                    <li>• 緊急性の高い求人のみ</li>
                    <li>• 準備期間として活用</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">年代別最適転職タイミング</h3>

            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3">30代前半（28-35歳）の転職タイミング</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-[#005BAC] mb-2">ベストタイミング</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 現職で3-5年の経験を積んだ後</li>
                      <li>• 専門スキルが一定レベルに達した時</li>
                      <li>• マネジメント経験を積み始めた時</li>
                      <li>• 業界知識が深まった段階</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#FFB703] mb-2">避けるべきタイミング</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 入社1年未満での転職</li>
                      <li>• スキルが中途半端な状態</li>
                      <li>• 結婚・出産直前の時期</li>
                      <li>• 現職で大きなプロジェクト進行中</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3">30代後半〜40代（35-45歳）の転職タイミング</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-[#005BAC] mb-2">ベストタイミング</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• マネジメント実績が豊富になった時</li>
                      <li>• 業界での人脈・評価が確立した段階</li>
                      <li>• 子育てが一段落した時期</li>
                      <li>• 現職でのキャリア上限が見えた時</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#FFB703] mb-2">慎重検討が必要</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 住宅ローン等の大きな支出がある時</li>
                      <li>• 子どもの受験期</li>
                      <li>• 現職で重要なポジションにある時</li>
                      <li>• 業界全体が不況の時期</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">転職タイミング診断チェックリスト</h2>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-4">転職準備度チェック</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-700">現職での経験・スキルは十分か</span>
                  <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">不十分</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                    </div>
                    <span className="text-xs text-gray-500">十分</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-700">転職理由・目的は明確か</span>
                  <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">曖昧</span>
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
                  <span className="text-gray-700">希望する業界・職種の市場は活発か</span>
                  <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">低調</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                    </div>
                    <span className="text-xs text-gray-500">活発</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-700">家族の理解・協力は得られているか</span>
                  <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">未確認</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                    </div>
                    <span className="text-xs text-gray-500">了承済</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">転職活動に必要な時間は確保できるか</span>
                  <div className="flex space-x-2">
                    <span className="text-xs text-gray-500">困難</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      <div className="w-4 h-4 border border-gray-300 rounded"></div>
                    </div>
                    <span className="text-xs text-gray-500">余裕</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">業界別転職タイミングの特徴</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-blue-700 mb-4">IT・テック業界</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-bold text-gray-900">ベストタイミング</h4>
                    <p className="text-gray-600">新技術習得後、プロジェクト完了のタイミング</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">市場特性</h4>
                    <p className="text-gray-600">年間を通じて求人が多く、技術トレンドの影響大</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold text-green-700 mb-4">金融業界</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-bold text-gray-900">ベストタイミング</h4>
                    <p className="text-gray-600">決算期明け、規制変更に伴う組織改編時</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">市場特性</h4>
                    <p className="text-gray-600">経験重視、長期的なキャリア志向が評価される</p>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-bold text-orange-700 mb-4">製造業</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-bold text-gray-900">ベストタイミング</h4>
                    <p className="text-gray-600">新年度、新工場建設、DX推進プロジェクト開始時</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">市場特性</h4>
                    <p className="text-gray-600">技術革新期に経験者の需要が急増</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-bold text-purple-700 mb-4">コンサルティング</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-bold text-gray-900">ベストタイミング</h4>
                    <p className="text-gray-600">大型案件完了後、専門性確立のタイミング</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">市場特性</h4>
                    <p className="text-gray-600">実績とスキルが明確に評価される業界</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">転職を避けるべきタイミング</h2>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-red-700 mb-4">転職を控えるべき状況</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">個人的要因</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 現職での経験が1年未満</li>
                    <li>• 転職理由が感情的・衝動的</li>
                    <li>• 家族の理解が得られていない</li>
                    <li>• 健康面で不安がある</li>
                    <li>• 住宅ローンなど大きな借入直後</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">市場・企業要因</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 業界全体が不況・縮小期</li>
                    <li>• 希望職種の求人が極端に少ない</li>
                    <li>• 企業の業績が悪化している</li>
                    <li>• 転職市場が飽和状態</li>
                    <li>• 年末年始・長期休暇期間</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">転職タイミングの最終判断基準</h2>

            <div className="bg-[#005BAC]/5 border-l-4 border-[#005BAC] p-6 mb-8">
              <h3 className="font-bold text-lg text-[#005BAC] mb-3">「転職する理由」と「転職しない理由」を比較する</h3>
              <p className="text-gray-700 mb-4">
                転職を決断する前に、現状の課題と転職による解決可能性を客観的に評価しましょう。
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-2">転職により解決できること</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 年収・待遇の改善</li>
                    <li>• 新しいスキル・経験の獲得</li>
                    <li>• より良い労働環境</li>
                    <li>• キャリアアップの機会</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-red-700 mb-2">現職で改善可能なこと</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 部署異動での環境改善</li>
                    <li>• 昇進・昇格による待遇向上</li>
                    <li>• スキルアップによる評価改善</li>
                    <li>• 社内制度の活用</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#FFB703]/10 border border-[#FFB703] rounded-lg p-6 mb-8">
              <h3 className="font-bold text-[#FFB703] mb-3 flex items-center">
                <i className="ri-lightbulb-line mr-2"></i>
                転職タイミングの極意
              </h3>
              <p className="text-gray-700 text-sm">
                最適な転職タイミングは人それぞれ異なります。市場の動向だけでなく、あなた自身のキャリア目標、ライフステージ、価値観を総合的に考慮して判断することが重要です。迷った時は信頼できるキャリアアドバイザーに相談することをお勧めします。
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
            <Link href="/articles/job-search-strategy" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20strategy%20planning%20session%20with%20charts%20and%20documents%20on%20conference%20table%2C%20modern%20office%20meeting%20room%2C%20strategic%20planning%20atmosphere%2C%20business%20efficiency%20concept%2C%20corporate%20workspace%20environment&width=400&height=300&seq=strategy001&orientation=landscape"
                  alt="転職活動戦略"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    効率的な転職活動の進め方
                  </h3>
                  <p className="text-gray-600 text-sm">
                    限られた時間で最大の成果を出すための転職活動戦略と具体的な進め方を解説。
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/articles/market-value" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20market%20analysis%20dashboard%20on%20computer%20screen%20with%20charts%20and%20graphs%2C%20modern%20office%20workspace%2C%20financial%20data%20visualization%2C%20market%20value%20assessment%20tools%2C%20clean%20contemporary%20office%20environment&width=400&height=300&seq=market002&orientation=landscape"
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

            <Link href="/articles/resume-writing" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20resume%20document%20on%20clean%20modern%20desk%20workspace%20with%20laptop%20and%20business%20materials%2C%20organized%20office%20environment%2C%20natural%20lighting%20through%20window%2C%20document%20preparation%20concept&width=400&height=300&seq=resume004&orientation=landscape"
                  alt="履歴書作成ガイド"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#005BAC] transition-colors">
                    通る履歴書の書き方
                  </h3>
                  <p className="text-gray-600 text-sm">
                    採用担当者の目に留まる履歴書の構成と、職歴を魅力的に表現する方法を解説。
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
            最適な転職タイミングを見極めよう
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            本記事の判断基準を活用して、あなたにとってベストなタイミングを見つけてください。
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
