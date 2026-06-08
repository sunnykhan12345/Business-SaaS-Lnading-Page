import Image from "next/image";
import { getImageSize } from "@/lib/imageSizes";

export default function ImageFrame({
  src,
  alt,
  priority = false,
  className = "",
  imageClassName = "",
  sizes = "(max-width: 768px) 92vw, 50vw",
}) {
  const { width, height } = getImageSize(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={`h-auto w-full rounded-[20px] object-cover ${imageClassName}`}
      />
    </div>
  );
}
