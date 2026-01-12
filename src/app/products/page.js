import Link from "next/link";

export default function ProductPage () {
    return(
        <div className="p-10" >
            <h1>This is the Products Page</h1>
            <Link href="/products/1">1</Link><br />
            <Link href="/products/2">2</Link><br />
            <Link href="/products/3">3</Link><br />
            <Link href="/products/4">4</Link><br />
            <Link href="/products/5">5</Link><br />
            <Link href="/products/6">6</Link><br />
            <Link href="/products/7">7</Link><br />
            <Link href="/products/8">8</Link><br />
            <Link href="/products/9">9</Link><br />
            <Link href="/products/10">10</Link><br />
        </div>
    )
}