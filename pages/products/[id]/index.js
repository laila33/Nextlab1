import Head from 'next/head';
import { useRouter } from 'next/router';
import NavigationBar from '@/components/Navbar';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Product {id} Dynamic Route</title>
        <meta name="description" content={`Product ${id} page`} />
      </Head>
      <NavigationBar />
      <div className="container mt-5">
        <h1>Product {id}</h1>
        <p>This is a dynamic route page for product ID: {id}</p>
      </div>
    </>
  );
}