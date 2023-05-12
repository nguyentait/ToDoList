

import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'This is a dashboard',
}


export default function DashboardLayout(
    {
        children, // will be a page or nested layout
    }: 
    {
        children: React.ReactNode;
    }
) {
    return (
      <main id="dashboard" className="flex min-h-screen flex-col items-center justify-between p-24">
        <nav>aa</nav>
   
        {children}
      </main>
    );
  }