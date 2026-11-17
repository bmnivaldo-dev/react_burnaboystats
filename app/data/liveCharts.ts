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
export const liveChartsUpdated = "2026-11-17";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 11,
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
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 1
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
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 4,
            "movement": 4
          },
          {
            "country": "IT",
            "name": "Italy",
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
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 4,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
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
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 3
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
            "country": "PA",
            "name": "Panama",
            "position": 9,
            "movement": -3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 10,
            "movement": -2
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
            "country": "GE",
            "name": "Georgia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": -9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 12,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 14,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": -3
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 15,
            "movement": -1
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
            "country": "PY",
            "name": "Paraguay",
            "position": 16,
            "movement": -2
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 18,
            "movement": -6
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 20,
            "movement": -4
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 20,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -4
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 21,
            "movement": -3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 22,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 23,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 25,
            "movement": -6
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 25,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 26,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 29,
            "movement": -10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 30,
            "movement": -5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 30,
            "movement": -3
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 33,
            "movement": -10
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 34,
            "movement": -11
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 37,
            "movement": -16
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 39,
            "movement": -8
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 46,
            "movement": -22
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 46,
            "movement": -21
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 48,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": -4
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 50,
            "movement": -10
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 13,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 23,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 23,
            "movement": -6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 26,
            "movement": -7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 28,
            "movement": 14
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 37,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 38,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 41,
            "movement": -11
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 44,
            "movement": -14
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 50,
            "movement": -20
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 51,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 55,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": -15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 62,
            "movement": -15
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 63,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 66,
            "movement": -3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 66,
            "movement": -28
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 67,
            "movement": -16
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 69,
            "movement": -52
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 75,
            "movement": -26
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 78,
            "movement": -10
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 86,
            "movement": -8
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 90,
            "movement": -15
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 93,
            "movement": -12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 96,
            "movement": -40
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 107,
            "movement": -84
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 107,
            "movement": -24
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 109,
            "movement": -29
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 114,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 115,
            "movement": -25
          },
          {
            "country": "FR",
            "name": "France",
            "position": 120,
            "movement": -18
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 146,
            "movement": -79
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 150,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 152,
            "movement": 39
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 152,
            "movement": -38
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 158,
            "movement": 11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 168,
            "movement": -12
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 183,
            "movement": -36
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 193,
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
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": -5
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 8,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 14,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 14,
            "movement": -7
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 15,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 17,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 19,
            "movement": 8
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 22,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 23,
            "movement": 11
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 30,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 32,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 34,
            "movement": -20
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 40,
            "movement": -24
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 46,
            "movement": 14
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 53,
            "movement": -13
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 54,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 55,
            "movement": -11
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 65,
            "movement": -29
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 78,
            "movement": -3
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 85,
            "movement": -35
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": -59
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 96,
            "movement": -41
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 14,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 15,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 20,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 21,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 27,
            "movement": -4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 37,
            "movement": -7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 41,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 50,
            "movement": -15
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 54,
            "movement": -8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 55,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 65,
            "movement": -12
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 76,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 80,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 81,
            "movement": -5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 92,
            "movement": -26
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 96,
            "movement": -32
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 104,
            "movement": -22
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 130,
            "movement": -21
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 133,
            "movement": 13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 136,
            "movement": -28
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 146,
            "movement": -15
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 155,
            "movement": 37
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 155,
            "movement": -29
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 171,
            "movement": 24
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
            "position": 13,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 36,
            "movement": -7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 44,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 52,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 54,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 64,
            "movement": -6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 67,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 76,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 81,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 87,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 89,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 93,
            "movement": -18
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 94,
            "movement": 10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 95,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 100,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 104,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 108,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 120,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 123,
            "movement": -6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 137,
            "movement": -8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 139,
            "movement": -22
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 152,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 154,
            "movement": 6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 176,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 198,
            "movement": -12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": 1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 26,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 37,
            "movement": -12
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 78,
            "movement": -55
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 83,
            "movement": -15
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 88,
            "movement": 3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 90,
            "movement": -36
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 145,
            "movement": -21
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 154,
            "movement": -45
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 36,
            "movement": 24
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 46,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 89,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -21
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 101,
            "movement": 22
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 107,
            "movement": 63
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 7
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 129,
            "movement": 54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 138,
            "movement": -51
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -49
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
            "movement": -59
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 168,
            "movement": 32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "country": "DM",
            "name": "Dominica",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 55,
            "movement": 1
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
            "movement": 1
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
            "position": 80,
            "movement": null,
            "status": "re"
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
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 60,
            "movement": 23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 67,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 78
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": -60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 120,
            "movement": 76
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": -37
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 149,
            "movement": -47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": -100
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -67
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 163,
            "movement": -81
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 168,
            "movement": -67
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 178,
            "movement": -45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": -28
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 181,
            "movement": -89
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 184,
            "movement": 16
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": 81
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 113,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -62
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
            "movement": 30
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 174,
            "movement": -101
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -6
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
            "position": 150,
            "movement": -5
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -57
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": -65
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 191,
            "movement": -24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 197,
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
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "23",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 192,
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
            "position": 84,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "20 10 20",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
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
            "country": "CM",
            "name": "Cameroon",
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
            "movement": 103
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": 91
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -48
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 194,
            "movement": -40
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
            "position": 69,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
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
            "country": "DM",
            "name": "Dominica",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": -14
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
            "position": 169,
            "movement": -9
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": -33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 19
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 78,
            "movement": -16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 101,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 134,
            "movement": 32
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 165,
            "movement": -59
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 160,
            "movement": 8
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
            "position": 11,
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
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 38,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 56,
            "movement": -5
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
            "position": 147,
            "movement": -3
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
            "position": 73,
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
            "position": 96,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 58,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Way Too Big",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 80
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": -26
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": -59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": 64
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 141,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -51
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 171,
            "movement": -82
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
            "position": 29,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 49,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 64,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
            "movement": -74
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
            "position": 29,
            "movement": 29
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
            "position": 57,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LB",
            "name": "Lebanon",
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
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
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
            "position": 73,
            "movement": -63
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
            "position": 45,
            "movement": 10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": 27
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 71,
            "movement": 1
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
            "country": "HR",
            "name": "Croatia",
            "position": 105,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 198,
            "movement": -18
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
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -68
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": -15
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
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
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -16
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -7
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
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": -71
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
            "country": "BB",
            "name": "Barbados",
            "position": 28,
            "movement": -6
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
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
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
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
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
            "position": 185,
            "movement": -4
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
            "position": 166,
            "movement": 4
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CL",
            "name": "Chile",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": -111
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tshwala Bam",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "All My Life",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": -1
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
            "position": 96,
            "movement": null,
            "status": "new"
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
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -36
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
            "position": 123,
            "movement": 4
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
            "position": 95,
            "movement": 1
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
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
            "position": 173,
            "movement": -2
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Loved By You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 34
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
            "country": "GM",
            "name": "Gambia",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Monsters You Made",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -112
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
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -111
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
            "position": 151,
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
            "position": 183,
            "movement": -9
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
