const App = () => {
  return (
    <>
      <div className=" grid grid-cols-16 grid-rows-13  h-screen w-screen">
        <div className="header col-span-full row-start-1 row-span-1 bg-[#2D3748]">
          Navigation
        </div>
        <div className="dashboard col-span-full row-span-2 bg-white shadow-custom-shadow"></div>
        <div className="content col-start-3 col-span-12 row-start-5  row-span-7  bg-white shadow-custom-shadow"></div>
      </div>
    </>
  );
};

export default App;
