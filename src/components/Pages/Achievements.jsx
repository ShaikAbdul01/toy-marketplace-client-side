import React from "react";
import CountUp from "react-countup";
const Achievements = () => {
  const achievementsData = [
    { title: "Happy Customers", value: 38027 },
    { title: "Years of Experience", value: 7 },
    { title: "Cars Sold", value: 48087 },
  ];

  return (
    <>
      <div className="text-center font-bold mt-12 mb-8 text-3xl lg:text-5xl text-amber-600">
        Our Achievements
      </div>

      <section className="bg-gray-100 py-10">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievementsData.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <CountUp
                  start={0}
                  end={achievement.value}
                  duration={10}
                  separator=","
                  className="text-5xl font-bold text-amber-500"
                />
                <p className="text-gray-500 mt-2">Total</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
