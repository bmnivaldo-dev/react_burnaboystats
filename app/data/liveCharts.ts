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
export const liveChartsUpdated = "2026-09-21";

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
            "country": "NL",
            "name": "Netherlands",
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
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 6,
            "movement": 53
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 7,
            "movement": 4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 8,
            "movement": 12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": 4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 9,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 9,
            "movement": 10
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 9,
            "movement": 5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": 8
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 12,
            "movement": 4
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 12,
            "movement": 2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 14,
            "movement": 8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 17,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 17,
            "movement": -12
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 17,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 18,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 20,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 26,
            "movement": -10
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 27,
            "movement": -8
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 28,
            "movement": 33
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 28,
            "movement": 10
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 30,
            "movement": 6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 30,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 32,
            "movement": 8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 33,
            "movement": 2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 36,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 38,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 42,
            "movement": 58
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 42,
            "movement": 3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 43,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 47,
            "movement": 6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 49,
            "movement": -19
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 55,
            "movement": -26
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 63,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 67,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 70,
            "movement": -11
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 71,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 72,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 73,
            "movement": -43
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 93,
            "movement": 10
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 94,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 96,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 99,
            "movement": -24
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 101,
            "movement": -79
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 125,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 126,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 129,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 133,
            "movement": -54
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 138,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 150,
            "movement": 24
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 157,
            "movement": -34
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 163,
            "movement": -123
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 180,
            "movement": 0
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 186,
            "movement": 3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 193,
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
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 7,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 7,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": 5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 11,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 15,
            "movement": 9
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 19,
            "movement": 9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": 17
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 21,
            "movement": 9
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 23,
            "movement": 16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": 9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 30,
            "movement": 5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 31,
            "movement": 24
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 33,
            "movement": 6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 37,
            "movement": 24
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 37,
            "movement": 22
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 37,
            "movement": 19
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -33
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 50,
            "movement": 35
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 51,
            "movement": 6
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 56,
            "movement": 41
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 56,
            "movement": 20
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 65,
            "movement": 35
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 73,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 79,
            "movement": 36
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 86,
            "movement": 32
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 128,
            "movement": 50
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 143,
            "movement": 34
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 144,
            "movement": 47
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 155,
            "movement": 36
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 166,
            "movement": 20
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 192,
            "movement": null,
            "status": "new"
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 26
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 14,
            "movement": -10
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 16,
            "movement": -10
          },
          {
            "country": "US",
            "name": "United States",
            "position": 29,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 33,
            "movement": -16
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 37,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 40,
            "movement": -16
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 41,
            "movement": -39
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 81,
            "movement": -15
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 148,
            "movement": -73
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 156,
            "movement": -107
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 198,
            "movement": -186
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
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 113
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 85,
            "movement": 34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 110,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": 25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 124,
            "movement": 16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": -15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 162,
            "movement": -34
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": 7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 194,
            "movement": -9
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 8
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
            "position": 31,
            "movement": 80
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 108
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 78
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": -16
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 94,
            "movement": 29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": -21
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 99,
            "movement": 20
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 113,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": -64
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": -32
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 181,
            "movement": -53
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": -107
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
            "country": "MR",
            "name": "Mauritania",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": 38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -46
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": 24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": -56
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 198,
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
            "position": 175,
            "movement": 25
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
            "country": "SR",
            "name": "Suriname",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 74,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": -9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 86,
            "movement": 6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 87,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": 64
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": -10
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": -53
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 143,
            "movement": -6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 162,
            "movement": -22
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 178,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 190,
            "movement": -34
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
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
            "position": 137,
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 13
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 93,
            "movement": -47
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 173,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 87,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": -16
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 184,
            "movement": -11
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
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": -39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 97,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 164,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
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
            "movement": 0
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
            "position": 133,
            "movement": 15
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
            "position": 21,
            "movement": 0
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
            "position": 45,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": 10
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 79
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 70
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": 24
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": -67
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
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
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": 104
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 152,
            "movement": 40
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": -25
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 187,
            "movement": null,
            "status": "new"
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 22,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": -41
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 45,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": -45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
            "movement": -25
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
            "position": 184,
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
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -6
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
            "position": 46,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": -33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 105
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": 49
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": -18
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
            "position": 22,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 93
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 68
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 100,
            "movement": -65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
            "movement": -54
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 8
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
            "country": "OM",
            "name": "Oman",
            "position": 129,
            "movement": -37
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
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
            "position": 40,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": 23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 68,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -41
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": -18
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
            "position": 139,
            "movement": 14
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 93,
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
            "position": 55,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": -39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -18
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
            "position": 70,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 184,
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
            "position": 37,
            "movement": 11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": 0
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
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
            "position": 115,
            "movement": -17
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
            "position": 54,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": 36
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
            "position": 87,
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
            "position": 49,
            "movement": -46
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
            "position": 81,
            "movement": 16
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
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 1
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
            "position": 54,
            "movement": -6
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 100,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sekkle Down",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Own It",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "position": 136,
            "movement": 7
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Donne-moi l'accord",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
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
    "title": "Dangote",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -33
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
            "position": 44,
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
            "position": 138,
            "movement": 8
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
            "position": 168,
            "movement": 6
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
