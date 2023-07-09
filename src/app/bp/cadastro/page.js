"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { newUser } from "../../../../lib/helper";
import { useRouter } from "next/navigation";

const Page = () => {
  const { register, handleSubmit } = useForm();
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async (data) => {
    if (password !== data.password) {
      console.log("senhas diferentes", password, data.password);
    } else {
      const user = await newUser(data);
      console.log(user);
      router.push("/bp/login");
    }
  };

  return (
    <div className="flex justify-center py-8 bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 min-h-screen">
      <div className="max-w-sm w-full flex gap-y-4 flex-col">
        <header className="h-20 flex justify-center items-center bg-white/70 rounded-lg shadow-sm w-full text-zinc-800">
          <h1 className="text-xl font-bold">Cadastro</h1>
        </header>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex text-lg flex-col gap-y-2 w-full rounded-lg bg-zinc-200/70 text-zinc-800 p-8"
        >
          <div className="flex flex-col gap-y-2">
            <label className="flex flex-col w-full gap-x-2">
              <span>Usuário:</span>
              <input
                {...register("username", { required: true })}
                required
                type="text"
                className="flex-1 w-full border border-zinc-500 rounded-lg pl-2"
                placeholder="Seu usuário..."
              />
            </label>
            <label className="flex flex-col w-full gap-x-2">
              <span>Senha:</span>
              <input
                {...register("password", { required: true })}
                type="password"
                className="flex-1 w-full border border-zinc-500 rounded-lg pl-2"
                placeholder="Sua senha..."
              />
            </label>
            <label className="flex flex-col w-full gap-x-2">
              <span>Repita sua senha:</span>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 w-full border border-zinc-500 rounded-lg pl-2"
                placeholder="Repita sua senha..."
              />
            </label>
            <div className="flex gap-x-4 justify-evenly">
              <button
                type="submit"
                className="bg-slate-100 px-4 rounded border border-zinc-600 shadow-sm"
              >
                Cadastrar
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            Já tem um cadastro? &nbsp;
            <a href="/bp/login" className="hover:underline">
              Fazer login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
