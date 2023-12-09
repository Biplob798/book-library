import img1 from "../../assets/images/banner1.jpg";
import img2 from "../../assets/images/banner2.jpeg";
import img3 from "../../assets/images/banner3.jpeg";
import img4 from "../../assets/images/banner4.jpg";
import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[540px] my-6">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full gap-6 rounded-xl  left-0 right-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 pl-12 w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold">
                The Book Library: Gateway to Imagination,{" "}
                <span className="text-orange-600">Knowledge</span>
              </h2>
              <p>
                A sanctuary of knowledge, the book library houses endless worlds
                bound in pages. It nurtures curiosity, sparks imagination, and
                invites all to explore, learn, and embark on transformation
                journeys.
              </p>
              <div className="flex items-center">
                <button className="btn btn-primary mr-5 bg-[#ea580c]">
                  Discover More
                </button>
                <button className="btn btn-outline btn-secondary">
                  Latest Book
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full gap-6 rounded-xl  left-0 right-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 pl-12 w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold">
                Cultivating <span className="text-orange-600">Knowledge</span>,
                One Page at a Time
              </h2>
              <p>
                In a forgotten library, a mysterious book unveils ancient
                secrets, drawing readers into a realm where shadows intertwine
                with reality, weaving a spellbinding narrative of enigmas and
                intrigue.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full gap-6 rounded-xl  left-0 right-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 pl-12 w-1/2">
              <h2 className="text-3xl md:text-5xl  font-bold">
                Cultivating <span className="text-orange-600">Knowledge</span>,
                One Page at a Time
              </h2>
              <p>
                Within an ancient tome, cryptic symbols weave tales of enigmatic
                realms. Readers brave its pages, unlocking mysteries that blur
                the line between reality and imagination, leaving them
                spellbound
              </p>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full gap-6 rounded-xl  left-0 right-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 pl-12 w-1/2">
              <h2 className="text-3xl md:text-5xl  font-bold">
                Cultivating <span className="text-orange-600">Knowledge</span>,
                One Page at a Time
              </h2>
              <p>
                An enthralling novel immerses readers in captivating narratives,
                exploring diverse lives, love, and challenges. Through vivid
                characters and compelling plots, it evokes emotions, sparking
                introspection and profound connections
              </p>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full gap-6 rounded-xl  left-0 right-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 pl-12 w-1/2">
              <h2 className="text-3xl md:text-5xl  font-bold">
                Cultivating <span className="text-orange-600">Knowledge</span>,
                One Page at a Time
              </h2>
              <p>
                In a world of emotions, a drama book unfolds human complexities,
                depicting love, betrayal, and resilience. Characters navigate
                life is twists, evoking empathy, and revealing the depths of the
                human spirit.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
