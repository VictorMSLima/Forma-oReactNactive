import { Text, StyleSheet, Pressable } from "react-native";

export const Timer = ({ tempoInicial }) => {
  const date = new Date(tempoInicial * 1000);
  const opcoes = {
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <Text style={estilos.timer}>
      {date.toLocaleTimeString("pt-BR", opcoes)}
    </Text>
  );
};

const estilos = StyleSheet.create({
  timer: {
    color: "#fff",
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
  },
});
