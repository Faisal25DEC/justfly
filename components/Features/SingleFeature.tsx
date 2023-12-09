import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      {icon && (
        <div className="flex items-center justify-center ">
          <div className=" flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
        </div>
      )}
      <h3 className=" text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        {title}
      </h3>
      <p className="text-center text-base font-medium leading-relaxed text-body-color">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;
