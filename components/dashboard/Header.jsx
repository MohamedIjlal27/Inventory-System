import {
  Bell,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200 shadow-sm">
      <div className="flex gap-5">
        <button>
          <History className="w-6 h-6" />
        </button>
        <SearchInput />
      </div>
      <div className="flex items-center gap-4">
        <div className="pr-2 border-r border-gray-400">
          <button className="p-1 bg-blue-600 rounded-lg">
            <Plus className="text-slate-50 w-4 h-4 " />
          </button>
        </div>
        <div className="border-r border-gray-400 space-x-3">
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Users className="text-slate-900 w-4 h-4 " />
          </button>
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Bell className="text-slate-900 w-4 h-4 " />
          </button>
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Settings className="text-slate-900 w-4 h-4 " />
          </button>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center">
            <span>Garat</span>
            <ChevronDown className="w-4 h-4 " />
          </button>
          <button>
            <Image
              src="/user.jpg"
              alt="userImage"
              width={96}
              height={96}
              className="rounded-full w-9 h-9 border-slate-1000"
            />
          </button>
          <button>
            <LayoutGrid className="w-6 h-6 text-slate-900" />
          </button>
        </div>
      </div>
    </div>
  );
}
