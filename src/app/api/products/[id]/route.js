

export const GET = async (req, {params}) =>{
    const { id } = await params;

    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();

    if(!res.ok){
        return Response.json({message:"error", status:400});
    }

    return Response.json(data, {status:200});
};
