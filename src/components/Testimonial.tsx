import Slider from "react-slick";
import { TestimonialsData } from "../mock/data";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-3xl">Our Testimonials</h1>
          <p className="text-3xl font-semibold">
            What Our Students Say About Us
          </p>
        </div>
        {/* Testimonials Card */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                  <div
                    className="flex justify-start item
                   gap-5"
                  >
                    <img
                      src={data.img}
                      alt={data.img}
                      className="rounded-full size-16"
                    />
                    <div>
                      <p className="text-xl font-bold text-black/80">
                        {data.name}
                      </p>
                      <p>{data.name}</p>
                    </div>
                  </div>
                  <div className="py-6 space-y-4">
                    <p className="sm text-gray-500 line-clamp-2">{data.text}</p>
                    <ul className="flex items-center gap-2">
                      <li>
                        <FaStar className="text-primary" />
                      </li>
                      <li>
                        <FaStar className="text-primary" />
                      </li>
                      <li>
                        <FaStar className="text-primary" />
                      </li>
                      <li>
                        <FaStar className="text-primary" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
