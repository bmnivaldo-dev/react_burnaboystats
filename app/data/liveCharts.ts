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
export const liveChartsUpdated = "2026-09-23";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 21,
        "entries": [
          {
            "country": "AU",
            "name": "Australia",
            "position": 1,
            "movement": 1
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
            "country": "CA",
            "name": "Canada",
            "position": 1,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
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
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
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
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 1
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
            "movement": 1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 3,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 3,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
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
            "country": "BH",
            "name": "Bahrain",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
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
            "country": "MA",
            "name": "Morocco",
            "position": 4,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 5,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 5,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 6,
            "movement": 2
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 6,
            "movement": -2
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 6,
            "movement": -3
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": -3
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 6,
            "movement": -2
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 7,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 8,
            "movement": -4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 8,
            "movement": -2
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 8,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 8,
            "movement": -2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 9,
            "movement": -3
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 9,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 10,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 10,
            "movement": -4
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 11,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 11,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 11,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 13,
            "movement": -4
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 13,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 13,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 16,
            "movement": -2
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 17,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 18,
            "movement": -15
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 19,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 20,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 20,
            "movement": -8
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 26,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 60,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 6,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 8,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 10,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 10,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 11,
            "movement": -3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 12,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 13,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 16,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 19,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 19,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 21,
            "movement": 1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 22,
            "movement": -11
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 24,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 26,
            "movement": -1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 28,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 29,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 30,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 30,
            "movement": 37
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 32,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 33,
            "movement": -17
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 38,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 40,
            "movement": -21
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 41,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 41,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 46,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 47,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 53,
            "movement": -17
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 56,
            "movement": 20
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 64,
            "movement": -5
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 64,
            "movement": -41
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 71,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 79,
            "movement": -10
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 82,
            "movement": -21
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 84,
            "movement": 3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 86,
            "movement": -33
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 87,
            "movement": 17
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 87,
            "movement": -6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 93,
            "movement": 11
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 110,
            "movement": -9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 123,
            "movement": 33
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 124,
            "movement": -16
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 144,
            "movement": -26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 147,
            "movement": 9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 151,
            "movement": -12
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 151,
            "movement": 15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 198,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 5,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": -8
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 10,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 10,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": -1
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
            "movement": -7
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": 9
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 15,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 16,
            "movement": -5
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 16,
            "movement": -8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": 33
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 18,
            "movement": -7
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 18,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 19,
            "movement": -11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 19,
            "movement": -5
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 22,
            "movement": -12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 25,
            "movement": 25
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 25,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 33,
            "movement": 55
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 37,
            "movement": 9
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 40,
            "movement": 18
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 43,
            "movement": 29
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 44,
            "movement": -33
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 52,
            "movement": -6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 59,
            "movement": -56
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 63,
            "movement": -38
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 67,
            "movement": 19
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 72,
            "movement": -46
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 96,
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
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": -3
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
            "position": 5,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": -2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": -5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 17,
            "movement": -5
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 17,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 22,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 23,
            "movement": -9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 24,
            "movement": -13
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 26,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 30,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 34,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 42,
            "movement": -13
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 48,
            "movement": -22
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 50,
            "movement": -33
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 50,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 52,
            "movement": -25
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 52,
            "movement": -13
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 56,
            "movement": -19
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 59,
            "movement": -22
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 63,
            "movement": 8
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 64,
            "movement": -7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 68,
            "movement": -28
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 79,
            "movement": -20
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 90,
            "movement": -34
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 132,
            "movement": -70
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 133,
            "movement": -61
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 134,
            "movement": -36
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 141,
            "movement": -61
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 146,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 176,
            "movement": -28
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 182,
            "movement": 5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 189,
            "movement": -47
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 194,
            "movement": 4
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
            "position": 11,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 23,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 24,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 29,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 29,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 30,
            "movement": 6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 30,
            "movement": -4
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 33,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 33,
            "movement": 2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 34,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 37,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 38,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 38,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 40,
            "movement": -10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 44,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 46,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 54,
            "movement": 3
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 59,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 60,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 73,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 79,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 85,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 86,
            "movement": 17
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 104,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 110,
            "movement": 7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 135,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 147,
            "movement": -69
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 157,
            "movement": -3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 5,
            "movement": 2
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": 18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": -8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 15,
            "movement": -4
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 19,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 19,
            "movement": 16
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 23,
            "movement": -14
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 24,
            "movement": -18
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 26,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 28,
            "movement": -17
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 35,
            "movement": -26
          },
          {
            "country": "US",
            "name": "United States",
            "position": 40,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 41,
            "movement": -15
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 43,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 50,
            "movement": -46
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 51,
            "movement": -4
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 52,
            "movement": -24
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 57,
            "movement": 43
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 82,
            "movement": -31
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 136,
            "movement": -131
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
            "position": 24,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": 17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 77,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": 57
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -69
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 150,
            "movement": -98
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 167,
            "movement": -54
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": 5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
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
            "position": 39,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 7
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
            "country": "YE",
            "name": "Yemen",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 47,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": 41
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -19
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 109,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": -22
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 118,
            "movement": 43
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 127,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
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
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 74,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 57
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 24
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 110,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": -28
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 139,
            "movement": 54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
            "movement": -63
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
            "position": 152,
            "movement": 21
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
            "position": 23,
            "movement": -1
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
            "position": 84,
            "movement": 1
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
            "position": 65,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": 7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 97,
            "movement": 25
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 58,
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
            "position": 115,
            "movement": 8
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
            "position": 145,
            "movement": -11
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
            "position": 25,
            "movement": 130
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": 22
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 62,
            "movement": -10
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 125,
            "movement": 57
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": 65
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 148,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": 33
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 152,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": -43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": -38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 185,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
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
            "position": 130,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 60,
            "movement": 116
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 133,
            "movement": 61
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 133,
            "movement": 32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 138,
            "movement": -38
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": 25
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
            "position": 23,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 18
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 180,
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
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
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
            "position": 19,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": 60
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": -56
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
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
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": -62
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 100,
            "movement": null,
            "status": "new"
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
            "position": 20,
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": 67
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -98
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 176,
            "movement": -17
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
            "position": 61,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 167,
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
            "position": 28,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": 7
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
            "country": "FJ",
            "name": "Fiji",
            "position": 114,
            "movement": -39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
            "movement": -53
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 191,
            "movement": -143
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 54,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
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
            "country": "SN",
            "name": "Senegal",
            "position": 73,
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 44,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 14
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
            "position": 166,
            "movement": 22
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
            "position": 45,
            "movement": -19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 49,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 132,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": 1
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
            "position": 72,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": -46
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 190,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": -21
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
            "position": 128,
            "movement": 10
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
            "position": 79,
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
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -39
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
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": -4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 74,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
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
            "country": "DM",
            "name": "Dominica",
            "position": 118,
            "movement": -8
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
            "movement": -1
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
            "position": 76,
            "movement": 5
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
            "position": 131,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": -30
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
            "position": 113,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -25
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
            "position": 48,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
            "movement": -27
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 8
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
            "position": 191,
            "movement": 4
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 167,
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
            "position": 152,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Laho II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 8
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
            "position": 60,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kabiyesi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Common Person",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": 29
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 8
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
    "title": "Born Winner",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 80,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Whiskey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 166,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
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
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 176,
            "movement": 16
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
            "position": 112,
            "movement": 80
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
            "position": 51,
            "movement": null,
            "status": "new"
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
            "position": 135,
            "movement": 3
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
            "position": 63,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Heaven's Gate",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
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
            "position": 123,
            "movement": 7
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
