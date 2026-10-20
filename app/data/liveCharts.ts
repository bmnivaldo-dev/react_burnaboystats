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
export const liveChartsUpdated = "2026-10-20";

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
            "position": 4,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 14,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": -7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 18,
            "movement": -7
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 19,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 21,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 22,
            "movement": -9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 23,
            "movement": -9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 27,
            "movement": 65
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 27,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 30,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 33,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 35,
            "movement": -8
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 36,
            "movement": 6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 40,
            "movement": -11
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 40,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 42,
            "movement": -21
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 43,
            "movement": -8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 45,
            "movement": -10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 47,
            "movement": -19
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 51,
            "movement": -9
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 52,
            "movement": 95
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 58,
            "movement": 26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 64,
            "movement": -6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 66,
            "movement": -28
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 67,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 69,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 69,
            "movement": -7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 74,
            "movement": -18
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 84,
            "movement": 20
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 93,
            "movement": -40
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 108,
            "movement": -20
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 111,
            "movement": 8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 114,
            "movement": -30
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 120,
            "movement": -38
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 123,
            "movement": -33
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 129,
            "movement": -10
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 132,
            "movement": -17
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 139,
            "movement": -21
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 150,
            "movement": -3
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 165,
            "movement": -13
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 166,
            "movement": -55
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 199,
            "movement": -81
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
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 7,
            "movement": -3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 8,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": -4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 9,
            "movement": 18
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 0
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
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": 3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 14,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": 2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 18,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 18,
            "movement": 63
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 19,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 22,
            "movement": 11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 22,
            "movement": -6
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 25,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 25,
            "movement": -14
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 26,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 37,
            "movement": 36
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 37,
            "movement": 13
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 41,
            "movement": 17
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 46,
            "movement": -25
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 47,
            "movement": -32
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 50,
            "movement": -24
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 75,
            "movement": -43
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 90,
            "movement": -7
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 98,
            "movement": -1
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 18,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 25,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 29,
            "movement": 2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 34,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 35,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 36,
            "movement": -10
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 40,
            "movement": -5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 44,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 44,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 55,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 68,
            "movement": -4
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 68,
            "movement": -10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 74,
            "movement": -12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 79,
            "movement": -9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 88,
            "movement": -14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 89,
            "movement": -30
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 91,
            "movement": -13
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 93,
            "movement": -14
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 100,
            "movement": -35
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 109,
            "movement": 12
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 109,
            "movement": -13
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 113,
            "movement": -17
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 173,
            "movement": -18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 175,
            "movement": -43
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 199,
            "movement": -46
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
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 30,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 30,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 37,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 39,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 42,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 46,
            "movement": 3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 48,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 52,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 56,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 57,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 61,
            "movement": 12
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 64,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 66,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 71,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 74,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 81,
            "movement": 6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 83,
            "movement": -4
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
            "position": 98,
            "movement": -8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 101,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 106,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 117,
            "movement": -14
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 124,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 134,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 134,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 143,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 191,
            "movement": -13
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": 24
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 10,
            "movement": 66
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": -13
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 29,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 29,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 38,
            "movement": -13
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 45,
            "movement": 44
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 52,
            "movement": -13
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 62,
            "movement": -34
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 63,
            "movement": -13
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 138,
            "movement": -127
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 161,
            "movement": 12
          },
          {
            "country": "US",
            "name": "United States",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 169,
            "movement": -116
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HK",
            "name": "Hong Kong",
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 117
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 47,
            "movement": 104
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -52
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 85,
            "movement": -18
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 93,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 103,
            "movement": -25
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 103,
            "movement": -12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 106,
            "movement": -74
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": 7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": 43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": -77
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -22
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 184,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 190,
            "movement": -84
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 35
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 68,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": 13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 182,
            "movement": -136
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
            "movement": -86
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 199,
            "movement": -17
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
            "position": 40,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -1
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
            "position": 21,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 84,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": 44
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": 50
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 142,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 184,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 199,
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
            "position": 12,
            "movement": 8
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 56,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -9
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
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
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
            "position": 188,
            "movement": -14
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
            "position": 185,
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
            "country": "MR",
            "name": "Mauritania",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 59,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 92
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 82,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 167,
            "movement": 22
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 169,
            "movement": 28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 185,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 196,
            "movement": -13
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 200,
            "movement": -30
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
            "position": 175,
            "movement": -13
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 50
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 33,
            "movement": 80
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -12
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": 45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": -44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
            "movement": -4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 175,
            "movement": -119
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
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": 32
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 133,
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
            "country": "EG",
            "name": "Egypt",
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": 58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": -32
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 197,
            "movement": -12
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
            "position": 11,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 64,
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
            "position": 166,
            "movement": -2
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
            "position": 39,
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
            "position": 27,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 50
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 66
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
            "movement": -23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 188,
            "movement": -78
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -2
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 26
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 137,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": -129
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 20
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 30,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 41,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": -6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 158,
            "movement": -15
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 166,
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
            "position": 158,
            "movement": null,
            "status": "new"
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
            "position": 16,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 196,
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
            "country": "EG",
            "name": "Egypt",
            "position": 103,
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -56
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 180,
            "movement": -86
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
            "movement": -56
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
            "country": "FJ",
            "name": "Fiji",
            "position": 117,
            "movement": -34
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 123,
            "movement": 51
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 164,
            "movement": 18
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 182,
            "movement": -59
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 185,
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": -50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -9
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
            "position": 49,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 170,
            "movement": -32
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 21,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 127,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": -34
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
            "country": "BT",
            "name": "Bhutan",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": 18
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
            "position": 68,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -18
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 80,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 81,
            "movement": -47
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 77,
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
    "title": "Question",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -12
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
            "position": 74,
            "movement": 3
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 77,
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
            "position": 142,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": -11
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
            "position": 188,
            "movement": 4
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 17,
            "movement": null,
            "status": "new"
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
            "country": "TJ",
            "name": "Tajikistan",
            "position": 4,
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
            "movement": 15
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
            "position": 40,
            "movement": -1
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
            "position": 18,
            "movement": 36
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
            "position": 32,
            "movement": -12
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 115,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Therapy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 65,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 139,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
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
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 115,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 76,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Birthday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Only You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 85,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 105,
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
            "position": 69,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Jerusalema",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
    "title": "Play Play",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 107,
            "movement": null,
            "status": "new"
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
            "position": 148,
            "movement": -1
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
            "position": 175,
            "movement": -3
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
