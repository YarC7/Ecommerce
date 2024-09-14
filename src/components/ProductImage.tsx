"use client";
import Image from "next/image";
import React, { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/16152553/pexels-photo-16152553/free-photo-of-may-nh-nhi-p-nh-ban-cong-ngh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/3697717/pexels-photo-3697717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/16013983/pexels-photo-16013983/free-photo-of-may-nh-nhi-p-nh-cong-ngh-ng-kinh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/14436002/pexels-photo-14436002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
// ];
const ProductImage = ({items}: {items: any}) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div>
        <div className="h-[500px] relative ">
          <Image
            src={items[index].image.url}
            alt=""
            fill
            sizes="50vw"
            className="object-conver rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image.url}
              alt=""
              fill
              sizes="30vw"
              className="object-conver rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
