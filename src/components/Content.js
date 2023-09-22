import profile from "../assets/images/profile.jpg";
import map from "../assets/images/map.png";
import stack from "../assets/images/stack.png";

const Content = () => {
  return (
    <div className="content col-start-2 col-span-16 row-start-5  row-span-7  bg-white shadow-custom-shadow">
      <div className="contain1 grid grid-cols-12 grid-rows-3 h-full">
        <div className="col-start-1 col-span-4 border h-full row-span-full">
          <div className="flex flex-col gap-4 items-center mt-12">
            <img
              src={profile}
              alt=""
              className="h-28 w-28 border-x-8 border-y-8 rounded-full"
            />
            <h2 className="text-2xl font-semibold">Timonthy Jon Oliphant</h2>
            <div className="flex gap-4 h-4">
              <div className="mt-2 mb-2">
                <img src={map} alt="" />
              </div>
              <p className="text-[#738197] text-lg">Las Vegas, Nevada</p>
            </div>
            <p className="mx-32 mt-4 text-lg text-[#738197] text-center">
              The more I deal with the work as something that is my own, as
              something that is personal, the more successful it is.
            </p>
            <div className="flex gap-10 h-20 mt-2">
              <div className="border-r-2 pr-8">
                <p className="text-4xl text-center text-[#728096]">82</p>
                <p className="text-xl">Reviews</p>
              </div>
              <div className="border-r-2  pr-8">
                <p className="text-4xl text-center text-[#728096]">28</p>
                <p className="text-xl">Projects</p>
              </div>
              <div className="">
                <p className="text-4xl text-center text-[#728096]">42</p>
                <p className="text-xl">Approved</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-5 col-span-4 border h-full row-span-full">
          <div className="flex flex-col gap-4 items-center mt-24">
            <img src={stack} alt="" className=" " />
            <h2 className="text-2xl font-semibold mt-4">
              Senior Product Designer
            </h2>
            <div className="flex gap-4 h-4">
              <p className="text-[#738197] text-lg">Freelance</p>
            </div>
            <p className="mx-32 mt-4 text-lg text-[#738197] text-center">
              John is a true asset to us, providing advanced designing skills
              from years of experience as UX designer.
            </p>
            <div className="flex gap-10 h-20 mt-6">
              <div className="flex flex-row flex-wrap gap-4 mx-40 ">
                <div>
                  <p>Interface</p>
                </div>
                <div>
                  <p>Interface</p>
                </div>
                <div>
                  <p>Interface</p>
                </div>
                <div>
                  <p>Interface</p>
                </div>
                <div>
                  <p>Interface</p>
                </div>
                <div>
                  <p>Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-9 col-span-4 row-span-full border h-full">
          Content3
        </div>
      </div>
    </div>
  );
};
export default Content;
