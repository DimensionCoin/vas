import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <div className="p-1 md:p-2 lg:p-3 px-8 border-b border-black bg-[#ededed] flex justify-between w-full">
      <div>
        <Link href="/">
          <Image
            src="/vassalloicon.png"
            alt="logo"
            width={45}
            height={45}
            className="rounded-full "
          />
        </Link>
      </div>
      <div>
        <div className="hidden sm:hidden md:flex gap-8 mr-6 ">
          <a href="tel:4167023183" title="Call us at 4167023183">
            <Image
              src="/phone.svg"
              alt="phone"
              height={30}
              width={30}
              className="mt-1 "
            />
          </a>
          <a
            href="https://www.instagram.com/vassallotyler/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit our Instagram page"
          >
            <Image
              src="/insta.svg"
              alt="Instagram"
              height={30}
              width={30}
              className="mt-1 "
            />
          </a>
          <div>
            <Sheet>
              <SheetTrigger>
                <Image src="/burger.svg" alt="menu" height={40} width={40} />
              </SheetTrigger>
              <SheetContent>
                <div>
                    <Button>Hello</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
