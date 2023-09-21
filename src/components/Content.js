const Content = () => {
  return (
    <div className="content col-start-2 col-span-16 row-start-5  row-span-7  bg-white shadow-custom-shadow">
      <div className="contain1 grid grid-cols-12 grid-rows-3 h-full">
        <div className="col-start-1 col-span-4 border h-full row-span-full">
          Content1
        </div>
        <div className="col-start-5 col-span-4 border h-full row-span-full">
          Content2
        </div>
        <div className="col-start-9 col-span-4 row-span-full border h-full">
          Content3
        </div>
      </div>
    </div>
  );
};
export default Content;
