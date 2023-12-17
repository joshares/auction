import Image, { StaticImageData } from "next/image";

export interface ProductType {
  image: StaticImageData;
  title: string;
  desc: string;
  lastbid: string;
}
