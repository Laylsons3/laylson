"use client";

import { useForm } from "react-hook-form";
import { findUserPost } from "../../../../lib/helper";
import jwt from "jsonwebtoken";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Page = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  // const token = jwt.sign({ userId: 123 }, 'suaChaveSecreta');

  const [usuario, setUsuario] = useState("");

  // const decoded = jwt.verify(
  //   token,
  //   process.env.NODE_ENV === "development"
  //     ? process.env.NEXT_PUBLIC_TOKEN
  //     : process.env.TOKEN
  // );

  const submit = async (data) => {
    let username = data.username;
    const verificarUsuário = await findUserPost({ username });
    if (verificarUsuário.username !== data.username) {
      console.log("user not found");
    } else if (verificarUsuário.username == data.username) {
      if (verificarUsuário.password !== data.password) {
        console.log("senha incorreta");
      } else if (verificarUsuário.password == data.password) {
        console.log("tudo ok, pode logar");
        const token = jwt.sign(
          { username: data.username },
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_TOKEN
            : process.env.TOKEN
        );
        Cookies.set("_token", token, { expires: 7 });
        router.push("/bp");
      }
    }
  };

  return (
    <div className="flex justify-center py-8 bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 min-h-screen">
      <div className="max-w-sm w-full flex gap-y-4 flex-col">
        <header className="h-20 flex justify-center items-center bg-white/70 rounded-lg shadow-sm w-full text-zinc-800">
          <h1 className="text-xl font-bold">Login</h1>
        </header>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex text-lg flex-col gap-y-2 w-full rounded-lg bg-zinc-200/70 text-zinc-800 p-8"
        >
          <div className="flex flex-col gap-y-4">
            <label className="flex w-full gap-x-2">
              <span>Usuário:</span>
              <input
                {...register("username", { required: true })}
                type="text"
                className="flex-1 w-full border border-zinc-500 rounded-lg pl-2"
                placeholder="Seu usuário..."
              />
            </label>
            <label className="flex w-full gap-x-2">
              <span>Senha:</span>
              <input
                {...register("password", { required: true })}
                type="password"
                className="flex-1 w-full border border-zinc-500 rounded-lg pl-2"
                placeholder="Sua senha..."
              />
            </label>
            <div className="flex gap-x-4 justify-center">
              <button className="bg-slate-100 px-4 rounded border border-zinc-600 shadow-sm">
                Entrar
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-center gap-x-1">
              Não tem uma conta?
              <a href="/bp/cadastro" className="hover:underline">
                Cadastrar
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
