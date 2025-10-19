function Item({ item }) {
  return <li>{item.name}</li>;
}
export default function App() {
  const data = [
    { id: 3, name: "Egg" },
    { id: 2, name: "Bread" },
    { id: 1, name: "Butter" },
  ];
  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        {data.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
