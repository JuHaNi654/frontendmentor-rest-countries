interface CountryPropertyProps {
  label: string;
  value: string | number;
}
const CountryProperty = ({
  label,
  value,
}: CountryPropertyProps): JSX.Element => {
  return (
    <li className="text-md py-2">
      <span className="font-semibold inline-block pr-2">{label}:</span>
      <span className="inline-block">{value}</span>
    </li>
  );
};

export default CountryProperty;
