import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Alert, Container, Row, Spinner } from 'react-bootstrap';
import NavigationBar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

export default function ClientProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error('Failed to fetch products.');
        }

        const data = await response.json();
        setProducts(data);
      } catch (fetchError) {
        setError(fetchError.message || 'Something went wrong while fetching products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Client Products</title>
        <meta name="description" content="Products fetched on the client side" />
      </Head>
      <NavigationBar />
      <Container className="py-5">
        <h1 className="mb-3">Clientside Products</h1>
        <p className="text-muted mb-4">
        </p>

        {loading && (
          <div className="text-center py-5">
            <Spinner animation="border" role="status" />
            <p className="mt-3 mb-0">Loading products</p>
          </div>
        )}

        {!loading && error && (
          <Alert variant="danger">
            {error}
          </Alert>
        )}

        {!loading && !error && (
          <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
