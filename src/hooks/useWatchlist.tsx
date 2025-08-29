// // // hooks/useWatchlist.js
// // import { useState, useEffect } from 'react';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // export const useWatchlist = () => {
// //   const [watchlists, setWatchlists] = useState([]);

// //   // Load watchlists from storage on component mount
// //   useEffect(() => {
// //     loadWatchlists();
// //   }, []);

// //   const loadWatchlists = async () => {
// //     try {
// //       const storedWatchlists = await AsyncStorage.getItem('watchlists');
// //       if (storedWatchlists) {
// //         setWatchlists(JSON.parse(storedWatchlists));
// //       }
// //     } catch (error) {
// //       console.error('Error loading watchlists:', error);
// //     }
// //   };

// //   const saveWatchlists = async (newWatchlists) => {
// //     try {
// //       await AsyncStorage.setItem('watchlists', JSON.stringify(newWatchlists));
// //       setWatchlists(newWatchlists);
// //     } catch (error) {
// //       console.error('Error saving watchlists:', error);
// //     }
// //   };

// //   const createWatchlist = (name, initialStocks = []) => {
// //     const newWatchlists = [...watchlists, { name, stocks: initialStocks }];
// //     saveWatchlists(newWatchlists);
// //   };

// //   const addStockToWatchlist = (watchlistName, stock) => {
// //     const newWatchlists = watchlists.map(watchlist => {
// //       if (watchlist.name === watchlistName) {
// //         // Check if stock already exists in watchlist
// //         const stockExists = watchlist.stocks.some(s => s.symbol === stock.symbol);
// //         if (!stockExists) {
// //           return {
// //             ...watchlist,
// //             stocks: [...watchlist.stocks, stock]
// //           };
// //         }
// //       }
// //       return watchlist;
// //     });
    
// //     saveWatchlists(newWatchlists);
// //   };

// //   const isStockInWatchlist = (symbol) => {
// //     return watchlists.some(watchlist => 
// //       watchlist.stocks.some(stock => stock.symbol === symbol)
// //     );
// //   };

// //   return {
// //     watchlists,
// //     createWatchlist,
// //     addStockToWatchlist,
// //     isStockInWatchlist
// //   };
// // };


















// // hooks/useWatchlist.js
// // import { useState, useEffect } from 'react';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // export const useWatchlist = () => {
// //   const [watchlists, setWatchlists] = useState([]);

// //   // Load watchlists from storage on component mount
// //   useEffect(() => {
// //     loadWatchlists();
// //   }, []);

// //   const loadWatchlists = async () => {
// //     try {
// //       const storedWatchlists = await AsyncStorage.getItem('watchlists');
// //       if (storedWatchlists) {
// //         setWatchlists(JSON.parse(storedWatchlists));
// //       } else {
// //         // Initialize with some default watchlists if none exist
// //         const defaultWatchlists = [
// //           { name: 'WatchList 1', stocks: [] },
// //           { name: 'WatchList 2', stocks: [] }
// //         ];
// //         await AsyncStorage.setItem('watchlists', JSON.stringify(defaultWatchlists));
// //         setWatchlists(defaultWatchlists);
// //       }
// //     } catch (error) {
// //       console.error('Error loading watchlists:', error);
// //     }
// //   };

// //   const saveWatchlists = async (newWatchlists) => {
// //     try {
// //       await AsyncStorage.setItem('watchlists', JSON.stringify(newWatchlists));
// //       setWatchlists(newWatchlists);
// //     } catch (error) {
// //       console.error('Error saving watchlists:', error);
// //     }
// //   };

// //   const createWatchlist = (name, initialStocks = []) => {
// //     const newWatchlist = { name, stocks: initialStocks };
// //     const newWatchlists = [...watchlists, newWatchlist];
// //     saveWatchlists(newWatchlists);
// //     return newWatchlist;
// //   };

// //   const addStockToWatchlist = (watchlistName, stock) => {
// //     const newWatchlists = watchlists.map(watchlist => {
// //       if (watchlist.name === watchlistName) {
// //         // Check if stock already exists in watchlist
// //         const stockExists = watchlist.stocks.some(s => s.symbol === stock.symbol);
// //         if (!stockExists) {
// //           return {
// //             ...watchlist,
// //             stocks: [...watchlist.stocks, stock]
// //           };
// //         }
// //       }
// //       return watchlist;
// //     });
    
// //     saveWatchlists(newWatchlists);
// //   };

// //   const isStockInWatchlist = (symbol) => {
// //     return watchlists.some(watchlist => 
// //       watchlist.stocks.some(stock => stock.symbol === symbol)
// //     );
// //   };

// //   const getStockWatchlists = (symbol) => {
// //     return watchlists.filter(watchlist => 
// //       watchlist.stocks.some(stock => stock.symbol === symbol)
// //     ).map(watchlist => watchlist.name);
// //   };

// //   return {
// //     watchlists,
// //     createWatchlist,
// //     addStockToWatchlist,
// //     isStockInWatchlist,
// //     getStockWatchlists
// //   };
// // };














// // hooks/useWatchlist.js
// import { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const useWatchlist = () => {
//   const [watchlists, setWatchlists] = useState([]);

//   // Load watchlists from storage on component mount
//   useEffect(() => {
//     loadWatchlists();
//   }, []);

//   const loadWatchlists = async () => {
//     try {
//       const storedWatchlists = await AsyncStorage.getItem('watchlists');
//       if (storedWatchlists) {
//         setWatchlists(JSON.parse(storedWatchlists));
//       } else {
//         // Initialize with empty array if no watchlists exist
//         setWatchlists([]);
//       }
//     } catch (error) {
//       console.error('Error loading watchlists:', error);
//       setWatchlists([]);
//     }
//   };

//   const saveWatchlists = async (newWatchlists) => {
//     try {
//       await AsyncStorage.setItem('watchlists', JSON.stringify(newWatchlists));
//       setWatchlists(newWatchlists);
//     } catch (error) {
//       console.error('Error saving watchlists:', error);
//     }
//   };

//   const createWatchlist = (name, initialStocks = []) => {
//     const newWatchlist = { 
//       name, 
//       stocks: initialStocks,
//       createdAt: new Date().toISOString()
//     };
//     const newWatchlists = [...watchlists, newWatchlist];
//     saveWatchlists(newWatchlists);
//     return newWatchlist;
//   };

//   const addStockToWatchlist = (watchlistName, stock) => {
//     const newWatchlists = watchlists.map(watchlist => {
//       if (watchlist.name === watchlistName) {
//         // Check if stock already exists in watchlist
//         const stockExists = watchlist.stocks.some(s => s.symbol === stock.symbol);
//         if (!stockExists) {
//           return {
//             ...watchlist,
//             stocks: [...watchlist.stocks, {
//               ...stock,
//               addedAt: new Date().toISOString()
//             }]
//           };
//         }
//       }
//       return watchlist;
//     });
    
//     saveWatchlists(newWatchlists);
//   };

//   const removeStockFromWatchlist = (watchlistName, symbol) => {
//     const newWatchlists = watchlists.map(watchlist => {
//       if (watchlist.name === watchlistName) {
//         return {
//           ...watchlist,
//           stocks: watchlist.stocks.filter(stock => stock.symbol !== symbol)
//         };
//       }
//       return watchlist;
//     });
    
//     saveWatchlists(newWatchlists);
//   };

//   const deleteWatchlist = (watchlistName) => {
//     const newWatchlists = watchlists.filter(watchlist => watchlist.name !== watchlistName);
//     saveWatchlists(newWatchlists);
//   };

//   const isStockInWatchlist = (symbol) => {
//     return watchlists.some(watchlist => 
//       watchlist.stocks.some(stock => stock.symbol === symbol)
//     );
//   };

//   const getStockWatchlists = (symbol) => {
//     return watchlists.filter(watchlist => 
//       watchlist.stocks.some(stock => stock.symbol === symbol)
//     ).map(watchlist => watchlist.name);
//   };

//   return {
//     watchlists,
//     createWatchlist,
//     addStockToWatchlist,
//     removeStockFromWatchlist,
//     deleteWatchlist,
//     isStockInWatchlist,
//     getStockWatchlists
//   };
// };