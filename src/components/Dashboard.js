const Dashboard = () => {
  return (
    <div className="grid grid-cols-16 mt-5">
      <div className="flex flex-col justify-items-center col-start-2 col-span-7 mt-2">
        <div className="portal text-l text-[#4D52C0] mt-3">
          <span>portal &gt; Dashboard &gt; KPIs</span>
        </div>
        <div className="dash text-3xl font-semibold">Dashboard</div>
      </div>
      <div className="btns flex flex-row items-center col-start-15 col-span-6  my-8 ml-14 text-xl">
        <div className="back  border-2 rounded-md py-2 px-4 text-[#4D52C0] ">
          <a href="#">Back</a>
        </div>
        <div className="edit-profile mx-10  border-2 rounded-md py-2 px-4 bg-[#4D52C0] ">
          <a href="#" className="text-white">
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
