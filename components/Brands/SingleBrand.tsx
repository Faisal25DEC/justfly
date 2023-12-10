import { Brand } from "../../types/brand";
import Image from "next/image";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex justify-center">
      <div className="mx-3 flex w-full  items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
        <a
          href={href}
          target="_blank"
          rel="nofollow noreferrer"
          className="relative min-h-[3rem] w-full opacity-70  transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
        >
          <Image src={image} alt={name} fill style={{ objectFit: "contain" }} />
        </a>
      </div>
    </div>
  );
};

export default SingleBrand;
