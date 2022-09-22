import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../Components/Home/BottomTab";
import Categories from "../Components/Home/Categories";
import HeaderTabs from "../Components/Home/HeaderTabs";
import RestaurantItems from "../Components/Home/RestaurantItems";
import { localRestaurants } from "../Components/Home/RestaurantItems";

import SearchBars from "../Components/Home/SearchBars";

const YELP_API_KEY =
  "uWoSYOkO4jGUhjQ0-fW7Kb0XHpT4k1igN1hC02iyIcN9dyzMAH0LhdjAYk0HaejS7u0tNrErkRZDpx8g0Vxv6JquAoj-0nei-FZGzEJuyOugnTJkpMe6UXyTgwa7YnYx";

export default function Home({ navigation }) {
  const [restaurantData, setResturantData] = useState(localRestaurants);
  const [city, setCity] = useState("Baltimore");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setResturantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBars cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
