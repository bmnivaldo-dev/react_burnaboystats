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
export const liveChartsUpdated = "2026-10-03";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 18,
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
            "country": "DK",
            "name": "Denmark",
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
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
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
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
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
            "country": "NZ",
            "name": "New Zealand",
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
            "country": "PL",
            "name": "Poland",
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
            "country": "US",
            "name": "United States",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 6,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 6,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 6,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 7,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 7,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 8,
            "movement": -4
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 8,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 8,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 9,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 9,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 10,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 10,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 12,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 12,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 12,
            "movement": -4
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 12,
            "movement": -6
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 12,
            "movement": -4
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 13,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 13,
            "movement": -3
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 13,
            "movement": -7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": -5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 15,
            "movement": -6
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 15,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": -1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 16,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 16,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 16,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": -10
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 18,
            "movement": -9
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 19,
            "movement": -6
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 19,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -12
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 26,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 30,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": -10
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 67,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 5,
            "movement": 8
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 8,
            "movement": 14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 10,
            "movement": 9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 11,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 12,
            "movement": 8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 13,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 13,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": 7
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 13,
            "movement": 10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 19,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 25,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 25,
            "movement": 7
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 31,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 33,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 34,
            "movement": 19
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 38,
            "movement": 8
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 41,
            "movement": 37
          },
          {
            "country": "FR",
            "name": "France",
            "position": 43,
            "movement": 24
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 44,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 47,
            "movement": 6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 52,
            "movement": -1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 52,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 55,
            "movement": 6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 55,
            "movement": -4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 56,
            "movement": -11
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 58,
            "movement": 2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 59,
            "movement": 32
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 64,
            "movement": 25
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 64,
            "movement": -18
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 65,
            "movement": 116
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 66,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 73,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 89,
            "movement": 13
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 99,
            "movement": 16
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 100,
            "movement": -13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 123,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 124,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 129,
            "movement": 5
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 148,
            "movement": -10
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 149,
            "movement": 41
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 154,
            "movement": -3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 188,
            "movement": -66
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 197,
            "movement": -182
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
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": 25
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": 34
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": 2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 11,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": 3
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 15
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 14,
            "movement": 24
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 23
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 15,
            "movement": 32
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 17,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 21,
            "movement": 34
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 23,
            "movement": -12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 23,
            "movement": 9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": 68
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": 39
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 28,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 37,
            "movement": 33
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 42,
            "movement": -7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 44,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 51,
            "movement": 22
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 53,
            "movement": 15
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 58,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 58,
            "movement": -14
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 61,
            "movement": -8
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 79,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 10,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 18,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 19,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": -7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 27,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 27,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 29,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 30,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 38,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 39,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 40,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 52,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 55,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 56,
            "movement": 5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 58,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 59,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 63,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 67,
            "movement": -10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 75,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 78,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 90,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 92,
            "movement": -8
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 92,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 138,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 145,
            "movement": 13
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 148,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 149,
            "movement": 6
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 160,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 192,
            "movement": 3
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 29,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 31,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 36,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 36,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 36,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 38,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 39,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 39,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 41,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 42,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 44,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 50,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 52,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 57,
            "movement": 5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 63,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 64,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 66,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 66,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 68,
            "movement": 3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 73,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 92,
            "movement": -11
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 120,
            "movement": -12
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 123,
            "movement": -15
          },
          {
            "country": "US",
            "name": "United States",
            "position": 126,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 128,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 145,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 172,
            "movement": 14
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IL",
            "name": "Israel",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 4,
            "movement": 8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 7,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": 51
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 50
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 13,
            "movement": 55
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 20,
            "movement": 3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 20,
            "movement": -19
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 27,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 30,
            "movement": 6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 37,
            "movement": 17
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 41,
            "movement": 31
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 86,
            "movement": -20
          },
          {
            "country": "US",
            "name": "United States",
            "position": 94,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 72,
            "movement": 35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 19
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": 42
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 148,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": -88
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 175,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 199,
            "movement": -50
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
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 27
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 108,
            "movement": -30
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 16
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": 30
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 166,
            "movement": -83
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 190,
            "movement": -85
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
            "movement": -26
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
            "position": 21,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 59
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": -57
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 117,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": 59
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": -15
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 153,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": -25
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 180,
            "movement": -78
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
            "position": 18,
            "movement": -1
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
            "position": 71,
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 71,
            "movement": 115
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": -41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": -23
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 133,
            "movement": -76
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": 1
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
            "position": 45,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": 25
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 90,
            "movement": 77
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 102,
            "movement": 75
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -17
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 116,
            "movement": -46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -10
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
            "position": 124,
            "movement": -4
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
            "position": 17,
            "movement": -1
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
            "position": 98,
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 35,
            "movement": 44
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 42,
            "movement": 15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 83,
            "movement": -6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 99,
            "movement": 54
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": -58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -77
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": -84
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 178,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 179,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": -33
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 198,
            "movement": -18
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
            "movement": -4
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
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 88,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": -9
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": 23
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
            "position": 21,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 33
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 48
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": -19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 123,
            "movement": 28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 192,
            "movement": null,
            "status": "new"
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
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 182,
            "movement": -103
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
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": -20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 39,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 65,
            "movement": -1
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
            "position": 145,
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
            "country": "KE",
            "name": "Kenya",
            "position": 181,
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
            "position": 193,
            "movement": -20
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
            "position": 26,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": -32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": -66
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 179,
            "movement": null,
            "status": "new"
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 82,
            "movement": 116
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 112,
            "movement": -41
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 179,
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
            "position": 18,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
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
            "position": 33,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 29
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
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
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 36,
            "movement": 20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": 15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": 24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 115,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": 0
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
            "position": 36,
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 53,
            "movement": 0
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 89,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -31
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
            "position": 64,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 194,
            "movement": -118
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -3
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
            "position": 75,
            "movement": null,
            "status": "re"
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 57,
            "movement": null,
            "status": "new"
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
            "position": 69,
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
            "position": 137,
            "movement": 2
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
            "position": 78,
            "movement": -30
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 179,
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
            "position": 182,
            "movement": -46
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": -44
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
            "position": 88,
            "movement": -7
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 98,
            "movement": null,
            "status": "new"
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 50,
            "movement": -9
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 51,
            "movement": -9
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
            "position": 78,
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
            "position": 66,
            "movement": 0
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
            "position": 179,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 178,
            "movement": 0
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
            "position": 151,
            "movement": -4
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": -1
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
            "country": "LR",
            "name": "Liberia",
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
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
