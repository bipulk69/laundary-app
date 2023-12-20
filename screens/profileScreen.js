import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const profileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Pressable style={{ marginVertical: 10 }}>
        <Text>Welcome {user.email}</Text>
      </Pressable>

      <Pressable onPress={signOutUser}>
        <Text>Sign OUt</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default profileScreen;

const styles = StyleSheet.create({});