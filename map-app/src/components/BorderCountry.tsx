import { Link } from "react-router-dom";

interface Props {
  borders: Array<any>;
}

const BorderCountry = ({ borders }: Props): JSX.Element => {
  return (
    <div className="mt-10 flex gap-3 align-middle">
      <h3 className="font-semibold m-0">Border countries: </h3>
      <div className="flex flex-wrap gap-3">
        {borders.map((border, i) => {
          return (
            <Link
              key={i}
              className="dark:bg-primary-blue-600 py-1 px-3 text-center shadow"
              to={`/${border.name.common}`}
            >
              {border.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BorderCountry;
