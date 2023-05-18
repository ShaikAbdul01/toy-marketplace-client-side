import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoryTabs = () => {
  return (
    <>
      <div className="text-center font-bold text-5xl text-amber-600 mb-12">
        Shop By Category
      </div>
      <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Regular Car</Tab>
          <Tab>Mini Police Car</Tab>
        </TabList>

        <TabPanel>
          {/* Render the list of math toys */}
          <div>
            <img src="toy1.jpg" alt="Toy 1" />
            <h3>Toy 1</h3>
            <p>Price: $9.99</p>
            <p>Rating: 4.5</p>
            <button>View Details</button>
          </div>
          <div>
            <img src="toy2.jpg" alt="Toy 2" />
            <h3>Toy 2</h3>
            <p>Price: $14.99</p>
            <p>Rating: 4.2</p>
            <button>View Details</button>
          </div>
        </TabPanel>

        <TabPanel>item 2</TabPanel>

        <TabPanel>item 3</TabPanel>
      </Tabs>
    </>
  );
};

export default CategoryTabs;
