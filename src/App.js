import React from "react";
import "./styles.css";
import { useState } from "react";
import { Button, Input, FormControl, InputLabel, List, ListItem,ListItemText } from "@material-ui/core";

export default function App() {
  
  const [Todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const clickHandler = (event) => {
    event.preventDefault();
    if (input !== "") {
      setTodos([...Todos, input]);
    }
    setInput("");
  };
  return (
    <div className="App">
      <h1>My Todo App! </h1>
      
      <FormControl>
<InputLabel>Write a work to do</InputLabel>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={clickHandler}
          type="submit"  
        >
          Do it
        </Button>
      </FormControl> 
      <List>
        {Todos.map((todo) => (
          <ListItem>
          <ListItemText primary="🕒🕒🕒" secondary={todo}></ListItemText></ListItem>
        ))}
      </List>
    </div>
  );
}
