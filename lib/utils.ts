import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const servicebarLinks = [
  {
    imgURL: ["/outdoorimg.png", "/outdoor2.png", "/outdoor3.png"],
    name: "Outdoor",
    route: "/outdoor",
    description: "Build all types of fences to suit your backyard",
  },
  {
    imgURL: ["/officeimg.jpg", "/office2.jpg", "/office3.jpg"],
    name: "Office",
    route: "/office",
    description: "office space is nessisary, get the most out of your office",
  },
  {
    imgURL: ["/indoorimg.png", "/indoor3.png", "/indoor3.png"],
    name: "Indoor",
    route: "/indoor",
    description: "Need New Trim or wall decor",
  }
];
 