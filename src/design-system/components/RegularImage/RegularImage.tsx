import { ImgHTMLAttributes } from "react";

interface RegularImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  width: number;
  height: number;
  borderRadius?: number;
}

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
