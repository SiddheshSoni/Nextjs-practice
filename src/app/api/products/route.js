
export const GET = async () =>{
    const res = await fetch("https://dummyjson.com/products");

    const data = await res.json();
    if(!res.ok){
        return Response.json({message:"error!!", status:400});
    }
    return Response.json(data, {status: 200});
};