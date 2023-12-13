import { Rings } from "react-loader-spinner";

const SuspenseLoader = () => {
  return (
    <div className="w-full min-h-screen text-white flex justify-center items-center">
      <div>
        <Rings
          height="80"
          width="80"
          color="#ff0b37"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    </div>
  );
};

export default SuspenseLoader;
