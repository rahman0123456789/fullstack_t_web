// components/Navbar.tsx
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { IoCloudDownloadOutline } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { ModeToggle } from "@/components/components/themeprov";
const Navbar = () => {
  return (
    <nav className="bg-background/50 sticky top-0 backdrop-blur p-4">
      <div className="container mx-auto flex justify-between items-center pb-6 border-b md:px-14">
        <Link href={"/"} className="text-lg font-bold hover:text-yellow-300">AbdulRahman</Link>
        <div className="hidden md:flex space-x-4 justify-center items-center">
          <Link href="/" className="hover:scale-105 transition-transform duration-300 font-semibold hover:text-yellow-300">Home</Link>
          <Link href="/about" className="hover:scale-105 transition-transform duration-300 font-semibold hover:text-yellow-300">About</Link>
          <Link href="/contact" className="hover:scale-105 transition-transform duration-300 font-semibold hover:text-yellow-300">Contact</Link>
          <a href="./cv.pdf" target="_blank">
          <Button variant="outline">
            Download CV
            <IoCloudDownloadOutline className="text-lg ml-2 pt-1 hover:text-yellow-300"/>
            </Button>
            </a>
          <ModeToggle/>

        </div>
        <div className="md:hidden">

        <Sheet>
  <SheetTrigger>
            {/* Hamburger Icon for Mobile */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </SheetTrigger>
          <span className="mx-2">
          <ModeToggle/>
          </span>
          <SheetContent>
    <SheetHeader>
      <SheetTitle className="hover:text-yellow-300">AbdulRahman</SheetTitle>
      <SheetDescription>
      <div className='flex flex-col gap-8 mt-8'>
          <Link href="/" className="hover:scale-105 transition-transform duration-300 font-semibold hover:text-yellow-300">Home</Link>
          <Link href="/about" className="hover:scale-105 transition-transform duration-300 font-semibold hover:text-yellow-300">About</Link>
          <Link href="/contact" className="hover:scale-105 transition-transform duration-300 font-semibold hover:text-yellow-300">Contact</Link>
         <a href="./cv.pdf" target="_blank">
          <Button variant="outline">
            Download CV
            <IoCloudDownloadOutline className="text-lg ml-2 pt-1"/>
            </Button></a>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
