// GENERATED FILE — do not edit by hand.
// Rebuilt hourly by scripts/build-live-charts.mjs from kworb's artist page.
//
// PLATFORM chart data: where each release is sitting RIGHT NOW on Spotify,
// Apple Music, iTunes, Deezer, Shazam and YouTube country charts. This is not
// official-chart data — app/data/charts.ts holds the official national peaks
// that feed the site's headline totals, and the two are kept apart on purpose.

export interface LiveEntry {
  country: string; // ISO alpha-2
  name: string;
  position: number;
  // Movement against the chart's previous edition: 0 = no change, null = the
  // source flagged a new/re-entry, absent = the source reports no movement for
  // this platform at all (YouTube). Absent and null are different facts.
  movement?: number | null;
  /** Why there is no movement: the source flagged a new entry or a re-entry. */
  status?: "new" | "re";
}

export interface LivePlatform {
  platform: string;
  numberOnes: number;
  entries: LiveEntry[];
}

export interface LiveRelease {
  title: string;
  kind: "song" | "album";
  platforms: LivePlatform[];
}

/** When this snapshot was taken (ISO date). */
export const liveChartsUpdated = "2026-09-19";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 23,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 1,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 1,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": 1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 2,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 3,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 3,
            "movement": 0
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 3,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": 4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 4,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": -3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 6,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 6,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 6,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 6,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 6,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 7,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 8,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 2
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 10,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 10,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 11,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 12,
            "movement": 1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 14,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 15,
            "movement": -5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 18,
            "movement": -4
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 19,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 25,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 55,
            "movement": -2
          },
          {
            "country": "IN",
            "name": "India",
            "position": 91,
            "movement": -23
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 98,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 4,
        "entries": [
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 4,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 11,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 11,
            "movement": 5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 13,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 14,
            "movement": 6
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 18,
            "movement": 7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 19,
            "movement": 27
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 19,
            "movement": 21
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 19,
            "movement": -18
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 19,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 20,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 20,
            "movement": 2
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 23,
            "movement": -9
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 25,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 26,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 28,
            "movement": 14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 29,
            "movement": 22
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 29,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 31,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 33,
            "movement": 29
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 38,
            "movement": 21
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 41,
            "movement": 4
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 42,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 42,
            "movement": 21
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 51,
            "movement": -17
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 51,
            "movement": -11
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 53,
            "movement": 13
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 61,
            "movement": -27
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 62,
            "movement": 3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 72,
            "movement": 14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 72,
            "movement": -10
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 77,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
            "movement": -46
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 79,
            "movement": 16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 93,
            "movement": -20
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 94,
            "movement": 28
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 103,
            "movement": 20
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 106,
            "movement": 24
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 107,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 111,
            "movement": 45
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 168,
            "movement": 12
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 7,
            "movement": -5
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 8,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 10,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 11,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": 1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 15,
            "movement": -8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 17,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 23,
            "movement": -15
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 25,
            "movement": -9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 25,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 28,
            "movement": 32
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": -10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 38,
            "movement": -20
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 39,
            "movement": -15
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 40,
            "movement": 8
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 42,
            "movement": 9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 61,
            "movement": -14
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 62,
            "movement": -48
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 65,
            "movement": -11
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 68,
            "movement": -56
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 73,
            "movement": 13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 79,
            "movement": 18
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 99,
            "movement": -53
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 2,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 14,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 29,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 31,
            "movement": -8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 31,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 35,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 37,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 41,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 42,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 43,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 44,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -33
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 55,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 62,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 66,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 78,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 78,
            "movement": 4
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 88,
            "movement": -14
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 99,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 105,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 117,
            "movement": 6
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 130,
            "movement": -15
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 184,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 184,
            "movement": -8
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 185,
            "movement": -22
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 188,
            "movement": 4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 9,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": 4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 18,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 21,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 23,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 23,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 27,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 28,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 29,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 30,
            "movement": 2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 32,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 38,
            "movement": 7
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 41,
            "movement": -7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 41,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 41,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 42,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 43,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 50,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 56,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 57,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 62,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 69,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 81,
            "movement": -16
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 81,
            "movement": -10
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 100,
            "movement": 9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 101,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 129,
            "movement": -21
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 142,
            "movement": 4
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 159,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": -23
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 24
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 31
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 13
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 8,
            "movement": 19
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": 5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 20,
            "movement": -9
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 23,
            "movement": -16
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 24,
            "movement": 3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 30,
            "movement": -24
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": 53
          },
          {
            "country": "US",
            "name": "United States",
            "position": 50,
            "movement": 5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 54,
            "movement": 45
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 56,
            "movement": -35
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 58,
            "movement": -35
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 89,
            "movement": -77
          },
          {
            "country": "IN",
            "name": "India",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 150,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -11
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 52,
            "movement": -17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 54,
            "movement": 43
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 55,
            "movement": 119
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 61,
            "movement": 11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 64,
            "movement": -33
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 79,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 117,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": -74
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 123,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 48
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 158,
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 188,
            "movement": -24
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 190,
            "movement": -84
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": 29
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 96,
            "movement": 59
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": -20
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 128,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": -26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": -69
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": 19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 156,
            "movement": -62
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 178,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 185,
            "movement": 7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 68,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 96,
            "movement": 15
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 104,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 118,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": -74
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 166,
            "movement": 27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 170,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 199,
            "movement": -50
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -37
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 24,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 108,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 48,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 105
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": -9
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 156,
            "movement": -17
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": 15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 165,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": -19
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 195,
            "movement": -80
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 159,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 36,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 86,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": -81
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 138,
            "movement": 46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 170,
            "movement": -56
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 54,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -15
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -16
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 72
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 74,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 68
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 118,
            "movement": -56
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": 51
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": -70
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": 45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": 15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 156,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": 16
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 174,
            "movement": -74
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 70,
            "movement": 68
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": 18
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 174,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 32,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 77,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 80,
            "movement": 35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 184,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": -41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": -132
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 64
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 130,
            "movement": 19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 154,
            "movement": 38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Last Last",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 21,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 45,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 17,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 6,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 104,
            "movement": 33
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 79
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -24
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": 23
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 56,
            "movement": 34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 72,
            "movement": 25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 48,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": 11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 70,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 112,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 67,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Different Size",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 22,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Laho II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 81,
            "movement": 93
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 37,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 60,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Teary Eyes",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kilometre",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 70,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Jagele",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 146,
            "movement": -111
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -94
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CO",
            "name": "Colombia",
            "position": 128,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dangote",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sweet Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Pree Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On a Spaceship",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album"
  }
];

/** Totals, derived so they can never disagree with the data above. */
export const livePlacementCount = liveCharts.reduce(
  (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
  0
);
export const liveNumberOnes = liveCharts.reduce(
  (n, r) => n + r.platforms.reduce((m, p) => m + p.numberOnes, 0),
  0
);
export const liveCountryCount = new Set(
  liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
).size;

/** Placements per platform, biggest first — powers the summary row. */
export const livePlatformTotals: { platform: string; placements: number; numberOnes: number }[] =
  livePlatforms
    .map((platform) => {
      const blocks = liveCharts.flatMap((r) => r.platforms.filter((p) => p.platform === platform));
      return {
        platform,
        placements: blocks.reduce((n, p) => n + p.entries.length, 0),
        numberOnes: blocks.reduce((n, p) => n + p.numberOnes, 0),
      };
    })
    .sort((a, b) => b.placements - a.placements);
