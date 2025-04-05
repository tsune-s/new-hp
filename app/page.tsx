import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              データ分析のプロフェッショナル
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              オフィスツネは、データ分析とエクセル作業の専門家集団です。
              ビジネスの意思決定をサポートする高度な分析サービスを提供しています。
            </p>
            <button className="btn btn-primary">
              お問い合わせ
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            サービス内容
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                データ分析
              </h3>
              <p className="text-gray-600">
                ビジネスデータの分析から、効果的な意思決定のサポートまで、
                専門的な分析サービスを提供します。
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                エクセル作業
              </h3>
              <p className="text-gray-600">
                複雑なエクセル作業の効率化から、マクロ開発まで、
                あらゆるエクセル関連の業務をサポートします。
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                コンサルティング
              </h3>
              <p className="text-gray-600">
                データに基づいたビジネス戦略の提案から、
                実装サポートまで、包括的なコンサルティングを提供します。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 