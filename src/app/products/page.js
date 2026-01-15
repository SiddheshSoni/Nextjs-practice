import ProductsList from "../_UI/ProductList";

export const metadata = {
  title: "Products Store - Products List",
};

export default async function ProductPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/products`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return (
    <div className="p-10">
      <h1>This is the Products Page</h1>
      <ProductsList products={data.products} />
    </div>
  );
}
