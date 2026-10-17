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
export const liveChartsUpdated = "2026-10-17";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 13,
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
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 1
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
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
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
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 2
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
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
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
            "country": "PA",
            "name": "Panama",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": 0
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
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": 0
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "EC",
            "name": "Ecuador",
            "position": 10,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 2
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
            "country": "PE",
            "name": "Peru",
            "position": 11,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 6
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
            "country": "ZA",
            "name": "South Africa",
            "position": 12,
            "movement": -4
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 13,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": -2
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
            "country": "SV",
            "name": "El Salvador",
            "position": 14,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 14,
            "movement": -5
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 15,
            "movement": -3
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
            "country": "BO",
            "name": "Bolivia",
            "position": 17,
            "movement": -5
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 17,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 17,
            "movement": -3
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 18,
            "movement": -4
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
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -2
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 29,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 37,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 68,
            "movement": -1
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
            "position": 5,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 7,
            "movement": 12
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 10,
            "movement": 10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 16,
            "movement": 9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 25,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 30,
            "movement": 12
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 31,
            "movement": 45
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 32,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 32,
            "movement": -11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 35,
            "movement": -7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 40,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": -14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 45,
            "movement": -7
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 47,
            "movement": -37
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 54,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 57,
            "movement": -14
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 57,
            "movement": 14
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 62,
            "movement": 14
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 63,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 65,
            "movement": -20
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 68,
            "movement": 7
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 76,
            "movement": 10
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 76,
            "movement": -6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 86,
            "movement": -21
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 92,
            "movement": 101
          },
          {
            "country": "FR",
            "name": "France",
            "position": 94,
            "movement": -14
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 97,
            "movement": -37
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 106,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 109,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 119,
            "movement": 70
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 132,
            "movement": -44
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 132,
            "movement": -6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 147,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 147,
            "movement": -31
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 154,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 162,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 165,
            "movement": -84
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 179,
            "movement": -45
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MK",
            "name": "North Macedonia",
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
            "country": "TR",
            "name": "Turkey",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 24
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 10,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 11,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 11,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 12,
            "movement": 14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 12,
            "movement": 8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": -8
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 16,
            "movement": 7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 16,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 18,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 22,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 25,
            "movement": -13
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 35,
            "movement": -15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 36,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": -18
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 38,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 42,
            "movement": -17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 43,
            "movement": -25
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 44,
            "movement": 25
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 48,
            "movement": -31
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 56,
            "movement": -33
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 60,
            "movement": -26
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 65,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 67,
            "movement": -55
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 68,
            "movement": 29
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 72,
            "movement": -39
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 79,
            "movement": -15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 81,
            "movement": -34
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 92,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": -4
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 10,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 0
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 27,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 31,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 34,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 39,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 44,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 49,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 53,
            "movement": 3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 62,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 68,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 69,
            "movement": -9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 75,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 75,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 77,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 83,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 85,
            "movement": 4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 103,
            "movement": -11
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 103,
            "movement": 4
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 111,
            "movement": 11
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 128,
            "movement": 5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 137,
            "movement": -17
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 191,
            "movement": -17
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 193,
            "movement": 1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 16,
            "movement": 106
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 18,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 24,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 25,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 35,
            "movement": -6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 41,
            "movement": -35
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 42,
            "movement": -2
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 44,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 65,
            "movement": -53
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 83,
            "movement": -37
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 99,
            "movement": -55
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 99,
            "movement": -46
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 169,
            "movement": -42
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DK",
            "name": "Denmark",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": 10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 29,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 33,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 33,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 40,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 42,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 45,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 46,
            "movement": -3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 46,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 52,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 57,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 57,
            "movement": 5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 60,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 61,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 65,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 67,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 68,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 79,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 86,
            "movement": 9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 90,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 91,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 93,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 97,
            "movement": -9
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 104,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 123,
            "movement": 13
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 132,
            "movement": -8
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 134,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 144,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 178,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 32,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 65,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -48
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": -20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 119,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -36
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 185,
            "movement": -54
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 189,
            "movement": -7
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
            "position": 48,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
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
            "position": 33,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": 86
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": 78
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 131,
            "movement": 12
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 133,
            "movement": 55
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 134,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "position": 25,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
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
            "position": 155,
            "movement": 30
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 56,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 69
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 73,
            "movement": 66
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": -60
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 128,
            "movement": -26
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 134,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 171,
            "movement": -102
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 180,
            "movement": -47
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 180,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 190,
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 71,
            "movement": 39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 21
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": 16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 198,
            "movement": -34
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
            "position": 58,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 65,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": 24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": -40
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 143,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": -13
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 179,
            "movement": -87
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 195,
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
            "position": 24,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
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
            "position": 140,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 101
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 81,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": -68
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 179,
            "movement": -32
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 13,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": -28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": -41
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": -30
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 200,
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
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": 118
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": 59
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -7
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 67,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 83,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 64
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 128,
            "movement": 30
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 154,
            "movement": -35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 167,
            "movement": -24
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 199,
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
            "position": 141,
            "movement": 5
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
            "position": 27,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 55
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 10
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
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 77
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -42
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": -40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 173,
            "movement": -112
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": 1
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
            "position": 41,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 50,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 190,
            "movement": null,
            "status": "new"
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
            "position": 20,
            "movement": 22
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 97,
            "movement": 55
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 167,
            "movement": -7
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
            "position": 16,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": -9
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
            "position": 61,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 73,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 107,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": 20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 146,
            "movement": -38
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
            "position": 60,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": 50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 55
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 48,
            "movement": null,
            "status": "new"
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
            "country": "AI",
            "name": "Anguilla",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": -4
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
            "position": 31,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Question",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
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
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 26
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
            "position": 145,
            "movement": -20
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -24
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
            "country": "TD",
            "name": "Chad",
            "position": 109,
            "movement": -39
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 127,
            "movement": null,
            "status": "new"
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Wonderful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 196,
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
            "position": 84,
            "movement": -37
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
            "position": 68,
            "movement": -1
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
            "position": 183,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Empty Chairs",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 16,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": null,
            "status": "new"
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 11,
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
            "position": 90,
            "movement": 3
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
            "position": 43,
            "movement": 11
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
            "position": 68,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dey Play",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Alarm Clock",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bebo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 199,
            "movement": null,
            "status": "new"
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
            "movement": 0
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
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
            "position": 155,
            "movement": 3
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
            "position": 146,
            "movement": 6
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
            "position": 172,
            "movement": 11
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
