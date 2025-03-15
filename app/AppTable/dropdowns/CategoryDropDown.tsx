'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Command } from '@/components/ui/command';
import { Separator } from '@/components/ui/separator';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from 'cmdk';
import { LucideGitPullRequestDraft } from 'lucide-react';
import React from 'react';

type Category = {
  value: string;
  label: string;
};

const categories: Category[] = [
  { value: 'electronics', label: 'Electronics' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'books', label: 'Books' },
  { value: 'toys', label: 'Toys' },
  { value: 'beauty', label: 'Beauty' },
  { value: 'sports', label: 'Sports' },
  { value: 'home-decor', label: 'Home-decor' },
  { value: 'home-appliances', label: 'Home-appliances' },
  { value: 'others', label: 'Others' },
];

export default function CategoryDropDown() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex items-center space-x-4 poppins'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant={'secondary'} className='h-10'>
            <LucideGitPullRequestDraft />
            Categories
          </Button>
        </PopoverTrigger>
        <PopoverContent className='p-0 w-56 poppins' side='bottom' align='end'>
          <Command className='p-1'>
            <CommandInput placeholder='Category' />
            <CommandList>
              <CommandEmpty className='text-slate-500 text-sm text-center p-5'>
                Not found category
              </CommandEmpty>
              <CommandGroup>
                {categories.map((category) => (
                  <CommandItem
                    className='h-9 flex items-center'
                    key={category.value}
                    value={category.value}
                  >
                    <Checkbox className='size-4 rounded-[4px] mr-2' />
                    <div
                      className={`flex items-center gap-1 p-1 rounded-lg px-3 text-[14px]`}
                    >
                      {category.label}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <div className='flex flex-col gap-2 text-[23px]'>
              <Separator />
              <Button variant={'ghost'} className='text-[12px] mb-1'>
                Clear Filters
              </Button>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
