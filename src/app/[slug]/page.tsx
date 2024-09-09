import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImage from "@/components/ProductImage";
import React from "react";

type Props = {};

const SinglePage = (props: Props) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImage />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          iure id eum asperiores, vel labore modi debitis repellendus itaque.
          Tenetur possimus quisquam odio laudantium aspernatur corporis eos
          atque nostrum tempore?
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">%52</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProduct />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            facilis quae ducimus eaque repellendus illum unde, delectus dolorem,
            sed, quaerat accusantium voluptatem eius. Deserunt, asperiores in
            aspernatur possimus doloremque expedita?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            facilis quae ducimus eaque repellendus illum unde, delectus dolorem,
            sed, quaerat accusantium voluptatem eius. Deserunt, asperiores in
            aspernatur possimus doloremque expedita?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            facilis quae ducimus eaque repellendus illum unde, delectus dolorem,
            sed, quaerat accusantium voluptatem eius. Deserunt, asperiores in
            aspernatur possimus doloremque expedita?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
