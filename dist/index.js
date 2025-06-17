import { ddiData } from './data.js';
const ddiMap = new Map(ddiData.map((c) => [c.ddi, c]));
export function getCountryByDDI(ddi) {
    const key = String(ddi).replace(/^\+/, '').replace(/^0+/, '');
    return ddiMap.get(key) || null;
}
export function searchDDI(query, limit = 10) {
    const searchTerm = String(query).toLowerCase().trim();
    if (!searchTerm)
        return [];
    return ddiData
        .filter((country) => {
        if (country.ddi.includes(searchTerm.replace(/^\+/, '')))
            return true;
        if (country.countryPt.toLowerCase().includes(searchTerm) ||
            country.countryEn.toLowerCase().includes(searchTerm))
            return true;
        if (country.continentPt.toLowerCase().includes(searchTerm) ||
            country.continentEn.toLowerCase().includes(searchTerm))
            return true;
        return false;
    })
        .slice(0, limit);
}
export { ddiData };
