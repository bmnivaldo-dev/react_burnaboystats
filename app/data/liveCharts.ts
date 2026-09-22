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
export const liveChartsUpdated = "2026-09-22";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 20,
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
            "country": "CA",
            "name": "Canada",
            "position": 1,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
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
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 1
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
            "country": "MT",
            "name": "Malta",
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
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 2,
            "movement": -1
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
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 3,
            "movement": 1
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
            "country": "BH",
            "name": "Bahrain",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 4,
            "movement": -1
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
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 5,
            "movement": -3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 5,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 6,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": -3
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": -3
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 8,
            "movement": -4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 8,
            "movement": -2
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 8,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 9,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 9,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 9,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 10,
            "movement": -4
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 10,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 10,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 10,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": -4
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 11,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 11,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 11,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 11,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 12,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 13,
            "movement": -4
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 13,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 13,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -11
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 16,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 16,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 17,
            "movement": -9
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 17,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 18,
            "movement": -15
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 20,
            "movement": -8
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
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
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 7,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 11,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 12,
            "movement": 14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 13,
            "movement": 4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": -4
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 15,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 16,
            "movement": -7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": -8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 19,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 22,
            "movement": -10
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 23,
            "movement": 5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 25,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": -14
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 25,
            "movement": -13
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 27,
            "movement": -3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 29,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 31,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 36,
            "movement": 7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 36,
            "movement": -8
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 39,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 39,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 43,
            "movement": -19
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 45,
            "movement": -5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 53,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 59,
            "movement": -12
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 61,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 67,
            "movement": -23
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 67,
            "movement": -25
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 72,
            "movement": -9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 76,
            "movement": -38
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 81,
            "movement": -75
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 87,
            "movement": -16
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 88,
            "movement": 32
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 91,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 104,
            "movement": -32
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 104,
            "movement": -37
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 105,
            "movement": -15
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 108,
            "movement": -15
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 118,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": 17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 139,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": -14
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 155,
            "movement": -44
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 156,
            "movement": -60
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 156,
            "movement": -18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 157,
            "movement": -32
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 166,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": 25
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 186,
            "movement": -23
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 192,
            "movement": -67
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 199,
            "movement": null,
            "status": "new"
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
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 11,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
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
            "country": "EE",
            "name": "Estonia",
            "position": 18,
            "movement": 3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 21,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 26,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 27,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 29,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 30,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 37,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 37,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 39,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 40,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 43,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -33
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 56,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 57,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 59,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 62,
            "movement": -12
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 71,
            "movement": 2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 72,
            "movement": -7
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 80,
            "movement": 6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 98,
            "movement": -19
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 142,
            "movement": -14
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 148,
            "movement": 7
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 151,
            "movement": -7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 154,
            "movement": -11
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 187,
            "movement": 5
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 198,
            "movement": -12
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
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 2,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 3,
            "movement": 45
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": 3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 5,
            "movement": 3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 5,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 7,
            "movement": 4
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 8,
            "movement": 26
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 8,
            "movement": -6
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 10,
            "movement": 19
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 11,
            "movement": 0
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
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 18,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 25,
            "movement": 26
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 26,
            "movement": -12
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 46,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 46,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 50,
            "movement": -26
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 50,
            "movement": -47
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 69,
            "movement": -8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 86,
            "movement": -11
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 100,
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 25,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 26,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 28,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 30,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 34,
            "movement": 3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 34,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 34,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 35,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 36,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 40,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 43,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 44,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 51,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 57,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 60,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 60,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 72,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 78,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 79,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 86,
            "movement": -8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 103,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 108,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 117,
            "movement": 10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 141,
            "movement": 9
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 154,
            "movement": 7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PE",
            "name": "Peru",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 7,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 7,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 9,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 18,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 29,
            "movement": -20
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 31,
            "movement": -20
          },
          {
            "country": "US",
            "name": "United States",
            "position": 33,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 46,
            "movement": -19
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 48,
            "movement": -38
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 51,
            "movement": -19
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 85,
            "movement": -49
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 89,
            "movement": -15
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 126,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 52,
            "movement": -42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": -45
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -9
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": -22
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 113,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 136,
            "movement": -49
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": -20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 167,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
            "movement": -71
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 176,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 197,
            "movement": -112
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
            "position": 39,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 11
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
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 51,
            "movement": 48
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": 44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -43
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 116,
            "movement": -33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 121,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 125,
            "movement": -26
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 125,
            "movement": -31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": -99
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 142,
            "movement": -85
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": 11
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 161,
            "movement": -78
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 168,
            "movement": -46
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 169,
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 60,
            "movement": -45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": 38
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 124,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": -72
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 160,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 169,
            "movement": -47
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 180,
            "movement": -31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": -43
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 193,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 195,
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
            "position": 173,
            "movement": 2
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
            "position": 22,
            "movement": 2
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
            "position": 85,
            "movement": 14
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
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 48
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 52,
            "movement": 35
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 84,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": -5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 128,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": 52
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 159,
            "movement": 19
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 160,
            "movement": -17
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 182,
            "movement": -96
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 189,
            "movement": -27
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 191,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 125,
            "movement": 12
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
            "position": 35,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -110
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 169,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": -16
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 56,
            "movement": -1
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
            "position": 123,
            "movement": 10
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
            "position": 134,
            "movement": 12
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
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 60
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": -69
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": 16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 153,
            "movement": -90
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 165,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 175,
            "movement": 12
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 176,
            "movement": -111
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": -86
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 92,
            "movement": 18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 101,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 162,
            "movement": null,
            "status": "new"
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
            "position": 15,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": 41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 124,
            "movement": -79
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": -11
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
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": 59
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 60,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": 7
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": -58
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": 51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -4
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": 11
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
            "position": 22,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 45,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 61,
            "movement": -21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": 5
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
            "position": 92,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 131,
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
            "movement": -4
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
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 75,
            "movement": 108
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 185,
            "movement": 0
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
            "position": 36,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": 6
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
            "position": 26,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": 13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
            "movement": -22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": -51
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
            "position": 106,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -43
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
            "position": 138,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": null,
            "status": "re"
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
            "position": 92,
            "movement": -32
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
            "position": 67,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": -7
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
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 190,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": -21
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
            "position": 108,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": 73
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
            "movement": -34
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
            "country": "DM",
            "name": "Dominica",
            "position": 110,
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
            "position": 81,
            "movement": 16
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
            "position": 40,
            "movement": 7
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
            "position": 72,
            "movement": -1
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
            "position": 49,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -38
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
            "position": 5,
            "movement": -2
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
            "position": 91,
            "movement": 1
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
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 171,
            "movement": null,
            "status": "new"
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": null,
            "status": "re"
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
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": null,
            "status": "new"
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
            "position": 58,
            "movement": -4
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
            "position": 193,
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
            "movement": 2
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
            "country": "GM",
            "name": "Gambia",
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
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 192,
            "movement": null,
            "status": "new"
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
            "country": "GM",
            "name": "Gambia",
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
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
            "movement": -1
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
            "position": 138,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 185,
            "movement": 7
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
            "position": 192,
            "movement": -92
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
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": -91
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
            "position": 130,
            "movement": 11
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
            "position": 160,
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
