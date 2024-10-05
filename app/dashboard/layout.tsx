<<<<<<< HEAD
import { ReactNode } from "react";
import DashboardSideBar from "./_components/dashboard-side-bar";
import DashboardTopNav from "./_components/dashbord-top-nav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
=======
import NotAuthorized from "@/components/not-authorized"
import { isAuthorized } from "@/utils/data/user/isAuthorized"
import { currentUser } from "@clerk/nextjs/server"
import { ReactNode } from "react"
import DashboardSideBar from "./_components/dashboard-side-bar"
import DashboardTopNav from "./_components/dashbord-top-nav"
import config from "@/config"

export default async function DashboardLayout({ children }: { children: ReactNode }) {

  const user = await currentUser()

  const { authorized, message } = await isAuthorized(user?.id!)

  if (config.payments.enabled && !authorized) {
    return <NotAuthorized />
  }

>>>>>>> a9606ea695ea0ab77d13d25056cc375a34b4b58e
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <DashboardSideBar />
      <DashboardTopNav>
        <main className="flex flex-col gap-4 p-4 lg:gap-6">{children}</main>
      </DashboardTopNav>
    </div>
  );
}
