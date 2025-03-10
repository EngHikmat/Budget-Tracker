import { defaultConfig, defineConfig, mergeConfigs } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        brand: {
          900: { value: "#1A202C" },
          500: { value: "#2D3748" },
          300: { value: "#4A5568" },
        },
      },
      fonts: {
        heading: { value: "'Cairo', sans-serif" },
        body: { value: "'Cairo', sans-serif" },
      },
    },
  },
});

const mconfig = mergeConfigs(defaultConfig, config);
export default mconfig;
