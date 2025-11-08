import { TextField, List, IconButton, Divider, Container } from "@mui/material";

import { Add as AddIcon } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import Item from "./Item";
import Header from "./Header";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const api = "http://localhost:8800/items";

export default function App() {
  const inputRef = useRef();
  const queryClient = useQueryClient();
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

  const { data, error, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await fetch(api);
      return res.json();
    },
  });

  const add = async () => {
    const name = inputRef.current.value;
    if (name == "") return false;
    await fetch(api, {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-type": "Application/json",
      },
    });

    queryClient.invalidateQueries(["items"]);
  };

  const del = async (id) => {
    await fetch(`${api}/${id}`, {
      method: "DELETE",
    });
    queryClient.invalidateQueries(["items"]);
  };

  const toggle = async (id) => {
    await fetch(`${api}/${id}/toggle`, {
      method: "PUT",
    });
    queryClient.invalidateQueries(["items"]);
  };
  const clear = () => {
    setData(data.filter((item) => !item.done));
  };
  if (error) {
    return <div>Unable to fetch Api</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
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
