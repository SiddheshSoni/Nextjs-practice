export default  async function Product ({params}){
    const { id } = await params;

    return(
        <div className="p-10">
            <h1>{`Product ${id} details page- content coming soon!`}</h1>
        </div>
    );
};