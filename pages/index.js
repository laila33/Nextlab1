import Head from 'next/head';
import NavigationBar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home  Static Route</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <div className="container mt-5">
        <h1>Home Page</h1>
        <p>This is the Home page a static route.</p>
      </div>
    </>
  );
}
