import Slider from "react-slick";

export default function TopCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="px-5 py-8 bg-[white] rounded-md border default-container">
      <h2 className="text-[#02598b] text-[1.2rem] leading-[1.75] mb-5"> Welcome To Open Library</h2>
      <Slider {...settings} className="mx-5">
        <div>
          <div className="flex  justify-center items-center p-4 py-5 mx-3 border border-[#ddd] bg-[#fcfbf7] rounded-md gap-4">
            <img
              src="https://openlibrary.org/static/images/onboarding/read.png"
              alt=""
              className="h-[80px] w-[80px]"
            />
            <div >
              <h3 className=" leading-4 text-[18px]">Read Free Library Books Online</h3>
              <p className="text-[.8rem] text-[#a19b9e] leading-4">
                million of books available through controlled digital leading
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  justify-center items-center p-4 py-5 mx-3 border border-[#ddd] bg-[#fcfbf7] rounded-md gap-4">
            <img
              src="https://openlibrary.org/static/images/onboarding/read.png"
              alt=""
              className="h-[80px] w-[80px]"
            />
            <div >
              <h3 className=" leading-4 text-[18px]">Read Free Library Books Online</h3>
              <p className="text-[.8rem] text-[#a19b9e] leading-4">
                million of books available through controlled digital leading
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  justify-center items-center p-4 py-5 mx-3 border border-[#ddd] bg-[#fcfbf7] rounded-md gap-4">
            <img
              src="https://openlibrary.org/static/images/onboarding/read.png"
              alt=""
              className="h-[80px] w-[80px]"
            />
            <div >
              <h3 className=" leading-4 text-[18px]">Read Free Library Books Online</h3>
              <p className="text-[.8rem] text-[#a19b9e] leading-4">
                million of books available through controlled digital leading
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  justify-center items-center p-4 py-5 mx-3 border border-[#ddd] bg-[#fcfbf7] rounded-md gap-4">
            <img
              src="https://openlibrary.org/static/images/onboarding/read.png"
              alt=""
              className="h-[80px] w-[80px]"
            />
            <div >
              <h3 className=" leading-4 text-[18px]">Read Free Library Books Online</h3>
              <p className="text-[.8rem] text-[#a19b9e] leading-4">
                million of books available through controlled digital leading
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  justify-center items-center p-4 py-5 mx-3 border border-[#ddd] bg-[#fcfbf7] rounded-md gap-4">
            <img
              src="https://openlibrary.org/static/images/onboarding/read.png"
              alt=""
              className="h-[80px] w-[80px]"
            />
            <div >
              <h3 className=" leading-4 text-[18px]">Read Free Library Books Online</h3>
              <p className="text-[.8rem] text-[#a19b9e] leading-4">
                million of books available through controlled digital leading
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  justify-center items-center p-4 py-5 mx-3 border border-[#ddd] bg-[#fcfbf7] rounded-md gap-4">
            <img
              src="https://openlibrary.org/static/images/onboarding/read.png"
              alt=""
              className="h-[80px] w-[80px]"
            />
            <div >
              <h3 className=" leading-4 text-[18px]">Read Free Library Books Online</h3>
              <p className="text-[.8rem] text-[#a19b9e] leading-4">
                million of books available through controlled digital leading
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
