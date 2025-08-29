// not from api

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import Description from '../components/Description';
import { useCompanyDetails } from '../hooks/useCompanyDetails';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../utils/types/navigation';

type CompanyDetailsRouteProp = RouteProp<RootStackParamList, "CompanyDetails">;

const CompanyDetailsScreen = () => {
  const [openData, setOpenData] = useState([]);
  const [highData, setHighData] = useState([]);
  const [lowData, setLowData] = useState([]);
  const [closeData, setCloseData] = useState([]);
  const [activeDataset, setActiveDataset] = useState('close');
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);

  const { params } = useRoute<CompanyDetailsRouteProp>();
  const { symbol } = params;

  const { data: companyData, isLoading: companyLoading, error: companyError } = useCompanyDetails(symbol);

  useEffect(() => {
    // 🔹 Hardcoded JSON
    const json = {
    "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2025-08-27",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
        "2025-08-27": {
            "1. open": "242.8700",
            "2. high": "245.9600",
            "3. low": "242.0000",
            "4. close": "244.8400",
            "5. volume": "3698372"
        },
        "2025-08-26": {
            "1. open": "241.0200",
            "2. high": "244.9800",
            "3. low": "240.3800",
            "4. close": "242.6300",
            "5. volume": "5386582"
        },
        "2025-08-25": {
            "1. open": "242.5650",
            "2. high": "242.5650",
            "3. low": "239.4300",
            "4. close": "239.4300",
            "5. volume": "3513327"
        },
        "2025-08-22": {
            "1. open": "240.7400",
            "2. high": "243.6800",
            "3. low": "240.2200",
            "4. close": "242.0900",
            "5. volume": "3134882"
        },
        "2025-08-21": {
            "1. open": "242.2100",
            "2. high": "242.5000",
            "3. low": "238.6500",
            "4. close": "239.4000",
            "5. volume": "2991902"
        },
        "2025-08-20": {
            "1. open": "242.1100",
            "2. high": "242.8800",
            "3. low": "240.3400",
            "4. close": "242.5500",
            "5. volume": "3240064"
        },
        "2025-08-19": {
            "1. open": "240.0000",
            "2. high": "242.8300",
            "3. low": "239.4900",
            "4. close": "241.2800",
            "5. volume": "3328305"
        },
        "2025-08-18": {
            "1. open": "239.5700",
            "2. high": "241.4200",
            "3. low": "239.1158",
            "4. close": "239.4500",
            "5. volume": "3569594"
        },
        "2025-08-15": {
            "1. open": "237.6100",
            "2. high": "240.6200",
            "3. low": "236.7700",
            "4. close": "239.7200",
            "5. volume": "4344322"
        },
        "2025-08-14": {
            "1. open": "238.2500",
            "2. high": "239.0000",
            "3. low": "235.6200",
            "4. close": "237.1100",
            "5. volume": "4556725"
        },
        "2025-08-13": {
            "1. open": "236.2000",
            "2. high": "240.8411",
            "3. low": "236.2000",
            "4. close": "240.0700",
            "5. volume": "5663562"
        },
        "2025-08-12": {
            "1. open": "236.5300",
            "2. high": "237.9600",
            "3. low": "233.3600",
            "4. close": "234.7700",
            "5. volume": "8800597"
        },
        "2025-08-11": {
            "1. open": "242.2400",
            "2. high": "243.1500",
            "3. low": "234.7000",
            "4. close": "236.3000",
            "5. volume": "9381960"
        },
        "2025-08-08": {
            "1. open": "248.8800",
            "2. high": "249.4800",
            "3. low": "241.6500",
            "4. close": "242.2700",
            "5. volume": "6828390"
        },
        "2025-08-07": {
            "1. open": "252.8100",
            "2. high": "255.0000",
            "3. low": "248.8750",
            "4. close": "250.1600",
            "5. volume": "6251285"
        },
        "2025-08-06": {
            "1. open": "251.5300",
            "2. high": "254.3200",
            "3. low": "249.2800",
            "4. close": "252.2800",
            "5. volume": "3692105"
        },
        "2025-08-05": {
            "1. open": "252.0000",
            "2. high": "252.8000",
            "3. low": "248.9950",
            "4. close": "250.6700",
            "5. volume": "5823016"
        },
        "2025-08-04": {
            "1. open": "251.0500",
            "2. high": "252.0800",
            "3. low": "248.1100",
            "4. close": "251.9800",
            "5. volume": "5280588"
        },
        "2025-08-01": {
            "1. open": "251.4050",
            "2. high": "251.4791",
            "3. low": "245.6100",
            "4. close": "250.0500",
            "5. volume": "9683404"
        },
        "2025-07-31": {
            "1. open": "259.5700",
            "2. high": "259.9900",
            "3. low": "252.2200",
            "4. close": "253.1500",
            "5. volume": "6739092"
        },
        "2025-07-30": {
            "1. open": "261.6000",
            "2. high": "262.0000",
            "3. low": "258.9000",
            "4. close": "260.2600",
            "5. volume": "3718290"
        },
        "2025-07-29": {
            "1. open": "264.3000",
            "2. high": "265.7999",
            "3. low": "261.0200",
            "4. close": "262.4100",
            "5. volume": "4627265"
        },
        "2025-07-28": {
            "1. open": "260.3000",
            "2. high": "264.0000",
            "3. low": "259.6100",
            "4. close": "263.2100",
            "5. volume": "5192516"
        },
        "2025-07-25": {
            "1. open": "260.0200",
            "2. high": "260.8000",
            "3. low": "256.3500",
            "4. close": "259.7200",
            "5. volume": "7758653"
        },
        "2025-07-24": {
            "1. open": "261.2500",
            "2. high": "262.0486",
            "3. low": "252.7500",
            "4. close": "260.5100",
            "5. volume": "22647720"
        },
        "2025-07-23": {
            "1. open": "284.3000",
            "2. high": "288.0800",
            "3. low": "281.4400",
            "4. close": "282.0100",
            "5. volume": "8105906"
        },
        "2025-07-22": {
            "1. open": "284.7400",
            "2. high": "284.8800",
            "3. low": "281.2500",
            "4. close": "281.9600",
            "5. volume": "4824219"
        },
        "2025-07-21": {
            "1. open": "286.2900",
            "2. high": "287.7300",
            "3. low": "284.3800",
            "4. close": "284.7100",
            "5. volume": "3051791"
        },
        "2025-07-18": {
            "1. open": "283.3800",
            "2. high": "287.1600",
            "3. low": "282.2200",
            "4. close": "285.8700",
            "5. volume": "4478165"
        },
        "2025-07-17": {
            "1. open": "281.5000",
            "2. high": "283.4566",
            "3. low": "280.9000",
            "4. close": "282.0000",
            "5. volume": "3337168"
        },
        "2025-07-16": {
            "1. open": "282.7500",
            "2. high": "283.8700",
            "3. low": "279.8700",
            "4. close": "281.9200",
            "5. volume": "2804831"
        },
        "2025-07-15": {
            "1. open": "283.7700",
            "2. high": "284.1550",
            "3. low": "280.7301",
            "4. close": "282.7000",
            "5. volume": "2864106"
        },
        "2025-07-14": {
            "1. open": "282.8300",
            "2. high": "284.9250",
            "3. low": "281.7100",
            "4. close": "283.7900",
            "5. volume": "2857401"
        },
        "2025-07-11": {
            "1. open": "285.0100",
            "2. high": "287.4300",
            "3. low": "282.9200",
            "4. close": "283.5900",
            "5. volume": "3790679"
        },
        "2025-07-10": {
            "1. open": "288.9000",
            "2. high": "288.9000",
            "3. low": "282.2100",
            "4. close": "287.4300",
            "5. volume": "3489068"
        },
        "2025-07-09": {
            "1. open": "291.3900",
            "2. high": "291.6000",
            "3. low": "288.6300",
            "4. close": "290.1400",
            "5. volume": "2971309"
        },
        "2025-07-08": {
            "1. open": "293.1000",
            "2. high": "295.6100",
            "3. low": "289.4900",
            "4. close": "290.4200",
            "5. volume": "2925329"
        },
        "2025-07-07": {
            "1. open": "292.5000",
            "2. high": "295.2199",
            "3. low": "290.3607",
            "4. close": "292.4700",
            "5. volume": "4488064"
        },
        "2025-07-03": {
            "1. open": "287.9400",
            "2. high": "292.3200",
            "3. low": "287.9000",
            "4. close": "291.9700",
            "5. volume": "1853289"
        },
        "2025-07-02": {
            "1. open": "290.0000",
            "2. high": "290.1900",
            "3. low": "286.9000",
            "4. close": "287.6500",
            "5. volume": "3257515"
        },
        "2025-07-01": {
            "1. open": "294.5500",
            "2. high": "295.1081",
            "3. low": "290.0800",
            "4. close": "291.2000",
            "5. volume": "3272797"
        },
        "2025-06-30": {
            "1. open": "290.9300",
            "2. high": "294.8100",
            "3. low": "290.0000",
            "4. close": "294.7800",
            "5. volume": "3495386"
        },
        "2025-06-27": {
            "1. open": "292.9700",
            "2. high": "293.1200",
            "3. low": "288.5200",
            "4. close": "289.7000",
            "5. volume": "3562501"
        },
        "2025-06-26": {
            "1. open": "291.8000",
            "2. high": "292.9100",
            "3. low": "290.1650",
            "4. close": "291.9300",
            "5. volume": "3621110"
        },
        "2025-06-25": {
            "1. open": "294.4900",
            "2. high": "296.1600",
            "3. low": "289.5000",
            "4. close": "291.0600",
            "5. volume": "3862309"
        },
        "2025-06-24": {
            "1. open": "290.4600",
            "2. high": "294.3399",
            "3. low": "288.4100",
            "4. close": "293.7900",
            "5. volume": "4219120"
        },
        "2025-06-23": {
            "1. open": "281.6500",
            "2. high": "289.5800",
            "3. low": "280.2100",
            "4. close": "289.1800",
            "5. volume": "3786159"
        },
        "2025-06-20": {
            "1. open": "279.2800",
            "2. high": "284.1200",
            "3. low": "277.2000",
            "4. close": "280.9700",
            "5. volume": "7676962"
        },
        "2025-06-18": {
            "1. open": "285.0000",
            "2. high": "286.9100",
            "3. low": "282.9400",
            "4. close": "283.2100",
            "5. volume": "3534110"
        },
        "2025-06-17": {
            "1. open": "281.1500",
            "2. high": "284.7899",
            "3. low": "281.0001",
            "4. close": "283.0500",
            "5. volume": "3069556"
        },
        "2025-06-16": {
            "1. open": "279.3050",
            "2. high": "284.5000",
            "3. low": "278.6657",
            "4. close": "281.8300",
            "5. volume": "3685321"
        },
        "2025-06-13": {
            "1. open": "278.2050",
            "2. high": "279.8400",
            "3. low": "275.8300",
            "4. close": "277.2200",
            "5. volume": "3243824"
        },
        "2025-06-12": {
            "1. open": "281.5300",
            "2. high": "283.0600",
            "3. low": "279.8300",
            "4. close": "281.0300",
            "5. volume": "3418007"
        },
        "2025-06-11": {
            "1. open": "276.7000",
            "2. high": "281.7500",
            "3. low": "275.1100",
            "4. close": "281.5200",
            "5. volume": "4656034"
        },
        "2025-06-10": {
            "1. open": "273.1900",
            "2. high": "277.4700",
            "3. low": "272.5600",
            "4. close": "276.2400",
            "5. volume": "5163507"
        },
        "2025-06-09": {
            "1. open": "268.1000",
            "2. high": "273.4700",
            "3. low": "266.7100",
            "4. close": "272.0800",
            "5. volume": "4331464"
        },
        "2025-06-06": {
            "1. open": "267.9900",
            "2. high": "270.1700",
            "3. low": "267.5300",
            "4. close": "268.8700",
            "5. volume": "2495543"
        },
        "2025-06-05": {
            "1. open": "265.2000",
            "2. high": "267.5100",
            "3. low": "265.1000",
            "4. close": "266.8600",
            "5. volume": "2659478"
        },
        "2025-06-04": {
            "1. open": "264.9000",
            "2. high": "267.0000",
            "3. low": "264.7900",
            "4. close": "265.5200",
            "5. volume": "2588741"
        },
        "2025-06-03": {
            "1. open": "263.3500",
            "2. high": "265.5600",
            "3. low": "262.5800",
            "4. close": "265.2000",
            "5. volume": "2494922"
        },
        "2025-06-02": {
            "1. open": "257.8500",
            "2. high": "263.9760",
            "3. low": "257.2200",
            "4. close": "263.9000",
            "5. volume": "2831881"
        },
        "2025-05-30": {
            "1. open": "258.7500",
            "2. high": "260.1200",
            "3. low": "257.1000",
            "4. close": "259.0600",
            "5. volume": "9668923"
        },
        "2025-05-29": {
            "1. open": "260.7500",
            "2. high": "261.1300",
            "3. low": "256.7700",
            "4. close": "258.6900",
            "5. volume": "2295228"
        },
        "2025-05-28": {
            "1. open": "263.1600",
            "2. high": "265.0000",
            "3. low": "259.9400",
            "4. close": "260.2400",
            "5. volume": "2318437"
        },
        "2025-05-27": {
            "1. open": "261.0000",
            "2. high": "263.7869",
            "3. low": "259.6300",
            "4. close": "263.2300",
            "5. volume": "3284216"
        },
        "2025-05-23": {
            "1. open": "258.5800",
            "2. high": "259.8696",
            "3. low": "255.7900",
            "4. close": "258.6300",
            "5. volume": "2722721"
        },
        "2025-05-22": {
            "1. open": "260.7700",
            "2. high": "261.2711",
            "3. low": "257.9100",
            "4. close": "258.3700",
            "5. volume": "3091253"
        },
        "2025-05-21": {
            "1. open": "264.9700",
            "2. high": "265.6499",
            "3. low": "260.4100",
            "4. close": "260.8700",
            "5. volume": "3753904"
        },
        "2025-05-20": {
            "1. open": "267.4000",
            "2. high": "269.2800",
            "3. low": "265.6201",
            "4. close": "266.9500",
            "5. volume": "2437860"
        },
        "2025-05-19": {
            "1. open": "265.4500",
            "2. high": "269.1350",
            "3. low": "265.0800",
            "4. close": "268.4100",
            "5. volume": "3198903"
        },
        "2025-05-16": {
            "1. open": "266.3500",
            "2. high": "267.9800",
            "3. low": "264.5900",
            "4. close": "266.7600",
            "5. volume": "3817937"
        },
        "2025-05-15": {
            "1. open": "259.0100",
            "2. high": "267.4300",
            "3. low": "258.6100",
            "4. close": "266.6800",
            "5. volume": "4856276"
        },
        "2025-05-14": {
            "1. open": "257.6000",
            "2. high": "260.5500",
            "3. low": "256.2200",
            "4. close": "257.8200",
            "5. volume": "3635124"
        },
        "2025-05-13": {
            "1. open": "254.4300",
            "2. high": "259.5800",
            "3. low": "252.8800",
            "4. close": "258.5900",
            "5. volume": "3521389"
        },
        "2025-05-12": {
            "1. open": "252.5000",
            "2. high": "253.8100",
            "3. low": "244.6500",
            "4. close": "253.6900",
            "5. volume": "4609520"
        },
        "2025-05-09": {
            "1. open": "252.5100",
            "2. high": "253.0000",
            "3. low": "247.6400",
            "4. close": "249.2000",
            "5. volume": "2901346"
        },
        "2025-05-08": {
            "1. open": "255.0000",
            "2. high": "256.5200",
            "3. low": "253.2500",
            "4. close": "254.1400",
            "5. volume": "3637012"
        },
        "2025-05-07": {
            "1. open": "249.4500",
            "2. high": "254.4700",
            "3. low": "248.8320",
            "4. close": "253.3700",
            "5. volume": "3400001"
        },
        "2025-05-06": {
            "1. open": "247.7600",
            "2. high": "250.1900",
            "3. low": "246.1100",
            "4. close": "249.1200",
            "5. volume": "2900556"
        },
        "2025-05-05": {
            "1. open": "243.7400",
            "2. high": "249.8000",
            "3. low": "243.6400",
            "4. close": "249.1800",
            "5. volume": "4138168"
        },
        "2025-05-02": {
            "1. open": "243.1250",
            "2. high": "245.6900",
            "3. low": "241.3300",
            "4. close": "245.5500",
            "5. volume": "3731946"
        },
        "2025-05-01": {
            "1. open": "241.4400",
            "2. high": "242.3700",
            "3. low": "237.9450",
            "4. close": "239.6600",
            "5. volume": "4243294"
        },
        "2025-04-30": {
            "1. open": "236.7300",
            "2. high": "242.4700",
            "3. low": "234.3401",
            "4. close": "241.8200",
            "5. volume": "5142993"
        },
        "2025-04-29": {
            "1. open": "237.0000",
            "2. high": "239.9800",
            "3. low": "236.1400",
            "4. close": "239.3900",
            "5. volume": "3426508"
        },
        "2025-04-28": {
            "1. open": "232.8600",
            "2. high": "236.6300",
            "3. low": "232.0700",
            "4. close": "236.1600",
            "5. volume": "3653461"
        },
        "2025-04-25": {
            "1. open": "228.9500",
            "2. high": "233.3600",
            "3. low": "226.3200",
            "4. close": "232.4100",
            "5. volume": "6700068"
        },
        "2025-04-24": {
            "1. open": "231.1750",
            "2. high": "232.7800",
            "3. low": "224.4401",
            "4. close": "229.3300",
            "5. volume": "15428144"
        },
        "2025-04-23": {
            "1. open": "246.0000",
            "2. high": "249.3400",
            "3. low": "243.6600",
            "4. close": "245.4800",
            "5. volume": "7948259"
        },
        "2025-04-22": {
            "1. open": "238.5000",
            "2. high": "242.6400",
            "3. low": "238.0200",
            "4. close": "240.9000",
            "5. volume": "4232658"
        },
        "2025-04-21": {
            "1. open": "238.0650",
            "2. high": "240.8050",
            "3. low": "232.9300",
            "4. close": "236.2200",
            "5. volume": "4908923"
        },
        "2025-04-17": {
            "1. open": "239.6800",
            "2. high": "241.7750",
            "3. low": "237.4000",
            "4. close": "238.8100",
            "5. volume": "4635204"
        },
        "2025-04-16": {
            "1. open": "240.2800",
            "2. high": "243.2999",
            "3. low": "235.8900",
            "4. close": "238.5700",
            "5. volume": "4870299"
        },
        "2025-04-15": {
            "1. open": "239.5500",
            "2. high": "241.5300",
            "3. low": "238.2700",
            "4. close": "240.7000",
            "5. volume": "3363708"
        },
        "2025-04-14": {
            "1. open": "239.7700",
            "2. high": "241.7700",
            "3. low": "236.7300",
            "4. close": "239.0600",
            "5. volume": "3321717"
        },
        "2025-04-11": {
            "1. open": "229.7200",
            "2. high": "237.5800",
            "3. low": "227.5100",
            "4. close": "235.4800",
            "5. volume": "4325895"
        },
        "2025-04-10": {
            "1. open": "231.0000",
            "2. high": "232.5700",
            "3. low": "222.0200",
            "4. close": "229.5500",
            "5. volume": "5656108"
        },
        "2025-04-09": {
            "1. open": "217.1200",
            "2. high": "236.3000",
            "3. low": "215.1636",
            "4. close": "235.3100",
            "5. volume": "7302808"
        },
        "2025-04-08": {
            "1. open": "232.5600",
            "2. high": "233.0500",
            "3. low": "217.2800",
            "4. close": "221.0300",
            "5. volume": "6849996"
        },
        "2025-04-07": {
            "1. open": "219.2400",
            "2. high": "232.2900",
            "3. low": "214.5000",
            "4. close": "225.7800",
            "5. volume": "7797889"
        },
        "2025-04-04": {
            "1. open": "238.0000",
            "2. high": "240.1600",
            "3. low": "226.8800",
            "4. close": "227.4800",
            "5. volume": "7407096"
        }
    }
}

    const timeSeries = json["Time Series (Daily)"];

    // Transform JSON into multiple datasets
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
  }, []);

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

  return (
    <View style={styles.container}>
      {/* Header with white background */}
      <View style={styles.header}>
        <Text style={styles.title}>IBM Stock Prices</Text>
        
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

      {/* Main content with dark background */}
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
            startFillColor={`${getActiveColor()}30`}
            endFillColor={`${getActiveColor()}10`}
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
    color: '#000000',
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
});

export default CompanyDetailsScreen;