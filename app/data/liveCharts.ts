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
export const liveChartsUpdated = "2026-11-16";

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
            "position": 5,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 12,
            "movement": 7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 17,
            "movement": 17
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 19,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 23,
            "movement": -7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 30,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 30,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 31,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 32,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 35,
            "movement": -3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 38,
            "movement": -14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 41,
            "movement": 4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 42,
            "movement": 35
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 47,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 49,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 49,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 49,
            "movement": 4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 51,
            "movement": 12
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 51,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 54,
            "movement": 15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 56,
            "movement": -22
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 63,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 67,
            "movement": 128
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 69,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 75,
            "movement": -7
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 80,
            "movement": 32
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 81,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 83,
            "movement": 6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 83,
            "movement": 3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 90,
            "movement": 8
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 114,
            "movement": -7
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 116,
            "movement": 35
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 142,
            "movement": 14
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 147,
            "movement": 7
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 157,
            "movement": -5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 157,
            "movement": -27
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 169,
            "movement": -10
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 170,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 174,
            "movement": 3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 191,
            "movement": -148
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PH",
            "name": "Philippines",
            "position": 2,
            "movement": 11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 3,
            "movement": 5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 17
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 3,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 5,
            "movement": 91
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 8,
            "movement": 51
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": 16
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 12,
            "movement": 5
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
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 14,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 20,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 26,
            "movement": 39
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 29,
            "movement": -17
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 31,
            "movement": 67
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 33,
            "movement": 7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 36,
            "movement": -17
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 43,
            "movement": 25
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 53,
            "movement": 8
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 56,
            "movement": -52
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 69,
            "movement": -16
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 72,
            "movement": -34
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 74,
            "movement": -47
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 87,
            "movement": -15
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 88,
            "movement": -70
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -24
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 4,
            "movement": 6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 10,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 13,
            "movement": 10
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 23,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 30,
            "movement": 27
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 34,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 35,
            "movement": 13
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 41,
            "movement": 17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 20
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 47,
            "movement": 11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 53,
            "movement": 35
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 64,
            "movement": 30
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 66,
            "movement": 32
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 69,
            "movement": 28
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 70,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 76,
            "movement": 15
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 77,
            "movement": 36
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 82,
            "movement": 56
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 108,
            "movement": 37
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 109,
            "movement": 46
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 121,
            "movement": 19
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 126,
            "movement": 38
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 146,
            "movement": 50
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 195,
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 29,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 49,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 50,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 53,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 53,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 62,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 68,
            "movement": 11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 71,
            "movement": -15
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 78,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 83,
            "movement": 12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 89,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 96,
            "movement": -10
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 98,
            "movement": -15
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 100,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 104,
            "movement": 6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 105,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 106,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 112,
            "movement": -8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 117,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 127,
            "movement": 16
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 153,
            "movement": 17
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 173,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 184,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 185,
            "movement": 8
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 197,
            "movement": -10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 15,
            "movement": 11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 21,
            "movement": -7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 23,
            "movement": 18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 43,
            "movement": -38
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 87,
            "movement": -75
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 112,
            "movement": -38
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 158,
            "movement": 23
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
            "country": "SC",
            "name": "Seychelles",
            "position": 28,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 125
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 9
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 82,
            "movement": -27
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 83,
            "movement": 83
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 92,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 57
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 101,
            "movement": 36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 121,
            "movement": 54
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 38
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 133,
            "movement": -30
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 167,
            "movement": -54
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 177,
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
            "country": "TD",
            "name": "Chad",
            "position": 196,
            "movement": -90
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 199,
            "movement": -41
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 200,
            "movement": -21
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 69,
            "movement": 37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 74
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 123,
            "movement": -59
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 128,
            "movement": 71
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": 26
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 161,
            "movement": -102
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 170,
            "movement": -102
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 200,
            "movement": -52
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
            "position": 56,
            "movement": 2
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
            "movement": 2
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": 12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": 25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": -47
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": 37
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": -27
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": -112
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 198,
            "movement": -26
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
            "position": 54,
            "movement": -1
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
            "position": 67,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 10
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
            "position": 23,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": 85
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 62
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": 20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
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
            "position": 27,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -30
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
            "position": 72,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -43
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 154,
            "movement": -12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 158,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": -112
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 182,
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
            "position": 56,
            "movement": -7
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
            "movement": 4
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
            "position": 50,
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 64
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": 40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": -39
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
            "position": 18,
            "movement": 60
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 19
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 112,
            "movement": -63
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": -94
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": 43
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": null,
            "status": "new"
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
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 23,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": -1
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
            "position": 51,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": -2
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
            "position": 174,
            "movement": -89
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "position": 144,
            "movement": 7
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 62,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 82,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": 34
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 106,
            "movement": 55
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 166,
            "movement": 24
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": -96
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
            "movement": 8
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
            "position": 26,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": -99
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
            "movement": -100
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": -81
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -55
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 41,
            "movement": 76
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 82
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 80
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "23",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 49
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": 68
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": 29
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
            "position": 74,
            "movement": 2
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
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 113
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 68
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 46
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": null,
            "status": "new"
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
            "position": 53,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": -71
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": -74
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": -108
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -65
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 185,
            "movement": -114
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
            "position": 46,
            "movement": 18
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 51,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": -21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 121,
            "movement": 32
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 156,
            "movement": 43
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 194,
            "movement": 5
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
            "country": "SR",
            "name": "Suriname",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 137,
            "movement": 26
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
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 58,
            "movement": 13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": -2
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
            "position": 74,
            "movement": -32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -95
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": -98
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -144
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 200,
            "movement": -146
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 72,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": -2
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
            "position": 82,
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
            "position": 72,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": 47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "album"
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
            "country": "NZ",
            "name": "New Zealand",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": -63
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 174,
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
            "position": 31,
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 109,
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
            "position": 198,
            "movement": -13
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
            "position": 22,
            "movement": -19
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
    "title": "Alone",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -14
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
            "position": 150,
            "movement": -3
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
            "position": 95,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 180,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "On a Spaceship",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 107,
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
            "position": 162,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Deja Vu",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
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
            "position": 14,
            "movement": -2
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
            "position": 17,
            "movement": -2
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": null,
            "status": "new"
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
            "position": 82,
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 96,
            "movement": -16
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
            "position": 171,
            "movement": -60
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
            "position": 38,
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
            "movement": 2
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
            "movement": -20
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -143
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
    "title": "Redemption",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 75,
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
            "position": 134,
            "movement": 10
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
