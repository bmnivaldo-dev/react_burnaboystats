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
export const liveChartsUpdated = "2026-10-14";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 15,
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
            "country": "AU",
            "name": "Australia",
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
            "country": "IS",
            "name": "Iceland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 2,
            "movement": 0
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
            "country": "PL",
            "name": "Poland",
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
            "country": "FI",
            "name": "Finland",
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
            "country": "PA",
            "name": "Panama",
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
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
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
            "country": "AR",
            "name": "Argentina",
            "position": 7,
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
            "country": "CO",
            "name": "Colombia",
            "position": 7,
            "movement": -1
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
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": 7
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 8,
            "movement": -2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -2
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
            "country": "CR",
            "name": "Costa Rica",
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
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 2
          },
          {
            "country": "PE",
            "name": "Peru",
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": -3
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 11,
            "movement": 1
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
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 12,
            "movement": -1
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
            "country": "IL",
            "name": "Israel",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 14,
            "movement": -2
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 15,
            "movement": 3
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
            "country": "MX",
            "name": "Mexico",
            "position": 17,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": 0
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 4
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 24,
            "movement": 6
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 38,
            "movement": -8
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 67,
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 19,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 21,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 21,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 25,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 27,
            "movement": -17
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 28,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 29,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 29,
            "movement": -4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 30,
            "movement": 116
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 34,
            "movement": 4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 34,
            "movement": 32
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 38,
            "movement": 9
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 43,
            "movement": 11
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 44,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 45,
            "movement": -9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 47,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 52,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 53,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 55,
            "movement": 12
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 57,
            "movement": 8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 57,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 58,
            "movement": 6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 65,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 71,
            "movement": -23
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 84,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 97,
            "movement": 97
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 99,
            "movement": 4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 99,
            "movement": -11
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 101,
            "movement": 5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 106,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 119,
            "movement": -27
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 131,
            "movement": -5
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 139,
            "movement": -14
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 158,
            "movement": -67
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 168,
            "movement": -30
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 182,
            "movement": -43
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 3,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 9,
            "movement": -1
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
            "country": "SI",
            "name": "Slovenia",
            "position": 11,
            "movement": -6
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 12,
            "movement": 24
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": 9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": 3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 14,
            "movement": 23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 15,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": -2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 20,
            "movement": -9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": 34
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 24,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 28,
            "movement": 16
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 32,
            "movement": 9
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 36,
            "movement": 32
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 40,
            "movement": 29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 41,
            "movement": 27
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 42,
            "movement": 26
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 43,
            "movement": 25
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 45,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 49,
            "movement": -17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 67,
            "movement": 19
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 78,
            "movement": 19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 81,
            "movement": 19
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 94,
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
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 30,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 31,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 38,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 48,
            "movement": -21
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 52,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 58,
            "movement": -6
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 67,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 68,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 69,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 74,
            "movement": 15
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 79,
            "movement": -11
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 81,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 88,
            "movement": -35
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 97,
            "movement": -12
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 108,
            "movement": -32
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 112,
            "movement": -7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 130,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 135,
            "movement": -9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 140,
            "movement": 13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 180,
            "movement": 9
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 191,
            "movement": -29
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 28,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 30,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 30,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 39,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 42,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 45,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 46,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 51,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 53,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 56,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 56,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 58,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 62,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 64,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 66,
            "movement": 4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 83,
            "movement": -18
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 84,
            "movement": -9
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 85,
            "movement": -7
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 85,
            "movement": 22
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 86,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 96,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 105,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 128,
            "movement": -12
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 159,
            "movement": -17
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 159,
            "movement": -8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 168,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 192,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 194,
            "movement": -17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": 20
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 8,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 10,
            "movement": 8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 12,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 15,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 35,
            "movement": -8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 65,
            "movement": 23
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 66,
            "movement": -18
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 72,
            "movement": -68
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 77,
            "movement": -21
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 90,
            "movement": -72
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 173,
            "movement": -116
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
            "country": "FJ",
            "name": "Fiji",
            "position": 37,
            "movement": 39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 75,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 54
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -44
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 90,
            "movement": -33
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 114,
            "movement": -30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 118,
            "movement": -34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": -37
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 138,
            "movement": -92
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 152,
            "movement": -90
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": -36
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 168,
            "movement": 28
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 177,
            "movement": -5
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
            "movement": -1
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
            "position": 30,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -19
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": -43
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 152,
            "movement": 10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 160,
            "movement": -58
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 172,
            "movement": -99
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": -23
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
            "position": 46,
            "movement": 2
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
            "position": 61,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 5
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
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": 46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": 15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 100,
            "movement": 60
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 112,
            "movement": 10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 149,
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
            "country": "DM",
            "name": "Dominica",
            "position": 20,
            "movement": 171
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 107,
            "movement": 19
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 108,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 134,
            "movement": 53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": 6
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 31,
            "movement": null,
            "status": "new"
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
            "position": 146,
            "movement": 7
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
            "position": 22,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 117,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 166,
            "movement": -42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -43
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 188,
            "movement": -101
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": -10
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
            "position": 29,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
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
            "position": 178,
            "movement": 7
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
            "position": 189,
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
            "position": 72,
            "movement": -7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 77,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 84,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 94,
            "movement": 40
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 137,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": 41
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 162,
            "movement": 29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 163,
            "movement": -35
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 169,
            "movement": -45
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 197,
            "movement": -62
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
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
            "position": 144,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 44,
            "movement": -30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 177,
            "movement": -64
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 199,
            "movement": -71
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
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 2
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
            "position": 48,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 59
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 128,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": -22
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
            "position": 11,
            "movement": 19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 17,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 66,
            "movement": 35
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 67,
            "movement": 38
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 64,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -2
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
            "position": 18,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": -58
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": 42
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
            "position": 21,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 59
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 127,
            "movement": 67
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 180,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": -49
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
            "position": 28,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 63,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -58
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
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
            "position": 25,
            "movement": -1
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
            "position": 158,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": -19
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 38,
            "movement": 4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 102,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 111,
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
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 76,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": -24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": 78
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": 49
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
            "position": 35,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": -43
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
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": -1
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
            "position": 153,
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
            "position": 32,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 59,
            "movement": -2
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
    "title": "Higher",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": null,
            "status": "re"
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
            "position": 87,
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
            "position": 123,
            "movement": 4
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
            "position": 6,
            "movement": 4
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
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": 1
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
            "position": 62,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": -29
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
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
            "position": 147,
            "movement": 5
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
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
            "position": 178,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LY",
            "name": "Libya",
            "position": 3,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "If I'm Lying",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 20
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
            "position": 96,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Spiritual",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 2
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
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Yaba Buluku",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": null,
            "status": "new"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
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
            "movement": 70
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
            "movement": 0
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": 50
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
            "country": "LR",
            "name": "Liberia",
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 155,
            "movement": 1
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
    "title": "Kainama",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Simmer",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -34
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
            "position": 159,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song"
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
