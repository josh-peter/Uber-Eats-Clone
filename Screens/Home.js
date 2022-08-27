import { View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { localRestaurants, RestaurantItems } from "../Components/Home/RestaurantItems";
import BottomTabs from "../Components/Home/BottomTabs";
import HeaderTabs from "../Components/Home/HeaderTabs";
import SearchBar from "../Components/Home/SearchBar";
import Categories from "../Components/Home/Categories";

const YELP_API_KEY =
  "uWoSYOkO4jGUhjQ0-fW7Kb0XHpT4k1igN1hC02iyIcN9dyzMAH0LhdjAYk0HaejS7u0tNrErkRZDpx8g0Vxv6JquAoj-0nei-FZGzEJuyOugnTJkpMe6UXyTgwa7YnYx";

const Home = ({navigation}) => {
  const [resturantData, setResturantData] = useState(localRestaurants);
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
    getRestaurantFromYelp()
  }, [city, activeTab]);


  return (
    <>
      <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems resturantData={resturantData} navigation={navigation} />
      </ScrollView>
      <BottomTabs />
      </SafeAreaView>
      </>
  );
};

export default Home;
