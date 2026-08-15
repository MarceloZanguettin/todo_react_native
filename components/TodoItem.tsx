import { Ionicons } from '@expo/vector-icons';
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export interface ITodo {
    id: string;
    title: string;
    completed: boolean;
}

interface ITodoItemProps extends ITodo {
    updateItem: (id: string) => void;
    deleteItem: (id: string) => void;
}

export default function TodoItem({ id, title, completed, updateItem, deleteItem }: ITodoItemProps) {
    const uptadeTodo = () => {
      updateItem(id);
    };

    const deleteTodo = () => {
      Alert.alert(
        "Deletar item",
        "Tem certeza que deseja deletar este item?",
        [
          {
            text: "Cancelar",
            style: "cancel"
          },
          {
            text: "Excluir",
            style: "destructive",
            onPress: () => deleteItem(id)
          }
        ]
      );
    };

  return (
    <TouchableOpacity
      onPress={uptadeTodo}
      activeOpacity={0.7}
      style={styles.card}
      onLongPress={deleteTodo}
    >
      <Text style={styles.titleButton}>{title}</Text>
      <Text style={styles.description}>subtitulo</Text>

      <View style={styles.checkbox}>
        {completed && <Ionicons name="checkmark" size={30} color="white" />}
      </View>
    </TouchableOpacity>
  )
}