import React from "react";
import image from "../images/new-bg.png";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="From NZ with love!"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-7xl text-white font-bold cursive leading-none lg:leadinng-snug home-name ">
          Kia ora, I'm Sasha!
        </h1>
      </section>
    </main>
  );
}
