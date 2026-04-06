import Head from 'next/head';
import NavigationBar from '@/components/Navbar';

export default function ProductDetails() {
  return (
    <>
      <Head>
        <title>Product Details Nested Route</title>
        <meta name="description" content="Product details page" />
      </Head>
      <NavigationBar />
      <div className="container mt-5">
        <h1>Product Details Page</h1>
        <p>This is the Product Details page.</p>
      </div>
    </>
  );
}