
const Card = (prop) => {
    const {product} = prop
  return (
    <>
      <div className="w-72 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4 flex flex-col">

          <img className="w-full h-48 object-cover" src={product.image} alt="" />
          <div className="flex-1 flex flex-col justify-end p-4">
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</h2>
            <p className="text-gray-500 mt-2">Price:{product.price}</p>
          
            <button className="mt-4 self-end w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Add to cart
            </button>
          </div>
        
        </div>

    </>
  );
};

export default Card;
