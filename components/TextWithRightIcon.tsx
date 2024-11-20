import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

type RecommendedWithIconProps = {
  text: string;
};

const RecommendedWithIcon = ({ text }: RecommendedWithIconProps) => {
  return (
    <View className="flex flex-row items-center justify-between border">
      <Text className="text-white text-xl ">{text}</Text>
      <View className="">
        <AntDesign name="right" size={24} color="gray" />
      </View>
    </View>
  );
};

export default RecommendedWithIcon;
