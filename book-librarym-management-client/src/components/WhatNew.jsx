/* eslint-disable react/no-unescaped-entities */
import img1 from "../assets/images/ev1.jpg";
import img2 from "../assets/images/ev2.jpg";
import img3 from "../assets/images/ev3.jpg";

const WhatNew = () => {
  return (
    <div>
      <h2 className="border-y-2 text-start my-12 p-2 text-2xl md:text-4xl font-bold text-orange-500">
        New Of Our Library{" "}
      </h2>
      <div className="my-6 bg-amber-200">
        {/* new-1  */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          <div className="flex-[1]">
            <img className="w-full" src={img1} alt="" />
          </div>
          <div className="flex-[1] border-y-2 my-6 p-2">
            <p>Special Event</p>
            <h2>LOCAL HISTORY DAY</h2>
            <p>SAT. NOV. 04 12:00 PM</p>
            <p> Main (Oakland)</p>
            <p>
              Celebrate our region's culture and history with an afternoon of
              historical tours, engaging speakers, archival activities and more!
            </p>
          </div>
        </div>
        {/* new-2  */}
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-6 px-4">
          <div className="flex-[1] ">
            <img className="w-full" src={img2} alt="" />
          </div>
          <div className="flex-[1] border-y-2 my-6 p-2">
            <p>CivicCLP</p>
            <h2>VOTING & ELECTION RESOURCES</h2>
            <p>SAT. NOV. 04 12:00 PM</p>
            <p> Main (Oakland)</p>
            <p>
              Feel more informed in local and national elections with CivicCLP's
              voter education resources and initiatives.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          <div className="flex-[1] ">
            <img className="w-full" src={img3} alt="" />
          </div>
          <div className="flex-[1] border-y-2 my-6 p-2">
            <p>eResource</p>
            <h2>TEST PREP</h2>
            <p>
              Get SAT and ACT-ready with Peterson's Test & Career Prep. Access
              online practice tests, exercises, study guides and more for FREE
              with your library card!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatNew;
