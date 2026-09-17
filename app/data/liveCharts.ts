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
export const liveChartsUpdated = "2026-09-17";

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
            "movement": null,
            "status": "re"
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
            "country": "LY",
            "name": "Libya",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 1
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
            "position": 5,
            "movement": -4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 6,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 7,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 8,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 8,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": -3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": -2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 13,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 14,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 17,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 20,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 24,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 25,
            "movement": -16
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 27,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 31,
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
            "position": 33,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 33,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 34,
            "movement": 20
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 34,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 34,
            "movement": -8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 37,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 37,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 37,
            "movement": 33
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 40,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 42,
            "movement": 24
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 46,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 54,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 57,
            "movement": -7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 57,
            "movement": -14
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 61,
            "movement": 6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 65,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 74,
            "movement": 10
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 78,
            "movement": -10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 81,
            "movement": -5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 98,
            "movement": -10
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 111,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 123,
            "movement": -34
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 128,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
            "movement": 13
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 130,
            "movement": -25
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 134,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 138,
            "movement": 48
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 140,
            "movement": 4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 159,
            "movement": 31
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 164,
            "movement": -24
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 166,
            "movement": -41
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 181,
            "movement": -32
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
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 2,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 4,
            "movement": 29
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 7,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 8,
            "movement": 4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 9,
            "movement": 30
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 11,
            "movement": 9
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 11,
            "movement": -5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 11,
            "movement": 23
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 11,
            "movement": 26
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
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
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": 11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 17,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 17,
            "movement": -10
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 18,
            "movement": -11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 20,
            "movement": 68
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 20,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 23,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 24,
            "movement": -14
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": -8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 27,
            "movement": 6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 32,
            "movement": 24
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 34,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 38,
            "movement": 15
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 42,
            "movement": -20
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 47,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 57,
            "movement": -8
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 59,
            "movement": -47
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 59,
            "movement": -28
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 68,
            "movement": -28
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 80,
            "movement": 9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
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
            "country": "NL",
            "name": "Netherlands",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 13,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 17,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 20,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 25,
            "movement": -4
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 27,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 30,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 30,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 36,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 39,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 40,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 52,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 58,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 60,
            "movement": -7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 83,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 85,
            "movement": 1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 86,
            "movement": -21
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 91,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 109,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 109,
            "movement": 9
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 118,
            "movement": -19
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 151,
            "movement": -13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 169,
            "movement": -8
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 173,
            "movement": 14
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 195,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 200,
            "movement": -15
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
            "movement": 39
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 17,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 18,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 20,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 20,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 24,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 25,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 26,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 29,
            "movement": -9
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 30,
            "movement": -11
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 32,
            "movement": -16
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 33,
            "movement": -9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 33,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 38,
            "movement": -10
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": -13
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 42,
            "movement": -18
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 44,
            "movement": -29
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 46,
            "movement": -21
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 57,
            "movement": -19
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 60,
            "movement": 42
          },
          {
            "country": "US",
            "name": "United States",
            "position": 64,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 66,
            "movement": -15
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 70,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 96,
            "movement": -60
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 101,
            "movement": -58
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 109,
            "movement": -57
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 146,
            "movement": -62
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -71
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 160,
            "movement": -74
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 197,
            "movement": -91
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MO",
            "name": "Macau",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 6,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 8,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 10,
            "movement": -8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 15,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 18,
            "movement": 7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 22,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 23,
            "movement": -17
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 26,
            "movement": -12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 40,
            "movement": -16
          },
          {
            "country": "US",
            "name": "United States",
            "position": 45,
            "movement": -16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 58,
            "movement": -13
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 156,
            "movement": -12
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": 37
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 31,
            "movement": 72
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 138
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 14
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 97,
            "movement": -38
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 102,
            "movement": -10
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 111,
            "movement": -11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 115,
            "movement": -54
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 131,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -74
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 181,
            "movement": -70
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": -77
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": -28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 125,
            "movement": 28
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 128,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": -14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 194,
            "movement": -40
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 200,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 39,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 2
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
            "position": 147,
            "movement": -5
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
            "position": 32,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 106,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 119,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": 34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 120,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 148,
            "movement": -26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 172,
            "movement": -53
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": 12
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
            "position": 160,
            "movement": -7
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
            "movement": -2
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
            "position": 128,
            "movement": -17
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
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 83
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 64
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": -12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 106,
            "movement": -33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 149,
            "movement": -32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 184,
            "movement": -73
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
            "movement": -2
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
            "position": 125,
            "movement": -2
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
            "position": 198,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 35,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 60,
            "movement": 17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 92
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 56
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 127,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 151,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": 43
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 171,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": 4
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
            "position": 134,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 170,
            "movement": 3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FI",
            "name": "Finland",
            "position": 88,
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 138,
            "movement": 15
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": -75
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -1
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
            "position": 21,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 66,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": 58
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 197,
            "movement": -62
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -3
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
            "position": 43,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 62,
            "movement": 85
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 62
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": -32
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": 4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 188,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 88
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 165
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "position": 21,
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
            "position": 194,
            "movement": 1
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": 34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -6
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
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": 62
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": -44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": -75
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 154,
            "movement": -45
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 194,
            "movement": -39
          },
          {
            "country": "YE",
            "name": "Yemen",
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
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 6
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
            "position": 21,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
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
            "position": 41,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 44,
            "movement": -2
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
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 134,
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
            "position": 168,
            "movement": 6
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
            "position": 73,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": 53
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 182,
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
            "position": 92,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": -17
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 111,
            "movement": 52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 125,
            "movement": 16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": 9
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
            "position": 103,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 8
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
            "position": 48,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
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
            "position": 115,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 163,
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
            "position": 39,
            "movement": 125
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
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
            "position": 132,
            "movement": -7
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
            "position": 39,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": 4
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -17
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
            "position": 191,
            "movement": -87
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
            "position": 22,
            "movement": -17
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
            "position": 162,
            "movement": -49
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
            "position": 186,
            "movement": -5
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
            "position": 98,
            "movement": -11
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
            "position": 192,
            "movement": -6
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
            "position": 136,
            "movement": -6
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
            "position": 187,
            "movement": -7
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
            "position": 197,
            "movement": 1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
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
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 9,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Time Flies",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
    "title": "Cloak & Dagger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": null,
            "status": "new"
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
            "country": "TD",
            "name": "Chad",
            "position": 141,
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
            "position": 71,
            "movement": 0
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
            "position": 144,
            "movement": -89
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
            "position": 107,
            "movement": -15
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
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -90
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
            "position": 146,
            "movement": 20
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
            "country": "MY",
            "name": "Malaysia",
            "position": 140,
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
            "position": 144,
            "movement": -15
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
            "position": 199,
            "movement": -28
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
            "position": 173,
            "movement": 1
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
