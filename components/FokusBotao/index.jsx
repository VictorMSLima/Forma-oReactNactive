import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export const FokusBotao = () => {
    return (
        <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Começar</Text>
        </Pressable>
    );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#B872FF",
    padding: 8,
    borderRadius: 32,
  },
  textoBotao: {
    color: "#021123",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    },
});
