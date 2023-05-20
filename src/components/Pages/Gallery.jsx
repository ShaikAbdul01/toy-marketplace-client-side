import car1 from "../../assets/Gallery/1.jpg";
import car2 from "../../assets/Gallery/2.jpg";
import car3 from "../../assets/Gallery/3.jpg";
import car4 from "../../assets/Gallery/4.jpg";
import car5 from "../../assets/Gallery/5.jpg";
import car6 from "../../assets/Gallery/6.jpg";
import car7 from "../../assets/Gallery/7.jpg";
import car8 from "../../assets/Gallery/8.jpg";
import car9 from "../../assets/Gallery/9.jpg";
import car12 from "../../assets/Gallery/12.jpg";
import car10 from "../../assets/Gallery/10.jpeg";
import car11 from "../../assets/Gallery/11.jpeg";

const Gallery = () => {
  return (
    <>
    <div className="text-center font-bold mb-8 text-3xl lg:text-5xl text-amber-600">Our Collection</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-28">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car7}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car3}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car4}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car8}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car6}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car9}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car11}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car1}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car5}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car10}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={car12}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
