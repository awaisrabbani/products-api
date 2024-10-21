import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../ProductCard/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function Component() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://ypb-backend.vercel.app/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  console.log(products);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products?.map((product) => (
          <SwiperSlide key={product._id}>
            <Card product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="grid gap-4 grid-cols-2 md:gap-6 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div> */}
    </>
  );
}
