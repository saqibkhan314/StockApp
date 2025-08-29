// // context/WatchlistContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const WatchlistContext = createContext();

// export const useWatchlist = () => {
//   const context = useContext(WatchlistContext);
//   if (!context) {
//     throw new Error('useWatchlist must be used within a WatchlistProvider');
//   }
//   return context;
// };

// export const WatchlistProvider = ({ children }) => {
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
//       }
//     } catch (error) {
//       console.error('Error loading watchlists:', error);
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

//   const value = {
//     watchlists,
//     createWatchlist,
//     addStockToWatchlist,
//     removeStockFromWatchlist,
//     deleteWatchlist,
//     isStockInWatchlist,
//     getStockWatchlists
//   };

//   return (
//     <WatchlistContext.Provider value={value}>
//       {children}
//     </WatchlistContext.Provider>
//   );
// };























// context/WatchlistContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WatchlistContext = createContext();

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};

export const WatchlistProvider = ({ children }) => {
  const [watchlists, setWatchlists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load watchlists from storage on component mount
  useEffect(() => {
    loadWatchlists();
  }, []);

  const loadWatchlists = async () => {
    try {
      setIsLoading(true);
      const storedWatchlists = await AsyncStorage.getItem('watchlists');
      if (storedWatchlists) {
        setWatchlists(JSON.parse(storedWatchlists));
      } else {
        // Initialize with empty array if no watchlists exist
        setWatchlists([]);
      }
    } catch (error) {
      console.error('Error loading watchlists:', error);
      setWatchlists([]);
    } finally {
      setIsLoading(false);
    }
  };

  const saveWatchlists = async (newWatchlists) => {
    try {
      await AsyncStorage.setItem('watchlists', JSON.stringify(newWatchlists));
      setWatchlists(newWatchlists);
    } catch (error) {
      console.error('Error saving watchlists:', error);
    }
  };

  const createWatchlist = (name, initialStocks = []) => {
    const newWatchlist = { 
      name, 
      stocks: initialStocks,
      createdAt: new Date().toISOString()
    };
    const newWatchlists = [...watchlists, newWatchlist];
    saveWatchlists(newWatchlists);
    return newWatchlist;
  };

  const addStockToWatchlist = (watchlistName, stock) => {
    const newWatchlists = watchlists.map(watchlist => {
      if (watchlist.name === watchlistName) {
        // Check if stock already exists in watchlist
        const stockExists = watchlist.stocks.some(s => s.symbol === stock.symbol);
        if (!stockExists) {
          return {
            ...watchlist,
            stocks: [...watchlist.stocks, {
              ...stock,
              addedAt: new Date().toISOString()
            }]
          };
        }
      }
      return watchlist;
    });
    
    saveWatchlists(newWatchlists);
  };

  const removeStockFromWatchlist = (watchlistName, symbol) => {
    const newWatchlists = watchlists.map(watchlist => {
      if (watchlist.name === watchlistName) {
        return {
          ...watchlist,
          stocks: watchlist.stocks.filter(stock => stock.symbol !== symbol)
        };
      }
      return watchlist;
    });
    
    saveWatchlists(newWatchlists);
  };

  const deleteWatchlist = (watchlistName) => {
    const newWatchlists = watchlists.filter(watchlist => watchlist.name !== watchlistName);
    saveWatchlists(newWatchlists);
  };

  const isStockInWatchlist = (symbol) => {
    return watchlists.some(watchlist => 
      watchlist.stocks.some(stock => stock.symbol === symbol)
    );
  };

  const getStockWatchlists = (symbol) => {
    return watchlists.filter(watchlist => 
      watchlist.stocks.some(stock => stock.symbol === symbol)
    ).map(watchlist => watchlist.name);
  };

  const value = {
    watchlists,
    isLoading,
    createWatchlist,
    addStockToWatchlist,
    removeStockFromWatchlist,
    deleteWatchlist,
    isStockInWatchlist,
    getStockWatchlists,
    refreshWatchlists: loadWatchlists
  };

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};