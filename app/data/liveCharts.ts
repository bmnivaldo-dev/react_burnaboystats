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
export const liveChartsUpdated = "2026-08-31";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 38,
        "entries": [
          {
            "country": "AR",
            "name": "Argentina",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 1,
            "movement": 0
          },
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
            "country": "BZ",
            "name": "Belize",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
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
            "country": "EC",
            "name": "Ecuador",
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
            "country": "GR",
            "name": "Greece",
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
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
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
            "country": "NI",
            "name": "Nicaragua",
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
            "country": "OM",
            "name": "Oman",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
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
            "country": "RE",
            "name": "Réunion",
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
            "country": "SI",
            "name": "Slovenia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
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
            "country": "US",
            "name": "United States",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "MG",
            "name": "Madagascar",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 3,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 3,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 4,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": 1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 4,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 5,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 7,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": -4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 8,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": 2
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 9,
            "movement": -4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 10,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 13,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 16,
            "movement": -4
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": 0
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 18,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 20,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 50,
            "movement": -7
          },
          {
            "country": "IN",
            "name": "India",
            "position": 56,
            "movement": 8
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 85,
            "movement": -14
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 9,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
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
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 1,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
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
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 3,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 6,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 8,
            "movement": -6
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 8,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 10,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 14,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 14,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 18,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 20,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 21,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 21,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 22,
            "movement": -7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 22,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 24,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 25,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 27,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 30,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 33,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 35,
            "movement": 23
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 35,
            "movement": -2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 40,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 40,
            "movement": -6
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 40,
            "movement": -15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": -4
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 50,
            "movement": -16
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 51,
            "movement": 1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 54,
            "movement": -7
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 59,
            "movement": -35
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 75,
            "movement": 9
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 76,
            "movement": 1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 77,
            "movement": -52
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 80,
            "movement": -16
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 81,
            "movement": -28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": 66
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 92,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": -28
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 99,
            "movement": 5
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 100,
            "movement": 9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 119,
            "movement": 71
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 120,
            "movement": -16
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 120,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": -24
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 136,
            "movement": -4
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 139,
            "movement": -61
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 155,
            "movement": 31
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 155,
            "movement": -24
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": -53
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 4,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 1,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 2,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 3,
            "movement": 1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 3,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 3,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 5,
            "movement": 8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 7,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 7,
            "movement": 7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 7,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 8,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 9,
            "movement": 34
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 9,
            "movement": 7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 9,
            "movement": 1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 10,
            "movement": 6
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 12,
            "movement": -9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 14,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": 5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 18,
            "movement": -7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 18,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 19,
            "movement": -13
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 21,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": -14
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 27,
            "movement": -13
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 29,
            "movement": 42
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 38,
            "movement": -28
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 48,
            "movement": 34
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 49,
            "movement": -8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 49,
            "movement": 18
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 52,
            "movement": 3
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 66,
            "movement": -25
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 81,
            "movement": -13
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 4,
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
            "country": "DE",
            "name": "Germany",
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
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 5,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 9,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": 6
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 13,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 14,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 14,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 15,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 18,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 22,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 22,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 23,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 28,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 32,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 39,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 40,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 40,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 42,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 53,
            "movement": 3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 55,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 57,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 69,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 78,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 84,
            "movement": -20
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 93,
            "movement": 8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 93,
            "movement": -6
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 115,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 123,
            "movement": -3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 142,
            "movement": 5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 157,
            "movement": -6
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 162,
            "movement": 18
          },
          {
            "country": "US",
            "name": "United States",
            "position": 165,
            "movement": -23
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 183,
            "movement": -19
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 200,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 5,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 13,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 14,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 15,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": 3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 18,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 19,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 23,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 23,
            "movement": 3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 25,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 34,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 37,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 39,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 39,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 42,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 56,
            "movement": 9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 58,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 65,
            "movement": 0
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 67,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 88,
            "movement": 3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 96,
            "movement": 14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 102,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 162,
            "movement": -9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 175,
            "movement": 9
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 175,
            "movement": -11
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 175,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": -13
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 181,
            "movement": -11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 189,
            "movement": 1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 5,
            "movement": 7
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 8,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 8,
            "movement": -7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 9,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 15,
            "movement": 78
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 18,
            "movement": -8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 19,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 22,
            "movement": -21
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 30,
            "movement": -17
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 41,
            "movement": 45
          },
          {
            "country": "US",
            "name": "United States",
            "position": 43,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 65,
            "movement": -31
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 78,
            "movement": -73
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 98,
            "movement": -11
          },
          {
            "country": "TH",
            "name": "Thailand",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 16,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 17,
            "movement": 48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 101
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -16
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -17
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 106,
            "movement": 79
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 124,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 185,
            "movement": -105
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 189,
            "movement": -57
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
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
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
            "position": 67,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -62
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 96,
            "movement": 30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 98,
            "movement": -4
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 112,
            "movement": 54
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 117,
            "movement": -70
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 125,
            "movement": -38
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 139,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": 26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 182,
            "movement": -25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 190,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 194,
            "movement": -18
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 195,
            "movement": 2
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
            "position": 54,
            "movement": 0
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
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 56,
            "movement": 68
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 83
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 90,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 127,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 133,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 155,
            "movement": -94
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 175,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 181,
            "movement": -21
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 64,
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
            "movement": 1
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
            "position": 105,
            "movement": 11
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
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 55,
            "movement": 80
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": 56
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 11
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 110,
            "movement": 87
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": 3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": -85
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 189,
            "movement": -87
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
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 58,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 93,
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
            "position": 157,
            "movement": 3
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 38,
            "movement": 50
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 63,
            "movement": 19
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 69,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 102,
            "movement": 43
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 103,
            "movement": 39
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 136,
            "movement": 16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
            "movement": 42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 172,
            "movement": -64
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": 7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 200,
            "movement": -97
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
            "movement": 7
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
            "position": 11,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 69,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 153,
            "movement": 4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 192,
            "movement": -16
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
            "country": "SR",
            "name": "Suriname",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 62
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
            "position": 39,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 115
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": 73
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -53
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": -68
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 162,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
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
            "position": 17,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 59,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 64
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 83,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": -41
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 181,
            "movement": 2
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
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": 45
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": -22
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
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -55
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 200,
            "movement": -29
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": 80
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 61
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": -14
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
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
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
            "position": 39,
            "movement": 82
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 193,
            "movement": -86
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SG",
            "name": "Singapore",
            "position": 46,
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
            "position": 42,
            "movement": -15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": -10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 89,
            "movement": 78
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": -55
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
            "country": "FJ",
            "name": "Fiji",
            "position": 68,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 134,
            "movement": -55
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 138,
            "movement": -38
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 140,
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
            "position": 30,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": -5
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
            "position": 48,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": -47
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 142,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": 40
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SK",
            "name": "Slovakia",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 25,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 73,
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
            "position": 194,
            "movement": 1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
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
            "position": 68,
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
            "position": 147,
            "movement": 8
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
            "position": 133,
            "movement": 26
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
            "position": 65,
            "movement": 25
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
            "position": 68,
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
            "position": 108,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
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
            "position": 198,
            "movement": 0
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
            "position": 20,
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
            "position": 126,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -5
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
            "position": 187,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -64
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
            "position": 80,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": 152
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
            "position": 82,
            "movement": -2
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
            "country": "CH",
            "name": "Switzerland",
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
    "title": "Fa so LaTi Do",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
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
            "position": 74,
            "movement": 92
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
            "position": 67,
            "movement": 0
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -18
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": -66
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
            "position": 152,
            "movement": -13
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
            "position": 63,
            "movement": 1
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
            "movement": 18
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
            "position": 191,
            "movement": 0
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
            "position": 114,
            "movement": -26
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
            "movement": 9
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
