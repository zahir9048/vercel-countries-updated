import Link from "next/link";

export default function CountryName(result: { country_obj?: { name: string; population: number; capital: string }; url: string }) {
    
    return (
      <div>
        <div>
          {result.country_obj ? (
            <>
              <h1>Country Name: {result.country_obj.name}</h1>
              <h1>Country Population: {result.country_obj.population}</h1>
              <h1>Country Capital: {result.country_obj.capital}</h1>
            </>
          ) : (
            <h1>
              {result.url} not found in the database. Please check the
              parameter name in the URL.
            </h1>
          )}
        </div>
        <div>
          <li className="cust_button">
            <Link className="" href="/">
            Back
            </Link>
          </li>
          
        </div>
      </div>
    );
  }