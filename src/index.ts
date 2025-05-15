import { ddiData } from './data.js';
import { CountryInfo } from './types.js';

const ddiMap = new Map<string, CountryInfo>(
  ddiData.map((c) => [c.ddi, c] as [string, CountryInfo])
);

export function getCountryByDDI(ddi: string | number): CountryInfo | null {
  const key = String(ddi).replace(/^\+/, '').replace(/^0+/, '');

  return ddiMap.get(key) || null;
}

export { CountryInfo, ddiData };
