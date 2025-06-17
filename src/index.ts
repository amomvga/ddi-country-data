import { ddiData } from './data.js';
import { CountryInfo } from './types.js';

const ddiMap = new Map<string, CountryInfo>(
  ddiData.map((c) => [c.ddi, c] as [string, CountryInfo])
);

export function getCountryByDDI(ddi: string | number): CountryInfo | null {
  const key = String(ddi).replace(/^\+/, '').replace(/^0+/, '');

  return ddiMap.get(key) || null;
}

export function searchDDI(
  query: string | number,
  limit: number = 10
): CountryInfo[] {
  const searchTerm = String(query).toLowerCase().trim();

  if (!searchTerm) return [];

  return ddiData
    .filter((country) => {
      if (country.ddi.includes(searchTerm.replace(/^\+/, ''))) return true;

      if (
        country.countryPt.toLowerCase().includes(searchTerm) ||
        country.countryEn.toLowerCase().includes(searchTerm)
      )
        return true;

      if (
        country.continentPt.toLowerCase().includes(searchTerm) ||
        country.continentEn.toLowerCase().includes(searchTerm)
      )
        return true;

      return false;
    })
    .slice(0, limit);
}

export { CountryInfo, ddiData };
