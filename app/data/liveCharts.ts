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
export const liveChartsUpdated = "2026-10-25";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 13,
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
            "country": "AU",
            "name": "Australia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 1
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
            "country": "PA",
            "name": "Panama",
            "position": 4,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 5,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": -2
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
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
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
            "country": "PY",
            "name": "Paraguay",
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
            "country": "AR",
            "name": "Argentina",
            "position": 10,
            "movement": -1
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
            "country": "BR",
            "name": "Brazil",
            "position": 11,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 11,
            "movement": -2
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
            "country": "CO",
            "name": "Colombia",
            "position": 12,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -2
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
            "country": "CL",
            "name": "Chile",
            "position": 13,
            "movement": -4
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 13,
            "movement": -3
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
            "country": "ZA",
            "name": "South Africa",
            "position": 14,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 15,
            "movement": -4
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
            "country": "UY",
            "name": "Uruguay",
            "position": 15,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": -6
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
            "movement": -5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": -4
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 18,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 18,
            "movement": -4
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 18,
            "movement": -3
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 18,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": null,
            "status": "re"
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 19,
            "movement": -2
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
            "country": "IL",
            "name": "Israel",
            "position": 20,
            "movement": -2
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 20,
            "movement": -4
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 22,
            "movement": -8
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 23,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 38,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 72,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": 3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 12,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 13,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": 7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": 10
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 20,
            "movement": 11
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 22,
            "movement": 9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 26,
            "movement": 25
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 27,
            "movement": 23
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 28,
            "movement": 36
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 31,
            "movement": -13
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 32,
            "movement": 22
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 32,
            "movement": 10
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 39,
            "movement": 38
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 41,
            "movement": 20
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 41,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 45,
            "movement": 8
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 48,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 51,
            "movement": 9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 55,
            "movement": -23
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 66,
            "movement": 15
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 66,
            "movement": -23
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 71,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 76,
            "movement": -11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 80,
            "movement": 28
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 84,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 100,
            "movement": 12
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 103,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 106,
            "movement": 33
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 107,
            "movement": -75
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 112,
            "movement": 74
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 113,
            "movement": 28
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 117,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 126,
            "movement": 8
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 152,
            "movement": 33
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 172,
            "movement": -41
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 184,
            "movement": 14
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 191,
            "movement": -51
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
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": 6
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 7,
            "movement": 13
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": 2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 11,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 12,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 12,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 12,
            "movement": 6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 13,
            "movement": 6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 21,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 21,
            "movement": 9
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 23,
            "movement": -6
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 23,
            "movement": 56
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 24,
            "movement": 10
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 26,
            "movement": 60
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": 9
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 28,
            "movement": 18
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 32,
            "movement": -15
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": -19
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 36,
            "movement": 58
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 43,
            "movement": -8
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 44,
            "movement": -41
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 80,
            "movement": -59
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 86,
            "movement": 9
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 96,
            "movement": -7
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
            "position": 3,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 12,
            "movement": -2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 15,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 28,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 31,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 38,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 47,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 53,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 55,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 58,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 63,
            "movement": -19
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 74,
            "movement": 17
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 83,
            "movement": 43
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 88,
            "movement": 25
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 89,
            "movement": -15
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 92,
            "movement": 9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 96,
            "movement": 13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 96,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 100,
            "movement": -9
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 106,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 108,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 141,
            "movement": 7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 161,
            "movement": 24
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 188,
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
            "country": "RO",
            "name": "Romania",
            "position": 23,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 26,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 28,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 36,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 37,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 40,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 50,
            "movement": 7
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 50,
            "movement": -7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 61,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 61,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 65,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 69,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 70,
            "movement": 2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 74,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 75,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 78,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 78,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 79,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 95,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 97,
            "movement": -8
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 101,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 109,
            "movement": -5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 110,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 127,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 134,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 137,
            "movement": -28
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 148,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 154,
            "movement": -29
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 155,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 1,
            "movement": 75
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 44
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 4,
            "movement": 32
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 10,
            "movement": 16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": -10
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 18,
            "movement": -17
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 23,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 26,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 32,
            "movement": 30
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 42,
            "movement": 7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 55,
            "movement": -54
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 81,
            "movement": -80
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 85,
            "movement": -54
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 91,
            "movement": -83
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 109,
            "movement": -57
          },
          {
            "country": "US",
            "name": "United States",
            "position": 200,
            "movement": -35
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
            "position": 35,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 93
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 77,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 85,
            "movement": 113
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": 43
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 81
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 112,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -41
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 155,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "position": 60,
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": -11
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
            "position": 85,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -49
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": 88
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": -39
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": -107
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
            "position": 42,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 64,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -7
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
            "position": 20,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 13
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 75,
            "movement": 98
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -38
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": 43
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 137,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": -48
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -55
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 194,
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
            "position": 9,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 1
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
            "position": 48,
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
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 64,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": 37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 109,
            "movement": -45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": 50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": -5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 160,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
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
            "position": 143,
            "movement": 1
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": 50
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 134,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 199,
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
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": 55
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": -1
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
            "position": 129,
            "movement": -90
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
            "position": 44,
            "movement": 15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 72,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 94,
            "movement": -32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 134,
            "movement": 59
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": 37
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 188,
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
            "movement": 1
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 68
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": -28
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 115,
            "movement": -73
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": 61
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 187,
            "movement": -27
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
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 147,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
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
            "position": 8,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": 55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 12,
            "movement": 134
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": -22
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
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
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": -5
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
            "position": 54,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 28,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 1
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
            "position": 90,
            "movement": -68
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": null,
            "status": "new"
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": 13
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
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": 91
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": -78
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "position": 25,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 0
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
            "position": 41,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 56,
            "movement": 34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": 17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 115,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
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
            "position": 51,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 140,
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
            "country": "NG",
            "name": "Nigeria",
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
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 95,
            "movement": 56
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
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
            "position": 92,
            "movement": -6
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
            "position": 188,
            "movement": 1
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
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 7
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
            "position": 154,
            "movement": 18
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
            "position": 117,
            "movement": 12
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 77,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 95,
            "movement": -5
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
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 113,
            "movement": -55
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 34
          },
          {
            "country": "ZM",
            "name": "Zambia",
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
    "title": "Question",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -14
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
            "position": 158,
            "movement": -25
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
            "position": 25,
            "movement": null,
            "status": "new"
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Giddem",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": null,
            "status": "new"
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 33,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": 16
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
            "movement": -3
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Hossana",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "#Yawadey",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -53
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
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": null,
            "status": "new"
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
            "country": "TD",
            "name": "Chad",
            "position": 115,
            "movement": null,
            "status": "new"
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
            "position": 137,
            "movement": 44
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
            "position": 66,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "I Told Them",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": -6
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
            "position": 176,
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
            "country": "NE",
            "name": "Niger",
            "position": 150,
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
        "platform": "Shazam",
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
            "position": 151,
            "movement": -13
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 99,
            "movement": -96
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
            "position": 170,
            "movement": -7
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
