"use client";

import React, { useRef, useState, useEffect } from "react";
import { GetMessages, PostMessage } from "../../../lib/helper";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

const Page = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesContainerRef = useRef(null);
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const decoded = jwt.verify(
          token,
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_TOKEN
            : process.env.TOKEN
        );
        setUser(decoded.username);
      };
      getUser();
    }
  }, [token]);

  useEffect(() => {
    let cookie = Cookies.get("_token");
    if (cookie) {
      setToken(cookie);
    } else {
      router.push("/bp/login");
    }
  }, [router]);

  const changeMessage = async (e) => {
    e.preventDefault();
    let formData = {
      user: user,
      message: newMessage,
      time: "XX:XX",
    };
    await PostMessage(formData);
    updateData();
    setNewMessage("");
  };

  const updateData = async () => {
    let data = await GetMessages();
    setMessages(data);
  };

  useEffect(() => {
    const getData = async () => {
      let data = await GetMessages();
      setMessages(data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const logout = () => {
    Cookies.remove("_token");
    router.push("/bp/login");
  };

  if (token)
    return (
      <div className="flex justify-center py-8 bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 min-h-screen">
        <div className="max-w-md w-full flex gap-y-4 flex-col">
          <header className="h-20 flex justify-center items-center bg-white/70 rounded-lg shadow-sm w-full text-zinc-800 relative">
            <h1 className="text-xl font-bold">Bate-papo</h1>
            <button
              onClick={logout}
              className="absolute top-2 right-4 hover:underline"
            >
              Sair
            </button>
          </header>
          <main className="flex flex-col w-full h-96 rounded-lg bg-zinc-200/50 text-zinc-800 p-4">
            <div className="font-bold">Logado como: {user}</div>
            <div
              ref={messagesContainerRef}
              className="text-sm h-full bg-zinc-200 rounded p-2 border flex flex-col overflow-y-scroll"
            >
              {messages?.map((m, i) => (
                <div className="text-zinc-700" key={i}>
                  <span className="font-semibold">{m.user}:</span> {m.message}
                </div>
              ))}
            </div>
            <form onSubmit={changeMessage} className="flex w-full mt-4">
              <input
                type="text"
                className="rounded-xl pl-4 flex-1 w-full h-8 bg-zinc-200"
                placeholder="Mensagem..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </form>
          </main>
        </div>
      </div>
    );
  else {
    return (
      <div className="flex justify-center py-8 bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 min-h-screen"></div>
    );
  }
};

export default Page;
