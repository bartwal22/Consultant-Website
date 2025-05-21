import React from "react";

export const CommonHero = ({item}) => {
  console.log(item)
  return (
    <section className="lg:h-[65vh] h-[45vh] w-full overflow-hidden flex justify-center items-center">
      <div className="bg-[url('https://cdn.pixabay.com/photo/2020/01/29/20/24/building-4803602_1280.jpg')] bg-cover bg-center w-full h-full flex md:justify-between justify-center items-center gap-4 text-white bg-[rgba(0,0,0,0.5)] md:rounded-br-[10rem] lg:px-10">
        <div>
          <h1 className="lg:text-6xl font-bold md:block hidden">{item.tittle}</h1>
        </div>

      
          <div className="flex  gap-2 rounded-br-[3rem] rounded-tl-[3rem] bg-white text-[var(--tertiary-color)] font-semibold text-lg lg:px-8 px-6 lg:py-3 py-2 mt-18 md:mt-0">
            <p>Home</p>/<p className="text-[var(--DarkYellow-color)]">{item.tittle}</p>
          </div>
       
      </div>
    </section>
  );
};
