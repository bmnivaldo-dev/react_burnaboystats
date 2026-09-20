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
export const liveChartsUpdated = "2026-09-20";

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
        "numberOnes": 4,
        "entries": [
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
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
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
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 9,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": 1
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
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 4
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
            "country": "SI",
            "name": "Slovenia",
            "position": 14,
            "movement": 11
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": 3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 16,
            "movement": 4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 18,
            "movement": 7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 19,
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
            "country": "RO",
            "name": "Romania",
            "position": 19,
            "movement": 15
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 19,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 20,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": 7
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 29,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 30,
            "movement": 49
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 30,
            "movement": -1
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
            "country": "BR",
            "name": "Brazil",
            "position": 35,
            "movement": 8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 35,
            "movement": 16
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 38,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 38,
            "movement": 21
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 40,
            "movement": null,
            "status": "new"
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
            "country": "HU",
            "name": "Hungary",
            "position": 53,
            "movement": 13
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 59,
            "movement": 0
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
            "country": "CA",
            "name": "Canada",
            "position": 64,
            "movement": 16
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 65,
            "movement": 28
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 74,
            "movement": 3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 75,
            "movement": -3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 76,
            "movement": 35
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
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 94,
            "movement": 28
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 100,
            "movement": -49
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
            "position": 105,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 107,
            "movement": 21
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
            "movement": 5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 130,
            "movement": 30
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 135,
            "movement": 5
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 189,
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
            "movement": 1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": 21
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 3,
            "movement": 81
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": 33
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 7,
            "movement": 3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": 2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 9,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": 4
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
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 11,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": 4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 12,
            "movement": 13
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 14,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 15
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 15,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 18,
            "movement": 44
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 24,
            "movement": 44
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 29,
            "movement": -4
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 29,
            "movement": 10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 31,
            "movement": 52
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 35,
            "movement": 31
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 36,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 48,
            "movement": -36
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 61,
            "movement": 12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 67,
            "movement": -39
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 75,
            "movement": -10
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 82,
            "movement": 3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 95,
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 6,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 9,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 14,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 14,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 15,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 15,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 24,
            "movement": 7
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 28,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 30,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": -18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 38,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 39,
            "movement": 5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 39,
            "movement": 3
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
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 56,
            "movement": -19
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 57,
            "movement": 9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 59,
            "movement": -24
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 61,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 76,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 76,
            "movement": 12
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 85,
            "movement": 14
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 97,
            "movement": -19
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 100,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 115,
            "movement": 2
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 118,
            "movement": 12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 177,
            "movement": 7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 178,
            "movement": 10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 191,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 191,
            "movement": -7
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
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 18,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 21,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 23,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 24,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 25,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 27,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 30,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 30,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 32,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 34,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 35,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 37,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 40,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 41,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 41,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 42,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 52,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 59,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 61,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 68,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 78,
            "movement": -9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 78,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 82,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 100,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 105,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 127,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 150,
            "movement": -8
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 161,
            "movement": -2
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
            "movement": 22
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 31
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 5,
            "movement": 3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 7,
            "movement": 16
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 7,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 12,
            "movement": 19
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 18,
            "movement": -16
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 21,
            "movement": -13
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 24,
            "movement": 21
          },
          {
            "country": "US",
            "name": "United States",
            "position": 30,
            "movement": 18
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 35,
            "movement": -32
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 40,
            "movement": -11
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 59,
            "movement": -55
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 66,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 75,
            "movement": -43
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 154,
            "movement": 45
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
            "position": 14,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -11
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
            "position": 67,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 78,
            "movement": -10
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
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -72
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 117,
            "movement": -10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 119,
            "movement": -65
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
            "country": "YE",
            "name": "Yemen",
            "position": 134,
            "movement": -82
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": -31
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 181,
            "movement": -62
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 189,
            "movement": -134
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 190,
            "movement": -84
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
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -18
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
            "position": 78,
            "movement": -10
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
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": 29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 119,
            "movement": 37
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
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": -32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": 19
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
            "position": 38,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 68,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 1
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
            "position": 39,
            "movement": 3
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": 65
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 118,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 118,
            "movement": -14
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
            "country": "SN",
            "name": "Senegal",
            "position": 153,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 166,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "country": "DM",
            "name": "Dominica",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
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
            "position": 200,
            "movement": -3
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
            "position": 99,
            "movement": 9
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
            "position": 47,
            "movement": -15
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 63,
            "movement": 113
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 64,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 105
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 87,
            "movement": 74
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 92,
            "movement": -44
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": -15
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 140,
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
            "country": "UG",
            "name": "Uganda",
            "position": 175,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 195,
            "movement": -80
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
            "position": 151,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 194,
            "movement": -35
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
            "position": 48,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 68
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -59
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": 32
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 103,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": -44
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
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -64
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 156,
            "movement": -15
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": 16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 196,
            "movement": -122
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
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 79
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 5
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
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": 47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 140,
            "movement": -54
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 55,
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
            "position": 148,
            "movement": -13
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
            "position": 146,
            "movement": 16
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
            "position": 17,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 7
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": 46
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
            "position": 77,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 109,
            "movement": 65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": 18
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": -14
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
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -13
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
            "position": 55,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 109,
            "movement": -29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": 11
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
            "movement": 0
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
            "position": 39,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -14
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
            "position": 125,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 137,
            "movement": -48
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": -83
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "movement": 0
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
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 70
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -27
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": -41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 194,
            "movement": -2
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
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 35,
            "movement": null,
            "status": "new"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -52
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
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": -88
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": null,
            "status": "new"
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
            "position": 29,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": 2
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
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 21,
            "movement": 0
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
            "position": 36,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 0
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -1
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
            "position": 38,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
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
            "position": 92,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -24
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 187,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 19,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": -1
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
            "position": 76,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 92,
            "movement": 48
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 104,
            "movement": 33
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 109,
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
            "country": "MW",
            "name": "Malawi",
            "position": 75,
            "movement": 25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": -17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 122,
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
            "position": 89,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -37
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
            "position": 153,
            "movement": -20
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 54,
            "movement": 58
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": 21
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
            "position": 49,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 71,
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
            "position": 98,
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": 28
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
            "position": 189,
            "movement": -16
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
            "position": 58,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": -62
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -1
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
            "movement": -20
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
            "position": 48,
            "movement": -12
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
            "position": 65,
            "movement": -5
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
            "movement": -1
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
            "position": 60,
            "movement": -1
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 100,
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
            "position": 143,
            "movement": 9
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
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
    "title": "Dangote",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -21
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
            "position": 162,
            "movement": -128
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
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
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
            "position": 147,
            "movement": 2
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
