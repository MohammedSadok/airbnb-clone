import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const Page = (props: Props) => {
  return (
    <View>
      <Text>hello</Text>
      <Link href={"/(modals)/login"} >
        login
      </Link>
      <Link href={"/(modals)/booking"} >
        Bookings
      </Link>
      <Link href={"/listing/list"} >
        Listing
      </Link>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
