
import ProductsList from "../_UI/ProductList";

export const metadata = {
  title: "Products Store - Products List"
};

export default async function ProductPage() {
  const res = await fetch("/api/products", {
    next: { revalidate: 60 }
  });
  const data = await res.json();

  return (
    <div className="p-10">
      <h1>This is the Products Page</h1>
      <ProductsList products={data.products} />
    </div>
  );
}
