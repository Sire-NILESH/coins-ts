import Brand from "../ui/Brand";

type Props = {
  headerSubtitle: string;
};

const AuthPageHeader = ({ headerSubtitle }: Props) => {
  return (
    <header className="space-y-2 flex flex-col items-center justify-center">
      <div className="mt-10">
        <Brand />
      </div>
      <p className="font-normal text-sm text-tertiary text-center">
        {headerSubtitle}
      </p>
    </header>
  );
};

export default AuthPageHeader;
