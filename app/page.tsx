"use client";

import { Card } from '@/components/ui/card';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import AppHeader from './AppHeader/AppHeader';
import AppTable from './AppTable/AppTable';
import { ProductTable } from './Products/ProductTable';

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-gray-50';

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={`poppins p-5 ${bgColor} border w-full min-h-screen`}>
      <Card className='flex flex-col shadow-none p-2'>
        <AppHeader />
        <AppTable />
        <ProductTable />
      </Card>
    </div>
  );
}
