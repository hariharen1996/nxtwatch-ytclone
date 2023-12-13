import { Rings } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full">
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
  );
};

export default Loading;
