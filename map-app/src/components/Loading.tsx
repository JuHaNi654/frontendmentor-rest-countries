interface Props {
  isLoading: boolean;
  children: JSX.Element;
}

const Loading = ({ isLoading, children }: Props): JSX.Element => {
  if (isLoading) {
    return (
      <div className="mt-20">
        <h2 className="dark:text-white text-3xl text-center">Loading...</h2>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;
