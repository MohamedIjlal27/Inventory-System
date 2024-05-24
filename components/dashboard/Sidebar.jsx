import {
  ChevronLeft,
  Home,
  ShoppingCart,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-slate-800 text-slate-50 justify-between">
      <div className="flex flex-col">
        <div className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
          <ShoppingCart />
          <span className="font-semibold text-xl">INVENTORY</span>
        </div>
        <nav className="flex flex-col gap-4 p-3">
          <Link className="flex items-center space-x-2" href="">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link className="flex items-center space-x-2" href="">
            <ShoppingCartIcon className="w-4 h-4" />
            <span>Inventory</span>
          </Link>
        </nav>
      </div>
      {/* Bottom */}
      <div className="flex flex-col justify-end">
        <div className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
          <ChevronLeft />
        </div>
      </div>
      {/* Subscription */}
      {/* Footer Icon */}
    </div>
  );
}
