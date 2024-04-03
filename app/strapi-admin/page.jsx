import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    router.replace('https://teste-cms-strapi-2-production.up.railway.app/admin');
  }, []);

  return <div>Redirecting...</div>;
}