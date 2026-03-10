export const theme = {
  colors: {
    primary: 'from-blue-600 to-purple-600',
    primarySolid: 'bg-blue-600 hover:bg-blue-700',
    primarySoft: 'bg-blue-50 text-blue-700',
    surface: 'bg-white',
    subtle: 'bg-gray-50',
    borderSubtle: 'border-gray-200',
    textMain: 'text-gray-900',
    textSoft: 'text-gray-600',
  },
  radii: {
    card: 'rounded-2xl',
    pill: 'rounded-full',
    button: 'rounded-lg',
  },
  shadows: {
    card: 'shadow-lg hover:shadow-2xl',
    soft: 'shadow-md',
  },
  text: {
    h1: 'text-5xl font-bold text-gray-900',
    h2: 'text-4xl font-bold text-gray-900',
    h3: 'text-2xl font-bold text-gray-900',
    body: 'text-base text-gray-600',
  },
};

export const ds = {
  card: `${theme.colors.surface} ${theme.radii.card} ${theme.shadows.card} transition-all duration-300`,
  primaryButton:
    `${theme.colors.primarySolid} text-white font-semibold px-6 py-3 ${theme.radii.button} ` +
    'transition-colors flex items-center justify-center',
  secondaryButton:
    'border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors',
  input:
    'border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white',
};

