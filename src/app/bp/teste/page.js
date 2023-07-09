function getData() {
  const data = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>{d.title}</div>
      ))}
    </div>
  );
}
