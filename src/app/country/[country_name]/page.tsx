import "@/app/globals.css";
import Country from "@/app/components/country";

export default function CountryName({ params }: { params: { country_name: string }; }) {

  const countries: {
    name: string;
    population: number;
    capital: string;
  }[] = [
    {
      name: "Pakistan",
      population: 2166,
      capital: "Islamabad",
    },
    {
      name: "India",
      population: 765464,
      capital: "Delhi",
    },
  ];

  function findCountry( name: string ): { name: string; population: number; capital: string } | undefined {
    return countries.find(
      (country) => name.toLowerCase() == country.name.toLowerCase()
    );
  }

  const result = findCountry(params.country_name);

  return (
    <>
      <Country country_obj = {result} url = {params.country_name} />
    </>
  );
}
