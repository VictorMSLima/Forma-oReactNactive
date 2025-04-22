import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

const minuto = 1;

const pomodoro = [
  {
    id: "foco",
    display: "Foco",
    tempoInicial: 25 * minuto,
    imagem: require("./pomodoro.png"),
  },
  {
    id: "curto",
    display: "Pausa Curta",
    tempoInicial: 5 * minuto,
    imagem: require("./curto.png"),
  },
  {
    id: "longo",
    display: "Pausa Longa",
    tempoInicial: 15 * minuto,
    imagem: require("./longo.png"),
  },
];

export default function Index() {
  const [tipoTempo, setTipoTempo] = useState(pomodoro[0]);
  return (
    <View style={estilos.container}>
      <Image style={estilos.imagem} source={tipoTempo.imagem} />
      <View style={estilos.actions}>
        <View style={estilos.contexto}>
          {pomodoro.map((item) => (
            <Pressable
              key={item.id}
              style={
                tipoTempo.id === item.id ? estilos.contextoBotaoAtivo : null
              }
              onPress={() => {
                setTipoTempo(item);
              }}
            >
              <Text style={estilos.contextoBotaoTexto}>{item.display}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={estilos.timer}>
          {new Date(tipoTempo.tempoInicial * 1000).toLocaleTimeString("pt-BR", {
            minutes: "2-digit",
            seconds: "2-digit",
          })}
        </Text>
        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>Começar</Text>
        </Pressable>
      </View>
      <View>
        <Text style={estilos.rodape}>Projeto do Curso Alura</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    height: 300,
    gap: 32,
  },
  imagem: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  timer: {
    color: "#fff",
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
  },
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
  rodape: {
    color: "#98A0A8",
    fontSize: 12.5,
    alignItems: "center",
  },
  contexto: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contextoBotaoTexto: {
    color: "#FFF",
    fontSize: 12.5,
    padding: 8,
  },
  contextoBotaoAtivo: {
    backgroundColor: "#144480",
    borderRadius: 32,
  },
});
