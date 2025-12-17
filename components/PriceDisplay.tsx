import { theme } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PriceDisplay: React.FC = () => {
  return (
    <View style={styles.priceDisplay}>
      <Text style={styles.priceText}>$90,467.87</Text>
      <View style={styles.changeContainer}>
        <Text style={styles.changeText}>↑ 6.58%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceDisplay: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
  },
  priceText: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSize.xxl,
    fontWeight: theme.fontWeight.bold,
    marginBottom: theme.spacing.sm,
  },
  changeContainer: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
  },
  changeText: {
    color: '#8BFF54',
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.semibold,
  },
});

export default PriceDisplay;