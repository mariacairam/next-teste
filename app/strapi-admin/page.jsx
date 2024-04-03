'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function strapiPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('https://strapi.suplab.site/admin');
  }, []);

  return <div>Redirecting...</div>;
}