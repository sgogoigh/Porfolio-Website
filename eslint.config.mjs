// Flat config, required by ESLint 9+. Next 16 dropped `next lint`, so the
// `lint` script now calls the ESLint CLI directly and this file is what it
// reads - the old .eslintrc.json is no longer consulted.
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const config = [
  // Flat config has no implicit ignores beyond node_modules, so build output
  // and generated types have to be listed here.
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  ...nextCoreWebVitals,
]

export default config
