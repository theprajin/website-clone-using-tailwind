import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

const App = () => {
  return (
    <>
      <div className=" grid grid-cols-16 grid-rows-13  h-screen w-screen">
        <div className="header col-span-full row-start-1 row-span-1 bg-[#2D3748]">
          <Navigation />
        </div>
        <div className="dashboard col-span-full row-span-2 bg-white shadow-custom-shadow">
          <Dashboard className="" />
        </div>

        <Content />
      </div>
    </>
  );
};

export default App;
