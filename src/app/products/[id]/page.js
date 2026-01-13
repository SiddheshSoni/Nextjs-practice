import Image from "next/image";

const getProduct = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    next: { revalidate: 60 },
  });
  return res.json();
};

export default async function Product({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="p-10">
      <h1>{`Product ${product.id} details page`}</h1>
      <div>
        <p>{product.title}</p>
        <p>₹{product.price}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
      </div>
      <div>
        <Image
          src="/assets/post.jpg"
          alt="product image"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
