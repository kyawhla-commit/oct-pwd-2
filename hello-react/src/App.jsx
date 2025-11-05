import {
  OutlinedInput,
  Box,
  Typography,
  TextField,
  List,
  IconButton,
  Divider,
  Container,
} from "@mui/material";

import { Add as AddIcon } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import Item from "./Item";
import Header from "./Header";

const api = "http://localhost:8800/items";

export default function App() {
  const inputRef = useRef();

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(api).then((res) => {
  //     res.json().then((json) => {
  //       setData(json);
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(api);
  //     const json = await res.json();
  //     setData(json);
  //   })();
  // }, []);

  useEffect(() => {
    fetch(api).then(async (res) => {
      const json = await res.json();
      setData(json);
    });
  }, []);

  const add = () => {
    const id = data[0].id + 1;

    const name = inputRef.current.value;
    if (name == "") return false;
    setData([{ id, name, done: false }, ...data]);
  };

  const del = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const toggle = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    );
  };
  const clear = () => {
    setData(data.filter(item => !item.done))
  }
  return (
    <div>
      <Header count={data.length} clear={clear} />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            add();
            e.currentTarget.reset();
          }}
        >
          <TextField
            variant="outlined"
            fullWidth
            label="Add new item"
            inputRef={inputRef}
            InputProps={{
              endAdornment: (
                <IconButton type="submit">
                  <AddIcon />
                </IconButton>
              ),
            }}
          />
        </form>

        <List>
          {data
            .filter((item) => !item.done)
            .map((item) => (
              <Item key={item.id} item={item} del={del} toggle={toggle} />
            ))}
        </List>
        <Divider />
        <List>
          {data
            .filter((item) => item.done)
            .map((item) => (
              <Item key={item.id} item={item} del={del} toggle={toggle} />
            ))}
        </List>
      </Container>
    </div>
  );
}
