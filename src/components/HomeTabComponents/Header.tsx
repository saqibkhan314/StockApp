// import React from "react";
// import { View, Text, TextInput, StyleSheet } from "react-native";

// const Header = () => {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.appName}>Stocks App</Text>
//       <TextInput
//         style={styles.searchBox}
//         placeholder="Search here..."
//         placeholderTextColor="#888"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: 12,
//     paddingHorizontal: 12,
//     paddingTop: 12,
//   },
//   appName: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   searchBox: {
//     flex: 1,
//     marginLeft: 12,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     fontSize: 14,
//     color: "#000",
//   },
// });

// export default Header;




















import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, FlatList } from "react-native";
import { useSearchStock } from "../../hooks/useSearchStock";
import { useDebouncedSearch } from "../../hooks/useDebouncedSearch";

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchTerm, debouncedTerm, setSearchTerm] = useDebouncedSearch('', 500);
  const { data: searchResults, isLoading } = useSearchStock(debouncedTerm);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    // Add a small delay to allow for item selection
    setTimeout(() => setIsSearchFocused(false), 200);
  };

  const handleStockSelect = (stock) => {
    setSearchTerm('');
    setIsSearchFocused(false);
    // You can navigate to the stock details screen here
    console.log('Selected stock:', stock);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsSearchFocused(false);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.appName}>Stocks App</Text>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search here..."
          placeholderTextColor="#888"
          value={searchTerm}
          onChangeText={setSearchTerm}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        
        {searchTerm.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Text style={styles.clearText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Search Results Modal */}
      <Modal
        visible={isSearchFocused && searchTerm.length > 0}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsSearchFocused(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsSearchFocused(false)}
        >
          <View style={styles.searchResultsContainer}>
            {isLoading ? (
              <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Searching...</Text>
              </View>
            ) : searchResults && searchResults.length > 0 ? (
              <FlatList
                data={searchResults}
                keyExtractor={(item) => item.symbol}
                renderItem={({ item }) => (
                  <TouchableOpacity 
                    style={styles.resultItem}
                    onPress={() => handleStockSelect(item)}
                  >
                    <View style={styles.resultContent}>
                      <Text style={styles.symbolText}>{item.symbol}</Text>
                      <Text style={styles.nameText} numberOfLines={1}>
                        {item.name}
                      </Text>
                    </View>
                    <Text style={styles.regionText}>{item.region}</Text>
                  </TouchableOpacity>
                )}
                style={styles.resultsList}
                keyboardShouldPersistTaps="handled"
              />
            ) : searchTerm.length > 0 ? (
              <View style={styles.noResultsContainer}>
                <Text style={styles.noResultsText}>No results found</Text>
                <Text style={styles.noResultsSubText}>
                  Try different keywords
                </Text>
              </View>
            ) : null}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingTop: 12,
    backgroundColor: '#FFFFFF',
    zIndex: 1000,
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    width: 100, // Fixed width to prevent jumping
  },
  searchContainer: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  searchBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 14,
    color: "#000",
    backgroundColor: '#FFF',
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    padding: 4,
  },
  clearText: {
    color: '#888',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    paddingTop: 80, // Adjust based on your header height
  },
  searchResultsContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 12,
    borderRadius: 8,
    maxHeight: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  loadingText: {
    color: '#666',
    fontSize: 14,
  },
  resultsList: {
    maxHeight: 300,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  resultContent: {
    flex: 1,
    marginRight: 12,
  },
  symbolText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
  },
  nameText: {
    fontSize: 12,
    color: '#666',
  },
  regionText: {
    fontSize: 11,
    color: '#888',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  noResultsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  noResultsText: {
    color: '#666',
    fontSize: 16,
    marginBottom: 4,
  },
  noResultsSubText: {
    color: '#999',
    fontSize: 12,
  },
});

export default Header;