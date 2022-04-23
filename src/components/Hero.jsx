import React from "react";

const Hero = () => {
  return (
    <div>
      <div class="md:flex md:flex-row mt-10">
        <div class="md:w-2/5 flex flex-col justify-center items-center">
          <h2 class="font-poppins text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">
            Cart Candy
          </h2>
          <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left font-poppins">
            Os melhores doces você encontra aqui.
          </p>
          <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left font-poppins">
            Tenha um dia mais que PERFEITO.
          </p>
          <button
            class="bg-gradient-to-r from-facebookColor to-twitterColor rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5
          shadow-md hover:shadow-md
          active:scale-90 transition duration-150
          font-poppins
          "
          >
            Comprar Agora
          </button>
        </div>
        <div class="md:w-3/5">
          <img src="./img/hero-logo.svg" class="w-full" alt="hero img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
