import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoryTabs = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    fetch(`category.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategoriesData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="text-center font-bold text-5xl text-amber-600 mb-12">
        Shop By Category
      </div>

      <div className="container mx-auto p-4">
        <Tabs>
          <TabList className="flex">
            {categoriesData?.categories?.map((category) => (
              <Tab
                key={category.name}
                className="px-4 py-2 text-white bg-amber-600 hover:bg-amber-800 focus:outline-none focus:text-gray-800 duration-1000"
              >
                {category.name}
              </Tab>
            ))}
          </TabList>

          {categoriesData?.categories?.map((category) => (
            <TabPanel key={category.name}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 shadow-2xl p-4">
                {category.subCategories.map((subCategory) => (
                  <div
                    key={subCategory.name}
                    className="bg-white rounded shadow-2xl p-4"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {subCategory.name}
                    </h3>
                    {subCategory.toys.map((toy) => (
                      <div key={toy.name} className="mb-8 space-y-4">
                        <img
                          src={toy.picture}
                          alt={toy.name}
                          className="w-full h-40 object-cover rounded"
                        />
                        <h4 className="text-base font-medium mt-2">
                          {toy.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Price: ${toy.price}
                        </p>
                        <p className="text-gray-600 text-sm">
                          Rating: {toy.rating}
                        </p>
                        <button className="bg-amber-500 text-white py-2 px-4 mt-2 rounded hover:bg-amber-600 focus:outline-none focus:bg-amber-600 duration-1000"><Link to={`/categoryDetails/${category.name}/${subCategory.name}/${toy.name}/${toy._id}`} >
                          View Details
                        </Link></button>
                        
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default CategoryTabs;
