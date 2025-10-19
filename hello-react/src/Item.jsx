import {ListItem, IconButton, ListItemText, List} from "@mui/material"
export default function Item({ item, del, toggle }) {
  return <ListItem>
    <button onClick={() => toggle(item.id)}>
      {item.done ? "Undo" : "Check"}
    </button>
    {item.name}
    <button onClick={() => {del(item.id)}}>DEL</button>
  </ListItem>;
}