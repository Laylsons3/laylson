const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const GetOrdens = async () => {
  const response = await fetch(`${baseUrl}api/ordem`);
  const json = await response.json();

  return json;
};

export const GetOrdem = async (ordemId) => {
  const response = await fetch(`${baseUrl}api/ordem/${ordemId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};

export async function PostOrdem(data) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${baseUrl}api/ordem`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
}

export async function PutOrdem(ordemId, formData) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${baseUrl}api/ordem/${ordemId}`, Options);
  const json = await response.json();
  return json;
}

export async function DeleteOrdem(ordemId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(`${baseUrl}api/ordem/${ordemId}`, Options);
  const json = await response.json();

  return json;
}

export const GetMessages = async () => {
  const response = await fetch(`${baseUrl}api/messages`);
  const json = await response.json();

  return json;
};

export async function PostMessage(data) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${baseUrl}api/messages`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
}

export async function findUserPost(data) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${baseUrl}api/username`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
}

export async function newUser(data) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${baseUrl}api/user`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
}
