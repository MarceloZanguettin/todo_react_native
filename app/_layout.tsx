import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Lista de compras" }}></Stack.Screen>
    </Stack>
  );
}
