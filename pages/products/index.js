import Head from 'next/head';
import Link from 'next/link';
import NavigationBar from '@/components/Navbar';

export default function Products() {
  return (
    <>
      <Head>
        <title>Products Nested Route</title>
        <meta name="description" content="Products page" />
      </Head>
      <NavigationBar />
      <div className="container mt-5">
        <h1>Products Page</h1>
        <p>This is the Products page a nested route.</p>
        <p>Here you can browse our products.</p>
        <ul>
          <li><Link href="/products/1">Product 1</Link></li>
          <li><Link href="/products/2">Product 2</Link></li>
          <li><Link href="/products/electronics/1">Electronics Product 1</Link></li>
          <li><Link href="/products/books/2">Books Product 2</Link></li>
        </ul>
      </div>
    </>
  );
}