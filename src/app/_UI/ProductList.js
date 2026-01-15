"use client";
import Link from "next/link";

export default function ProductsList({ products }) {
  return (
    <div className="flex flex-wrap w-100">
      {products?.map(item => (
        <Link key={item.id} href={`/products/${item.id}`}>
          {item.title} - {item.price} - {item.category}
        </Link>
      ))}
    </div>
  );
}
