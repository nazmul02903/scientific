import Slider from "react-slick";

export default function SecondCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  return (
    <div className="px-5 bg-[#E1DCC5] py-8  rounded-md border default-container">
      <h2 className="text-[#02598b] text-[1.2rem] leading-[1.75] mb-5">Trending Books</h2>
      <Slider {...settings} className="mx-5">
        <div>
          <div className="flex flex-col justify-center items-center  py-5 mx-3 border border-[#ddd]  rounded-md gap-4">
            <img
              src="https://covers.openlibrary.org/b/id/8231990-M.jpg"
              alt=""
              className="h-[134] w-[200px] rounded-md"
            />
            <div className="w-full">
                <button className="px-8 py-2 w-full text-white bg-blue-500 rounded-md">Preview</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  py-5 mx-3 border border-[#ddd]  rounded-md gap-4">
            <img
              src="https://covers.openlibrary.org/b/id/8231990-M.jpg"
              alt=""
              className="h-[134] w-[200px] rounded-md"
            />
            <div className="w-full">
                <button className="px-8 py-2 w-full text-white bg-blue-500 rounded-md">Preview</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  py-5 mx-3 border border-[#ddd]  rounded-md gap-4">
            <img
              src="https://covers.openlibrary.org/b/id/8231990-M.jpg"
              alt=""
              className="h-[134] w-[200px] rounded-md"
            />
            <div className="w-full">
                <button className="px-8 py-2 w-full text-white bg-blue-500 rounded-md">Preview</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  py-5 mx-3 border border-[#ddd]  rounded-md gap-4">
            <img
              src="https://covers.openlibrary.org/b/id/8231990-M.jpg"
              alt=""
              className="h-[134] w-[200px] rounded-md"
            />
            <div className="w-full">
                <button className="px-8 py-2 w-full text-white bg-blue-500 rounded-md">Preview</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  py-5 mx-3 border border-[#ddd]  rounded-md gap-4">
            <img
              src="https://covers.openlibrary.org/b/id/8231990-M.jpg"
              alt=""
              className="h-[134] w-[200px] rounded-md"
            />
            <div className="w-full">
                <button className="px-8 py-2 w-full text-white bg-blue-500 rounded-md">Preview</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  py-5 mx-3 border border-[#ddd]  rounded-md gap-4">
            <img
              src="https://covers.openlibrary.org/b/id/8231990-M.jpg"
              alt=""
              className="h-[134] w-[200px] rounded-md"
            />
            <div className="w-full">
                <button className="px-8 py-2 w-full text-white bg-blue-500 rounded-md">Preview</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  py-5 mx-3 border border-[#ddd]  rounded-md gap-4">
            <img
              src="https://covers.openlibrary.org/b/id/8231990-M.jpg"
              alt=""
              className="h-[134] w-[200px] rounded-md"
            />
            <div className="w-full">
                <button className="px-8 py-2 w-full text-white bg-blue-500 rounded-md">Preview</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  py-5 mx-3 border border-[#ddd]  rounded-md gap-4">
            <img
              src="https://covers.openlibrary.org/b/id/8231990-M.jpg"
              alt=""
              className="h-[134] w-[200px] rounded-md"
            />
            <div className="w-full">
                <button className="px-8 py-2 w-full text-white bg-blue-500 rounded-md">Preview</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  py-5 mx-3 border border-[#ddd]  rounded-md gap-4">
            <img
              src="https://covers.openlibrary.org/b/id/8231990-M.jpg"
              alt=""
              className="h-[134] w-[200px] rounded-md"
            />
            <div className="w-full">
                <button className="px-8 py-2 w-full text-white bg-blue-500 rounded-md">Preview</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  py-5 mx-3 border border-[#ddd]  rounded-md gap-4">
            <img
              src="https://covers.openlibrary.org/b/id/8231990-M.jpg"
              alt=""
              className="h-[134] w-[200px] rounded-md"
            />
            <div className="w-full">
                <button className="px-8 py-2 w-full text-white bg-blue-500 rounded-md">Preview</button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center  py-5 mx-3 border border-[#ddd]  rounded-md gap-4">
            <img
              src="https://covers.openlibrary.org/b/id/8231990-M.jpg"
              alt=""
              className="h-[134] w-[200px] rounded-md"
            />
            <div className="w-full">
                <button className="px-8 py-2 w-full text-white bg-blue-500 rounded-md">Preview</button>
            </div>
          </div>
        </div>
        
       
      </Slider>
    </div>
  );
}
