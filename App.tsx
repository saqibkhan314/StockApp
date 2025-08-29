import { View, Text } from 'react-native';
import React from 'react';
import Routes from './src/Navigations/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WatchlistProvider } from './src/context/WatchlistContext';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <WatchlistProvider>
        <Routes />
      </WatchlistProvider>
    </QueryClientProvider>
  );
};

export default App;
