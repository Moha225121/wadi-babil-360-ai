import './globals.css';
import localFont from 'next/font/local';
const cairo = localFont({src:'../public/fonts/Cairo.ttf',variable:'--font-cairo',display:'swap',weight:'200 1000'});
export const metadata = { title: 'وادي بابل 360 | منصة الإدارة الذكية', description: 'بروتوتايب تجريبي متكامل للمقاولات والاستثمار العقاري' };
export default function Layout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="ar" dir="rtl"><body className={cairo.variable}>{children}</body></html>}
