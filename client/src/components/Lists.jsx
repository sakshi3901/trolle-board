import { useState } from "react";
import List from "./List";

export default function Lists() {
  const [lists, setLists] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  return (
    <div class="list mt-4">
      {lists.map((ids, index) => (
        <List id={index} />
      ))}
    </div>
  );
}
