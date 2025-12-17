import { theme } from '@/constants/theme';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
    <TouchableOpacity style={styles.iconButton}>
  <Ionicons
    name="arrow-back"
    size={20}
    color={theme.colors.text.primary}
  />
</TouchableOpacity>


      <View style={styles.headerCenter}>
        <View style={styles.bitcoinIcon}>
          {/* Rotated Bitcoin icon */}
          <View style={styles.rotatedIcon}>
            <FontAwesome5 name="btc" size={20} color="#FFFFFF" />
          </View>
        </View>
        <View>
          <Text style={styles.headerTitle}>BTC / USDT</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="menu" size={24} color={theme.colors.text.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: theme.colors.background.primary,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
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
  headerTitle: {
    color: theme.colors.text.primary,
    fontSize: 20,
    fontWeight: '600',
  },
  headerSubtitle: {
    color: theme.colors.text.secondary,
    fontSize: 12,
  },
 iconButton: {
    width: 40,
    height: 40,
    borderRadius: 25, // perfect circle
    backgroundColor: '#091C47',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;