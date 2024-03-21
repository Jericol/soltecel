import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MapItem from "../../Api/displey";
import { RiShoppingCart2Line } from "react-icons/ri";

const Displey = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinity: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <div className="slider- mb-20">
      <h1 className="text-2xl font-bold text-center mb-4 uppercase">Pantallas</h1>
      <Slider {...settings}>
        {MapItem.map((item, index) => (
          <div key={index} className="flex gap-4 p-3">
            <div className="flex items-center justify-center gap-4 border border-slate-400 rounded-md m-1 h-40 p-5 font-poppins">
              <img src={item.img} alt="" className="h-28" />
              <div className="flex flex-col h-auto">
                <h2 className="text-xl font-semibold text-blue-500">
                  {item.name}
                </h2>
                <p className="text-blue-400">
                  <span className="font-medium text-black">Tipo: </span>
                  {item.grupo}
                </p>
                <p className="text-blue-400">
                  <span className="font-medium text-black">Marca: </span>
                  {item.categoria}
                </p>
                <span className="text-blue-400">{item.precio}</span>
                <RiShoppingCart2Line 
                   className="cursor-pointer text-blue-300 text-2xl hover:bg-emerald-400 hover:text-white 
                   transform hover:transition-all ease-linear hover:translate-x-2 " 
                />
                <span></span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Displey;