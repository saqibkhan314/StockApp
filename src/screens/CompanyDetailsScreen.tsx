

// data from api instead of static data and CURRENTLY WORKING CODE

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { LineChart } from "react-native-gifted-charts";
// import { RootStackParamList } from '../utils/types/navigation';
// import { RouteProp, useRoute } from '@react-navigation/native';
// import { useTimeSeriesDaily } from '../hooks/useTimeSeriesDaily'; // Import the correct hook
// import Description from '../components/Description';
// import { useCompanyDetails } from '../hooks/useCompanyDetails';


// type CompanyDetailsRouteProp = RouteProp<RootStackParamList, "CompanyDetails">;

// const CompanyDetailsScreen = () => {
//   const { params } = useRoute<CompanyDetailsRouteProp>();
//   const { symbol } = params;

//   const { data: companyData, isLoading: companyLoading, error: companyError } = useCompanyDetails(symbol);
  
//   // Use the time series hook instead of company details hook
//   const { data, isLoading, error } = useTimeSeriesDaily(symbol);
//   const [openData, setOpenData] = useState([]);
//   const [highData, setHighData] = useState([]);
//   const [lowData, setLowData] = useState([]);
//   const [closeData, setCloseData] = useState([]);
//   const [activeDataset, setActiveDataset] = useState('close');
//   const [maxValue, setMaxValue] = useState(0);
//   const [minValue, setMinValue] = useState(0);

//   useEffect(() => {
//     if (data && typeof data === 'object' && Object.keys(data).length > 0) {
//       // Check if we have the expected data structure
//       if (data["Time Series (Daily)"]) {
//         const timeSeries = data["Time Series (Daily)"];
        
//         // Transform API data into multiple datasets
//         const openArr = [];
//         const highArr = [];
//         const lowArr = [];
//         const closeArr = [];

//         Object.entries(timeSeries).forEach(([date, values], index) => {
//           // Format date as "MMM DD" (e.g., "Aug 27")
//           const dateObj = new Date(date);
//           const month = dateObj.toLocaleString('default', { month: 'short' });
//           const day = dateObj.getDate();
//           const label = `${month} ${day}`;
          
//           const openVal = parseFloat(values["1. open"]);
//           const highVal = parseFloat(values["2. high"]);
//           const lowVal = parseFloat(values["3. low"]);
//           const closeVal = parseFloat(values["4. close"]);
          
//           // Only add label to every 3rd data point for better readability
//           const labelProps = index % 3 === 0 ? { 
//             label, 
//             labelTextStyle: { color: 'lightgray', width: 60 } 
//           } : {};
          
//           openArr.push({ value: openVal, date: label, ...labelProps });
//           highArr.push({ value: highVal, date: label, ...labelProps });
//           lowArr.push({ value: lowVal, date: label, ...labelProps });
//           closeArr.push({ value: closeVal, date: label, ...labelProps });
//         });

//         // Calculate max and min values for y-axis scaling
//         const allValues = [
//           ...openArr.map(item => item.value),
//           ...highArr.map(item => item.value),
//           ...lowArr.map(item => item.value),
//           ...closeArr.map(item => item.value)
//         ];
        
//         const calculatedMax = Math.max(...allValues);
//         const calculatedMin = Math.min(...allValues);
        
//         // Add some padding to the max and min values
//         setMaxValue(calculatedMax + (calculatedMax - calculatedMin) * 0.1);
//         setMinValue(calculatedMin - (calculatedMax - calculatedMin) * 0.1);

//         // Reverse for chronological order and set states
//         setOpenData(openArr.reverse());
//         setHighData(highArr.reverse());
//         setLowData(lowArr.reverse());
//         setCloseData(closeArr.reverse());
//       }
//     }
//   }, [data]);

//   // Function to get the active dataset based on selection
//   const getActiveData = () => {
//     switch(activeDataset) {
//       case 'open': return openData;
//       case 'high': return highData;
//       case 'low': return lowData;
//       case 'close': return closeData;
//       default: return closeData;
//     }
//   };

//   // Function to get the color for the active dataset
//   const getActiveColor = () => {
//     switch(activeDataset) {
//       case 'open': return '#FFA500'; // Orange
//       case 'high': return '#FF375F'; // Red
//       case 'low': return '#0BA5A4';  // Teal
//       case 'close': return '#00ff83'; // Green
//       default: return '#00ff83';
//     }
//   };

//   // Function to get the title for the active dataset
//   const getActiveTitle = () => {
//     switch(activeDataset) {
//       case 'open': return 'Open Price';
//       case 'high': return 'High Price';
//       case 'low': return 'Low Price';
//       case 'close': return 'Close Price';
//       default: return 'Close Price';
//     }
//   };

//   // Show loading indicator while data is being fetched
//   if (isLoading) {
//     return (
//       <View style={[styles.container, styles.center]}>
//         <ActivityIndicator size="large" color="#00ff83" />
//         <Text style={styles.loadingText}>Loading {symbol} data...</Text>
//       </View>
//     );
//   }

//   // Show error message if there's an error
//   if (error) {
//     return (
//       <View style={[styles.container, styles.center]}>
//         <Text style={styles.errorText}>Error loading data: {error.message}</Text>
//       </View>
//     );
//   }

//   // Show message if no data is available
//   if (!data || Object.keys(data).length === 0 || openData.length === 0) {
//     return (
//       <View style={[styles.container, styles.center]}>
//         <Text style={styles.noDataText}>No data available for {symbol}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//         <View style={styles.header}>
//       <Text style={styles.title}>{symbol} Stock Prices</Text>
      
//       {/* Dataset selector buttons */}
//       <View style={styles.selectorContainer}>
//         <TouchableOpacity 
//           style={[styles.selectorButton, activeDataset === 'open' && styles.activeSelector]}
//           onPress={() => setActiveDataset('open')}
//         >
//           <Text style={styles.selectorText}>Open</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity 
//           style={[styles.selectorButton, activeDataset === 'high' && styles.activeSelector]}
//           onPress={() => setActiveDataset('high')}
//         >
//           <Text style={styles.selectorText}>High</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity 
//           style={[styles.selectorButton, activeDataset === 'low' && styles.activeSelector]}
//           onPress={() => setActiveDataset('low')}
//         >
//           <Text style={styles.selectorText}>Low</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity 
//           style={[styles.selectorButton, activeDataset === 'close' && styles.activeSelector]}
//           onPress={() => setActiveDataset('close')}
//         >
//           <Text style={styles.selectorText}>Close</Text>
//         </TouchableOpacity>
//       </View>
      
//       <Text style={styles.datasetTitle}>{getActiveTitle()}</Text>
//         </View>
//      <View style={styles.mainContent}>
//         <View style={styles.chartWrapper}> 
//       <LineChart
//         areaChart
//         data={getActiveData()}
//         rotateLabel
//         width={340}
//         hideDataPoints
//         spacing={30}
//         color={getActiveColor()}
//         thickness={2}
//         startFillColor={`${getActiveColor()}30`} // Add transparency
//         endFillColor={`${getActiveColor()}10`}   // Add transparency
//         startOpacity={0.9}
//         endOpacity={0.2}
//         initialSpacing={10}
//         maxValue={maxValue}
//         minValue={minValue}
//         noOfSections={5}
//         yAxisColor="white"
//         yAxisThickness={0}
//         rulesType="solid"
//         rulesColor="rgba(255,255,255,0.1)"
//         yAxisTextStyle={{ color: 'gray' }}
//         yAxisSide="right"
//         xAxisColor="lightgray"
//         xAxisLabelTextStyle={{ color: 'lightgray' }}
//         showVerticalLines
//         verticalLinesColor="rgba(255,255,255,0.1)"
//         pointerConfig={{
//           pointerStripHeight: 160,
//           pointerStripColor: 'lightgray',
//           pointerStripWidth: 2,
//           pointerColor: 'lightgray',
//           radius: 6,
//           pointerLabelWidth: 120,
//           pointerLabelHeight: 100,
//           activatePointersOnLongPress: true,
//           autoAdjustPointerLabelPosition: true,
//           pointerLabelComponent: items => {
//             return (
//               <View style={styles.pointerContainer}>
//                 <Text style={styles.pointerDate}>
//                   {items[0].date}
//                 </Text>
//                 <View style={[styles.pointerValueContainer, { backgroundColor: getActiveColor() }]}>
//                   <Text style={styles.pointerValue}>
//                     ${items[0].value.toFixed(2)}
//                   </Text>
//                 </View>
//               </View>
//             );
//           },
//         }}
//       />
//     </View>
//     <Description 
//           data={companyData} 
//           isLoading={companyLoading} 
//           error={companyError} 
//         />
//     </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     paddingTop: 22,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   mainContent: {
//     flex: 1,
//     backgroundColor: '#1C1C1C',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     marginTop: -20, // Overlap slightly with header
//     paddingTop: 30,
//   },
//   chartWrapper: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//     paddingBottom: 20,
//   },
//   center: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//    color: '#000000',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   selectorContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   selectorButton: {
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 15,
//     backgroundColor: '#F0F0F0',
//     minWidth: 70,
//     alignItems: 'center',
//   },
//   activeSelector: {
//     backgroundColor: '#00ff83',
//   },
//   selectorText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   datasetTitle: {
//     color: '#666666',
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 10,
//     alignSelf: 'flex-start',
//     marginLeft: 10,
//   },
//   pointerContainer: {
//     height: 100,
//     width: 120,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pointerDate: {
//     color: 'white',
//     fontSize: 12,
//     marginBottom: 6,
//     textAlign: 'center',
//   },
//   pointerValueContainer: {
//     paddingHorizontal: 14,
//     paddingVertical: 6,
//     borderRadius: 16,
//   },
//   pointerValue: {
//     fontWeight: 'bold',
//     textAlign: 'center',
//     fontSize: 14,
//     color: 'white',
//   },
//   loadingText: {
//     color: 'black',
//     marginTop: 10,
//     fontSize: 16,
//   },
//   errorText: {
//     color: '#FF375F',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   noDataText: {
//     color: 'lightgray',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default CompanyDetailsScreen;























import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { RootStackParamList } from '../utils/types/navigation';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useTimeSeriesDaily } from '../hooks/useTimeSeriesDaily'; // Import the correct hook
import Description from '../components/Description';
import { useCompanyDetails } from '../hooks/useCompanyDetails';
import WatchlistButton from '../components/WatchListTabComponents/WatchlistButton'; 


type CompanyDetailsRouteProp = RouteProp<RootStackParamList, "CompanyDetails">;

const CompanyDetailsScreen = () => {
  const { params } = useRoute<CompanyDetailsRouteProp>();
  const { symbol } = params;

  const { data: companyData, isLoading: companyLoading, error: companyError } = useCompanyDetails(symbol);
  
  // Use the time series hook instead of company details hook
  const { data, isLoading, error } = useTimeSeriesDaily(symbol);
  const [openData, setOpenData] = useState([]);
  const [highData, setHighData] = useState([]);
  const [lowData, setLowData] = useState([]);
  const [closeData, setCloseData] = useState([]);
  const [activeDataset, setActiveDataset] = useState('close');
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);

  useEffect(() => {
    if (data && typeof data === 'object' && Object.keys(data).length > 0) {
      // Check if we have the expected data structure
      if (data["Time Series (Daily)"]) {
        const timeSeries = data["Time Series (Daily)"];
        
        // Transform API data into multiple datasets
        const openArr = [];
        const highArr = [];
        const lowArr = [];
        const closeArr = [];

        Object.entries(timeSeries).forEach(([date, values], index) => {
          // Format date as "MMM DD" (e.g., "Aug 27")
          const dateObj = new Date(date);
          const month = dateObj.toLocaleString('default', { month: 'short' });
          const day = dateObj.getDate();
          const label = `${month} ${day}`;
          
          const openVal = parseFloat(values["1. open"]);
          const highVal = parseFloat(values["2. high"]);
          const lowVal = parseFloat(values["3. low"]);
          const closeVal = parseFloat(values["4. close"]);
          
          // Only add label to every 3rd data point for better readability
          const labelProps = index % 3 === 0 ? { 
            label, 
            labelTextStyle: { color: 'lightgray', width: 60 } 
          } : {};
          
          openArr.push({ value: openVal, date: label, ...labelProps });
          highArr.push({ value: highVal, date: label, ...labelProps });
          lowArr.push({ value: lowVal, date: label, ...labelProps });
          closeArr.push({ value: closeVal, date: label, ...labelProps });
        });

        // Calculate max and min values for y-axis scaling
        const allValues = [
          ...openArr.map(item => item.value),
          ...highArr.map(item => item.value),
          ...lowArr.map(item => item.value),
          ...closeArr.map(item => item.value)
        ];
        
        const calculatedMax = Math.max(...allValues);
        const calculatedMin = Math.min(...allValues);
        
        // Add some padding to the max and min values
        setMaxValue(calculatedMax + (calculatedMax - calculatedMin) * 0.1);
        setMinValue(calculatedMin - (calculatedMax - calculatedMin) * 0.1);

        // Reverse for chronological order and set states
        setOpenData(openArr.reverse());
        setHighData(highArr.reverse());
        setLowData(lowArr.reverse());
        setCloseData(closeArr.reverse());
      }
    }
  }, [data]);

  const currentPrice = closeData.length > 0 ? closeData[closeData.length - 1].value : 0;

  // Function to get the active dataset based on selection
  const getActiveData = () => {
    switch(activeDataset) {
      case 'open': return openData;
      case 'high': return highData;
      case 'low': return lowData;
      case 'close': return closeData;
      default: return closeData;
    }
  };

  // Function to get the color for the active dataset
  const getActiveColor = () => {
    switch(activeDataset) {
      case 'open': return '#FFA500'; // Orange
      case 'high': return '#FF375F'; // Red
      case 'low': return '#0BA5A4';  // Teal
      case 'close': return '#00ff83'; // Green
      default: return '#00ff83';
    }
  };

  // Function to get the title for the active dataset
  const getActiveTitle = () => {
    switch(activeDataset) {
      case 'open': return 'Open Price';
      case 'high': return 'High Price';
      case 'low': return 'Low Price';
      case 'close': return 'Close Price';
      default: return 'Close Price';
    }
  };

  // Show loading indicator while data is being fetched
  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#00ff83" />
        <Text style={styles.loadingText}>Loading {symbol} data...</Text>
      </View>
    );
  }

  // Show error message if there's an error
  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>Error loading data: {error.message}</Text>
      </View>
    );
  }

  // Show message if no data is available
  if (!data || Object.keys(data).length === 0 || openData.length === 0) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.noDataText}>No data available for {symbol}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
      <View style={styles.headerRow}>
          <Text style={styles.title}>{symbol} Stock Prices</Text>
          <WatchlistButton 
            symbol={symbol} 
            companyName={companyData?.Name || symbol} 
            currentPrice={currentPrice}
          />
        </View>
      
      {/* Dataset selector buttons */}
      <View style={styles.selectorContainer}>
        <TouchableOpacity 
          style={[styles.selectorButton, activeDataset === 'open' && styles.activeSelector]}
          onPress={() => setActiveDataset('open')}
        >
          <Text style={styles.selectorText}>Open</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.selectorButton, activeDataset === 'high' && styles.activeSelector]}
          onPress={() => setActiveDataset('high')}
        >
          <Text style={styles.selectorText}>High</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.selectorButton, activeDataset === 'low' && styles.activeSelector]}
          onPress={() => setActiveDataset('low')}
        >
          <Text style={styles.selectorText}>Low</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.selectorButton, activeDataset === 'close' && styles.activeSelector]}
          onPress={() => setActiveDataset('close')}
        >
          <Text style={styles.selectorText}>Close</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.datasetTitle}>{getActiveTitle()}</Text>
        </View>
     <View style={styles.mainContent}>
        <View style={styles.chartWrapper}> 
      <LineChart
        areaChart
        data={getActiveData()}
        rotateLabel
        width={340}
        hideDataPoints
        spacing={30}
        color={getActiveColor()}
        thickness={2}
        startFillColor={`${getActiveColor()}30`} // Add transparency
        endFillColor={`${getActiveColor()}10`}   // Add transparency
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={10}
        maxValue={maxValue}
        minValue={minValue}
        noOfSections={5}
        yAxisColor="white"
        yAxisThickness={0}
        rulesType="solid"
        rulesColor="rgba(255,255,255,0.1)"
        yAxisTextStyle={{ color: 'gray' }}
        yAxisSide="right"
        xAxisColor="lightgray"
        xAxisLabelTextStyle={{ color: 'lightgray' }}
        showVerticalLines
        verticalLinesColor="rgba(255,255,255,0.1)"
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: 'lightgray',
          pointerStripWidth: 2,
          pointerColor: 'lightgray',
          radius: 6,
          pointerLabelWidth: 120,
          pointerLabelHeight: 100,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: true,
          pointerLabelComponent: items => {
            return (
              <View style={styles.pointerContainer}>
                <Text style={styles.pointerDate}>
                  {items[0].date}
                </Text>
                <View style={[styles.pointerValueContainer, { backgroundColor: getActiveColor() }]}>
                  <Text style={styles.pointerValue}>
                    ${items[0].value.toFixed(2)}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
    <Description 
          data={companyData} 
          isLoading={companyLoading} 
          error={companyError} 
        />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 22,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // Overlap slightly with header
    paddingTop: 30,
  },
  chartWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
   color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  selectorContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  selectorButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    minWidth: 70,
    alignItems: 'center',
  },
  activeSelector: {
    backgroundColor: '#00ff83',
  },
  selectorText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  datasetTitle: {
    color: '#666666',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  pointerContainer: {
    height: 100,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointerDate: {
    color: 'white',
    fontSize: 12,
    marginBottom: 6,
    textAlign: 'center',
  },
  pointerValueContainer: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  pointerValue: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
  },
  loadingText: {
    color: 'black',
    marginTop: 10,
    fontSize: 16,
  },
  errorText: {
    color: '#FF375F',
    fontSize: 16,
    textAlign: 'center',
  },
  noDataText: {
    color: 'lightgray',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CompanyDetailsScreen;