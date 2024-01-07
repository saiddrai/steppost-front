import Card from "../components/Card";
function Pourquoi({ pourquoi }) {
  return (
    <>
      <div className="py-10 px-4 lg:px-10">
        <h1 className="font-title font-bold text-4xl lg:text-5xl  lg:w-96 lg:text-right  ">
          WHY CHOOSE <span className="text-purple">STEPPOST?</span>
        </h1>
        <div
          className="flex flex-col justify-center items-center
        lg:grid  grid-cols-2 lg:grid-cols-3 mt-10 w-5/6 mx-auto space-y-8"
        >
          <div className="flex row-span-2 justify-center items-center">
            <div
              className="p-6  py-10 bg-sandver lg:translate-y-4 bg-cover rounded-2xl
          h-[32rem]  w-64 "
            >
              <h1 className="text-4xl font-title font-bold text-white mx- mb-10">
                {pourquoi.list[0].title}
              </h1>
              <p className="text-white font-body font-semibold text-lg">
                {pourquoi.list[0].text}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start">
            <Card
              className="flex justify-center items-center"
              title={`${pourquoi.list[1].title}`}
              text={`${pourquoi.list[1].text}`}
              textColor={"purple"}
            />
          </div>
          <div className="flex justify-center items-center">
            <Card
              title={`${pourquoi.list[2].title}`}
              text={`${pourquoi.list[2].text}`}
              textColor={"purple"}
            />
          </div>
          <div className="flex justify-center items-center">
            <Card
              title={`${pourquoi.list[3].title}`}
              text={`${pourquoi.list[3].text}`}
              textColor={"white"}
              bg={"bg-cup"}
            />
          </div>
          <div className="flex justify-center items-center">
            <Card
              title={`${pourquoi.list[4].title}`}
              text={`${pourquoi.list[4].text}`}
              textColor={"purple"}
            />
          </div>
        </div>
        <div className="grid grid-cols-2"></div>
      </div>
    </>
  );
}

export default Pourquoi;
