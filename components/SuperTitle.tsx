import { Text } from "react-native";
import { styles } from "./styles";

interface Props {
    title: string;
    upperCase?: boolean;
}

/**
 * Componente de título estilizado
 * @param {string} title - Título a ser exibido
 * @param {boolean} upperCase - Se o título deve ser exibido em letras maiúsculas
 * @returns {JSX.Element} - Um título estilizado com o conteúdo fornecido
 */

export function SuperTitle(props: Props) {
    let content = props.title;

    if (!content) {
        return null;
    }

    if (props.upperCase) {
        content = content.toUpperCase();
    }

    return <Text style={styles.title}>
        {content}
    </Text>
};