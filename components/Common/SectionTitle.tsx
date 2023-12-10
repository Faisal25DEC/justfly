import { ReactNode } from "react";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  className,
}: {
  title: ReactNode;
  paragraph: ReactNode;
  width?: string;
  center?: boolean;
  mb?: string;
  className?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""} ${className}`}
      >
        {title}

        {paragraph}
      </div>
    </>
  );
};

export default SectionTitle;
