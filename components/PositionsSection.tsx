import { theme } from '@/constants/theme';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Position {
  pair: string;
  type: string;
  leverage: string;
  pnl: string;
  pnlPercent: string;
  size: string;
  margin: string;
  entryPrice: string;
  liqPrice: string;
}

type TabType = 'Positions (1)' | 'Open Orders' | 'Hide Other Pairs';

const PositionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Positions (1)');
  const tabs: TabType[] = ['Positions (1)', 'Open Orders', 'Hide Other Pairs'];

  const positions: Position[] = [

    {
      pair: 'BTCUSDT',
      type: 'Long',
      leverage: '100x',
      pnl: '+127.32 USDT',
      pnlPercent: '398.23%',
      size: '0.034 BTC / $3195.34',
      margin: '$34.23 USDT',
      entryPrice: '90,721.92',
      liqPrice: '80,721.92',
    },
  ];

  return (
    <View style={styles.positionsSection}>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.tab}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.positionsList}>
        {positions.map((position, index) => (
          <View key={index} style={styles.positionCard}>
            <View style={styles.positionHeader}>
              <View style={styles.positionTitle}>
                <View style={styles.bitcoinIcon}>
          {/* Rotated Bitcoin icon */}
          <View style={styles.rotatedIcon}>
            <FontAwesome5 name="btc" size={20} color="#FFFFFF" />
          </View>
        </View>
                <Text style={styles.positionPair}>{position.pair}</Text>
                <View style={styles.longBadge}>
                  <Text style={styles.longText}>{position.type}</Text>
                </View>
                <Text style={styles.leverageSmall}>{position.leverage}</Text>
              </View>
            </View>

            <View style={styles.positionRow}>
              <Text style={styles.positionLabel}>Unrealized PNL</Text>
              <Text style={styles.positionValueGreen}>
                {position.pnl} / {position.pnlPercent}
              </Text>
            </View>

            <View style={styles.positionRow}>
              <Text style={styles.positionLabel}>Size</Text>
              <Text style={styles.positionValue}>{position.size}</Text>
            </View>

            <View style={styles.positionRow}>
              <Text style={styles.positionLabel}>Margin(Cross)</Text>
              <Text style={styles.positionValue}>{position.margin}</Text>
            </View>

            {index === positions.length - 1 && (
              <>
                <View style={styles.positionRow}>
                  <Text style={styles.positionLabel}>Entry Price</Text>
                  <Text style={styles.positionValue}>{position.entryPrice}</Text>
                </View>

                <View style={styles.positionRow}>
                  <Text style={styles.positionLabel}>Liq. Price</Text>
                  <Text style={styles.positionValue}>{position.liqPrice}</Text>
                </View>

                <TouchableOpacity style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  positionsSection: {
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.lg,
  },
  tab: {
    marginRight: theme.spacing.xl,
    paddingBottom: theme.spacing.sm,
  },
  tabText: {
    color: theme.colors.text.secondary,
    fontSize: theme.fontSize.sm,
  },
  tabTextActive: {
    color: theme.colors.text.primary,
    fontWeight: theme.fontWeight.semibold,
  },
  positionsList: {
    maxHeight: 500,
  },
  positionCard: {
    backgroundColor: '#091c47',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  positionHeader: {
    marginBottom: theme.spacing.md,
  },
  positionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bitcoinIconSmall: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
  },
  bitcoinTextSmall: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.bold,
  },
  positionPair: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semibold,
    marginRight: theme.spacing.md,
  },
  longBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.sm,
    marginRight: theme.spacing.sm,
  },
  longText: {
    color: theme.colors.success,
    fontSize: theme.fontSize.xs,
    fontWeight: theme.fontWeight.semibold,
  },
  leverageSmall: {
    color: theme.colors.text.secondary,
    fontSize: theme.fontSize.sm,
  },
  positionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
  },
  positionLabel: {
    color: theme.colors.text.secondary,
    fontSize: theme.fontSize.sm,
  },
  positionValue: {
    color: theme.colors.text.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.semibold,
  },
  positionValueGreen: {
    color: theme.colors.success,
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.semibold,
  },
  cancelButton: {
    backgroundColor: theme.colors.accent,
    paddingVertical: theme.spacing.md,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  cancelButtonText: {
    color: theme.colors.background.primary,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semibold,
  },
   bitcoinIcon: {
    width: 29,
    height: 29,
    borderRadius: 18,
    backgroundColor: '#FE9316',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  // Rotate the icon container
  rotatedIcon: {
    transform: [{ rotate: '15deg' }], // Adjust angle as needed
  },
});

export default PositionsSection;