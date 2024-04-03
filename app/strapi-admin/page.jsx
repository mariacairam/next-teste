import { useRouter } from 'next/router'
 
export default function Page() {
    const router = useRouter();
    useEffect(() => {
        router.replace('https://teste-cms-strapi-2-production.up.railway.app/admin');
      }, []);
    
      return (<div>Redirecting...</div>);
}