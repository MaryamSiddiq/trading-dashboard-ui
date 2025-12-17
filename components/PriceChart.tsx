import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';

type Period = '1m' | '15m' | '1h' | '1d' | '1w' | '1M';

const PriceChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('15m');
  const periods: Period[] = ['1m', '15m', '1h', '1d', '1w', '1M'];

  const chartPath = `
    M 0 95
    L 10 92
    L 20 120
    L 30 90
    L 40 124
    L 50 88
    L 60 128
    L 70 60
    L 80 110
    L 90 65
    L 100 105
    L 110 96
    L 120 110
    L 130 95
    L 140 100
    L 150 135
    L 160 85
    L 170 100
    L 180 95
    L 190 105
    L 200 92
    L 210 108
    L 220 98
    L 230 110
    L 240 105
    L 250 115
    L 260 100
    L 270 115
    L 280 72
    L 290 120
    L 300 45
    L 320 32
    L 330 95
    L 350 11
  `;

  return (
    <View style={styles.container}>
      <View style={styles.chartArea}>
        <Svg width="100%" height="150" viewBox="0 0 370 150">
          <Defs>
            <LinearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0%" stopColor="#7CFF6B" stopOpacity="0.6" />
              <Stop offset="100%" stopColor="#7CFF6B" stopOpacity="1" />
            </LinearGradient>
          </Defs>

          <Path
            d={chartPath}
            stroke="url(#lineGradient)"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <Circle cx="350" cy="1" r="18" fill="#7CFF6B" opacity={0.12} />
          <Circle cx="350" cy="1" r="10" fill="#7CFF6B" opacity={0.28} />
          <Circle cx="350" cy="1" r="5" fill="#7CFF6B" />
        </Svg>
      </View>

      <View style={styles.periodContainer}>
        {periods.map((period) => {
          const active = selectedPeriod === period;
          return (
            <TouchableOpacity
              key={period}
              style={[styles.periodItem, active && styles.activeItem]}
              onPress={() => setSelectedPeriod(period)}
              activeOpacity={0.8}
            >
              <Text style={[styles.periodText, active && styles.activeText]}>
                {period}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default PriceChart;

const styles = StyleSheet.create({
  container: {
    marginTop: -24,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  chartArea: {
    height: 150,
    marginBottom: 16,
    backgroundColor: '#09152F',
    borderRadius: 16,
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  periodContainer: {
    flexDirection: 'row',
    backgroundColor: '#091C47',
    borderRadius: 14,
    padding: 4,
  },
  periodItem: {
    flex: 1,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  activeItem: {
    backgroundColor: '#09152F',
  },
  periodText: {
    fontSize: 12,
    color: '#A8B5D6',
    fontFamily: 'TheSans-Caps',
    textTransform: 'uppercase',
  },
  activeText: {
    color: '#4AB9E1',
    fontWeight: '600',
    fontFamily: 'TheSans-Caps',
    textTransform: 'uppercase',
  },
});