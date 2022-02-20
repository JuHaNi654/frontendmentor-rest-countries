import { Link } from "react-router-dom";

interface Props {
  country: { [k: string]: any };
}

const CountryCard = ({ country }: Props): JSX.Element => {
  return (
    <article className="dark:bg-primary-blue-600 dark:text-white relative rounded-md overflow-hidden h-full shadow-md w-full max-w-[350px] flex flex-col">
      <img
        src={country.flags.png}
        alt={country.name.common}
        width="200"
        className="w-full h-[200px] object-cover"
        loading="lazy"
      />
      <div className="px-5 py-10 flex-grow relative">
        <h2 className="font-bold text-2xl mb-4">{country.name.common}</h2>
        <p className="text-md">
          <span className="font-semibold">Population:</span>{" "}
          <span>
            {new Intl.NumberFormat("en-en").format(country.population)}
          </span>
        </p>
        <p className="text-md">
          <span className="font-semibold">Region</span>{" "}
          <span>{country.region}</span>
        </p>
        <p className="text-md">
          <span className="font-semibold">Capital</span>{" "}
          <span>{country.capital || "-"}</span>
        </p>
        <Link className="absolute inset-0" to={`/${country.name.common}`} />
      </div>
    </article>
  );
};

export default CountryCard;
