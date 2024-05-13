import appIcons from "../config/appIcons";

const ErrorPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="min-h-screen mx-auto container flex flex-col items-center justify-center">
        <appIcons.error />
        <h2 className="text-foreground/80 text-3xl text-center">
          Error occured
        </h2>
        <p className="text-center max-w-xl text-foreground/70 mb-10">
          Uh oh, something really unexpected happened. We recommend you to press
          the reload button below or try again later if the issue persists
        </p>

        <a href="/">
          <div className="rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center space-x-2  px-4 py-3">
            <appIcons.Refresh className="h-4 w-4 text-white dark:text-black" />
            <p className="text-center text-sm">Reload</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
