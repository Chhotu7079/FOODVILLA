// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="flex w-80 h-96 flex-col rounded-xl bg-[#d3d5df] shadow-md">
      <div className="overflow-hidden shadow-lg rounded-xl bg-gray-600 h-[200px]"></div>

      <div className="p-6">
        <div className="mb-2 bg-gray-600 h-4"></div>
        <div className="bg-gray-600 h-3 mt-3"></div>
      </div>
      <div className="p-6 pt-6 ">
        <div className="rounded-lg bg-gray-600 py-3 px-6 shadow-md h-6 w-2"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-y-6 gap-x-4">
      {new Array(8).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;
