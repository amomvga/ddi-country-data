import { ddiData } from './data.js';
const ddiMap = new Map(ddiData.map((c) => [c.ddi, c]));
export function getCountryByDDI(ddi) {
    const key = String(ddi).replace(/^\+/, '').replace(/^0+/, '');
    return ddiMap.get(key) || null;
}
export { ddiData };
