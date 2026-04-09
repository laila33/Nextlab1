import Head from "next/head";
import { Alert, Container, Row } from "react-bootstrap";
import NavigationBar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function ServerProductsPage({ products, error }) {
  return (
    <>
      <Head>
        <title>Server Products</title>
      </Head>

      <NavigationBar />

      <Container className="py-5">
        <h1 className="mb-3">Serverside Products</h1>

        {error ? (
          <Alert variant="danger">
          </Alert>
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

export async function getServerSideProps() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=20");
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
        count: item.stock,
      },
    }));

    return {
      props: {
        products: formattedProducts,
        error: "",
      },
    };
  } catch (err) {
    console.error("Fetch Error:", err.message);
    return {
      props: {
        products: [],
      },
    };
  }
}
