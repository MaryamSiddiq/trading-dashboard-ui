import { theme } from '@/constants/theme';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type OrderType = 'Market' | 'Limit';

const TradingControls: React.FC = () => {
  const [orderType, setOrderType] = useState<OrderType>('Market');
  const [amount, setAmount] = useState<string>('');

  return (
    <View style={styles.tradingControls}>
      <View style={styles.actionButtons}>
        <View style={styles.buySellGroup}>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.sellButton}>
            <Text style={styles.sellButtonText}>Sell</Text>
          </TouchableOpacity>
        </View>
        
       <View style={styles.leverageSelector}>
  <View style={styles.leverageContainer}>
    <Text style={styles.leverageText}>100x</Text>
    <Feather name="chevron-down" size={20} color={theme.colors.text.primary} />
  </View>
</View>
      </View>

      <View style={styles.orderTypeContainer}>
        <TouchableOpacity onPress={() => setOrderType('Market')}>
          <Text
            style={[
              styles.orderTypeText,
              orderType === 'Market' && styles.orderTypeActive,
            ]}
          >
            Market
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setOrderType('Limit')}>
          <Text
            style={[
              styles.orderTypeText,
              orderType === 'Limit' && styles.orderTypeActive,
            ]}
          >
            Limit
          </Text>
        </TouchableOpacity>

        <View style={styles.availableBalance}>
          <Text style={styles.availableText}>Available</Text>
          <Text style={styles.balanceText}>2,965.65 USDT</Text>
        </View>
      </View>

      <View style={styles.amountInput}>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          placeholderTextColor='#395797'
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
       <View style={styles.inputSuffixContainer}>
  <Text style={styles.inputSuffix}>BTC</Text>
  <Feather name="chevron-down" size={20} color={theme.colors.text.primary} />
</View>
      </View>

      <View style={styles.slider}>
        <View style={styles.sliderTrack}>
          <View style={styles.sliderFill} />
          <View style={styles.sliderDots}>
            {[0, 25, 50, 75, 100].map((val) => (
              <View key={val} style={styles.sliderDot} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tradingControls: {
    paddingHorizontal: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  buySellGroup: {
    flexDirection: 'row',
    gap: 0,
    flex: 1,
    marginRight: theme.spacing.lg,
  },
buyButton: {
  width: 90,
  backgroundColor: theme.colors.accent,
  paddingVertical: theme.spacing.sm,
  borderRadius: theme.borderRadius.md,
  alignItems: 'center',
  zIndex: 1,
},

  buyButtonText: {
    color: theme.colors.background.primary,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semibold,
  },
  sellButton: {
 width: 98,
  paddingVertical: theme.spacing.sm,
  borderRadius: theme.borderRadius.md,
  marginLeft: -8,
  alignItems: 'center',
    backgroundColor: '#091C47',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  sellButtonText: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semibold,
  },
  leverageContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4, // space between text and icon
},
  leverageSelector: {
     width: 100,
  paddingVertical: theme.spacing.sm,
  borderRadius: theme.borderRadius.md,
  alignItems: 'center',
    backgroundColor: '#091C47',
    paddingHorizontal: theme.spacing.xl,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  leverageText: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semibold,
  },
  orderTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  orderTypeText: {
    color: theme.colors.text.secondary,
    fontSize: theme.fontSize.md,
    marginRight: theme.spacing.xl,
  },
  orderTypeActive: {
    color: theme.colors.text.primary,
    fontWeight: theme.fontWeight.semibold,
  },
  availableBalance: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  availableText: {
    color: '#BF80D5',
    fontSize: theme.fontSize.sm,
  },
  balanceText: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.semibold,
  },
  amountInput: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#091C47',
  borderRadius: 23,
  borderWidth: 1,
  borderColor: theme.colors.border,
  paddingHorizontal: theme.spacing.md,
  height: 45, // reduced height
  marginBottom: theme.spacing.lg,
},
  input: {
    flex: 1,
    color: theme.colors.text.primary,
    fontSize: theme.fontSize.md,
  },
  inputSuffix: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.regular,
  },
  slider: {
        marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  sliderTrack: {
    height: 8,
    backgroundColor: '#1E3772',
    borderRadius: 6,
    position: 'relative',
    justifyContent: 'center',
  },
  sliderFill: {
    position: 'absolute',
    height: '100%',
    width: '40%',
    borderRadius: 6,
  },
  sliderDots: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  sliderDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: theme.colors.accent,
  },
  inputSuffixContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4, // small space between text and icon
},
});

export default TradingControls;