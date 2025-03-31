import { memo } from 'react';

export const Footer = memo(() => {
  return (
    <footer className='text-center text-sm text-gray-500 dark:text-gray-400 absolute bottom-0 left-0 w-full pb-2'>
      {new Date().getFullYear()} -{' '}
      <a
        href='https://juliandrv.com'
        target='_blank'
        className='font-bold'
      >
        juliandrv
      </a>
    </footer>
  );
});
