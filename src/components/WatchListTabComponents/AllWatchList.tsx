
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  ActivityIndicator 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useWatchlist } from '../../context/WatchlistContext';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../utils/types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const AllWatchList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { watchlists, isLoading, refreshWatchlists } = useWatchlist();
  // const navigation = useNavigation();

  // Refresh watchlists when component mounts
  useEffect(() => {
    refreshWatchlists();
  }, []);

  const handleWatchlistPress = (watchlistName) => {
    navigation.navigate('WatchlistDetail', { watchlistName });
  };

  // Show loading indicator
  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#00ff83" />
        <Text style={styles.loadingText}>Loading watchlists...</Text>
      </View>
    );
  }

  // Show empty state if no watchlists
  if (watchlists.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Watchlist</Text>
        <View style={styles.emptyState}>
          <Icon name="list-alt" size={50} color="#ccc" />
          <Text style={styles.emptyText}>No watchlists created yet</Text>
          <Text style={styles.emptySubText}>Create your first watchlist from stock details</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watchlist</Text>
      
      <ScrollView 
        style={styles.watchlistContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {watchlists.map((watchlist, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.watchlistCard}
            onPress={() => handleWatchlistPress(watchlist.name)}
            activeOpacity={0.7}
          >
            <View style={styles.watchlistHeader}>
              <Text style={styles.watchlistName}>{watchlist.name}</Text>
              <Icon name="chevron-right" size={16} color="#666" />
            </View>
            
            <View style={styles.watchlistInfo}>
              <Text style={styles.stockCount}>
                {watchlist.stocks.length} stock{watchlist.stocks.length !== 1 ? 's' : ''}
              </Text>
              
              {watchlist.stocks.length > 0 && (
                <View style={styles.previewContainer}>
                  {watchlist.stocks.slice(0, 3).map((stock, stockIndex) => (
                    <View key={stockIndex} style={styles.previewItem}>
                      <Text style={styles.previewSymbol} numberOfLines={1}>
                        {stock.symbol}
                      </Text>
                      <Text style={styles.previewPrice}>
                        ${stock.price ? stock.price.toFixed(2) : '0.00'}
                      </Text>
                    </View>
                  ))}
                  {watchlist.stocks.length > 3 && (
                    <Text style={styles.moreText}>
                      +{watchlist.stocks.length - 3} more
                    </Text>
                  )}
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
    textAlign: 'center',
    paddingTop: 20,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 30,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  emptySubText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  watchlistContainer: {
    flex: 1,
    width: '100%',
  },
  watchlistCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  watchlistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  watchlistName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  watchlistInfo: {
    marginTop: 8,
  },
  stockCount: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  previewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  previewItem: {
    backgroundColor: '#F8F9FA',
    padding: 8,
    borderRadius: 6,
    minWidth: 80,
    alignItems: 'center',
  },
  previewSymbol: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  previewPrice: {
    fontSize: 11,
    color: '#00ff83',
    fontWeight: '500',
  },
  moreText: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'center',
    marginLeft: 8,
  },
});

export default AllWatchList;