'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductTable } from '../Products/ProductTable';

export default function AppTable() {
  return (
    <Card className='mt-12  flex flex-col shadow-none  poppins border-none '>
      <CardHeader className='flex justify-between'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <CardTitle className='font-bold text-[23px] '>Products</CardTitle>
            <p className='text-sm text-slate-600'>34 products</p>
          </div>
          <Button>Add Product</Button>
        </div>
      </CardHeader>

      <CardContent>
        <ProductTable />
      </CardContent>
    </Card>
  );
}
