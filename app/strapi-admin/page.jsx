'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function strapiPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('https://teste-cms-strapi-2-production.up.railway.app/admin');
  }, []);

  return <div>Redirecting...</div>;
}