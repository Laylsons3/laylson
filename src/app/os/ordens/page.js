import React from "react";
// import { GetOrdens } from "../../../../lib/helper";
import { AiFillCloseCircle } from "react-icons/ai";

const Ordens = async () => {
  // const data = await GetOrdens();

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <header className="w-full h-full p-4">
        <div className="bg-white/30 border border-zinc-300 shadow-lg text-zinc-800 rounded-lg py-4 flex justify-center">
          <h1 className="font-bold">ORDENS DE SERVIÇO</h1>
        </div>
      </header>

      <section className="mx-4 bg-white/30 border border-zinc-300 shadow-lg text-zinc-800 rounded-lg py-4 flex gap-y-4 px-4">
        <div className="w-full grid grid-cols-4 gap-x-4">
          {/*           
          {data.map((d, i) => (
            <div
              className="my-2 bg-white/30 border shadow shadow-black/50 p-2 rounded relative"
              key={i}
            >
              <div className="absolute right-2 top-2">
                <AiFillCloseCircle size={22} />
              </div>
              <h2>Solicitante: {d.name}</h2>
              <div>Setor: {d.setor}</div>
              <div>Secretaria: {d.secretaria}</div>
              <p>Problema relatado: {d.problema}</p>
            </div>
          ))} */}
        </div>
        {/* <pre>{data}</pre> */}
      </section>
    </div>
  );
};

export default Ordens;
