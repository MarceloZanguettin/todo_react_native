import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export interface ITodo {
    id: string;
    title: string;
    completed: boolean;
}

interface ITodoItemProps extends ITodo {
    updateItem: (id: string) => void;
}

export default function TodoItem({ id, title, completed, updateItem }: ITodoItemProps) {
    const uptadeTodo = () => {
      updateItem(id);
    };

  return (
    <TouchableOpacity
      onPress={uptadeTodo}
      activeOpacity={0.7}
      style={styles.card}
    >
      <Text style={styles.titleButton}>{title}</Text>
      <Text style={styles.description}>subtitulo</Text>

      <View style={styles.checkbox}>
        {completed && <Ionicons name="checkmark" size={30} color="white" />}
      </View>
    </TouchableOpacity>
  )
}