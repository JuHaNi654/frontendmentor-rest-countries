import { useState, useEffect } from "react";
import Filters from "./Filters";
import CountryCard from "./CountryCard";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import { isEmpty } from "lodash";

interface RegionFilters {
  value: string | null;
  type: "region" | "countryInput";
}

interface CountryListingProps {
  setCountrys: Function;
}
const CountryListing = ({ setCountrys }: CountryListingProps): JSX.Element => {
  const { data, isLoading } = useFetch("https://restcountries.com/v3.1/all");
  const [countryListing, setCountryListing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (!isLoading) {
      setCountryListing(data);
      setLoading(false);
      setCountrys(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, data]);

  const fetchWithFilters = (data: RegionFilters) => {
    let path = "all";

    if (data.type === "region" && !isEmpty(data.value)) {
      path = `region/${data.value}`;
    } else if (data.type === "countryInput" && !isEmpty(data.value)) {
      path = `name/${data.value}`;
    }

    setLoading(true);
    fetch(`https://restcountries.com/v3.1/${path}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryListing(data);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Filters fc={fetchWithFilters} />
      <Loading isLoading={loading}>
        {!isEmpty(countryListing) ? (
          <section className="mt-14 grid gap-10 auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
            {countryListing.map((country: any, i: number) => {
              return <CountryCard key={i} country={country} />;
            })}
          </section>
        ) : (
          <div>No Country found</div>
        )}
      </Loading>
    </>
  );
};

export default CountryListing;
