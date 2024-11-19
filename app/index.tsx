import { StatusBar, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import RecommendedWithIcon from "@/components/RecommendedWithIcon";

function HomeScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView className={`flex-1 bg-black p-3`}>
      <View className="flex-1 p-5">
        {/* title and search icon  */}
        <View className=" mt-3 flex-row justify-between items-center">
          <View className="m-2 gap-1">
            <Text className="text-gray-400 text-xl ">Good Morning,</Text>
            <Text className="text-2xl font-bold text-gray-300 ">Bardan G</Text>
          </View>
          <AntDesign name="search1" size={32} color="gray" />
        </View>

        {/* recommended for you */}
        <View className="mt-4 ">
          <RecommendedWithIcon text={"Recommended For You"} />
        </View>
      </View>

      <StatusBar backgroundColor="#61dafb" />
    </SafeAreaView>
  );
}

export default HomeScreen;
