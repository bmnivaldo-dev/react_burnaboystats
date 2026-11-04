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
export const liveChartsUpdated = "2026-11-04";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 10,
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
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
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
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 1
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
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 1
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 3,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": -1
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 4,
            "movement": -1
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 4,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": -1
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
            "country": "PA",
            "name": "Panama",
            "position": 6,
            "movement": -1
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
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": -2
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
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": 0
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
            "country": "EC",
            "name": "Ecuador",
            "position": 13,
            "movement": -1
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
            "country": "PY",
            "name": "Paraguay",
            "position": 14,
            "movement": -3
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
            "country": "CL",
            "name": "Chile",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 16,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": -4
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
            "movement": 3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 18,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 19,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -6
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 21,
            "movement": -9
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 21,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 23,
            "movement": -2
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 23,
            "movement": -6
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 24,
            "movement": -6
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 25,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 25,
            "movement": 2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 25,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 27,
            "movement": -5
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 31,
            "movement": -7
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 31,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 40,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": -12
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 47,
            "movement": -8
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 82,
            "movement": -1
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
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 6,
            "movement": -3
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 13,
            "movement": 4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 17,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 24,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 27,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 30,
            "movement": -8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 33,
            "movement": 23
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 35,
            "movement": 8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 37,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 39,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 44,
            "movement": 5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 47,
            "movement": 6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 49,
            "movement": 55
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 50,
            "movement": -13
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 52,
            "movement": 9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 56,
            "movement": -14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 58,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 63,
            "movement": 59
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 71,
            "movement": -32
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 72,
            "movement": -15
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 73,
            "movement": -38
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 76,
            "movement": -9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 80,
            "movement": 4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 84,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 90,
            "movement": 5
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 106,
            "movement": -19
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 109,
            "movement": -3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 115,
            "movement": 9
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 115,
            "movement": 23
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 130,
            "movement": 30
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 156,
            "movement": -27
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 162,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 188,
            "movement": -27
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
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
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
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 20,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 23,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 26,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 27,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 32,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 33,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 33,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 34,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 39,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 39,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 44,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 48,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 52,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 56,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 57,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 86,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 7,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 17,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 19,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 21,
            "movement": -7
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 21,
            "movement": -10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 26,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": -15
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 43,
            "movement": -6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 48,
            "movement": -29
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": -18
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 55,
            "movement": -14
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 59,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 59,
            "movement": -9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 63,
            "movement": -12
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 85,
            "movement": -16
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 92,
            "movement": -48
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 94,
            "movement": -24
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 99,
            "movement": 18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 109,
            "movement": -21
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 109,
            "movement": -12
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 110,
            "movement": -36
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 113,
            "movement": -36
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 116,
            "movement": -26
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 121,
            "movement": 31
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 129,
            "movement": -25
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 138,
            "movement": -32
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 149,
            "movement": -39
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
            "position": 18,
            "movement": 8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 37,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 43,
            "movement": 7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 51,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 51,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 55,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 58,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 59,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 59,
            "movement": -11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 68,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 71,
            "movement": -6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 71,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 71,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 83,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 84,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 86,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 86,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 90,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 102,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 107,
            "movement": 4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 113,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 114,
            "movement": 7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 116,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 129,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 150,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 152,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 160,
            "movement": -11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 172,
            "movement": -3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 2,
            "movement": 19
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 7,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 47
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 21,
            "movement": -8
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 30,
            "movement": -27
          },
          {
            "country": "FR",
            "name": "France",
            "position": 38,
            "movement": 33
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 45,
            "movement": -25
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 55,
            "movement": 52
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 80,
            "movement": -29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 145,
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
            "country": "SR",
            "name": "Suriname",
            "position": 35,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 52,
            "movement": 49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": -15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": -40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 103,
            "movement": -37
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -31
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 150,
            "movement": -26
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 158,
            "movement": -124
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 163,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
            "movement": -28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
            "movement": -26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
            "movement": -97
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 196,
            "movement": -41
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
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -38
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
            "position": 32,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -16
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 117,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -26
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 138,
            "movement": -44
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": 36
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 176,
            "movement": -90
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 182,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": null,
            "status": "new"
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
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -13
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 69,
            "movement": -51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": 74
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": -18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 118,
            "movement": 46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 168,
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -3
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
            "movement": 18
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JO",
            "name": "Jordan",
            "position": 54,
            "movement": 0
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 33,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 65,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": -15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 177,
            "movement": -44
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 70,
            "movement": -3
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
            "position": 130,
            "movement": 4
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 127
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -13
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 17
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 165,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 184,
            "movement": 15
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": -20
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
            "position": 17,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": 26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 190,
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
            "position": 125,
            "movement": -95
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 31,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 36,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -3
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
            "position": 6,
            "movement": 16
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
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
            "position": 149,
            "movement": 8
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
            "country": "TD",
            "name": "Chad",
            "position": 6,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -49
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": -24
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 190,
            "movement": -99
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 35
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
            "position": 28,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": 22
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
            "country": "AI",
            "name": "Anguilla",
            "position": 72,
            "movement": 114
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 92,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 123,
            "movement": 37
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 164,
            "movement": -54
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 180,
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
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
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 57
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 5
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 54,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 72,
            "movement": 4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 147,
            "movement": 12
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 162,
            "movement": 21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 185,
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
            "position": 164,
            "movement": 5
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
            "position": 69,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 70,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": -13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 139,
            "movement": -37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -52
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 1,
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
            "position": 61,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
            "movement": null,
            "status": "new"
          },
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
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": -32
          },
          {
            "country": "FR",
            "name": "France",
            "position": 172,
            "movement": -44
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
            "position": 69,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 85,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 146,
            "movement": 37
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
            "position": 41,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": -19
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
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 74,
            "movement": 58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 137,
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
            "country": "HR",
            "name": "Croatia",
            "position": 55,
            "movement": 2
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 166,
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
            "position": 187,
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
            "position": 80,
            "movement": 16
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
            "position": 176,
            "movement": 13
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": null,
            "status": "re"
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 2
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
            "position": 69,
            "movement": -11
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
            "position": 127,
            "movement": -1
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
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
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": 8
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
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
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
            "position": 197,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "On Form",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 9,
            "movement": -6
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SG",
            "name": "Singapore",
            "position": 55,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dey Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 116,
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
            "position": 67,
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 75,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Come Gimme",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 173,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 177,
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
            "position": 75,
            "movement": -3
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
    "title": "Jerusalema",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 152,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Redemption",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 131,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 185,
            "movement": 5
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
            "position": 186,
            "movement": null,
            "status": "new"
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
