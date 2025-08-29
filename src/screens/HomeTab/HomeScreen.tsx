// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text style={styles.text}>HomeScreen</Text>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   text:{
//     color: 'black'
//   }
// })




// import React from "react";
// import { View, StyleSheet, Text, Touchable, TouchableOpacity } from "react-native";
// import Header from "../../components/HomeTabComponents/Header";

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Header />
//       <Text style={styles.text}>Top Gainers</Text>
//       <TouchableOpacity>
//         <Text  style={styles.viewAllText}>View All</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   text: {
//     color: "black",
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 12,
//     marginBottom: 8,
//   },
//   viewAllText:{
//     color: 'black',
//     fontSize: 18,
//     fontWeight: "bold",
//     marginRight: 12,
//     marginBottom: 8,
//   }
// });

// export default HomeScreen;
















// import React from "react";
// import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
// import Header from "../../components/HomeTabComponents/Header";
// import TopGainersSection from "../../components/HomeTabComponents/TopGainersSection";
// import TopLosersSection from "../../components/HomeTabComponents/TopLosersSection";
// import { ScrollView } from "react-native";

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView>
//         <TopGainersSection />
//         <TopLosersSection />
//       </ScrollView>
      

//       {/* Later: Add stock grid here */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
  
// });

// export default HomeScreen;














import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Header from "../../components/HomeTabComponents/Header";
import TopGainersSection from "../../components/HomeTabComponents/TopGainersSection";
import TopLosersSection from "../../components/HomeTabComponents/TopLosersSection";

const HomeScreen = () => {
  return (
    <>
     <View>
        <Header />
     </View>
    <FlatList
      data={[]} // no data, just sections
      renderItem={null}
      keyExtractor={(_, index) => index.toString()}
      ListHeaderComponent={
        <View>
          <TopGainersSection />
          <TopLosersSection />
        </View>
      }
    />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
