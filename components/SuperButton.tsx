import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ISuperButton {
    title: string;
    onPress?: () => void;
};

/**
 * Principal botão do app
 * @param {string} title - Título do botão
 * @param {function} onPress - Ação a ser executada quando o botão for pressionado
 * @returns {JSX.Element} - Um super botão estilizado com o título fornecido e a ação de pressionar
 */

export default function SuperButton({ title, onPress }: ISuperButton) {
    return (
    <TouchableOpacity style={styles.containerButton} onPress={onPress}>
        <Text style={styles.titleButton}>{title}</Text>
    </TouchableOpacity>);
};
