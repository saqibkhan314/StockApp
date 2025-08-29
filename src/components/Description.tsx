import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Description = ({ data, isLoading, error }) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading company information...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error loading company information</Text>
      </View>
    );
  }

  if (!data || Object.keys(data).length === 0 || data === {}) {
    return (
      <View style={styles.container}>
        <Text style={styles.noDataText}>No description available</Text>
      </View>
    );
  }

  // Format market cap if it's available
  const formatMarketCap = (marketCap) => {
    if (!marketCap || marketCap === "None") return "N/A";
    
    const num = parseFloat(marketCap);
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toFixed(2)}`;
  };

  // Format percentage values
  const formatPercentage = (value) => {
    if (!value || value === "None") return "N/A";
    return `${(parseFloat(value) * 100).toFixed(2)}%`;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>About {data.Name || data.Symbol}</Text>
      
      {data.Description && (
        <Text style={styles.description}>
          {data.Description}
        </Text>
      )}

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Industry:</Text>
        <Text style={styles.infoValue}>{data.Industry || "N/A"}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Sector:</Text>
        <Text style={styles.infoValue}>{data.Sector || "N/A"}</Text>
      </View>

      {/* Key Statistics */}
      <View style={styles.statsContainer}>
        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>52-Week Low</Text>
            <Text style={styles.statValue}>
              {data["52WeekLow"] && data["52WeekLow"] !== "None" ? `$${data["52WeekLow"]}` : "N/A"}
            </Text>
          </View>
          
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>52-Week High</Text>
            <Text style={styles.statValue}>
              {data["52WeekHigh"] && data["52WeekHigh"] !== "None" ? `$${data["52WeekHigh"]}` : "N/A"}
            </Text>
          </View>
        </View>

        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Market Cap</Text>
            <Text style={styles.statValue}>{formatMarketCap(data.MarketCapitalization)}</Text>
          </View>
          
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>P/E Ratio</Text>
            <Text style={styles.statValue}>{data.PERatio && data.PERatio !== "None" ? data.PERatio : "N/A"}</Text>
          </View>
        </View>

        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Beta</Text>
            <Text style={styles.statValue}>{data.Beta && data.Beta !== "None" ? data.Beta : "N/A"}</Text>
          </View>
          
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Dividend Yield</Text>
            <Text style={styles.statValue}>{formatPercentage(data.DividendYield)}</Text>
          </View>
        </View>

        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Profit Margin</Text>
            <Text style={styles.statValue}>{formatPercentage(data.ProfitMargin)}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1C1C1C',
  },
  loadingText: {
    color: 'lightgray',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    color: '#FF375F',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  noDataText: {
    color: 'lightgray',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    color: 'lightgray',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    width: 80,
  },
  infoValue: {
    color: 'lightgray',
    fontSize: 14,
    flex: 1,
  },
  statsContainer: {
    marginTop: 20,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  statBox: {
    backgroundColor: '#2A2A2A',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  statLabel: {
    color: 'lightgray',
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
  },
  statValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Description;