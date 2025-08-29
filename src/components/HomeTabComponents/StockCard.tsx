import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../utils/types/navigation";
import { useNavigation } from "@react-navigation/native";

type Props = {
  symbol: string;
  price: string | number;
  change: any;
  changePercent: any;
  name: any
};

const StockCard: React.FC<Props> = ({ symbol, price,  change, changePercent, name  }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleCardPress = () => {
    navigation.navigate('CompanyDetails', { symbol });
  };

  return (
    <View style={styles.card}>
    <TouchableOpacity 
    onPress={handleCardPress}
    >
      <View style={styles.circle} />
      <Text style={styles.name}>{symbol}</Text>
      <Text style={styles.price}>${price}</Text>
    </TouchableOpacity>
    
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3, // shadow for android
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000",
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
    color: "black",
  },
  price: {
    fontSize: 13,
    color: "green",
  },
});

export default StockCard;
