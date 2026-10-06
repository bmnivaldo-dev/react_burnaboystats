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
export const liveChartsUpdated = "2026-10-06";

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
            "country": "NI",
            "name": "Nicaragua",
            "position": 9,
            "movement": 0
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
            "country": "MU",
            "name": "Mauritius",
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
            "country": "TN",
            "name": "Tunisia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 16,
            "movement": -2
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": -6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 13,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 14,
            "movement": -7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 17,
            "movement": 12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 17,
            "movement": -4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 18,
            "movement": 31
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 20,
            "movement": -8
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 22,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 22,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 27,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 28,
            "movement": -6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 32,
            "movement": -29
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 37,
            "movement": -7
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 39,
            "movement": 28
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 40,
            "movement": -11
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 41,
            "movement": 7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 47,
            "movement": -9
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 48,
            "movement": -14
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 48,
            "movement": -18
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 48,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 53,
            "movement": -12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 55,
            "movement": -4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 56,
            "movement": -31
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 62,
            "movement": -18
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 63,
            "movement": 6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 64,
            "movement": -28
          },
          {
            "country": "FR",
            "name": "France",
            "position": 70,
            "movement": -17
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 74,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 79,
            "movement": -13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 84,
            "movement": -41
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 84,
            "movement": -34
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 92,
            "movement": -30
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 104,
            "movement": -35
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 110,
            "movement": -24
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 117,
            "movement": -12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 119,
            "movement": -20
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 124,
            "movement": 21
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 126,
            "movement": -46
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 155,
            "movement": -28
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 169,
            "movement": -13
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 183,
            "movement": -59
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 199,
            "movement": -39
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 200,
            "movement": -134
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
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 8,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 14,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 18,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 18,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 18,
            "movement": -8
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 20,
            "movement": 1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 21,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 23,
            "movement": 3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 33,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 36,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 40,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 42,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 43,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 45,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 46,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 55,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 58,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 63,
            "movement": 7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 71,
            "movement": -15
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 82,
            "movement": -24
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 83,
            "movement": -28
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 91,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 98,
            "movement": -11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 115,
            "movement": -22
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 119,
            "movement": -7
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 159,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 175,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 189,
            "movement": -28
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 194,
            "movement": -8
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 199,
            "movement": -28
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 2,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": -4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": -4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": -7
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 12,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 13,
            "movement": -10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 0
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
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": -7
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 16,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": -12
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 18,
            "movement": -14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 18,
            "movement": -12
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 23,
            "movement": -9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 35,
            "movement": 17
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 43,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 44,
            "movement": -15
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 47,
            "movement": -18
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 55,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 59,
            "movement": 6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 70,
            "movement": -31
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 71,
            "movement": -24
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 89,
            "movement": -84
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 97,
            "movement": -31
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
            "position": 13,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 17,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 27,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 32,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 35,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 36,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 36,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 37,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 41,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 41,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 42,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 43,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 46,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 46,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 61,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 65,
            "movement": -3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 68,
            "movement": -20
          },
          {
            "country": "FR",
            "name": "France",
            "position": 68,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 68,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 69,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 73,
            "movement": -5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 78,
            "movement": -8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 85,
            "movement": 17
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 114,
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 124,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 139,
            "movement": 4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 151,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 169,
            "movement": -10
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 23
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": 15
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 9,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 9,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 11,
            "movement": -3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 22,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 65,
            "movement": 12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 86,
            "movement": -34
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 144,
            "movement": -61
          },
          {
            "country": "PL",
            "name": "Poland",
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
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 120
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 62,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -51
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 121,
            "movement": -27
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": -53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 32
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 146,
            "movement": -42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": -24
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 153,
            "movement": -96
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 160,
            "movement": -20
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 163,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": 22
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 178,
            "movement": -19
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 185,
            "movement": -103
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 192,
            "movement": -79
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
            "position": 30,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": 53
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 135
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 99,
            "movement": -24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": 64
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 138,
            "movement": 15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 159,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 180,
            "movement": -42
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 192,
            "movement": -29
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
            "position": 40,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -3
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
            "position": 45,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": 94
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -11
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 119,
            "movement": -21
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 131,
            "movement": -23
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
            "movement": 17
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 193,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
            "movement": -10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 197,
            "movement": -28
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
            "position": 20,
            "movement": -4
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
            "position": 83,
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
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 61
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 118,
            "movement": 27
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 177,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": -31
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 195,
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
            "position": 196,
            "movement": -3
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
            "movement": -4
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
            "position": 64,
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -18
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 130,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 132,
            "movement": -69
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -18
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 178,
            "movement": null,
            "status": "new"
          },
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
            "position": 9,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 102,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 164,
            "movement": -66
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
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -72
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 133,
            "movement": 41
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 144,
            "movement": -62
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 33
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": -59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": 0
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
            "position": 25,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -48
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
            "position": 88,
            "movement": -4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 101,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -48
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": 19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": -97
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 192,
            "movement": -32
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
            "country": "KE",
            "name": "Kenya",
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
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": -26
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": 39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 21
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
            "position": 61,
            "movement": -29
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 62,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 76,
            "movement": -4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 102,
            "movement": -69
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 104,
            "movement": 33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": 59
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 163,
            "movement": 21
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
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
            "position": 162,
            "movement": 15
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
            "position": 39,
            "movement": 43
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 136,
            "movement": 42
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": 8
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
            "position": 97,
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
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": 0
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
            "position": 23,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 42,
            "movement": -4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 63,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -30
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
            "position": 12,
            "movement": 2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 118,
            "movement": 17
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
            "position": 49,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": 62
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
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
            "position": 39,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 105,
            "movement": 38
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 107,
            "movement": -34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": -30
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
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": -12
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": 16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": 21
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
            "position": 61,
            "movement": -7
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
            "position": 39,
            "movement": 0
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
            "country": "AT",
            "name": "Austria",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 189,
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
            "position": 127,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 68,
            "movement": 1
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
            "position": 148,
            "movement": 9
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 70,
            "movement": -6
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 89,
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 69,
            "movement": -6
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
            "position": 126,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 35
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
            "position": 152,
            "movement": -10
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -6
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
            "movement": -18
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
            "position": 97,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Do I",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 100,
            "movement": 49
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
            "position": 61,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Birthday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 139,
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
            "position": 69,
            "movement": 0
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
            "position": 157,
            "movement": 17
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
            "position": 142,
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
            "country": "FM",
            "name": "Micronesia",
            "position": 171,
            "movement": -20
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
            "country": "KE",
            "name": "Kenya",
            "position": 178,
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
            "position": 198,
            "movement": -7
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
            "position": 194,
            "movement": -3
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
