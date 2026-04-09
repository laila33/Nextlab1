import Head from 'next/head';
import { Alert, Container, Row } from 'react-bootstrap';
import NavigationBar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

export default function StaticProductsPage({ products, error }) {
  return (
    <>
      <Head>
        <title>Static Products</title>
      </Head>
      <NavigationBar />
      <Container className="py-5">
        <h1 className="mb-3">Static Products</h1>
    
        {error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
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

export async function getStaticProps() {
  try {
    const response = await fetch('https://dummyjson.com/products');
   const data = await response.json();
    const formattedProducts = data.products.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.thumbnail,
      rating: {
        rate: item.rating,
        count: item.stock
      }
    }));

    return {
      props: {
        products: formattedProducts,
        error: '',
      },
      revalidate: 60, 
    };
  } catch (error) {
    return {
      props: {
        products: [],
        error: error.message || 'Something went wrong while fetching products.',
      },
      revalidate: 60,
    };
  }
}