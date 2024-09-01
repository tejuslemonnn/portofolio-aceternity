import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/app/data";

const Grid = () => {
  return (
    <section id="about">
           <div className="flex justify-center items-center md:gap-2">
           <h1 className="heading">
           Why
        <span className="text-purple"> Information System UNAIR?</span>
      </h1>

      <div
            className="lg:w-20 lg:h-20 w-15 h-15 flex justify-center gap-1"
                    >
  <img src="/LOGO_HIMSI.png" alt="Logo Pointer" className="p-1" />
  </div>
           </div>

      <BentoGrid className="mt-12">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
