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
export const liveChartsUpdated = "2026-11-01";

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
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
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
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
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
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 2
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
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
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
            "country": "SI",
            "name": "Slovenia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 6,
            "movement": -4
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
            "movement": -2
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
            "country": "PY",
            "name": "Paraguay",
            "position": 11,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 12,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 12,
            "movement": 1
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
            "country": "CO",
            "name": "Colombia",
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
            "country": "BR",
            "name": "Brazil",
            "position": 14,
            "movement": -3
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
            "movement": 0
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
            "movement": -3
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 16,
            "movement": -5
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
            "country": "AM",
            "name": "Armenia",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 17,
            "movement": 1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 18,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 18,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 18,
            "movement": 0
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 19,
            "movement": -4
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
            "country": "BO",
            "name": "Bolivia",
            "position": 21,
            "movement": -3
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 21,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 21,
            "movement": -4
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 22,
            "movement": -7
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 24,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 7
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 27,
            "movement": -7
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 28,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": -4
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 37,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 39,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 81,
            "movement": -9
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 9
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 9,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 13,
            "movement": 5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 15,
            "movement": -6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 17,
            "movement": 27
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 22,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 22,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 26,
            "movement": 13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 31,
            "movement": -16
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 34,
            "movement": 7
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 36,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 36,
            "movement": 7
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 37,
            "movement": 27
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 40,
            "movement": -18
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 41,
            "movement": -7
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 43,
            "movement": -15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 45,
            "movement": 4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 47,
            "movement": 48
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 53,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 60,
            "movement": -6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 61,
            "movement": -20
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 64,
            "movement": 11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 68,
            "movement": 6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 75,
            "movement": -18
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 81,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 83,
            "movement": 46
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 83,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 85,
            "movement": -46
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 92,
            "movement": 15
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 100,
            "movement": 25
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 114,
            "movement": 9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 114,
            "movement": 29
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 121,
            "movement": -11
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 122,
            "movement": -18
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 129,
            "movement": -4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 139,
            "movement": -3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 154,
            "movement": 31
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 168,
            "movement": -82
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": 47
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 7,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": 4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": 6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 10,
            "movement": 46
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": 16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 12,
            "movement": 18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 13,
            "movement": 45
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 15,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 16,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 16,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 18,
            "movement": -14
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 22,
            "movement": 8
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 29,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 30,
            "movement": -13
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 35,
            "movement": 11
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 37,
            "movement": -19
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 38,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 46,
            "movement": -20
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 48,
            "movement": 40
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 49,
            "movement": -24
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 54,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 82,
            "movement": -42
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 98,
            "movement": -19
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
            "position": 6,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 8,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 14,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 16,
            "movement": 9
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": 5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 18,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 23,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 26,
            "movement": -8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 32,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 43,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 51,
            "movement": 13
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 56,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 59,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 69,
            "movement": 10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 75,
            "movement": 12
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 81,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 85,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 88,
            "movement": 19
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 95,
            "movement": 6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 99,
            "movement": 54
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 105,
            "movement": 21
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 117,
            "movement": 2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 117,
            "movement": -28
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 119,
            "movement": 16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 125,
            "movement": -38
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 125,
            "movement": 18
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 158,
            "movement": 9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
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
            "country": "DK",
            "name": "Denmark",
            "position": 26,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 36,
            "movement": -6
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 40,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 44,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 49,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 52,
            "movement": -4
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 53,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 53,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 55,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 59,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 62,
            "movement": 14
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 71,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 73,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 75,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 79,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 84,
            "movement": -14
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 86,
            "movement": -9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 91,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 105,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 106,
            "movement": 9
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 111,
            "movement": 10
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 116,
            "movement": -11
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 122,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 139,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 148,
            "movement": -23
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 154,
            "movement": 44
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 159,
            "movement": -10
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 177,
            "movement": -33
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": 35
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 8,
            "movement": 81
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 9,
            "movement": 13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 13,
            "movement": 14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 22,
            "movement": 5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 28,
            "movement": 3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 37,
            "movement": -18
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 46,
            "movement": -18
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 70,
            "movement": -6
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 93,
            "movement": 10
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 97,
            "movement": -20
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 149,
            "movement": -135
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
            "position": 17,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 70,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": -44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 86,
            "movement": 88
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 87,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -17
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 102,
            "movement": 52
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 107,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 25
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": -40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 166,
            "movement": -48
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 170,
            "movement": -85
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 173,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": -55
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 191,
            "movement": -59
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -17
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
            "position": 16,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 35,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": -27
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 128,
            "movement": -39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 131,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 132,
            "movement": 47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 144,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 185,
            "movement": -26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 188,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 193,
            "movement": -38
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "DM",
            "name": "Dominica",
            "position": 11,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -4
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
            "movement": 32
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
            "position": 168,
            "movement": -16
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 19,
            "movement": 33
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 97,
            "movement": -59
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -46
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": 25
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 114,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": -48
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 130,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -39
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 151,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": -44
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
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
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -52
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": -21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": 36
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 165,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 199,
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
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 67,
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
            "position": 134,
            "movement": 2
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
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -2
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
            "position": 15,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 0
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
            "position": 46,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": 26
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
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": -33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 160,
            "movement": -23
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": -12
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 140,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": 2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 62,
            "movement": -29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": 12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 172,
            "movement": -113
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": 13
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 74,
            "movement": -37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 39
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -68
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -62
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 188,
            "movement": -115
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 191,
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
            "country": "DM",
            "name": "Dominica",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 62,
            "movement": -27
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 72,
            "movement": -48
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 106,
            "movement": -4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 177,
            "movement": -32
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
            "position": 32,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": -4
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
            "position": 185,
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 51,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 19
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": -28
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 100,
            "movement": -18
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 109,
            "movement": -51
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": -13
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 186,
            "movement": 7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 190,
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
            "position": 182,
            "movement": -6
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 73
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": -1
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
            "position": 151,
            "movement": 0
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
            "country": "FJ",
            "name": "Fiji",
            "position": 20,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 33,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -4
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
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 154,
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
            "movement": 17
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
            "position": 51,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 55,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 58,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": 16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 124,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": -38
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 175,
            "movement": -13
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
            "position": 55,
            "movement": 6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 150,
            "movement": 20
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 63,
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
            "country": "MU",
            "name": "Mauritius",
            "position": 174,
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
            "position": 43,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -23
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 52,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -25
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
            "position": 145,
            "movement": -76
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 16,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": 31
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
            "position": 31,
            "movement": -5
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 74,
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
            "position": 46,
            "movement": 8
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
            "position": 104,
            "movement": 2
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
            "position": 187,
            "movement": 5
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
            "position": 32,
            "movement": null,
            "status": "re"
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
            "position": 48,
            "movement": -5
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
            "country": "NG",
            "name": "Nigeria",
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
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 158,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 46,
            "movement": -14
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
            "position": 130,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Play Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Bundle By Bundle",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Empty Chairs",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
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
    "title": "Rock Your Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": -23
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
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Second Sermon",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 173,
            "movement": -38
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
            "position": 72,
            "movement": 1
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
            "position": 196,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Real Life",
    "kind": "song",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ]
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
