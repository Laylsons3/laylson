import ConnectMongo from "../../../../database/conn";
import {
  GetOrdens,
  PostOrdem,
  PutOrdem,
  DeleteOrdem,
} from "../../../../database/controller";

export default async function Handler(req, res) {
  try {
    await ConnectMongo();
  } catch (err) {
    throw createError(500, "Error connecting to database");
  }

  // tipo de requisição
  const { method } = req;

  switch (method) {
    case "GET":
      GetOrdens(req, res);
      break;
    case "POST":
      PostOrdem(req, res);
      break;
    case "PUT":
      PutOrdem(req, res);
      break;
    case "DELETE":
      DeleteOrdem(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
