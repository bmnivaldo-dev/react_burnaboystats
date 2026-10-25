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
export const liveChartsUpdated = "2026-10-25";

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
            "country": "DE",
            "name": "Germany",
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 1,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
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
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
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
            "country": "IT",
            "name": "Italy",
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
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 5,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -2
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
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
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
            "country": "PY",
            "name": "Paraguay",
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
            "country": "AR",
            "name": "Argentina",
            "position": 10,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
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
            "country": "BR",
            "name": "Brazil",
            "position": 11,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 11,
            "movement": -2
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
            "country": "CO",
            "name": "Colombia",
            "position": 12,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -2
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
            "country": "CL",
            "name": "Chile",
            "position": 13,
            "movement": -4
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 13,
            "movement": -3
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 13,
            "movement": 2
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 15,
            "movement": -4
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
            "country": "UY",
            "name": "Uruguay",
            "position": 15,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 16,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": -5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": -4
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 18,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 18,
            "movement": -4
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 18,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
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
            "country": "HN",
            "name": "Honduras",
            "position": 19,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 20,
            "movement": -2
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 22,
            "movement": -8
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 23,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 38,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 72,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
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
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 9,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 11,
            "movement": 4
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 12,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 19,
            "movement": 13
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 20,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 22,
            "movement": 9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 22,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 31,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 32,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": 9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 42,
            "movement": 9
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 43,
            "movement": -4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 48,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 51,
            "movement": -25
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 52,
            "movement": -11
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 53,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 57,
            "movement": 9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 57,
            "movement": 2
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 66,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 71,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 76,
            "movement": 37
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 84,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 86,
            "movement": 6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 93,
            "movement": -13
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 100,
            "movement": 12
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 101,
            "movement": 5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 107,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 112,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 113,
            "movement": -13
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 114,
            "movement": -86
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 116,
            "movement": 36
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 126,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 128,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 145,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 172,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 174,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 191,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 192,
            "movement": -71
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": 6
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 7,
            "movement": 13
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": 2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 12,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 12,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": 6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 13,
            "movement": 6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 21,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 9
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 23,
            "movement": -6
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 23,
            "movement": 56
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 24,
            "movement": 10
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 26,
            "movement": 60
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": 9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 28,
            "movement": 18
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 32,
            "movement": -15
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": -19
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 36,
            "movement": 58
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 43,
            "movement": -8
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 44,
            "movement": -41
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 80,
            "movement": -59
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 86,
            "movement": 9
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 96,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": 12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
            "movement": 15
          },
          {
            "country": "FR",
            "name": "France",
            "position": 24,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 29,
            "movement": 9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 32,
            "movement": 15
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 41,
            "movement": 14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 42,
            "movement": 11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 44,
            "movement": 14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 45,
            "movement": 43
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 54,
            "movement": 35
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 58,
            "movement": 38
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 61,
            "movement": 35
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 62,
            "movement": 38
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 63,
            "movement": -19
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 63,
            "movement": 29
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 67,
            "movement": 39
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 70,
            "movement": 38
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 71,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 96,
            "movement": -13
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 105,
            "movement": 56
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 116,
            "movement": 25
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 165,
            "movement": 23
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 173,
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
            "country": "RO",
            "name": "Romania",
            "position": 23,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 26,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 28,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 36,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 37,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 40,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 50,
            "movement": 7
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 50,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 61,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 61,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 65,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 69,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 70,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 74,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 75,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 78,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 78,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 79,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 95,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 97,
            "movement": -8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 101,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 109,
            "movement": -5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 110,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 127,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 134,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 137,
            "movement": -28
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 148,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 154,
            "movement": -29
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 155,
            "movement": 0
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
            "movement": 79
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 50
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 4,
            "movement": 43
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 7,
            "movement": 17
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 16,
            "movement": -12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 18,
            "movement": -17
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 18,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 23,
            "movement": 33
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 26,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 29,
            "movement": 9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 38,
            "movement": 25
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 42,
            "movement": 58
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 46,
            "movement": 102
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 99,
            "movement": -98
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 127,
            "movement": -116
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 133,
            "movement": -79
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 187,
            "movement": -111
          },
          {
            "country": "US",
            "name": "United States",
            "position": 195,
            "movement": -18
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
            "country": "SR",
            "name": "Suriname",
            "position": 32,
            "movement": 80
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 72,
            "movement": 13
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 100,
            "movement": -22
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 108,
            "movement": 63
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 115,
            "movement": -54
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 120,
            "movement": 18
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": 51
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": -30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 178,
            "movement": -86
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 189,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 106,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 144,
            "movement": 38
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": -52
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 171,
            "movement": -77
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "country": "NA",
            "name": "Namibia",
            "position": 42,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 64,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 34,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 90,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 159,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 190,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 195,
            "movement": -35
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
            "position": 8,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
            "movement": -2
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
            "position": 148,
            "movement": -5
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
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": 56
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 130,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 138,
            "movement": -63
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
            "movement": -56
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 195,
            "movement": -1
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
            "position": 9,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 1
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": -41
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
            "position": 150,
            "movement": -108
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": 62
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 139,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 65,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 71,
            "movement": -59
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 162,
            "movement": -8
          },
          {
            "country": "BZ",
            "name": "Belize",
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
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": -5
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
            "position": 54,
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
            "position": 21,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": -47
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 133,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -57
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 146,
            "movement": -79
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": -38
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
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -16
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": 59
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": 4
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
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 65,
            "movement": 29
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 72,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 83,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 188,
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
            "position": 159,
            "movement": 1
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
            "position": 22,
            "movement": -7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 29,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 0
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
            "position": 39,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 75,
            "movement": 78
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 1
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
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 180,
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
            "position": 180,
            "movement": 1
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
            "position": 81,
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
            "position": 23,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": 36
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -50
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
            "position": 30,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 41,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 90,
            "movement": 25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": 0
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
            "position": 51,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 140,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 167,
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
            "position": 67,
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
            "country": "AI",
            "name": "Anguilla",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 78,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 95,
            "movement": -5
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
            "position": 75,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 10
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": 0
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
            "position": 65,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 29,
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
            "position": 95,
            "movement": null,
            "status": "new"
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
            "position": 87,
            "movement": 5
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
            "position": 188,
            "movement": 0
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
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 0
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": 9
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
            "position": 117,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": 54
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": null,
            "status": "new"
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
            "country": "FM",
            "name": "Micronesia",
            "position": 95,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 141,
            "movement": -28
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 34
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 183,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -15
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
            "position": 158,
            "movement": -25
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "20 10 20",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Giddem",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 45,
            "movement": null,
            "status": "new"
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
            "position": 95,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Hossana",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 3
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -21
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
            "position": 71,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "#Yawadey",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": -65
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
            "position": 96,
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
            "position": 66,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "I Told Them",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": -6
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
            "position": 176,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "All Eyes On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": -34
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
            "position": 153,
            "movement": -15
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
            "position": 172,
            "movement": -7
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
