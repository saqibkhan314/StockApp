//actual api data


import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useStocksQuery } from "../../../hooks/useStocksQuery";
import StockCard from "../../HomeTabComponents/StockCard";

const ITEMS_PER_PAGE = 8; 

const TopLosersViewAll = () => {
  const { data, isLoading, isError, error } = useStocksQuery();

  const negativeActiveTraded = useMemo(() => {
    if (!data?.most_actively_traded) return [];
    return data.most_actively_traded.filter(
      (item) =>
        parseFloat(item.change_amount) < 0 &&
        parseFloat(item.change_percentage) < 0
    );
  }, [data]);

  const allData = useMemo(() => {
    if (!data) return [];
    return [...data.top_losers, ...negativeActiveTraded];
  }, [data, negativeActiveTraded]);

  const [page, setPage] = useState(1);

  const paginatedData = useMemo(() => {
    return allData.slice(0, page * ITEMS_PER_PAGE);
  }, [allData, page]);

  // ✅ Add empty items to make even number of items for 2-column layout
  const displayData = useMemo(() => {
    const data = [...paginatedData];
    // If odd number of items, add empty placeholder
    if (data.length % 2 !== 0) {
      data.push({ isPlaceholder: true });
    }
    return data;
  }, [paginatedData]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="blue" style={{ flex: 1 }} />;
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          if (item.isPlaceholder) {
            return <View style={styles.placeholder} />;
          }
          return (
            <StockCard
              symbol={item.ticker}
              price={parseFloat(item.price).toFixed(2)}
              change={undefined}
              changePercent={undefined}
              name={undefined}
            />
          );
        }}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        onEndReached={() => {
          if (page * ITEMS_PER_PAGE < allData.length) {
            setPage((prev) => prev + 1);
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          page * ITEMS_PER_PAGE < allData.length ? (
            <ActivityIndicator size="small" color="blue" style={{ margin: 10 }} />
          ) : (
            <Text style={styles.endText}>No more stocks</Text>
          )
        }
      />
    </View>
  );
};

export default TopLosersViewAll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  endText: {
    textAlign: "center",
    padding: 10,
    color: "gray",
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
  placeholder: {
    flex: 1,
    margin: 6,
    backgroundColor: "transparent",
  },
});








//local json data



// import React, { useState, useMemo } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
// } from "react-native";
// import stockData from "../../../utils/stockData.json"; // ✅ use static stockData
// import StockCard from "../../HomeTabComponents/StockCard";

// const ITEMS_PER_PAGE = 8; // 👈 how many stocks per page

// const TopLosersViewAll = () => {
//   const data = stockData; // ✅ direct use

//   // ✅ filter actively traded with negative change
//   const negativeActiveTraded = useMemo(() => {
//     if (!data?.most_actively_traded) return [];
//     return data.most_actively_traded.filter(
//       (item) =>
//         parseFloat(item.change_amount) < 0 &&
//         parseFloat(item.change_percentage) < 0
//     );
//   }, [data]);

//   // ✅ combine losers + filtered active
//   const allData = useMemo(() => {
//     if (!data) return [];
//     return [...data.top_losers, ...negativeActiveTraded];
//   }, [data, negativeActiveTraded]);

//   const [page, setPage] = useState(1);

//   // ✅ Paginated data
//   const paginatedData = useMemo(() => {
//     return allData.slice(0, page * ITEMS_PER_PAGE);
//   }, [allData, page]);

//   if (!data) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="blue" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.header}>Top Losers</Text> */}

//       <FlatList
//         data={paginatedData}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <StockCard
//             symbol={item.ticker}
//             price={parseFloat(item.price).toFixed(2)}
//           />
//         )}
//         numColumns={2}
//         onEndReached={() => {
//           if (page * ITEMS_PER_PAGE < allData.length) {
//             setPage((prev) => prev + 1);
//           }
//         }}
//         onEndReachedThreshold={0.5}
//         ListFooterComponent={() =>
//           page * ITEMS_PER_PAGE < allData.length ? (
//             <ActivityIndicator size="small" color="blue" style={{ margin: 10 }} />
//           ) : (
//             <Text style={styles.endText}>No more stocks</Text>
//           )
//         }
//       />
//     </View>
//   );
// };

// export default TopLosersViewAll;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 12,
//     backgroundColor: "#f9f9f9",
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   endText: {
//     textAlign: "center",
//     padding: 10,
//     color: "gray",
//   },
// });

