import axios from 'axios';

const url = `https://covid-19.nyc3.digitaloceanspaces.com/public/latest/owid-covid-latest.json`;
export interface CountryLatest {
  aged_65_older: number;
  aged_70_older: number;
  cardiovasc_death_rate: number;
  continent: string;
  diabetes_prevalence: number;
  excess_mortality: number | null;
  excess_mortality_cumulative: number | null;
  excess_mortality_cumulative_absolute: number | null;
  excess_mortality_cumulative_per_million: number | null;
  extreme_poverty: number | null;
  female_smokers: number | null;
  gdp_per_capita: number;
  handwashing_facilities: number;
  hosp_patients: number | null;
  hosp_patients_per_million: number | null;
  hospital_beds_per_thousand: number;
  human_development_index: number;
  icu_patients: number | null;
  icu_patients_per_million: number | null;
  last_updated_date: Date;
  life_expectancy: number;
  location: string;
  male_smokers: number | null;
  median_age: number;
  new_cases: number;
  new_cases_per_million: number;
  new_cases_smoothed: number;
  new_cases_smoothed_per_million: number;
  new_deaths: number;
  new_deaths_per_million: number;
  new_deaths_smoothed: number;
  new_deaths_smoothed_per_million: number;
  new_people_vaccinated_smoothed: number;
  new_people_vaccinated_smoothed_per_hundred: number;
  new_tests: number | null;
  new_tests_per_thousand: number | null;
  new_tests_smoothed: number | null;
  new_tests_smoothed_per_thousand: number | null;
  new_vaccinations: number | null;
  new_vaccinations_smoothed: number;
  new_vaccinations_smoothed_per_million: number;
  people_fully_vaccinated: number;
  people_fully_vaccinated_per_hundred: number;
  people_vaccinated: number;
  people_vaccinated_per_hundred: number;
  population: number;
  population_density: number;
  positive_rate: number | null;
  reproduction_rate: number;
  stringency_index: number;
  tests_per_case: number | null;
  tests_units: number | null;
  total_boosters: number | null;
  total_boosters_per_hundred: number | null;
  total_cases: number;
  total_cases_per_million: number;
  total_deaths: number;
  total_deaths_per_million: number;
  total_tests: number | null;
  total_tests_per_thousand: number | null;
  total_vaccinations: number;
  total_vaccinations_per_hundred: number;
  weekly_hosp_admissions: number | null;
  weekly_hosp_admissions_per_million: number | null;
  weekly_icu_admissions: number | null;
  weekly_icu_admissions_per_million: number | null;
}

export interface Data {
  date: Date;
  new_cases: number;
  new_cases_per_million: number;
  stringency_index: number;
  total_cases: number;
  total_cases_per_million: number;
}
export interface CountryData {
  aged_65_older: number;
  aged_70_older: number;
  cardiovasc_death_rate: number;
  continent: string;
  diabetes_prevalence: number;
  gdp_per_capita: number;
  handwashing_facilities: number;
  hospital_beds_per_thousand: number;
  human_development_index: number;
  life_expectancy: number;
  location: string;
  median_age: number;
  population: number;
  population_density: number;
  data: Data[];
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {};
