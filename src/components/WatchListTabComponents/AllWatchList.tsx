// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const AllWatchList = () => {
// //   return (
// //     <View>
// //       <Text>AllWatchList</Text>
// //     </View>
// //   )
// // }

// // export default AllWatchList

// // const styles = StyleSheet.create({})




// // AllWatchList.js
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import { useWatchlist } from '../../hooks/useWatchlist';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const AllWatchList = () => {
//   const { watchlists } = useWatchlist();
//   const [expandedWatchlist, setExpandedWatchlist] = useState(null);

//   const toggleWatchlist = (watchlistName) => {
//     if (expandedWatchlist === watchlistName) {
//       setExpandedWatchlist(null);
//     } else {
//       setExpandedWatchlist(watchlistName);
//     }
//   };

//   if (watchlists.length === 0) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Watchlist</Text>
//         <View style={styles.emptyState}>
//           <Icon name="list-alt" size={50} color="#ccc" />
//           <Text style={styles.emptyText}>No watchlists created yet</Text>
//           <Text style={styles.emptySubText}>Create your first watchlist from stock details</Text>
//         </View>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Watchlist</Text>
      
//       <ScrollView style={styles.watchlistContainer}>
//         {watchlists.map((watchlist, index) => (
//           <View key={index} style={styles.watchlistItem}>
//             <TouchableOpacity 
//               style={styles.watchlistHeader}
//               onPress={() => toggleWatchlist(watchlist.name)}
//             >
//               <Text style={styles.watchlistName}>{watchlist.name}</Text>
//               <Icon 
//                 name={expandedWatchlist === watchlist.name ? "chevron-up" : "chevron-down"} 
//                 size={16} 
//                 color="#666" 
//               />
//             </TouchableOpacity>
            
//             {expandedWatchlist === watchlist.name && (
//               <View style={styles.stocksContainer}>
//                 {watchlist.stocks.length === 0 ? (
//                   <Text style={styles.emptyStocksText}>No stocks in this watchlist</Text>
//                 ) : (
//                   watchlist.stocks.map((stock, stockIndex) => (
//                     <View key={stockIndex} style={styles.stockItem}>
//                       <View style={styles.stockInfo}>
//                         <Text style={styles.stockSymbol}>{stock.symbol}</Text>
//                         <Text style={styles.stockName} numberOfLines={1}>{stock.name}</Text>
//                       </View>
//                       <View style={styles.stockPrice}>
//                         <Text style={styles.priceText}>${stock.price?.toFixed(2) || '0.00'}</Text>
//                         <Text style={[
//                           styles.changeText,
//                           { color: (stock.changePercent || 0) >= 0 ? '#00ff83' : '#FF375F' }
//                         ]}>
//                           {(stock.changePercent || 0) >= 0 ? '+' : ''}{stock.changePercent?.toFixed(2) || '0.00'}%
//                         </Text>
//                       </View>
//                     </View>
//                   ))
//                 )}
//               </View>
//             )}
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 100,
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#666',
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   emptySubText: {
//     fontSize: 14,
//     color: '#999',
//     textAlign: 'center',
//   },
//   watchlistContainer: {
//     flex: 1,
//   },
//   watchlistItem: {
//     backgroundColor: '#F8F8F8',
//     borderRadius: 12,
//     marginBottom: 15,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   watchlistHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#FFFFFF',
//   },
//   watchlistName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   stocksContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#EEEEEE',
//   },
//   emptyStocksText: {
//     color: '#999',
//     textAlign: 'center',
//     fontSize: 14,
//     fontStyle: 'italic',
//   },
//   stockItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   stockInfo: {
//     flex: 1,
//     marginRight: 10,
//   },
//   stockSymbol: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 2,
//   },
//   stockName: {
//     fontSize: 12,
//     color: '#666',
//   },
//   stockPrice: {
//     alignItems: 'flex-end',
//   },
//   priceText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000000',
//     marginBottom: 2,
//   },
//   changeText: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
// });

// export default AllWatchList;


















// // components/WatchListTabComponents/AllWatchList.js
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useWatchlist } from '../../context/WatchlistContext'; // Updated import

// const AllWatchList = () => {
//   const { watchlists } = useWatchlist();
//   const [expandedWatchlist, setExpandedWatchlist] = useState(null);

//   const toggleWatchlist = (watchlistName) => {
//     if (expandedWatchlist === watchlistName) {
//       setExpandedWatchlist(null);
//     } else {
//       setExpandedWatchlist(watchlistName);
//     }
//   };

//   // Debug: log the watchlists to see what's available
//   console.log('Watchlists:', watchlists);

//   if (watchlists.length === 0) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Watchlist</Text>
//         <View style={styles.emptyState}>
//           <Icon name="list-alt" size={50} color="#ccc" />
//           <Text style={styles.emptyText}>No watchlists created yet</Text>
//           <Text style={styles.emptySubText}>Create your first watchlist from stock details</Text>
//         </View>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Watchlist</Text>
      
//       <ScrollView style={styles.watchlistContainer}>
//         {watchlists.map((watchlist, index) => (
//           <View key={index} style={styles.watchlistItem}>
//             <TouchableOpacity 
//               style={styles.watchlistHeader}
//               onPress={() => toggleWatchlist(watchlist.name)}
//             >
//               <Text style={styles.watchlistName}>{watchlist.name}</Text>
//               <Icon 
//                 name={expandedWatchlist === watchlist.name ? "chevron-up" : "chevron-down"} 
//                 size={16} 
//                 color="#666" 
//               />
//             </TouchableOpacity>
            
//             {expandedWatchlist === watchlist.name && (
//               <View style={styles.stocksContainer}>
//                 {watchlist.stocks.length === 0 ? (
//                   <Text style={styles.emptyStocksText}>No stocks in this watchlist</Text>
//                 ) : (
//                   watchlist.stocks.map((stock, stockIndex) => (
//                     <View key={stockIndex} style={styles.stockItem}>
//                       <View style={styles.stockInfo}>
//                         <Text style={styles.stockSymbol}>{stock.symbol}</Text>
//                         <Text style={styles.stockName} numberOfLines={1}>{stock.name}</Text>
//                       </View>
//                       <View style={styles.stockPrice}>
//                         <Text style={styles.priceText}>${stock.price?.toFixed(2) || '0.00'}</Text>
//                         <Text style={[
//                           styles.changeText,
//                           { color: (stock.changePercent || 0) >= 0 ? '#00ff83' : '#FF375F' }
//                         ]}>
//                           {(stock.changePercent || 0) >= 0 ? '+' : ''}{stock.changePercent?.toFixed(2) || '0.00'}%
//                         </Text>
//                       </View>
//                     </View>
//                   ))
//                 )}
//               </View>
//             )}
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 100,
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#666',
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   emptySubText: {
//     fontSize: 14,
//     color: '#999',
//     textAlign: 'center',
//   },
//   watchlistContainer: {
//     flex: 1,
//   },
//   watchlistItem: {
//     backgroundColor: '#F8F8F8',
//     borderRadius: 12,
//     marginBottom: 15,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   watchlistHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#FFFFFF',
//   },
//   watchlistName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   stocksContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#EEEEEE',
//   },
//   emptyStocksText: {
//     color: '#999',
//     textAlign: 'center',
//     fontSize: 14,
//     fontStyle: 'italic',
//   },
//   stockItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   stockInfo: {
//     flex: 1,
//     marginRight: 10,
//   },
//   stockSymbol: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 2,
//   },
//   stockName: {
//     fontSize: 12,
//     color: '#666',
//   },
//   stockPrice: {
//     alignItems: 'flex-end',
//   },
//   priceText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000000',
//     marginBottom: 2,
//   },
//   changeText: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
// });

// export default AllWatchList;




















// // components/WatchListTabComponents/AllWatchList.js
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useWatchlist } from '../../context/WatchlistContext';

// const AllWatchList = () => {
//   const { watchlists, isLoading, refreshWatchlists } = useWatchlist();
//   const [expandedWatchlist, setExpandedWatchlist] = useState(null);

//   // Refresh watchlists when component mounts
//   useEffect(() => {
//     refreshWatchlists();
//   }, []);

//   const toggleWatchlist = (watchlistName) => {
//     if (expandedWatchlist === watchlistName) {
//       setExpandedWatchlist(null);
//     } else {
//       setExpandedWatchlist(watchlistName);
//     }
//   };

//   // Show loading indicator
//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.center]}>
//         <ActivityIndicator size="large" color="#00ff83" />
//         <Text style={styles.loadingText}>Loading watchlists...</Text>
//       </View>
//     );
//   }

//   // Show empty state if no watchlists
//   if (watchlists.length === 0) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Watchlist</Text>
//         <View style={styles.emptyState}>
//           <Icon name="list-alt" size={50} color="#ccc" />
//           <Text style={styles.emptyText}>No watchlists created yet</Text>
//           <Text style={styles.emptySubText}>Create your first watchlist from stock details</Text>
//         </View>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Watchlist</Text>
      
//       <ScrollView style={styles.watchlistContainer}>
//         {watchlists.map((watchlist, index) => (
//           <View key={index} style={styles.watchlistItem}>
//             <TouchableOpacity 
//               style={styles.watchlistHeader}
//               onPress={() => toggleWatchlist(watchlist.name)}
//             >
//               <Text style={styles.watchlistName}>{watchlist.name}</Text>
//               <Icon 
//                 name={expandedWatchlist === watchlist.name ? "chevron-up" : "chevron-down"} 
//                 size={16} 
//                 color="#666" 
//               />
//             </TouchableOpacity>
            
//             {expandedWatchlist === watchlist.name && (
//               <View style={styles.stocksContainer}>
//                 {watchlist.stocks.length === 0 ? (
//                   <Text style={styles.emptyStocksText}>No stocks in this watchlist</Text>
//                 ) : (
//                   watchlist.stocks.map((stock, stockIndex) => (
//                     <View key={stockIndex} style={styles.stockItem}>
//                       <View style={styles.stockInfo}>
//                         <Text style={styles.stockSymbol}>{stock.symbol}</Text>
//                         <Text style={styles.stockName} numberOfLines={1}>{stock.name}</Text>
//                       </View>
//                       <View style={styles.stockPrice}>
//                         <Text style={styles.priceText}>${stock.price?.toFixed(2) || '0.00'}</Text>
//                         <Text style={[
//                           styles.changeText,
//                           { color: (stock.changePercent || 0) >= 0 ? '#00ff83' : '#FF375F' }
//                         ]}>
//                           {(stock.changePercent || 0) >= 0 ? '+' : ''}{stock.changePercent?.toFixed(2) || '0.00'}%
//                         </Text>
//                       </View>
//                     </View>
//                   ))
//                 )}
//               </View>
//             )}
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//   },
//   center: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//     fontSize: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 100,
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#666',
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   emptySubText: {
//     fontSize: 14,
//     color: '#999',
//     textAlign: 'center',
//   },
//   watchlistContainer: {
//     flex: 1,
//   },
//   watchlistItem: {
//     backgroundColor: '#F8F8F8',
//     borderRadius: 12,
//     marginBottom: 15,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   watchlistHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#FFFFFF',
//   },
//   watchlistName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   stocksContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#EEEEEE',
//   },
//   emptyStocksText: {
//     color: '#999',
//     textAlign: 'center',
//     fontSize: 14,
//     fontStyle: 'italic',
//   },
//   stockItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   stockInfo: {
//     flex: 1,
//     marginRight: 10,
//   },
//   stockSymbol: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 2,
//   },
//   stockName: {
//     fontSize: 12,
//     color: '#666',
//   },
//   stockPrice: {
//     alignItems: 'flex-end',
//   },
//   priceText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000000',
//     marginBottom: 2,
//   },
//   changeText: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
// });

// export default AllWatchList;












//last final correct code



// // components/WatchListTabComponents/AllWatchList.js
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useWatchlist } from '../../context/WatchlistContext';

// const { width } = Dimensions.get('window');

// const AllWatchList = () => {
//   const { watchlists, isLoading, refreshWatchlists } = useWatchlist();
//   const [expandedWatchlist, setExpandedWatchlist] = useState(null);

//   // Refresh watchlists when component mounts
//   useEffect(() => {
//     refreshWatchlists();
//   }, []);

//   const toggleWatchlist = (watchlistName) => {
//     if (expandedWatchlist === watchlistName) {
//       setExpandedWatchlist(null);
//     } else {
//       setExpandedWatchlist(watchlistName);
//     }
//   };

//   // Show loading indicator
//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.center]}>
//         <ActivityIndicator size="large" color="#00ff83" />
//         <Text style={styles.loadingText}>Loading watchlists...</Text>
//       </View>
//     );
//   }

//   // Show empty state if no watchlists
//   if (watchlists.length === 0) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Watchlist</Text>
//         <View style={styles.emptyState}>
//           <Icon name="list-alt" size={50} color="#ccc" />
//           <Text style={styles.emptyText}>No watchlists created yet</Text>
//           <Text style={styles.emptySubText}>Create your first watchlist from stock details</Text>
//         </View>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Watchlist</Text>
      
//       <ScrollView 
//         style={styles.watchlistContainer}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {watchlists.map((watchlist, index) => (
//           <View key={index} style={styles.watchlistItem}>
//             <TouchableOpacity 
//               style={styles.watchlistHeader}
//               onPress={() => toggleWatchlist(watchlist.name)}
//               activeOpacity={0.7}
//             >
//               <Text style={styles.watchlistName}>{watchlist.name}</Text>
//               <Icon 
//                 name={expandedWatchlist === watchlist.name ? "chevron-up" : "chevron-down"} 
//                 size={16} 
//                 color="#666" 
//               />
//             </TouchableOpacity>
            
//             {expandedWatchlist === watchlist.name && (
//               <View style={styles.stocksContainer}>
//                 {watchlist.stocks.length === 0 ? (
//                   <Text style={styles.emptyStocksText}>No stocks in this watchlist</Text>
//                 ) : (
//                   watchlist.stocks.map((stock, stockIndex) => (
//                     <View key={stockIndex} style={styles.stockItem}>
//                       <View style={styles.stockInfo}>
//                         <Text style={styles.stockSymbol}>{stock.symbol}</Text>
//                         <Text style={styles.stockName} numberOfLines={1}>
//                           {stock.name || 'Unknown Company'}
//                         </Text>
//                       </View>
//                       <View style={styles.stockPrice}>
//                         <Text style={styles.priceText}>
//                           ${stock.price ? stock.price.toFixed(2) : '0.00'}
//                         </Text>
//                         <Text style={[
//                           styles.changeText,
//                           { color: (stock.changePercent || 0) >= 0 ? '#00ff83' : '#FF375F' }
//                         ]}>
//                           {(stock.changePercent || 0) >= 0 ? '+' : ''}
//                           {stock.changePercent ? stock.changePercent.toFixed(2) : '0.00'}%
//                         </Text>
//                       </View>
//                     </View>
//                   ))
//                 )}
//               </View>
//             )}
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   center: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//     fontSize: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 20,
//     textAlign: 'center',
//     paddingTop: 20,
//   },
//   scrollContent: {
//     padding: 16,
//     paddingBottom: 30,
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 100,
//     padding: 20,
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#666',
//     marginTop: 10,
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   emptySubText: {
//     fontSize: 14,
//     color: '#999',
//     textAlign: 'center',
//   },
//   watchlistContainer: {
//     flex: 1,
//     width: '100%',
//   },
//   watchlistItem: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     marginBottom: 16,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   watchlistHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#F8F9FA',
//   },
//   watchlistName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   stocksContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 0,
//   },
//   emptyStocksText: {
//     color: '#999',
//     textAlign: 'center',
//     fontSize: 14,
//     fontStyle: 'italic',
//     padding: 20,
//   },
//   stockItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   stockInfo: {
//     flex: 1,
//     marginRight: 12,
//   },
//   stockSymbol: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 4,
//   },
//   stockName: {
//     fontSize: 12,
//     color: '#666',
//     opacity: 0.8,
//   },
//   stockPrice: {
//     alignItems: 'flex-end',
//     minWidth: 80,
//   },
//   priceText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000000',
//     marginBottom: 4,
//   },
//   changeText: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
// });

// export default AllWatchList;















// components/WatchListTabComponents/AllWatchList.js
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