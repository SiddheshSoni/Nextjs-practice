import ProductsList from "../_UI/ProductList";

export const metadata = {
  title: "Products Store - Products List",
};

export default async function ProductPage() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();

  return (
    <div className="p-10">
      <h1>This is the Products Page</h1>
      <ProductsList products={data.products} />
    </div>
  );
}
