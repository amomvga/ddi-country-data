# ddi-country-data

Lightweight TypeScript library mapping international dialing codes (DDI) to country data including name, flag, continent, and phone number mask.

## ✨ Features

- 🔍 **Advanced search** by DDI, country name (PT/EN), or continent (PT/EN)
- 🔢 Exact DDI lookup
- 🏳️‍🌈 Flag via image URL
- 🌍 Country name and continent in **Portuguese (pt-BR)** and **English (en)**
- 📏 Configurable phone number mask
- 🛡️ Zero external dependencies
- 📦 Lightweight (~70 kB)

## 🚀 Installation

```bash
# Yarn
yarn add ddi-country-data

# npm
npm install ddi-country-data
```

## 📚 Quick Usage

### Exact DDI lookup

```ts
import { getCountryByDDI } from 'ddi-country-data';

const countryData = getCountryByDDI(55);
console.log(countryData);
/*
{
  ddi: '55',
  countryPt: 'Brasil',
  countryEn: 'Brazil',
  img: 'https://.../Flag_of_Brazil.svg',
  continentPt: 'América',
  continentEn: 'Americas',
  mask: '+55 (##) #####-####'
}
*/
```

### Advanced multi-field search

```ts
import { searchDDI } from 'ddi-country-data';

// Search by country name (any language)
const results1 = searchDDI('Estados', 5); // up to 5 matches containing 'Estados'

// Search by continent
const americanCountries = searchDDI('América');

// Search by DDI
const ddiResults = searchDDI('1', 3); // up to 3 countries with DDI 1

// Mixed search (any field)
const globalResults = searchDDI('uni', 10); // searches across all fields
```

### Accessing raw dataset

```ts
import { ddiData } from 'ddi-country-data';
console.log(ddiData[0]); // First entry in dataset
```

## 🧩 API

### `getCountryByDDI(ddi: string | number): CountryInfo | null`

Returns a `CountryInfo` object for the given DDI or `null` if not found.

### `searchDDI(query: string | number, limit: number = 10): CountryInfo[]`

Returns an array of `CountryInfo` objects matching the query in:

- DDI code
- Country name (Portuguese or English)
- Continent (Portuguese or English)

The `limit` parameter controls the maximum number of results (default: 10).

### `ddiData: CountryInfo[]`

Full dataset for direct access or custom processing.

## 🔧 Interface `CountryInfo`

```ts
export interface CountryInfo {
  ddi: string; // DDI code (e.g. '55')
  countryPt: string; // Country name in Portuguese
  countryEn: string; // Country name in English
  img: string; // Flag image URL
  continentPt: string; // Continent in Portuguese
  continentEn: string; // Continent in English
  mask: string; // Phone number format mask
}
```

## 🔍 Search Behavior

- **Multi-language**: matches in both Portuguese and English fields.
- **Partial matches**: returns entries containing the search term.
- **Case-insensitive**: ignores letter casing.
- **Automatic '+' handling**: searches for DDI treat '+' prefix optionally.
- **Limit control**: returns up to the specified number of results.

## 🗺️ Roadmap

- Support for ISO 3166-1 country codes
- Phone number formatting utilities
- Improved search relevance scoring
- Accent-insensitive search
- Community contributions for additional masks or regional adjustments

## 🛠️ Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add feature X'`
4. Push to remote: `git push origin feature/your-feature`
5. Open a Pull Request describing changes and rationale.

Feel free to open issues for bugs, suggestions, or improvements.

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for details.

## 👤 Author

Created by Amom Augusto
