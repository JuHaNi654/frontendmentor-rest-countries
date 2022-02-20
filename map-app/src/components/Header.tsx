type HeaderProps = {
  children: JSX.Element;
};

const Header = ({ children }: HeaderProps): JSX.Element => {
  return (
    <header className="dark:bg-primary-blue-600 relative py-2 px-2 shadow-md flex justify-between lg:px-16">
      <h1 className="dark:text-white py-5 text-lg font-bold lg:text-2xl">
        Where in the world?
      </h1>
      {children}
    </header>
  );
};

export default Header;
