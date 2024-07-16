import { ImgHTMLAttributes } from "react";

type RegularImageProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  borderRadius?: number;
} & ImgHTMLAttributes<HTMLImageElement>;

const RegularImage = (props: RegularImageProps) => {
  const {
    src,
    alt = "이미지",
    width,
    height,
    borderRadius,
    ...imageProps
  } = props;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ borderRadius }}
      {...imageProps}
    />
  );
};

export default RegularImage;
