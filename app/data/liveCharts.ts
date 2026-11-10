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
export const liveChartsUpdated = "2026-11-10";

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
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": -9
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": 0
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
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 9,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 10,
            "movement": -5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 10,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 11,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 15,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 18,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 19,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 19,
            "movement": -6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 20,
            "movement": 13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 20,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 22,
            "movement": 12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 25,
            "movement": -7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 27,
            "movement": -11
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 36,
            "movement": -14
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 36,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 38,
            "movement": -17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 38,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 39,
            "movement": -16
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 48,
            "movement": -14
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 49,
            "movement": -8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 50,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
            "movement": -11
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 55,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 63,
            "movement": -28
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 63,
            "movement": -11
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 65,
            "movement": -11
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 78,
            "movement": -57
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 79,
            "movement": -3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 81,
            "movement": -27
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 95,
            "movement": 53
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 97,
            "movement": -30
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 104,
            "movement": -41
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 114,
            "movement": -13
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 114,
            "movement": 16
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 118,
            "movement": 26
          },
          {
            "country": "FR",
            "name": "France",
            "position": 120,
            "movement": -11
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 126,
            "movement": 41
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 135,
            "movement": 55
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 137,
            "movement": -75
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 151,
            "movement": -23
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 160,
            "movement": -64
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 176,
            "movement": -65
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 197,
            "movement": -103
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
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 11,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 14,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 27,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 31,
            "movement": -8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 32,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 39,
            "movement": -10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 42,
            "movement": -13
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 45,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 47,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 52,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 63,
            "movement": -12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 65,
            "movement": -11
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 67,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 67,
            "movement": -18
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 70,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 71,
            "movement": -12
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 79,
            "movement": -12
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 102,
            "movement": 7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 109,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 126,
            "movement": -19
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 135,
            "movement": -41
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 139,
            "movement": -4
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 144,
            "movement": -24
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 161,
            "movement": -12
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 168,
            "movement": -11
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 173,
            "movement": -57
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 174,
            "movement": -27
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 200,
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
            "country": "PH",
            "name": "Philippines",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 5,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 5,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": -4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 14,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 20,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 20,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 21,
            "movement": -7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 22,
            "movement": -12
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 23,
            "movement": -11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 23,
            "movement": 8
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 23,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 28,
            "movement": -12
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 30,
            "movement": 10
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 32,
            "movement": -26
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 33,
            "movement": -17
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 36,
            "movement": 43
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 43,
            "movement": -20
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 44,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 46,
            "movement": -31
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 52,
            "movement": -28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 54,
            "movement": -27
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 58,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 61,
            "movement": -16
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 82,
            "movement": -28
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 96,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 98,
            "movement": -55
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 32,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 38,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 44,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 51,
            "movement": -3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 56,
            "movement": -5
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 56,
            "movement": -7
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 64,
            "movement": -6
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 69,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 69,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 82,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 82,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 84,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 84,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 86,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 94,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 96,
            "movement": 8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 97,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 100,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 118,
            "movement": -12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 123,
            "movement": 9
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 151,
            "movement": -6
          },
          {
            "country": "FR",
            "name": "France",
            "position": 164,
            "movement": -6
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 169,
            "movement": -19
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 171,
            "movement": -11
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 193,
            "movement": -12
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
            "position": 5,
            "movement": 92
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 20,
            "movement": 3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 44,
            "movement": -39
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 45,
            "movement": -20
          },
          {
            "country": "FR",
            "name": "France",
            "position": 51,
            "movement": -32
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 52,
            "movement": -26
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 90,
            "movement": -17
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 100,
            "movement": -18
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 159,
            "movement": -41
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
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 98
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 66
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 113,
            "movement": 47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 71
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": -69
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 160,
            "movement": -73
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 175,
            "movement": -90
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 59,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": 12
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": 7
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 71,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": 25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": 101
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 123,
            "movement": -49
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": 13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 145,
            "movement": -24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 154,
            "movement": -90
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
            "movement": -30
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 175,
            "movement": -107
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -32
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
            "position": 25,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 98,
            "movement": 45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -53
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -39
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 124,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 154,
            "movement": -23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 156,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 170,
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
            "position": 18,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
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
            "position": 176,
            "movement": 0
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": null,
            "status": "re"
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
            "position": 53,
            "movement": -10
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 14
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 94,
            "movement": 103
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": 39
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 100,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": -69
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 144,
            "movement": -81
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 169,
            "movement": -14
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 181,
            "movement": -96
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 64,
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
            "position": 159,
            "movement": 0
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
            "position": 25,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 32,
            "movement": 8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 37,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 78,
            "movement": 99
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": -38
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 129,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 170,
            "movement": -44
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
            "movement": 1
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
            "position": 10,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": 19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": 12
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 25,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 29,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 39,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
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
            "position": 15,
            "movement": 84
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 51,
            "movement": -21
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 162,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 183,
            "movement": -2
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
            "position": 23,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 68,
            "movement": -11
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 124,
            "movement": 27
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 142,
            "movement": -26
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -1
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
            "position": 19,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": -61
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": -39
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 148,
            "movement": -51
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": 10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -79
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -20
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
            "position": 54,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": 49
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 74,
            "movement": 66
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 24
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 118,
            "movement": -55
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": -58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 187,
            "movement": -35
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 197,
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
            "movement": 5
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": -59
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 1
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
            "position": 35,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 39,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 55,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 179,
            "movement": -75
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -91
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 58,
            "movement": -4
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
            "position": 58,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": 92
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 156,
            "movement": 34
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
            "position": 43,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 80,
            "movement": -2
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
            "position": 84,
            "movement": -13
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
            "country": "ES",
            "name": "Spain",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 144,
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
            "position": 89,
            "movement": -3
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
            "country": "DZ",
            "name": "Algeria",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 92
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": -25
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
            "country": "VG",
            "name": "British Virgin Islands",
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
            "position": 177,
            "movement": 6
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
            "position": 170,
            "movement": -4
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
            "position": 166,
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
            "position": 107,
            "movement": -7
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
            "position": 61,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -65
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
            "position": 100,
            "movement": null,
            "status": "re"
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
            "movement": 7
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
            "position": 185,
            "movement": 12
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
            "position": 120,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": null,
            "status": "new"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
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
            "position": 186,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 5,
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
            "position": 43,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
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
    "title": "Common Person",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": null,
            "status": "re"
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
            "position": 21,
            "movement": 73
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
            "position": 9,
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
            "position": 12,
            "movement": -1
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
            "position": 46,
            "movement": -11
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 124,
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
            "position": 188,
            "movement": -84
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
            "position": 144,
            "movement": 0
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
            "position": 69,
            "movement": -2
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
            "country": "PL",
            "name": "Poland",
            "position": 70,
            "movement": null,
            "status": "new"
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
            "position": 196,
            "movement": -23
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
            "position": 146,
            "movement": 12
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
