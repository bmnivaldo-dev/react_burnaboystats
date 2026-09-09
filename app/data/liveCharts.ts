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
export const liveChartsUpdated = "2026-09-09";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 30,
        "entries": [
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
            "movement": 0
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 1,
            "movement": 1
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
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 0
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
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
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
            "country": "PA",
            "name": "Panama",
            "position": 2,
            "movement": 0
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 3,
            "movement": -1
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
            "country": "CO",
            "name": "Colombia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 3,
            "movement": 1
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 3,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 3,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
            "country": "SV",
            "name": "El Salvador",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 4,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 2
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 5,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 6,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 7,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 7,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 7,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 7,
            "movement": -4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 8,
            "movement": -4
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 9,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 9,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 9,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 11,
            "movement": -6
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 12,
            "movement": -3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 12,
            "movement": -5
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 12,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": -4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 13,
            "movement": -3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 13,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 13,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 14,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 14,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 16,
            "movement": -11
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 19,
            "movement": -6
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 19,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 20,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 23,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 24,
            "movement": -5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 53,
            "movement": -3
          },
          {
            "country": "IN",
            "name": "India",
            "position": 68,
            "movement": -12
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 4,
        "entries": [
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
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 6,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 8,
            "movement": -4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 8,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 9,
            "movement": -2
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 9,
            "movement": 3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 11,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 16,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 17,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 19,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 19,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 20,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": -2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 21,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 24,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 24,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 26,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 27,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 32,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 33,
            "movement": -1
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 37,
            "movement": 11
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 38,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 42,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 43,
            "movement": -9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 43,
            "movement": -9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 43,
            "movement": 53
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 45,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 48,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 50,
            "movement": -9
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 52,
            "movement": -3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 56,
            "movement": -22
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 57,
            "movement": 9
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 62,
            "movement": -16
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 63,
            "movement": -3
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 66,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 76,
            "movement": 16
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 80,
            "movement": 27
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 84,
            "movement": -13
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 101,
            "movement": -17
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 103,
            "movement": 28
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 106,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 127,
            "movement": 8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 131,
            "movement": -22
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 141,
            "movement": 10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 149,
            "movement": -28
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 150,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": 45
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 155,
            "movement": -10
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 165,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 168,
            "movement": 16
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 186,
            "movement": 7
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 194,
            "movement": -53
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 195,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 2,
        "entries": [
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 2,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": 2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 5,
            "movement": 7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 6,
            "movement": -1
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 7,
            "movement": 91
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 7,
            "movement": 9
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 8,
            "movement": 0
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
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 13,
            "movement": 13
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 14,
            "movement": 11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": 3
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 17,
            "movement": 21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 22,
            "movement": -10
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 23,
            "movement": 33
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 23,
            "movement": 64
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 27,
            "movement": 25
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 29,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 34,
            "movement": 14
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 37,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": -11
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 49,
            "movement": -25
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 54,
            "movement": -39
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 60,
            "movement": -15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 62,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 87,
            "movement": -28
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 97,
            "movement": -49
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 13,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 15,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 16,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 19,
            "movement": 1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 19,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 22,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 24,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 25,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 28,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 28,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 28,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 33,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 38,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 43,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 51,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 52,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 64,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 65,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 84,
            "movement": 1
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 86,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 102,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -10
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 160,
            "movement": 8
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 167,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 174,
            "movement": -17
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 196,
            "movement": -17
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
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": -1
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 11,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 19,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 21,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 22,
            "movement": -8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 23,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 26,
            "movement": -9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 27,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 29,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 29,
            "movement": 1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 34,
            "movement": -21
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 37,
            "movement": -21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": -9
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 39,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 48,
            "movement": -12
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 63,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 70,
            "movement": -36
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 71,
            "movement": -28
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 76,
            "movement": -21
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 89,
            "movement": -36
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 90,
            "movement": -27
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 93,
            "movement": -6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 120,
            "movement": -48
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 131,
            "movement": -40
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 160,
            "movement": -62
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 176,
            "movement": -74
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 182,
            "movement": -47
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": 29
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 9,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 10,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 15,
            "movement": -13
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 23,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 25,
            "movement": -19
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 26,
            "movement": -11
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 33,
            "movement": -7
          },
          {
            "country": "US",
            "name": "United States",
            "position": 33,
            "movement": -5
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 64,
            "movement": -48
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 69,
            "movement": -29
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 74,
            "movement": 13
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 86,
            "movement": -36
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 92,
            "movement": -39
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 97,
            "movement": -74
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 176,
            "movement": -104
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 182,
            "movement": -72
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 38,
            "movement": 12
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 39,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 65,
            "movement": 32
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 78,
            "movement": 38
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": 68
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": -82
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -87
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
            "movement": 22
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 185,
            "movement": 10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
            "position": 23,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 90,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 118,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 148,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 157,
            "movement": 32
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 163,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 185,
            "movement": -112
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
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
            "position": 166,
            "movement": 19
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
            "movement": 0
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
            "position": 111,
            "movement": 6
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
            "position": 33,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 59,
            "movement": 79
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 114
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 117
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 83,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": 24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": -64
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
            "movement": -67
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 196,
            "movement": -39
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -5
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
            "country": "SR",
            "name": "Suriname",
            "position": 39,
            "movement": 69
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 88,
            "movement": -8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 100,
            "movement": 87
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -15
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 145,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": -62
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": -75
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 182,
            "movement": -118
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 62,
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
            "position": 136,
            "movement": 6
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
            "position": 53,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": 50
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 82,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -31
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": -53
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 157,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
            "movement": -56
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": -36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 63,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 72,
            "movement": -33
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 141,
            "movement": -71
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 184,
            "movement": -26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 194,
            "movement": -84
          },
          {
            "country": "DM",
            "name": "Dominica",
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": 6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 67,
            "movement": -13
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 103,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 107,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 119,
            "movement": -5
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 124,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 131,
            "movement": -52
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": 38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": 24
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 160,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
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
            "position": 121,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 180,
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -5
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
            "position": 41,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": 7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 100,
            "movement": -72
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -28
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": -43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -99
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
            "position": 25,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 10
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": 27
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
            "position": 31,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -4
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
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": 31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": 39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": -23
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
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": -36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
            "movement": -50
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
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 92,
            "movement": -3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 112,
            "movement": -73
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 124,
            "movement": -68
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 125,
            "movement": 61
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 158,
            "movement": -31
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 184,
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
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": 8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 63,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": -7
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 28,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": -6
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
            "position": 200,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
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
            "position": 178,
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
            "position": 57,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": -71
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
            "movement": -142
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
            "position": 29,
            "movement": -4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 77,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 91,
            "movement": -6
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
            "position": 19,
            "movement": -3
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
            "position": 197,
            "movement": -2
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
            "position": 53,
            "movement": -25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 75,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": -36
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 144,
            "movement": -29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 195,
            "movement": -3
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 23,
            "movement": 38
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 169,
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
            "position": 113,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 180,
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
            "country": "SN",
            "name": "Senegal",
            "position": 55,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 160,
            "movement": -14
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
            "position": 69,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": 45
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 62,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 104,
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
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 195,
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
            "position": 197,
            "movement": -1
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
            "position": 186,
            "movement": 1
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
            "position": 80,
            "movement": -31
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
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": -7
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
            "position": 94,
            "movement": -5
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
            "position": 175,
            "movement": 7
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
            "position": 94,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": 12
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
            "position": 153,
            "movement": 22
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": 12
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
            "country": "GR",
            "name": "Greece",
            "position": 59,
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
            "position": 135,
            "movement": -14
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
            "position": 130,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 96,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CL",
            "name": "Chile",
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": -11
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
            "position": 104,
            "movement": -17
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
            "country": "AI",
            "name": "Anguilla",
            "position": 79,
            "movement": 58
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Gum Body",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 51,
            "movement": null,
            "status": "new"
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
            "country": "SR",
            "name": "Suriname",
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
    "title": "Kilometre",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 64,
            "movement": 0
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
            "country": "LV",
            "name": "Latvia",
            "position": 75,
            "movement": -44
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
            "position": 98,
            "movement": -3
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
            "country": "LR",
            "name": "Liberia",
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
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 67,
            "movement": 0
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
            "position": 196,
            "movement": -37
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
            "position": 180,
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
            "position": 198,
            "movement": -74
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 149,
            "movement": -5
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
            "position": 176,
            "movement": -5
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
