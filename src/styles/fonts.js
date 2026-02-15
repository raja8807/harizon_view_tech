import {
  Roboto as MainFont,
  Cinzel,
  DM_Sans as HeadFont,
} from "next/font/google";
// import { Inder as Be_Vietnam_Pro } from "next/font/google";

const mainFont = HeadFont({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const headFont = HeadFont({
  weight: ["400"],
  subsets: ["latin"],
});
const cinzel = Cinzel({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  MainFont: mainFont.className,
  HeadFont: headFont.className,
  Cinzel: cinzel.className,
};
export default fonts;
