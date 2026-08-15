import SuperTextInput from "@/components/SuperTextInput";
import { SuperTitle } from "@/components/SuperTitle";
import TodoItem, { ITodo } from "@/components/TodoItem";
import { useState } from "react";
import { View } from "react-native";
import SupperButton from "../components/SuperButton";
import { styles } from "../components/styles";

export default function Index() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addItem = () => {
    if (newItem.length < 4) return;


    const item: ITodo = {
      id: Math.random().toString(),
      title: newItem,
      completed: false,
    };

    setTodos([item, ...todos]);

    setNewItem("");
  }

  const updateItem = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const deleteItem = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <View style={styles.container}>
      <SuperTitle title="Lista de compras" upperCase={true} />
      <SuperTextInput value={newItem} onChangeText={setNewItem} />
      <SupperButton title="novo item" onPress={addItem} />
      
      {todos.map((todo) => {
        return <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />;
      })}

      
    </View>
  );
}
