import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://media.istockphoto.com/id/1369588958/photo/household-appliances-and-gadgets-store.webp?s=1024x1024&w=is&k=20&c=TeY-h-08bFbez5wILjx9LXH1_40WCnS5u98Y_IVi_U4=",
    "https://media.istockphoto.com/id/157683450/photo/laundry-room.jpg?s=1024x1024&w=is&k=20&c=ojOjd9JJ0N_eFXR4wZCql-0v0gpyVu59q6NluBEjfM0=",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{ borderRadius: 6, width: "94%" }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
