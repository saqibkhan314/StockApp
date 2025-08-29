//actual api data

// import React, { useMemo } from "react";
// import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
// import { useStocksQuery } from "../../hooks/useStocksQuery";
// import StockCard from "./StockCard";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../../utils/types/navigation";
// import { useNavigation } from "@react-navigation/native";

// const TopLosersSection = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
//     const handleViewAllPress = () => {
//       navigation.navigate('TopLosersViewAll');
//     }
//   const { data, isLoading, isError, error } = useStocksQuery();

//   // 🎯 Pick 4 random losers each time
//   const randomFour = useMemo(() => {
//     if (!data?.top_losers) return [];
//     const shuffled = [...data.top_losers].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, 4); // pick first 4
//   }, [data]);

//   if (isLoading) {
//     return <ActivityIndicator size="large" color="blue" style={{ flex: 1 }} />;
//   }

//   if (isError) {
//     return (
//       <View style={styles.center}>
//         <Text style={{ color: "red" }}>Error: {error.message}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.sectionHeader}>
//         <Text style={styles.text}>Top Losers</Text>
//         <TouchableOpacity
//           onPress={handleViewAllPress}
//         >
//           <Text style={styles.viewAllText}>View All</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={randomFour}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <StockCard
//             symbol={item.ticker}
//             price={parseFloat(item.price).toFixed(2)}
//           />
//         )}
//         numColumns={2} // grid
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 12,
//     backgroundColor: "#f9f9f9",
//   },
//   sectionHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginHorizontal: 15,
//     marginTop: 10,
//     marginBottom: 8,
//   },
//   text: {
//     color: "black",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   viewAllText: {
//     color: "black",
//     fontSize: 14,
//   },
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default TopLosersSection;














// data from locally json file


import React, { useMemo } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import StockCard from "./StockCard";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/types/navigation";

// import your local JSON
import stockData from "../../utils/stockData.json";

const TopLosersSection = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleViewAllPress = () => {
    navigation.navigate("TopLosersViewAll");
  };

  // 🎯 Pick 4 random losers from local JSON
  const randomFour = useMemo(() => {
    if (!stockData?.top_losers) return [];
    const shuffled = [...stockData.top_losers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.text}>Top Losers</Text>
        <TouchableOpacity onPress={handleViewAllPress}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={randomFour}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <StockCard
            symbol={item.ticker}
            price={parseFloat(item.price).toFixed(2)}
          />
        )}
        numColumns={2} // grid layout
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#f9f9f9",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 8,
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllText: {
    color: "black",
    fontSize: 14,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TopLosersSection;
