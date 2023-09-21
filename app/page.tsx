"use client";
import CTA from "@/components/CTA";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonies from "@/components/Testimonies";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";

export default function Home() {
  // const data = await getServerSession(authOptions);
  // const { data } = useSession();
  return (
    <>
      {/* <p className="text-3xl">{JSON.stringify(data)}</p> */}
      <main className="mb-40">
        <Hero />
        <Feature />
        <Services />
        <Testimonies />
        <CTA />
      </main>
    </>
  );
}
