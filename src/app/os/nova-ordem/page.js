"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PostOrdem } from "../../../../lib/helper";

const NovaOrdem = () => {
  const [concluido, setConcluido] = useState(false);
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    console.log("submit", data);
    const file = await PostOrdem(data);
    console.log(file);
    setConcluido(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <header className="w-full h-full p-4">
        <div className="bg-white/30 border border-zinc-300 shadow-lg text-zinc-700 rounded-lg py-4 flex justify-center">
          <h1 className="font-bold">ABRIR CHAMADO</h1>
        </div>
      </header>
      {concluido ? (
        <div className="mx-4 justify-center bg-white/30 border border-zinc-300 shadow-lg text-zinc-800 rounded-lg py-4 flex gap-y-4 px-4">
          Solicitação enviada
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(submit)}
          className="mx-4 bg-white/30 border border-zinc-300 shadow-lg text-zinc-700 rounded-lg py-4 flex flex-col gap-y-4 px-4"
        >
          <label className="flex w-full gap-x-1">
            <span className="font-medium">Nome: </span>
            <input
              type="text"
              placeholder="Seu nome"
              {...register("name", { required: true })}
              className="px-1 rounded border border-zinc-400 bg-white/90 flex-1 w-full"
            />
          </label>
          <label className="flex w-full gap-x-1">
            <span className="font-medium">Secretaria: </span>
            <input
              type="text"
              placeholder="Secretaria"
              {...register("secretaria", { required: true })}
              className="px-1 rounded border border-zinc-400 bg-white/90 flex-1 w-full"
            />
          </label>

          <label className="flex w-full gap-x-1">
            <span className="font-medium">Setor/Local: </span>
            <input
              type="text"
              placeholder="Ex: Escola..."
              {...register("setor", { required: true })}
              className="px-1 rounded border border-zinc-400 bg-white/90 flex-1 w-full"
            />
          </label>
          <label className="flex flex-col w-full gap-x-1">
            <span className="font-medium text-center">Problema: </span>
            <input
              type="text"
              placeholder="Relate seu problema"
              {...register("problema", { required: true })}
              className="px-1 rounded border border-zinc-400 bg-white/90 flex-1 w-full"
            />
          </label>
          <div className="flex gap-x-4 justify-center w-full">
            <button
              className="bg-gradient-to-r from-gray-100 to-gray-300 border border-zinc-400 px-4 shadow rounded"
              type="reset"
            >
              Limpar
            </button>
            <button
              className="bg-gradient-to-r from-gray-100 to-gray-300 border border-zinc-400 px-4 shadow rounded"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NovaOrdem;
