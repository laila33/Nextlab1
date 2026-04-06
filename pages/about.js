import Head from 'next/head';
import NavigationBar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Static Route</title>
        <meta name="description" content="About page" />
      </Head>
      <NavigationBar />
      <div className="container mt-5">
        <h1>About Page</h1>
        <p>This is the About page a static route.</p>
      </div>
    </>
  );
}