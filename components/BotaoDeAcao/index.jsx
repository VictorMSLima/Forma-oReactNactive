import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export const BotaoDeAcao = ({ativo, onPress , display}) => {
  return (
    <Pressable
              style={
                ativo ? estilos.contextoBotaoAtivo : null
              }
              onPress={onPress}
            >
              <Text style={estilos.contextoBotaoTexto}>{display}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
    contextoBotaoTexto: {
        color: "#FFF",
        fontSize: 12.5,
        padding: 8,
    },
    contextoBotaoAtivo: {
        backgroundColor: "#144480",
        borderRadius: 8,
    },
    });