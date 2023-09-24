import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import backgroundImg from "../../assets/background-login.png";
import { styles } from "./style";
import ButtonPrimary from "../../components/buttonPrimary";
import ButtonSecondary from "../../components/buttonSecondary";

interface FormData {
  email: string;
  password: string;
}

export function registerUser() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.background}
      defaultSource={backgroundImg}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Criar uma conta</Text>
        <Text style={styles.subtitle}>Criar uma  conta para experimentar todas as funcionalidades do aplicativo.</Text>
        {/* <Text>responsavel:</Text> */}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Nome do responsável"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
          )}

                  {/* <Text>responsavel:</Text> */}
        <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Nome do responsável"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={styles.input}
          />
        )}


        {/* <Text>Senha:</Text> */}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Digite sua senha"
              onChangeText={onChange}
              style={styles.input}
              onBlur={onBlur}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
          rules={{ required: "Senha é obrigatória" }}
        />
        {errors.password && (
          <Text style={{ color: "red" }}>{errors.password.message}</Text>
        )}

        <TouchableOpacity>
          <Text style={styles.forgotPasswordBtn}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <ButtonPrimary title="Entrar" onPress={handleSubmit(onSubmit)} />

       <ButtonSecondary title="Criar nova conta" onPress={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </View>
    </ImageBackground>
  );
}
