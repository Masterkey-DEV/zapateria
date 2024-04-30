import { titleFont } from "@/configs/fonts";

interface Props {
  title: string;
  subTitle?: string;
  className?: string;
}

export const Title = ({ title, subTitle, className }: Props) => {
  return (
    <div className={`${className} mt-3 sm:ml-4`}>
      <h1
        className={`${titleFont.className} my-5 text-2xl font-semibold antialiased`}
      >
        {title}
      </h1>
      {subTitle ?? <h3 className="mb-5 text-xs">{subTitle}</h3>}
    </div>
  );
};
