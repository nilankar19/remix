import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        'label-golden-border': 'var(--label-txt-clr, #e8cf90)',
      },
    },
  },
  plugins: [],
} satisfies Config;
