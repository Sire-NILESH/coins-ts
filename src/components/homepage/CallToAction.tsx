import ActionBtns from "./ActionBtns";

const CallToAction = () => {
  return (
    <section className="px-4 py-8 lg:py-16">
      <div className="bg-secondary py-8 px-4 mx-auto max-w-3xl rounded-3xl lg:py-16 lg:px-6 my-14">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl">
            Create free account now
          </h2>
          <p className="text-foreground/70 mx-auto mb-8 max-w-2xl font-light md:mb-12 sm:text-xl">
            Come join now and take charge of your crypto journey with real-time
            insights, personalized watchlists, and a smarter way to navigate the
            crypto market.
          </p>

          <div className="flex justify-center">
            <ActionBtns />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
