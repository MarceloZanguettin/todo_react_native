import { StyleSheet } from "react-native";

export const theme = {
    background: '#121214',
    surface: '#1E1E24',
    surfaceAlt: '#2A2A33',
    tint: '#F2C94C',
    text: '#FFFFFF',
    textMuted: '#9A9AA4',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        padding: 16,
        alignItems: 'center',
    },
    containerButton: {
        backgroundColor: theme.surfaceAlt,
        height: 60,
        alignSelf: "stretch",
        marginTop: 16,
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
        fontWeight: "300",
        marginTop: 6,
        color: theme.text,
    },
    textInputContainer: {
        height: 50,
        alignSelf: "stretch",
        marginTop: 10,
        borderRadius: 16,
        paddingHorizontal: 16,
        backgroundColor: theme.surface,
        color: theme.text,
    },
    card: {
        justifyContent: "center",
        height: 80,
        paddingHorizontal: 16,
        alignSelf: "stretch",
        marginTop: 16,
        borderRadius: 16,
        backgroundColor: theme.surface,
        color: theme.text,
        // sombra para dar sensacao de elevacao (iOS)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.35,
        shadowRadius: 6,
        // sombra para dar sensacao de elevacao (Android)
        elevation: 6,
    },
    description: {
        fontSize: 16,
        fontWeight: "300",
        marginTop: 6,
        color: theme.textMuted,
    },
    checkbox: {
        position: "absolute",
        right: 16,
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: theme.surfaceAlt,
    }
});
