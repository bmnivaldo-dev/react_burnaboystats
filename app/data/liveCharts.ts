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
export const liveChartsUpdated = "2026-10-15";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 15,
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
            "country": "DK",
            "name": "Denmark",
            "position": 1,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "country": "LU",
            "name": "Luxembourg",
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
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 3,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 4,
            "movement": 4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": 7
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 8,
            "movement": -2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 9,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": -3
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 12,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 12,
            "movement": 1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 13,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 14,
            "movement": -2
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 15,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 15,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": -3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 17,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": 0
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": null,
            "status": "re"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 24,
            "movement": 6
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 38,
            "movement": -8
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 67,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 10,
            "movement": 19
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 19,
            "movement": 20
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 19,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 20,
            "movement": 11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 25,
            "movement": 3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 25,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 26,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 28,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 28,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 36,
            "movement": -5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 38,
            "movement": 7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 42,
            "movement": -9
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 43,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 45,
            "movement": 16
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 53,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 55,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 56,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 60,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 70,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 71,
            "movement": -9
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 71,
            "movement": -13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 75,
            "movement": -15
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 76,
            "movement": -35
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 76,
            "movement": -14
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 81,
            "movement": 42
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 86,
            "movement": -23
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 88,
            "movement": 93
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 104,
            "movement": -42
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 110,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 126,
            "movement": 0
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 134,
            "movement": -108
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 142,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 158,
            "movement": 14
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 161,
            "movement": 29
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 165,
            "movement": -12
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 177,
            "movement": -149
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 189,
            "movement": -66
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 193,
            "movement": -30
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 1,
            "movement": 44
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 3,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": 4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 9,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 14,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 19,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 22,
            "movement": 19
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 23,
            "movement": 9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 23,
            "movement": -10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 28,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 29,
            "movement": -9
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 30,
            "movement": -19
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 32,
            "movement": -20
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 33,
            "movement": 34
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": -17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 34,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 37,
            "movement": -16
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 38,
            "movement": 11
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 55,
            "movement": -31
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 57,
            "movement": -15
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 80,
            "movement": -23
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 88,
            "movement": -52
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 95,
            "movement": -17
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 97,
            "movement": -77
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 100,
            "movement": -55
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 12,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 28,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 28,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 30,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 36,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 50,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 56,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 60,
            "movement": 9
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 61,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 70,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 71,
            "movement": -4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 73,
            "movement": 6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 76,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 79,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 89,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 92,
            "movement": 5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 107,
            "movement": 5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 120,
            "movement": 15
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 122,
            "movement": -14
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 133,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 174,
            "movement": -34
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 194,
            "movement": -14
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 22,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 26,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 27,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 29,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 39,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 39,
            "movement": 7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 44,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 50,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 52,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 55,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 57,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 58,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 59,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 62,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 63,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 70,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 75,
            "movement": 10
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 81,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 89,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 90,
            "movement": -7
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 95,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 96,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 100,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 127,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 132,
            "movement": 27
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 140,
            "movement": 19
          },
          {
            "country": "US",
            "name": "United States",
            "position": 171,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 183,
            "movement": 9
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -3
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 19,
            "movement": -13
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 23,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 30,
            "movement": -15
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 35,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 36,
            "movement": -31
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 66,
            "movement": -56
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 75,
            "movement": -53
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 83,
            "movement": -17
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 90,
            "movement": -11
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 186,
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
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 47,
            "movement": 57
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 60,
            "movement": 91
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 69,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": -17
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 59
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": 8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 118,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -29
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 139,
            "movement": -62
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 150,
            "movement": -110
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
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
            "position": 60,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 76
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": 35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": 6
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 131,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 132,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 182,
            "movement": -24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 197,
            "movement": -60
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
            "position": 46,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 5
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
            "country": "SR",
            "name": "Suriname",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 124,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": -53
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 177,
            "movement": -49
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 188,
            "movement": -109
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 5
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
            "position": 185,
            "movement": -7
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
            "position": 199,
            "movement": -10
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
            "position": 35,
            "movement": null,
            "status": "new"
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
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": 38
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 92,
            "movement": -28
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 112,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": 29
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
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
            "position": 154,
            "movement": -8
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
            "position": 62,
            "movement": null,
            "status": "new"
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 16
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 81
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 72
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": -38
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 114,
            "movement": -22
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 125,
            "movement": -55
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -61
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
            "movement": -110
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": 79
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": 47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": -8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 147,
            "movement": 48
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": -25
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 27,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 141
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 75
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 54
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": -33
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": -147
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 197,
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
            "position": 25,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": null,
            "status": "new"
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
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": -64
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 164,
            "movement": null,
            "status": "new"
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
            "position": 67,
            "movement": 19
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 98,
            "movement": -33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": -3
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 114,
            "movement": -34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 119,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": 71
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 143,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": 7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 158,
            "movement": -54
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -64
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 197,
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
            "position": 146,
            "movement": -2
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
            "country": "DM",
            "name": "Dominica",
            "position": 42,
            "movement": -35
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 152,
            "movement": -5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 160,
            "movement": -48
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 181,
            "movement": -91
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 192,
            "movement": -109
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 68,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -92
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
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": -27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 112,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -13
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
            "position": 19,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Last Last",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 50,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 76,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 57,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 63,
            "movement": -14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 74,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 108,
            "movement": 49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
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
            "position": 53,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": null,
            "status": "new"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": -142
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 60,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": -3
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
            "position": 82,
            "movement": null,
            "status": "new"
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
            "position": 125,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": 21
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 5
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
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
            "position": 170,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 70,
            "movement": -59
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
            "position": 93,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": 4
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": -40
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Spiritual",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cheat On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 77,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Normal",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 27
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
            "position": 37,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": null,
            "status": "new"
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
            "position": 69,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Question",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 22
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
            "position": 127,
            "movement": -22
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
            "position": 64,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Alone",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -98
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 177,
            "movement": -22
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
            "position": 158,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -116
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
            "position": 144,
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
            "position": 174,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Higher",
    "kind": "song",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ]
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
