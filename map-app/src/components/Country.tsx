import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import { isEmpty } from "lodash";
import { useState, useEffect } from "react";

import CountryProperty from "./CountryProperty";
import BorderCountry from "./BorderCountry";

const getBorderCountrys = (
  countrys: Array<any>,
  selectedCountry: { [K: string]: any }
): Array<any> => {
  const { borders } = selectedCountry;
  return countrys.filter((country) => borders.includes(country.cioc));
};

interface CountryProps {
  countrys: Array<any>;
}
const Country = ({ countrys }: CountryProps): JSX.Element => {
  const params = useParams();
  const [borders, setBorders] = useState<Array<any>>([]);
  const [currency, setCurrency] = useState("");
  const [nativeName, setNativeName] = useState("");
  const [country, setCountry] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${params.country}`
        );
        const [country]: any = await res.json();

        if (!isEmpty(country) && !isEmpty(countrys)) {
          const borderCountrys = getBorderCountrys(countrys, country);
          setBorders([...borderCountrys]);
          setCountry(country);

          if (country.currencies) {
            const currency = Object.values(country.currencies)[0] as any;
            setCurrency(currency.name);
          }

          if (country?.name?.nativeName) {
            const selectedName: any = Object.values(country.name.nativeName)[0];
            setNativeName(selectedName.official);
          }
        }

        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.country]);

  return (
    <>
      <div className="mb-10">
        <Link
          to="/"
          className="w-fit dark:bg-primary-blue-600 dark:text-white flex items-center gap-2 shadow-md rounded py-2 px-8"
        >
          <svg
            className="dark:stroke-white"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="9" y2="16" />
            <line x1="5" y1="12" x2="9" y2="8" />
          </svg>
          <span>Back</span>
        </Link>
      </div>
      <Loading isLoading={isLoading}>
        <>
          {!isEmpty(country) && (
            <section className="flex flex-wrap justify-center align-middle">
              <div className="p-10  flex align-middle">
                <img
                  className="object-contain h-full"
                  src={country.flags.png}
                  alt={country.flag}
                  width="500"
                />
              </div>
              <div className="dark:text-white p-10 flex flex-col align-middle justify-center">
                <h2 className="font-bold text-2xl my-4">
                  {country.name.common}
                </h2>
                <ul className="grid grid-cols-2 gap-x-7">
                  <CountryProperty label="Native Name" value={nativeName} />
                  <CountryProperty
                    label="Top Level Domain"
                    value={country.tld.join(",")}
                  />
                  <CountryProperty
                    label="Population"
                    value={new Intl.NumberFormat("en-en").format(
                      country.population
                    )}
                  />
                  <CountryProperty label="Currencies" value={currency || "-"} />
                  <CountryProperty label="Region" value={country.region} />
                  <CountryProperty
                    label="Languages"
                    value={Object.values(country.languages).join(",")}
                  />
                  <CountryProperty
                    label="Sub Regions"
                    value={country.subregion || "-"}
                  />
                  <CountryProperty
                    label="Capital"
                    value={country.capital || "-"}
                  />
                </ul>
                {!isEmpty(borders) && <BorderCountry borders={borders} />}
              </div>
            </section>
          )}
        </>
      </Loading>
    </>
  );
};

export default Country;
