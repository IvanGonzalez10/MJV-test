import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./FirebaseConfig";
import { Div, DivDos, Input, H1, Button, H2 } from "./styles";

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  firebase.auth().onAuthStateChanged((user) => user && setUser(user.email));

  const Log = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <Div>
      {!user && (
        <DivDos>
          <H1>Inicia Sesión</H1>
          <Input
            placeholder="Correo"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={Log}>Iniciar Sesión</Button>
          <H2>Sino tienes cuenta registrate, ingresa tu correo y tu password y clickea en registrar</H2>
          <Button onClick={submit}>Registrar</Button>
        </DivDos>
      )}
      {user && <Button onClick={logout}>Cerrar Sesión</Button>}
    </Div>
  );
};
