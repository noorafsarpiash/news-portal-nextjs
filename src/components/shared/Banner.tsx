import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import bannerImg from "@/public/assets/banner.jpeg";
const Banner = () => {
  return (
    <div className="bg-slate-100">
      <div className="px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <Image src={bannerImg} alt="banner-img" />
        </div>
        <div className="space-y-4 flex flex-col">
          <h4 className="text-sm font-medium text-gray-500">Technology</h4>
          <h2 className="text-3xl font-semibold">
            OpenAi Is Growing and Burning Through piles of money
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            molestias fugit optio provident nobis? Rerum cupiditate nostrum
            consectetur autem corporis cumque error saepe distinctio
            repellendus?
          </p>
          <br />

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            molestias fugit optio provident nobis? Rerum cupiditate nostrum
            consectetur autem corporis cumque error saepe distinctio
            repellendus?
          </p>
          <Button variant="default">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
