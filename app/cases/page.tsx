import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const cases = [
  {
    title: '小売業の売上分析',
    description: 'POSデータを活用した売上分析により、商品の最適な配置と在庫管理を実現。',
    result: '売上20%向上、在庫回転率30%改善',
    image: '/images/case1.jpg'
  },
  {
    title: '製造業の生産効率化',
    description: '生産データの分析により、ボトルネックの特定と改善を実施。',
    result: '生産効率25%向上、コスト15%削減',
    image: '/images/case2.jpg'
  },
  {
    title: 'サービス業の顧客分析',
    description: '顧客データの分析により、ターゲット層の明確化とマーケティング施策を最適化。',
    result: '顧客獲得コスト30%削減、リピート率40%向上',
    image: '/images/case3.jpg'
  }
];

export default function Cases() {
  return (
    <main>
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
              事例紹介
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {caseItem.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {caseItem.description}
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <p className="text-gray-800 font-semibold">
                        成果: {caseItem.result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 