import React, { CSSProperties, FC } from "react";
import type { ImgHTMLAttributes } from "react";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

export type InlineImageProps = {
  url?: string;
  title: string;
  alt: string;
  gatsbyImageData?: IGatsbyImageData;
  style?: CSSProperties;
  loading?: "eager" | "lazy";
  width?: ImgHTMLAttributes<HTMLImageElement>["width"];
  height?: ImgHTMLAttributes<HTMLImageElement>["height"];
};

export const InlineImage: FC<InlineImageProps> = ({
  url,
  title,
  alt = "",
  gatsbyImageData,
  style,
  loading,
  width,
  height,
}) => {
  if (!!gatsbyImageData) {
    return (
      <GatsbyImage image={gatsbyImageData} alt={alt || ""} style={style} />
    );
  } else if (!!url) {
    return (
      <img
        style={{ maxWidth: "100%", display: "block", ...style }}
        src={url}
        title={title}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
      />
    );
  }
  return null;
};
