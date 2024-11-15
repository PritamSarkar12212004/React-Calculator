import { Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "../components/templates/Button";
import buttons from "../json/Data";
import Modal from "react-native-modal";

const index = () => {
  const [value, setValue] = useState("");
  const [histoey, sethistory] = useState([]);
  const [openModel, setopenModal] = useState(false);
  const modalcloser = () => {
    setopenModal(false);
  };
  return (
    <SafeAreaView className="flex-1 justify-between  h-screen w-full bg-[#17181A] px-3 py-2">
      <View className="flex-auto  flex justify-between pb-5">
        <MaterialIcons
          name="history-toggle-off"
          size={30}
          color="white"
          onPress={() => setopenModal(true)}
        />
        <Modal
                  isVisible={openModel}
                  animationOut={"zoomOut"}
          onBackdropPress={() => modalcloser()}
          onBackButtonPress={() => modalcloser()}
        >
          <View className="bg-white p-4 rounded-lg ">
            {histoey.map((item, index) => (
              <Text key={index} className="text-black m-4">
                {item}
              </Text>
            ))}
          </View>
        </Modal>
        <View className=" flex-auto  flex justify-end items-end px-5">
          <Text className="text-3xl font-bold text-white">{value}</Text>
        </View>
      </View>
      <View className="flex flex-row flex-wrap gap-2 justify-between px-2">
        {buttons.map((item, index) => (
          <Button
            key={index}
            item={item}
            setValue={setValue}
            value={value}
            sethistory={sethistory}
            histoey={histoey}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default index;
