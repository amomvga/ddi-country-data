export interface CountryInfo {
  /** International dialing code without the plus sign (e.g., "55" for Brazil) */
  ddi: string;
  /** Country name in Portuguese */
  countryPt: string;
  /** Country name in English */
  countryEn: string;
  /** URL to the country's flag image */
  img: string;
  /** Continent name in Portuguese */
  continentPt: string;
  /** Continent name in English */
  continentEn: string;
  /** International phone number mask (e.g., "+55 (##) ####-####") */
  mask: string;
}
