import { useEffect, useState } from "react";
import Team from "./Team";

function TeamList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 bg-primary-color">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#115278] mb-8">
        Meet Our Team
      </h2>
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8
          max-w-7xl mx-auto
        "
      >
        {products.map((product) => (
          <div key={product.id} className="flex">
            <Team product={product} showButton={false} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamList;