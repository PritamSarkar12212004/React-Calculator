import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Haptics from "expo-haptics";

const Button = ({ item, setValue, value, sethistory }: any) => {
  const clear = () => {
    setValue("");
  };

  const isOperator = (char: string) => {
    return ["+", "-", "*", "/"].includes(char);
  };

  const isIncompleteExpression = (expression: string) => {
    return isOperator(expression[expression.length - 1]) || expression === "";
  };

  const { title, style, text, numvalue, histoey } = item;

  const valueSender = (title: string) => {
    if (title === "AC") {
      clear();
    } else if (title === "=") {
      if (!isIncompleteExpression(value)) {
        try {
          setValue(eval(value).toString());
          sethistory((prev: string) => [
            prev + value + "=" + eval(value).toString(),
          ]);
        } catch {
          setValue("Error");
        }
      } else {
        setValue("Error");
      }
    } else if (title === "remove") {
      setValue(value.slice(0, -1));
    } else if (title === "+/-") {
      if (!isIncompleteExpression(value)) {
        setValue((prev: string) => (parseFloat(prev) * -1).toString());
      }
    } else {
      if (!isOperator(title) || !isOperator(value[value.length - 1])) {
        setValue((prev: string) => prev + title);
      }
    }
  };

  return (
    <TouchableOpacity
      onPress={() => valueSender(numvalue)}
      className={`${style} mb-2`}
      activeOpacity={0.8}
    >
      <Text className={text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
