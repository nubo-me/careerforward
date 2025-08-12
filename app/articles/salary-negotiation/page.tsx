
'use client';

import Link from 'next/link';

export default function SalaryNegotiationPage() {
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
            <span className="text-gray-700">年収交渉の成功テクニック</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            年収交渉の成功テクニック
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            内定後の年収交渉で失敗しないための準備と、効果的な交渉方法を具体例で解説します。適切な交渉により、年収100万円以上のアップも十分可能です。現役キャリアコンサルタントが実際の成功事例をもとに、交渉の極意をお伝えします。
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <i className="ri-calendar-line mr-2"></i>
            <span className="mr-6">2024年1月30日</span>
            <i className="ri-time-line mr-2"></i>
            <span>読了時間: 約15分</span>
          </div>
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20business%20salary%20negotiation%20meeting%20scene%20at%20modern%20conference%20table%2C%20two%20business%20people%20in%20formal%20attire%20having%20serious%20discussion%2C%20natural%20lighting%20through%20large%20office%20windows%2C%20corporate%20handshake%20moment%2C%20successful%20business%20deal%20atmosphere%2C%20contemporary%20office%20interior&width=800&height=400&seq=salary001&orientation=landscape"
            alt="年収交渉イメージ"
            className="w-full h-64 object-cover object-top rounded-xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">年収交渉成功の3つの鉄則</h2>

            <div className="bg-[#005BAC]/5 border-l-4 border-[#005BAC] p-6 mb-8">
              <h3 className="font-bold text-lg text-[#005BAC] mb-3">年収交渉は「お願い」ではなく「価値の提示」</h3>
              <p className="text-gray-700">
                多くの方が年収交渉を「お金を上げてもらう」という発想で臨みますが、これは間違いです。正しくは「あなたが提供できる価値を見合った対価を提示する」ことです。この視点の違いが、交渉の成否を分けます。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">事前準備が全て</h3>
                <p className="text-gray-600 text-sm">
                  市場価値の調査、実績の整理、希望年収の根拠を明確にする
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">タイミングが重要</h3>
                <p className="text-gray-600 text-sm">
                  内定通知後、承諾前の限られた期間での適切な交渉
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">論理的な説得力</h3>
                <p className="text-gray-600 text-sm">
                  感情ではなく、データと実績に基づいた合理的な提案
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">交渉前の準備：5つのステップ</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">ステップ1: 市場相場の徹底調査</h3>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-3">調査すべき項目一覧</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold text-[#005BAC] mb-2">基本データ</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 同職種・同業界の平均年収</li>
                    <li>• 同等経験者の年収レンジ</li>
                    <li>• 応募企業の給与水準</li>
                    <li>• 地域別の年収差</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-[#005BAC] mb-2">詳細情報</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 企業規模別の年収傾向</li>
                    <li>• 近年の昇給率・昇進速度</li>
                    <li>• 福利厚生の充実度</li>
                    <li>• ストックオプション等の有無</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">ステップ2: 自分の価値を数値化</h3>

            <p className="text-gray-700 mb-6">
              過去の実績を具体的な数字で整理し、新しい職場でどのような価値を提供できるかを明確にします。
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#005BAC] pl-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">売上・利益貢献の実績</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-bold text-green-700 mb-2">実例：営業職の場合</h5>
                  <p className="text-sm text-gray-700">
                    「前職では年間売上2.5億円を担当し、3年連続で目標を120%以上達成。新規開拓により月平均500万円の売上増に貢献。御社でも同様の成果を期待できるため、年収650万円を希望します」
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-[#005BAC] pl-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">コスト削減・効率化実績</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-bold text-green-700 mb-2">実例：管理職の場合</h5>
                  <p className="text-sm text-gray-700">
                    「業務プロセス改善により年間1,200万円のコスト削減を実現。チーム生産性30%向上の実績があり、御社の収益改善に直接貢献できます」
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">ステップ3: 希望年収の設定戦略</h3>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-lg text-gray-900 mb-4">3段階の年収設定</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">高</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">理想年収</h5>
                    <p className="text-sm text-gray-600">市場価値の上限。最初の提示額として使用</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">中</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">目標年収</h5>
                    <p className="text-sm text-gray-600">現実的な落としどころ。交渉で目指す金額</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">低</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">最低年収</h5>
                    <p className="text-sm text-gray-600">これ以下では転職しない下限額</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">交渉の実践テクニック</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">交渉のタイミングと進め方</h3>

            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-3">最適な交渉タイミング</h4>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>内定通知を受け取った直後（24時間以内）</li>
                  <li>内定承諾の返答期限前（通常1-2週間の猶予期間）</li>
                  <li>最終面接で好印象を与えた直後</li>
                  <li>複数社から内定を得ている場合</li>
                </ol>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-bold text-red-700 mb-3">避けるべきタイミング</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 面接中の年収確認時</li>
                  <li>• 内定承諾後</li>
                  <li>• 入社後の試用期間中</li>
                  <li>• 企業側が忙しい時期</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">効果的な交渉フレーズ集</h3>

            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-[#005BAC] mb-3">交渉の切り出し方</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    「内定のご連絡をいただき、誠にありがとうございます。ぜひ御社で活躍させていただきたく存じます。条件面について、いくつかご相談させていただきたい点がございます。お時間をいただけますでしょうか。」
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-[#005BAC] mb-3">年収アップの根拠提示</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    「私の経験と実績を踏まえ、市場相場を調査いたしました結果、同等の経験を持つ方の年収は○○万円程度と認識しております。前職での○○の実績を御社でも活かし、より大きな成果を出せると確信しておりますので、年収○○万円でご検討いただけますでしょうか。」
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-[#005BAC] mb-3">代替案の提案</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    「基本給でのアップが難しい場合は、業績連動賞与の増額や、半年後の昇格検討など、他の形でも構いません。私の成果次第で年収○○万円に到達できる仕組みを作っていただけますでしょうか。」
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">交渉パターン別対応策</h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-[#FFB703] pl-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">パターン1: 「予算的に厳しい」と言われた場合</h3>
                <div className="bg-yellow-50 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-[#FFB703] mb-2">対応策</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 入社後6ヶ月での昇給検討を提案</li>
                    <li>• 業績連動の変動賞与制度を提案</li>
                    <li>• 福利厚生の充実で実質年収アップを提案</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-bold text-green-700 mb-1">実例回答</h5>
                  <p className="text-xs text-gray-700">
                    「承知いたしました。それでは、入社後の成果に応じた評価制度はいかがでしょうか。半年後に私の貢献度を評価いただき、その時点で年収見直しをご検討いただけますでしょうか。」
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-[#FFB703] pl-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">パターン2: 「前職との差額が大きすぎる」と言われた場合</h3>
                <div className="bg-yellow-50 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-[#FFB703] mb-2">対応策</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 段階的な年収アップ計画を提案</li>
                    <li>• 職務範囲の拡大と連動した昇給</li>
                    <li>• 資格取得・スキル向上での昇給</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-bold text-green-700 mb-1">実例回答</h5>
                  <p className="text-xs text-gray-700">
                    「一度に大幅アップが難しいことは理解しております。1年目は○○万円、2年目に○○万円というように、私の成果と貢献に応じて段階的に上げていただくことは可能でしょうか。」
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">年収以外の交渉ポイント</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-blue-900 mb-4">金銭的メリット</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 住宅手当・家賃補助</li>
                  <li>• 交通費全額支給</li>
                  <li>• 資格取得支援金</li>
                  <li>• 退職金制度の改善</li>
                  <li>• ストックオプション</li>
                  <li>• 業績連動賞与の比率向上</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold text-green-900 mb-4">働き方の改善</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• リモートワーク制度</li>
                  <li>• フレックスタイム制</li>
                  <li>• 有給取得率の保証</li>
                  <li>• 研修・勉強会参加支援</li>
                  <li>• 副業許可</li>
                  <li>• 昇進・昇格の明確化</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">交渉成功のための心構え</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-[#005BAC]/5 p-6 rounded-xl">
                <h3 className="font-bold text-[#005BAC] mb-3">Win-Winの関係を目指す</h3>
                <p className="text-gray-700 text-sm">
                  年収交渉は企業vs個人の対立構造ではありません。お互いが納得できる条件を見つける「協議」です。企業側のメリットも考慮した提案を心がけましょう。
                </p>
              </div>

              <div className="bg-[#005BAC]/5 p-6 rounded-xl">
                <h3 className="font-bold text-[#005BAC] mb-3">感情的にならない</h3>
                <p className="text-gray-700 text-sm">
                  どんなに条件が厳しくても、冷静さを保つことが重要です。感情的な交渉は必ず失敗します。データと論理で勝負しましょう。
                </p>
              </div>

              <div className="bg-[#005BAC]/5 p-6 rounded-xl">
                <h3 className="font-bold text-[#005BAC] mb-3">代替案を用意する</h3>
                <p className="text-gray-700 text-sm">
                  年収アップが難しい場合の代替案を複数用意しておきます。交渉の幅が広がり、成功確率が高まります。
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">実際の交渉成功事例</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-700 mb-3">成功事例1: IT業界・エンジニア（32歳）</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>提示年収:</strong> 520万円 → <strong>交渉後:</strong> 600万円（+80万円）</p>
                  <p><strong>交渉ポイント:</strong> 前職での開発効率化実績（年間1,500万円のコスト削減）を定量的に提示</p>
                  <p><strong>追加条件:</strong> リモートワーク週3日、技術書購入費年10万円支給</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-700 mb-3">成功事例2: 営業職・マネージャー（38歳）</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>提示年収:</strong> 650万円 → <strong>交渉後:</strong> 750万円（+100万円）</p>
                  <p><strong>交渉ポイント:</strong> 3年連続売上目標150%達成、新規開拓での売上2億円創出実績</p>
                  <p><strong>追加条件:</strong> 業績連動賞与上限撤廃、部下数拡大による職位向上</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-700 mb-3">成功事例3: 企画職・スペシャリスト（35歳）</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>提示年収:</strong> 580万円 → <strong>交渉後:</strong> 630万円（+50万円）</p>
                  <p><strong>交渉ポイント:</strong> 新サービス企画での売上10億円創出、市場シェア15%向上実績</p>
                  <p><strong>追加条件:</strong> 1年後の昇格検討約束、外部セミナー参加費全額支給</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">交渉後のフォローアップ</h2>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-4">合意内容の確認</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>交渉結果を書面で確認（メールでも可）</li>
                <li>年収以外の条件も含めて詳細を記録</li>
                <li>いつから適用されるかの確認</li>
                <li>今後の評価・昇給タイミングの確認</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-bold text-red-700 mb-4 flex items-center">
                  <i className="ri-close-circle-line mr-2"></i>
                  交渉失敗の要因
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 市場調査不足</li>
                  <li>• 実績の数値化不足</li>
                  <li>• 感情的な交渉</li>
                  <li>• タイミングの間違い</li>
                  <li>• 一方的な要求</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold text-green-700 mb-4 flex items-center">
                  <i className="ri-check-circle-line mr-2"></i>
                  交渉成功のコツ
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 徹底した事前準備</li>
                  <li>• 論理的な根拠提示</li>
                  <li>• Win-Winの提案</li>
                  <li>• 柔軟な代替案</li>
                  <li>• 冷静な対応</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#FFB703]/10 border border-[#FFB703] rounded-lg p-6 mb-8">
              <h3 className="font-bold text-[#FFB703] mb-3 flex items-center">
                <i className="ri-lightbulb-line mr-2"></i>
                年収交渉成功の秘訣
              </h3>
              <p className="text-gray-700 text-sm">
                年収交渉は「駆け引き」ではなく「価値の適正評価を求める正当な権利」です。あなたが提供できる価値を正しく理解し、それに見合った対価を求めることは決して悪いことではありません。しっかりと準備をして、自信を持って交渉に臨んでください。
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
            <Link href="/articles/market-value" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20market%20analysis%20dashboard%20on%20computer%20screen%20with%20charts%20and%20graphs%2C%20modern%20office%20workspace%2C%20financial%20data%20visualization%2C%20market%20assessment%20tools%2C%20contemporary%20office%20environment&width=400&height=300&seq=market002&orientation=landscape"
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

            <Link href="/articles/interview-preparation" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20job%20interview%20scene%20in%20modern%20office%20conference%20room%2C%20business%20people%20having%20discussion%2C%20natural%20lighting%2C%20corporate%20meeting%20environment%2C%20professional%20atmosphere&width=400&height=300&seq=interview005&orientation=landscape"
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

            <Link href="/articles/resume-writing" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20resume%20document%20on%20clean%20modern%20desk%20workspace%20with%20laptop%20and%20business%20materials%2C%20organized%20office%20environment%2C%20natural%20lighting%20through%20window&width=400&height=300&seq=resume004&orientation=landscape"
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#005BAC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            年収交渉を成功させよう
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            本記事のテクニックを活用して、適正な年収を獲得してください。
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
