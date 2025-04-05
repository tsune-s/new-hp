import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">オフィスツネ</h3>
            <p className="text-gray-300">
              データ分析とエクセル作業の専門家集団
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-gray-300 hover:text-white">
                  事例紹介
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <p className="text-gray-300">
              Email: info@officetsune.com<br />
              Tel: 03-XXXX-XXXX
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} オフィスツネ All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 