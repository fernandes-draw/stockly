import { Card } from '@/components/ui/card';
import Image from 'next/image';
import AppHeader from './AppHeader/AppHeader';
import AppTable from './AppTable/AppTable';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-gray-50';

  return (
    <div className='p-3'>
      <Card className='flex flex-col shadow-none p-2'>
        <AppHeader />
        <AppTable />
      </Card>
    </div>
  );
}
