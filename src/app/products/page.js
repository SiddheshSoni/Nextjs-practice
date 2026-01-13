"use client"
import Link from "next/link";
import { useState } from "react";

export default function ProductPage () {
    const [ Products, setProducts ] = useState([]);

    const getProducts = async () =>{

        const res = await fetch("api/products", { next: { revalidate: 60 }});
        const data = await res.json();
        setProducts(data.products);
    };
    
    return(
        <div className="p-10" >
            <h1>This is the Products Page</h1>
            <button className=" bg-amber-50 text-black p-2 rounded-2xl m-1 cursor-pointer " onClick={getProducts}>Get Products</button>
            <div className="flex flex-wrap w-100">
                {Products && Products.map(item =>(
                    <Link key={item.id} href={`/products/${item.id}`} >{item.title} - {item.price} - {item.category}</Link> 
                ))}
            </div>
        </div>
    )
}