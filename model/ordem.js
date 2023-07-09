import { Schema, models, model } from "mongoose";

const orderSchema = new Schema({
  number: Number,
  name: String,
  setor: String,
  secretaria: String,
  data: Date,
  problema: String,
});

const Ordem = models.ordens || model("ordens", orderSchema);

export default Ordem;
