"use client";

import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import {
  Banknote,
  Folder,
  HomeIcon,
  Settings,
  Package,
  DollarSign,
  FileText,
  Users,
  ShoppingCart,
  ShoppingBag,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTasks } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function DashboardSideBar() {
  const pathname = usePathname();

  return (
    <div className="lg:block hidden border-r h-full w-64">
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-[55px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <span className="">Nextjs Starter Kit</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link href="/dashboard" className="w-full">
              <Button
                variant="ghost"
                className={clsx(
                  "w-full justify-start py-2 px-4",
                  pathname === "/dashboard" && "bg-accent"
                )}
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>

            <Link href="/dashboard/sales" className="w-full">
              <Button
                variant="ghost"
                className={clsx(
                  "w-full justify-start py-2 px-4",
                  pathname === "/dashboard/sales" && "bg-accent"
                )}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Sales
              </Button>
            </Link>

            <Link href="/dashboard/inventory" className="w-full">
              <Button
                variant="ghost"
                className={clsx(
                  "w-full justify-start py-2 px-4",
                  pathname === "/dashboard/inventory" && "bg-accent"
                )}
              >
                <Package className="mr-2 h-4 w-4" />
                Inventory
              </Button>
            </Link>

            <Link href="/dashboard/purchasing" className="w-full">
              <Button
                variant="ghost"
                className={clsx(
                  "w-full justify-start py-2 px-4",
                  pathname === "/dashboard/purchasing" && "bg-accent"
                )}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Purchasing
              </Button>
            </Link>

            <Link href="/dashboard/contacts" className="w-full">
              <Button
                variant="ghost"
                className={clsx(
                  "w-full justify-start py-2 px-4",
                  pathname === "/dashboard/contacts" && "bg-accent"
                )}
              >
                <Users className="mr-2 h-4 w-4" />
                Contacts
              </Button>
            </Link>

            <Separator className="my-4" />

            <Link href="/dashboard/settings" id="onboarding" className="w-full">
              <Button
                variant="ghost"
                className={clsx(
                  "w-full justify-start py-2 px-4",
                  pathname === "/dashboard/settings" && "bg-accent"
                )}
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
