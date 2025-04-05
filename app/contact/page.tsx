'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // ここでAPIエンドポイントにデータを送信
      console.log(data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              お問い合わせ
            </h1>
            
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'お名前は必須です' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'メールアドレスは必須です',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: '有効なメールアドレスを入力してください'
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    {...register('company')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    お問い合わせ内容
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message', { required: 'お問い合わせ内容は必須です' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary"
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    お問い合わせありがとうございます。内容を確認次第、ご連絡させていただきます。
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    送信に失敗しました。もう一度お試しください。
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 