export const theme = {
  colors: {
    primary: '#0A1929',
    secondary: '#132F4C',
    accent: '#FDB022',
    success: '#22641f',
    error: '#EF5350',
    text: {
      primary: '#FFFFFF',
      secondary: '#8BA3B8',
      accent: '#F1BA3B',
    },
    background: {
      primary: '#09152f',
      secondary: '#132F4C',
      card: '#132F4C',
    },
    border: '#1E3A5F',
    overlay: {
      success: 'rgba(38, 166, 154, 0.2)',
      error: 'rgba(239, 83, 80, 0.2)',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 15,
    xl: 20,
    xxl: 24,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    round: 22,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 36,
  },
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: 'bold' as const,
  },
};

export type Theme = typeof theme;