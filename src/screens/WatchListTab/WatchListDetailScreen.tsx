// screens/WatchlistDetailScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import StockCard from "../../components/HomeTabComponents/StockCard";
import { useWatchlist } from "../../context/WatchlistContext";
import { useRoute } from '@react-navigation/native';

const WatchlistDetailScreen = () => {
  const route = useRoute();
  const { watchlistName } = route.params;
  const { watchlists } = useWatchlist();

  // Find the specific watchlist
  const watchlist = watchlists.find(w => w.name === watchlistName);

  if (!watchlist) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Watchlist not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{watchlistName}</Text>
      
      {watchlist.stocks.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No stocks in this watchlist</Text>
        </View>
      ) : (
        <FlatList
          data={watchlist.stocks}
          keyExtractor={(item, index) => `${item.symbol}-${index}`}
          renderItem={({ item }) => (
            <StockCard
              symbol={item.symbol}
              name={item.name}
              price={item.price ? item.price.toFixed(2) : '0.00'}
              change={item.change || 0}
              changePercent={item.changePercent || 0}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
    textAlign: "center",
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#FF375F",
    textAlign: "center",
    marginTop: 20,
  },
});

export default WatchlistDetailScreen;