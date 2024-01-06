import { ImgHTMLAttributes, forwardRef } from "react";
import appIcons from "../../config/appIcons";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  avatarSize?: "sm" | "md" | "lg";
};

type Ref = HTMLImageElement;

const Avatar = forwardRef<Ref, Props>(
  ({ className, src, alt, avatarSize, ...restProps }, ref) => {
    let imgSize = "";

    switch (avatarSize) {
      case "lg":
        imgSize = "w-20 h-20";
        break;

      case "md":
        imgSize = "w-10 h-10";
        break;

      case "sm":
        imgSize = "w-6 h-6";
        break;

      default:
        imgSize = "w-10 h-10";
        break;
    }

    return (
      <>
        {!src ? (
          <appIcons.User
            className={`object-cover mx-2 rounded-full border border-primary ${imgSize} ${className}`}
          />
        ) : (
          <img
            ref={ref}
            {...restProps}
            className={`object-cover mx-2 rounded-full border border-primary ${imgSize} ${className}`}
            src={src}
            alt={alt}
          />
        )}
      </>
    );
  }
);

export default Avatar;
