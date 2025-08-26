// import { Link } from "react-router-dom";

function Team(props) {
  const { product } = props;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-content md:h-56 lg:h-64"
      />
      <div className="flex flex-col flex-1 p-4 md:p-6">
        <h5 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{product.title}</h5>
        <p className="text-gray-600 text-sm md:text-base mb-4 flex-1 line-clamp-3">{product.description}</p>
        <p className="text-secondary-color font-bold text-base md:text-lg mt-auto">
          Price: <span className="text-sky-blue">${product.price}</span>
        </p>
      </div>
    </div>
  );
}

export default Team;