import SuperTextInput from "@/components/SuperTextInput";
import { SuperTitle } from "@/components/SuperTitle";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";
import { View } from "react-native";
import SupperButton from "../components/SuperButton";
import { styles } from "../components/styles";

export default function Index() {
  const [newItem, setNewItem] = useState("");


  return (
    <View style={styles.container}>
      <SuperTitle title="Lista de compras" upperCase={true} />
      <SuperTextInput value={newItem} onChangeText={setNewItem} />
      <SupperButton title="novo item" />
      <TodoItem />

      
    </View>
  );
}
