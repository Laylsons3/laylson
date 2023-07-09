import mongoose from "mongoose";

const ConnectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI
    );

    if (connection.readyState == 1) {
      console.log("Banco de dados conectado com sucesso!");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default ConnectMongo;
