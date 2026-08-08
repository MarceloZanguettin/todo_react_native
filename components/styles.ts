import { StyleSheet } from "react-native";

export const theme = {
    Background: '#0A0A0A',
    tint: "yellow",
    text: "white",
    button: "#333",
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.Background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButton: {
        backgroundColor: theme.button,
        height: 60,
        alignSelf: "stretch",
        margin: 16,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    titleButton: {
        fontSize: 20,
        fontWeight: "300",
        color: theme.text,
    },
    title: {
        fontSize: 30,
        fontWeight: "200",
        color: "white",
    },
    textInputContainer: {
        height: 50,
        alignSelf: "stretch",
        margin: 16,
        marginTop: 10,
        borderRadius: 8,
        paddingHorizontal: 16,
        backgroundColor: "#222",
        color: "white",
    },
    card: {
        justifyContent: "center",
        height: 80,
        paddingHorizontal: 16,
        alignSelf: "stretch",
        margin: 16,
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#111",
        color: "white",
    },
    description: {
        fontSize: 14,
        fontWeight: "200",
        color: "#999",
    },
    checkbox: {
        position: "absolute",
        right: 16,
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: theme.button,
    }
});