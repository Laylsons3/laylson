/** Controller */
import Messages from "../model/messages";
import Ordem from "../model/ordem";
import User from "../model/username";

//getOrdens
export async function GetOrdens(req, res) {
  try {
    const ordens = await Ordem.find({});

    if (!ordens) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(ordens);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

//getOrdem
export async function GetOrdem(req, res) {
  try {
    const { ordemId } = req.query;

    if (ordemId) {
      const ordem = await Ordem.findById(ordemId);
      if (!ordem) return res.status(404).json({ error: "Order not found" });
      return res.status(200).json(ordem);
    }

    return res.status(404).json({ error: "Order not selected" });
  } catch (error) {
    return res.status(500).json({ error: "Error while fetching data" });
  }
}

// postOrdem
export async function PostOrdem(req, res) {
  try {
    const data = req.body;
    if (!data)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    const newOrder = await Ordem.create(data);
    return res.status(200).json(newOrder);
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// putOrdem
export async function PutOrdem(req, res) {
  try {
    const { ordemId } = req.query;
    const formData = req.body;

    if (ordemId && formData) {
      const ordem = await Ordem.findByIdAndUpdate(ordemId, formData);
      res.status(200).json(ordem);
    }
  } catch (error) {
    res.status(404).json({ error: "Erro ao atualizar dados...!" });
  }
}

// deleteOrdem
export async function DeleteOrdem(req, res) {
  try {
    const { ordemId } = req.query;

    if (ordemId) {
      const ordem = await Ordem.findByIdAndDelete(ordemId);
      return res.status(200).json(ordem);
    }

    res.status(404).json({ error: "Order Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the Order...!" });
  }
}

export async function GetMessages(req, res) {
  try {
    const messages = await Messages.find({});

    if (!messages) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

export async function PostMessage(req, res) {
  try {
    const data = req.body;
    if (!data)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    const newMessage = await Messages.create(data);
    return res.status(200).json(newMessage);
  } catch (error) {
    return res.status(404).json({ error });
  }
}

export async function findUserPost(req, res) {
  try {
    const { username } = req.body;

    const user = await User.findOne({ username });
    console.log(user);

    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error while fetching data2" });
  }
}
export async function newUser(req, res) {
  try {
    const data = req.body;

    const user = await User.create(data);

    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error while fetching data2" });
  }
}
