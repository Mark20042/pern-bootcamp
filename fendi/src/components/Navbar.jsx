import { Button } from "@/components/ui/button";
import { CarFront, ShoppingCart, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full   bg-white py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="p-2 bg-blue-300 border-2 border-blue-900 shadow-[2px_2px_0px_0px_#1e3a8a]">
            <CarFront className="w-6 h-6 text-blue-900" />
          </div>
          <span className="text-2xl font-black text-blue-900 italic tracking-tighter">
            SIPACAREER<span className="text-blue-500">AUTO</span>
          </span>
        </div>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for cars..."
            className="
              w-full pl-4 pr-12 py-2 
              font-bold text-blue-900 placeholder:text-blue-400
              bg-white 
              border-2 border-blue-900 
              shadow-[4px_4px_0px_0px_#1e3a8a] 
              focus:outline-none 
              focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-none
              transition-all
            "
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-blue-100 rounded-sm transition-colors">
            <Search className="w-5 h-5 text-blue-900" />
          </button>
        </div>

        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
          <div className="hidden lg:flex gap-6 font-bold text-blue-900">
            <a
              href="#"
              className="hover:underline decoration-4 decoration-blue-300 underline-offset-4"
            >
              Inventory
            </a>
            <a
              href="#"
              className="hover:underline decoration-4 decoration-blue-300 underline-offset-4"
            >
              About
            </a>
          </div>

          <div className="flex gap-3">
            <Button
              className="
                font-bold 
                bg-blue-300 text-blue-900 
                border-2 border-blue-900 
                shadow-[4px_4px_0px_0px_#1e3a8a] 
                hover:translate-x-0.5
                hover:translate-y-0.5
                hover:shadow-none
                transition-all
              "
            >
              <ShoppingCart className="mr-2 w-4 h-4" />
              Cart (0)
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
