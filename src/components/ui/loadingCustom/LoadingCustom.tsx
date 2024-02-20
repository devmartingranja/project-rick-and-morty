import Image from "next/image";

const LoadingCustom = () => {
  return (
    <div
      className="grid h-full place-content-center"
      data-testid="test-id-loading"
    >
      <Image
        src="/images/loading_Rick_morty.gif"
        alt="Loading"
        width="150"
        height="150"
      />
    </div>
  );
};

export default LoadingCustom;
