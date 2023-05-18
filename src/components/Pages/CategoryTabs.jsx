import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoryTabs = () => {
  return (
    <>
    <div className="text-center font-bold text-5xl text-amber-600 mb-12">Shop By Category</div>
      <Tabs>
        <TabList>
          <Tab>Math Toys</Tab>
          <Tab>Language Toys</Tab>
          <Tab>Engineering Toys</Tab>
        </TabList>

        <TabPanel>
          {/* Render the list of math toys */}
          item 1
        </TabPanel>

        <TabPanel>item 2</TabPanel>

        <TabPanel>item 3</TabPanel>
      </Tabs>
    </>
  );
};

export default CategoryTabs;
