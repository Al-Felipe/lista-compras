import { useState } from "react";

export const ListaCompras = () => {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  const getItem = (e) => setNewItem(e.target.value);

  const addItem = () => {
    const item = {
      id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
      itemName: newItem,
    };

    setList([...list, item]);
  };

  const removeItem = (id) => setList(list.filter((item) => item.id !== id));

  return (
    <div>
      <div className="container">
        <input
          type="text"
          placeholder="Digite o nome do item"
          onChange={getItem}
          required
        />
        <button onClick={addItem}>Adicionar</button>
        <hr />
      </div>
      <ul>
        {list.map((item) => {
          return (
            <>
              <li key={item.id}>
                {item.itemName}
                <button onClick={() => removeItem(item.id)}>X</button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
