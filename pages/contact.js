import Head from 'next/head';
import NavigationBar from '@/components/Navbar';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Static Route</title>
        <meta name="description" content="Contact page" />
      </Head>
      <NavigationBar />
      <div className="container mt-5">
        <h1>Contact Page</h1>
        <p>This is the Contact page a static route.</p>
       
      </div>
    </>
  );
}