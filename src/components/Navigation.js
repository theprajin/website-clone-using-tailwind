import north from "../assets/images/north.png";
import dashboard from "../assets/images/dashboard.png";
import product from "../assets/images/product1.png";
import performance from "../assets/images/performance.png";
import deliverable from "../assets/images/deliverable2.png";
import search from "../assets/images/search.png";
import message from "../assets/images/message.png";
import notification from "../assets/images/notification.png";
import profile from "../assets/images/images.jpeg";

const Navigation = () => {
  return (
    <div className="grid grid-cols-16 mt-2">
      <div className="the north col-start-2 col-span-10 justify-around  flex flex-row items-center  gap-2 mb-2">
        <img src={north} alt="" className=" text-white -ml-8 " />
        <span className="text-white text-3xl -ml-14 font-medium ">
          The North
        </span>
        <img src={dashboard} alt="" className=" text-white  -ml-1" />
        <span className=" text-[#676deb] text-l -ml-16 font-semibold">
          Dashboard
        </span>
        <img src={product} alt="" className=" text-white  -ml-6" />
        <span className=" text-white text-l -ml-16 font-semibold">
          Products
        </span>
        <img src={performance} alt="" className=" text-white  -ml-6" />
        <span className=" text-white text-l -ml-16 font-semibold">
          Performance
        </span>
        <img src={deliverable} alt="" className=" text-white  -ml-6" />
        <span className=" text-white text-l -ml-16 font-semibold">
          Deliverables
        </span>
      </div>
      <div className=" gap-5 pb-4 col-start-14 col-span-13 flex flex-row items-center ml-10">
        <div className="">
          <div className="border-l-8 border-white border-solid h-full"></div>
          <img src={search} alt="" className=" text-white " />
        </div>
        <div>
          <img src={message} alt="" className=" text-white  ml-6  " />
        </div>
        <div>
          <img src={notification} alt="" className=" text-white  ml-6 h-8 " />
        </div>

        <img src={profile} alt="" className=" text-white  ml-6 h-14 w-14" />
        <span className=" text-white text-xl font-normal">John Doe</span>
      </div>
    </div>
  );
};
export default Navigation;
