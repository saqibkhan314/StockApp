// // components/WatchlistButton.js
// import React, { useState } from 'react';
// import { TouchableOpacity, StyleSheet, Modal, Text, View, TextInput, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useWatchlist } from '../../hooks/useWatchlist'; // We'll create this hook

// const WatchlistButton = ({ symbol, companyName, currentPrice }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [newWatchlistName, setNewWatchlistName] = useState('');
//   const [selectedWatchlist, setSelectedWatchlist] = useState('');
  
//   const { watchlists, isStockInWatchlist, addStockToWatchlist, createWatchlist } = useWatchlist();
  
//   const isInWatchlist = isStockInWatchlist(symbol);

//   const handleAddToWatchlist = () => {
//     if (selectedWatchlist) {
//       // Add to existing watchlist
//       addStockToWatchlist(selectedWatchlist, {
//         symbol,
//         name: companyName,
//         price: currentPrice,
//         change: 0, // You can calculate this from your data
//         changePercent: 0 // You can calculate this from your data
//       });
//     } else if (newWatchlistName.trim()) {
//       // Create new watchlist and add stock
//       createWatchlist(newWatchlistName.trim(), [{
//         symbol,
//         name: companyName,
//         price: currentPrice,
//         change: 0,
//         changePercent: 0
//       }]);
//     }
//     setModalVisible(false);
//     setNewWatchlistName('');
//     setSelectedWatchlist('');
//   };

//   return (
//     <>
//       <TouchableOpacity 
//         onPress={() => setModalVisible(true)}
//         style={styles.bookmarkButton}
//       >
//         <Icon 
//           name={isInWatchlist ? "bookmark" : "bookmark-o"} 
//           size={24} 
//           color={isInWatchlist ? "#00ff83" : "#000000"} 
//         />
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <View style={styles.modalHeader}>
//               <Text style={styles.modalTitle}>Add to WatchList</Text>
//               <TouchableOpacity onPress={() => setModalVisible(false)}>
//                 <Icon name="close" size={24} color="white" />
//               </TouchableOpacity>
//             </View>

//             <Text style={styles.stockInfo}>{symbol} - {companyName}</Text>

//             <Text style={styles.sectionTitle}>New WatchList Name</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter watchlist name"
//               placeholderTextColor="#999"
//               value={newWatchlistName}
//               onChangeText={setNewWatchlistName}
//             />

//             {watchlists.length > 0 && (
//               <>
//                 <Text style={styles.sectionTitle}>Existing WatchLists</Text>
//                 <ScrollView style={styles.watchlistContainer}>
//                   {watchlists.map((watchlist, index) => (
//                     <TouchableOpacity 
//                       key={index} 
//                       style={styles.watchlistItem}
//                       onPress={() => setSelectedWatchlist(watchlist.name)}
//                     >
//                       <Icon 
//                         name={selectedWatchlist === watchlist.name ? "check-circle" : "circle-o"} 
//                         size={20} 
//                         color={selectedWatchlist === watchlist.name ? "#00ff83" : "white"} 
//                       />
//                       <Text style={styles.watchlistName}>{watchlist.name}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </ScrollView>
//               </>
//             )}

//             <TouchableOpacity style={styles.addButton} onPress={handleAddToWatchlist}>
//               <Text style={styles.addButtonText}>Add</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   bookmarkButton: {
//     padding: 8,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//   },
//   modalView: {
//     width: '90%',
//     backgroundColor: '#2A2A2A',
//     borderRadius: 10,
//     padding: 20,
//     maxHeight: '80%',
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   modalTitle: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   stockInfo: {
//     color: 'lightgray',
//     fontSize: 16,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   sectionTitle: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     marginTop: 15,
//   },
//   input: {
//     backgroundColor: '#3A3A3A',
//     borderRadius: 5,
//     padding: 10,
//     color: 'white',
//     marginBottom: 10,
//   },
//   watchlistContainer: {
//     maxHeight: 150,
//     marginBottom: 20,
//   },
//   watchlistItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#3A3A3A',
//     borderRadius: 5,
//     marginBottom: 5,
//   },
//   watchlistName: {
//     color: 'white',
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   addButton: {
//     backgroundColor: '#00ff83',
//     borderRadius: 5,
//     padding: 15,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default WatchlistButton;























// // components/WatchlistButton.js
// import React, { useState } from 'react';
// import { TouchableOpacity, StyleSheet, Modal, Text, View, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useWatchlist } from '../../hooks/useWatchlist';

// const WatchlistButton = ({ symbol, companyName, currentPrice }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [newWatchlistName, setNewWatchlistName] = useState('');
//   const [selectedWatchlist, setSelectedWatchlist] = useState('');
  
//   const { watchlists, isStockInWatchlist, addStockToWatchlist, createWatchlist } = useWatchlist();
  
//   const isInWatchlist = isStockInWatchlist(symbol);

//   const handleAddToWatchlist = () => {
//     if (selectedWatchlist) {
//       // Add to existing watchlist
//       addStockToWatchlist(selectedWatchlist, {
//         symbol,
//         name: companyName,
//         price: currentPrice,
//         change: 0, // You can calculate this from your data
//         changePercent: 0 // You can calculate this from your data
//       });
//     } else if (newWatchlistName.trim()) {
//       // Create new watchlist and add stock
//       createWatchlist(newWatchlistName.trim(), [{
//         symbol,
//         name: companyName,
//         price: currentPrice,
//         change: 0,
//         changePercent: 0
//       }]);
//     }
//     setModalVisible(false);
//     setNewWatchlistName('');
//     setSelectedWatchlist('');
//   };

//   const handleWatchlistSelect = (watchlistName) => {
//     setSelectedWatchlist(watchlistName);
//     setNewWatchlistName(''); // Clear new watchlist name when selecting existing
//   };

//   const handleNewWatchlistNameChange = (text) => {
//     setNewWatchlistName(text);
//     setSelectedWatchlist(''); // Clear selection when typing new name
//   };

//   return (
//     <>
//       <TouchableOpacity 
//         onPress={() => setModalVisible(true)}
//         style={styles.bookmarkButton}
//       >
//         <Icon 
//           name={isInWatchlist ? "bookmark" : "bookmark-o"} 
//           size={24} 
//           color={isInWatchlist ? "#00ff83" : "#000000"} 
//         />
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.centeredView}>
//           <TouchableOpacity 
//             style={styles.modalOverlay}
//             activeOpacity={1}
//             onPress={() => setModalVisible(false)}
//           />
//           <KeyboardAvoidingView 
//             behavior={Platform.OS === "ios" ? "padding" : "height"}
//             style={styles.keyboardAvoidingView}
//           >
//             <View style={styles.modalView}>
//               <View style={styles.modalHeader}>
//                 <Text style={styles.modalTitle}>Add to WatchList</Text>
//                 <TouchableOpacity onPress={() => setModalVisible(false)}>
//                   <Icon name="close" size={20} color="#666" />
//                 </TouchableOpacity>
//               </View>

//               <Text style={styles.stockInfo}>{symbol} - {companyName}</Text>

//               <Text style={styles.sectionTitle}>New WatchList Name</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter watchlist name"
//                 placeholderTextColor="#999"
//                 value={newWatchlistName}
//                 onChangeText={handleNewWatchlistNameChange}
//               />

//               {watchlists.length > 0 && (
//                 <>
//                   <Text style={styles.sectionTitle}>Existing WatchLists</Text>
//                   <ScrollView style={styles.watchlistContainer}>
//                     {watchlists.map((watchlist, index) => (
//                       <TouchableOpacity 
//                         key={index} 
//                         style={styles.watchlistItem}
//                         onPress={() => handleWatchlistSelect(watchlist.name)}
//                       >
//                         <Icon 
//                           name={selectedWatchlist === watchlist.name ? "check-circle" : "circle-o"} 
//                           size={20} 
//                           color={selectedWatchlist === watchlist.name ? "#00ff83" : "#666"} 
//                         />
//                         <Text style={[
//                           styles.watchlistName,
//                           selectedWatchlist === watchlist.name && styles.selectedWatchlistName
//                         ]}>
//                           {watchlist.name}
//                         </Text>
//                       </TouchableOpacity>
//                     ))}
//                   </ScrollView>
//                 </>
//               )}

//               <TouchableOpacity 
//                 style={[
//                   styles.addButton, 
//                   (!selectedWatchlist && !newWatchlistName.trim()) && styles.addButtonDisabled
//                 ]} 
//                 onPress={handleAddToWatchlist}
//                 disabled={!selectedWatchlist && !newWatchlistName.trim()}
//               >
//                 <Text style={styles.addButtonText}>Add</Text>
//               </TouchableOpacity>
//             </View>
//           </KeyboardAvoidingView>
//         </View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   bookmarkButton: {
//     padding: 8,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   modalOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   keyboardAvoidingView: {
//     justifyContent: 'flex-end',
//   },
//   modalView: {
//     backgroundColor: 'white',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 20,
//     paddingBottom: 30,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   modalTitle: {
//     color: '#000',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   stockInfo: {
//     color: '#666',
//     fontSize: 14,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   sectionTitle: {
//     color: '#000',
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 10,
//     marginTop: 15,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 12,
//     color: '#000',
//     marginBottom: 10,
//     fontSize: 16,
//   },
//   watchlistContainer: {
//     maxHeight: 150,
//     marginBottom: 20,
//   },
//   watchlistItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   watchlistName: {
//     color: '#000',
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   selectedWatchlistName: {
//     color: '#00ff83',
//     fontWeight: '600',
//   },
//   addButton: {
//     backgroundColor: '#00ff83',
//     borderRadius: 8,
//     padding: 15,
//     alignItems: 'center',
//   },
//   addButtonDisabled: {
//     backgroundColor: '#ccc',
//   },
//   addButtonText: {
//     color: '#000',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default WatchlistButton;


















// // components/WatchlistButton.js
// import React, { useState } from 'react';
// import { TouchableOpacity, StyleSheet, Modal, Text, View, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useWatchlist } from '../../hooks/useWatchlist';

// const WatchlistButton = ({ symbol, companyName, currentPrice }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [newWatchlistName, setNewWatchlistName] = useState('');
//   const [selectedWatchlist, setSelectedWatchlist] = useState('');
  
//   const { watchlists, isStockInWatchlist, addStockToWatchlist, createWatchlist } = useWatchlist();
  
//   const isInWatchlist = isStockInWatchlist(symbol);

//   const handleAddToWatchlist = () => {
//     if (selectedWatchlist) {
//       // Add to existing watchlist
//       addStockToWatchlist(selectedWatchlist, {
//         symbol,
//         name: companyName,
//         price: currentPrice,
//         change: 0,
//         changePercent: 0
//       });
//     } else if (newWatchlistName.trim()) {
//       // Create new watchlist and add stock
//       createWatchlist(newWatchlistName.trim(), [{
//         symbol,
//         name: companyName,
//         price: currentPrice,
//         change: 0,
//         changePercent: 0
//       }]);
//     }
//     setModalVisible(false);
//     setNewWatchlistName('');
//     setSelectedWatchlist('');
//   };

//   const handleWatchlistSelect = (watchlistName) => {
//     setSelectedWatchlist(watchlistName);
//     setNewWatchlistName(''); // Clear new watchlist name when selecting existing
//   };

//   const handleNewWatchlistNameChange = (text) => {
//     setNewWatchlistName(text);
//     setSelectedWatchlist(''); // Clear selection when typing new name
//   };

//   return (
//     <>
//       <TouchableOpacity 
//         onPress={() => setModalVisible(true)}
//         style={styles.bookmarkButton}
//       >
//         <Icon 
//           name={isInWatchlist ? "bookmark" : "bookmark-o"} 
//           size={24} 
//           color={isInWatchlist ? "#00ff83" : "#000000"} 
//         />
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.centeredView}>
//           <TouchableOpacity 
//             style={styles.modalOverlay}
//             activeOpacity={1}
//             onPress={() => setModalVisible(false)}
//           />
//           <KeyboardAvoidingView 
//             behavior={Platform.OS === "ios" ? "padding" : "height"}
//             style={styles.keyboardAvoidingView}
//           >
//             <View style={styles.modalView}>
//               <View style={styles.modalHeader}>
//                 <Text style={styles.modalTitle}>Add to WatchList</Text>
//                 <TouchableOpacity onPress={() => setModalVisible(false)}>
//                   <Icon name="close" size={20} color="#666" />
//                 </TouchableOpacity>
//               </View>

//               <Text style={styles.stockInfo}>{symbol} - {companyName}</Text>

//               <Text style={styles.sectionTitle}>New WatchList Name</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter watchlist name"
//                 placeholderTextColor="#999"
//                 value={newWatchlistName}
//                 onChangeText={handleNewWatchlistNameChange}
//               />

//               {watchlists.length > 0 && (
//                 <>
//                   <Text style={styles.sectionTitle}>Existing WatchLists</Text>
//                   <ScrollView style={styles.watchlistContainer}>
//                     {watchlists.map((watchlist, index) => (
//                       <TouchableOpacity 
//                         key={index} 
//                         style={styles.watchlistItem}
//                         onPress={() => handleWatchlistSelect(watchlist.name)}
//                       >
//                         <Icon 
//                           name={selectedWatchlist === watchlist.name ? "check-circle" : "circle-o"} 
//                           size={20} 
//                           color={selectedWatchlist === watchlist.name ? "#00ff83" : "#666"} 
//                         />
//                         <Text style={[
//                           styles.watchlistName,
//                           selectedWatchlist === watchlist.name && styles.selectedWatchlistName
//                         ]}>
//                           {watchlist.name}
//                         </Text>
//                       </TouchableOpacity>
//                     ))}
//                   </ScrollView>
//                 </>
//               )}

//               <TouchableOpacity 
//                 style={[
//                   styles.addButton, 
//                   (!selectedWatchlist && !newWatchlistName.trim()) && styles.addButtonDisabled
//                 ]} 
//                 onPress={handleAddToWatchlist}
//                 disabled={!selectedWatchlist && !newWatchlistName.trim()}
//               >
//                 <Text style={styles.addButtonText}>Add</Text>
//               </TouchableOpacity>
//             </View>
//           </KeyboardAvoidingView>
//         </View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
  // bookmarkButton: {
  //   padding: 8,
  // },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'flex-end',
  // },
  // modalOverlay: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // },
  // keyboardAvoidingView: {
  //   justifyContent: 'flex-end',
  // },
  // modalView: {
  //   backgroundColor: 'white',
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   padding: 20,
  //   paddingBottom: 30,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // modalHeader: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginBottom: 15,
  // },
  // modalTitle: {
  //   color: '#000',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  // stockInfo: {
  //   color: '#666',
  //   fontSize: 14,
  //   marginBottom: 20,
  //   textAlign: 'center',
  // },
  // sectionTitle: {
  //   color: '#000',
  //   fontSize: 16,
  //   fontWeight: '600',
  //   marginBottom: 10,
  //   marginTop: 15,
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#ddd',
  //   borderRadius: 8,
  //   padding: 12,
  //   color: '#000',
  //   marginBottom: 10,
  //   fontSize: 16,
  // },
  // watchlistContainer: {
  //   maxHeight: 150,
  //   marginBottom: 20,
  // },
  // watchlistItem: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   padding: 12,
  //   backgroundColor: '#f9f9f9',
  //   borderRadius: 8,
  //   marginBottom: 8,
  // },
  // watchlistName: {
  //   color: '#000',
  //   marginLeft: 10,
  //   fontSize: 16,
  // },
  // selectedWatchlistName: {
  //   color: '#00ff83',
  //   fontWeight: '600',
  // },
  // addButton: {
  //   backgroundColor: '#00ff83',
  //   borderRadius: 8,
  //   padding: 15,
  //   alignItems: 'center',
  // },
  // addButtonDisabled: {
  //   backgroundColor: '#ccc',
  // },
  // addButtonText: {
  //   color: '#000',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
// });

// export default WatchlistButton;














// components/WatchlistButton.js
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Modal, Text, View, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useWatchlist } from '../../context/WatchlistContext'; // Updated import

const WatchlistButton = ({ symbol, companyName, currentPrice }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newWatchlistName, setNewWatchlistName] = useState('');
  const [selectedWatchlist, setSelectedWatchlist] = useState('');
  
  const { watchlists, isStockInWatchlist, addStockToWatchlist, createWatchlist } = useWatchlist();
  
  const isInWatchlist = isStockInWatchlist(symbol);

  const handleAddToWatchlist = () => {
    if (selectedWatchlist) {
      // Add to existing watchlist
      addStockToWatchlist(selectedWatchlist, {
        symbol,
        name: companyName,
        price: currentPrice,
        change: 0,
        changePercent: 0
      });
    } else if (newWatchlistName.trim()) {
      // Create new watchlist and add stock
      createWatchlist(newWatchlistName.trim(), [{
        symbol,
        name: companyName,
        price: currentPrice,
        change: 0,
        changePercent: 0
      }]);
    }
    setModalVisible(false);
    setNewWatchlistName('');
    setSelectedWatchlist('');
  };

  const handleWatchlistSelect = (watchlistName) => {
    setSelectedWatchlist(watchlistName);
    setNewWatchlistName(''); // Clear new watchlist name when selecting existing
  };

  const handleNewWatchlistNameChange = (text) => {
    setNewWatchlistName(text);
    setSelectedWatchlist(''); // Clear selection when typing new name
  };

  return (
    <>
      <TouchableOpacity 
        onPress={() => setModalVisible(true)}
        style={styles.bookmarkButton}
      >
        <Icon 
          name={isInWatchlist ? "bookmark" : "bookmark-o"} 
          size={24} 
          color={isInWatchlist ? "#00ff83" : "#000000"} 
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity 
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
          />
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoidingView}
          >
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Add to WatchList</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Icon name="close" size={20} color="#666" />
                </TouchableOpacity>
              </View>

              <Text style={styles.stockInfo}>{symbol} - {companyName}</Text>

              <Text style={styles.sectionTitle}>New WatchList Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter watchlist name"
                placeholderTextColor="#999"
                value={newWatchlistName}
                onChangeText={handleNewWatchlistNameChange}
              />

              {watchlists.length > 0 && (
                <>
                  <Text style={styles.sectionTitle}>Existing WatchLists</Text>
                  <ScrollView style={styles.watchlistContainer}>
                    {watchlists.map((watchlist, index) => (
                      <TouchableOpacity 
                        key={index} 
                        style={styles.watchlistItem}
                        onPress={() => handleWatchlistSelect(watchlist.name)}
                      >
                        <Icon 
                          name={selectedWatchlist === watchlist.name ? "check-circle" : "circle-o"} 
                          size={20} 
                          color={selectedWatchlist === watchlist.name ? "#00ff83" : "#666"} 
                        />
                        <Text style={[
                          styles.watchlistName,
                          selectedWatchlist === watchlist.name && styles.selectedWatchlistName
                        ]}>
                          {watchlist.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </>
              )}

              <TouchableOpacity 
                style={[
                  styles.addButton, 
                  (!selectedWatchlist && !newWatchlistName.trim()) && styles.addButtonDisabled
                ]} 
                onPress={handleAddToWatchlist}
                disabled={!selectedWatchlist && !newWatchlistName.trim()}
              >
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
bookmarkButton: {
    padding: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  keyboardAvoidingView: {
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stockInfo: {
    color: '#666',
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    color: '#000',
    marginBottom: 10,
    fontSize: 16,
  },
  watchlistContainer: {
    maxHeight: 150,
    marginBottom: 20,
  },
  watchlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 8,
  },
  watchlistName: {
    color: '#000',
    marginLeft: 10,
    fontSize: 16,
  },
  selectedWatchlistName: {
    color: '#00ff83',
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#00ff83',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#ccc',
  },
  addButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WatchlistButton;