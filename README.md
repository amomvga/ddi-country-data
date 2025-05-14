# ddi-country-data

> Maps DDI (international dialing codes) to country data including name, flag, continent, and phone number mask — fully typed in TypeScript.

## ✨ Features

- 🔢 Lookup by DDI (country calling code)
- 🏳️‍🌈 Flag via emoji or image URL
- 🌍 Country name and continent available in **Portuguese (pt-BR)** and **English (en)**
- 🛡️ Zero external dependencies
- 📦 Lightweight (~70 kB)
- 📝 MIT License

## 🚀 Installation

```bash
# Yarn
yarn add ddi-country-data

# npm
npm install ddi-country-data
```

## 📚 Quick Usage

### ESM / TypeScript

```ts
import { getCountryByDDI } from 'ddi-country-data';

const ddiData = getCountryByDDI(55);

console.log(ddiData);
/*
{
  ddi: 55,
  countryPt: 'Brasil',
  countryEn: 'Brazil',
  img: '🇧🇷',
  continentPt: 'América',
  continentEn: 'Americas',
  mask: '+55 (##) #####-####'
}
*/
```

### CommonJS

```js
const { getCountryByDDI } = require('ddi-country-data');

console.log(getCountryByDDI('34')); // Spain
```

### Accessing raw dataset

```ts
import ddiData from 'ddi-country-data';

console.log(ddiData[1]); // +1 North America
```

## 🧩 API

| Function                                  | Description                          | Return                                       |
| ----------------------------------------- | ------------------------------------ | -------------------------------------------- | ----------- |
| `getCountryByDDI(ddi: number              | string)`                             | Returns a `Country` object for the given DDI | `Country`   |
| `searchByName(name: string, locale?: 'pt' | 'en')`                               | Search countries by name in given language   | `Country[]` |
| `getAllCountries()`                       | Returns all countries ordered by DDI | `Country[]`                                  |

### Interface `Country`

```ts
interface Country {
  ddi: number;
  countryPt: string;
  countryEn: string;
  img: string; // URL flag
  continentPt: string;
  continentEn: string;
  mask: string; // phone format mask
}
```

## 🗺️ Roadmap

- Support for ISO 3166-1 alpha-2 / alpha-3 codes
- Add support for special regions and territories
- Utilities for phone number formatting

## 🤝 Contributing

1. **Fork** this repository
2. Create your branch: `git checkout -b feat/your-feature-name`
3. Commit your changes: `git commit -m "feat: your feature"`
4. Push to your branch: `git push origin feat/your-feature-name`
5. Open a Pull Request

## 👤 Author

Created by **Amom Augusto**
