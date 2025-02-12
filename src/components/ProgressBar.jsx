
// eslint-disable-next-line react/prop-types
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 rounded-lg h-4 mt-10">
      <div
        className="h-full bg-green-500 rounded-lg transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
