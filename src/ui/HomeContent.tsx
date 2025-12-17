import Header from '@/components/Header';
import PositionsSection from '@/components/PositionsSection';
import PriceChart from '@/components/PriceChart';
import PriceDisplay from '@/components/PriceDisplay';
import TradingControls from '@/components/TradingControls';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const HomeContent: React.FC = () => {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <Header />
      <PriceDisplay />
      <PriceChart />
      <TradingControls />
      <PositionsSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default HomeContent;
