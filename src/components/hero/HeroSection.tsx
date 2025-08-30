import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="flex items-center w-full">
      <article className="flex items-center justify-center w-1/2 p-8 h-[600px]">
        <div className="mb-6 w-1/2 mx-auto">
          <h1 className="text-5xl font-extrabold w-full mb-4">
            Professional Calculator
          </h1>
          <p className="leading-8">
            We now offer a Professional Calculator for customers to calculate
            the cost of materials, this is a great tool to put together your
            requirements for an upcoming project or consultation.
          </p>
          <Link href="./landing/mastic-calculator">
            <Button className="mt-4">Get Started</Button>
          </Link>
        </div>
      </article>
      <Image
        src="/heroImage.png"
        alt="Hero Image"
        width={500}
        height={300}
        className="w-1/3 h-[600px] object-cover mt-10"
      />
    </section>
  );
};
