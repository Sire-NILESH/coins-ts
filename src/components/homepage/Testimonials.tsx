import React from "react";

const Testimonials = () => {
  return (
    <section className="">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-lg md:text-2xl font-medium">
              "CrypTrack has completely revolutionized the way I navigate the
              cryptocurrency market. It provides a seamless and user-friendly
              experience for monitoring my favorite coins, analyzing trends.
              It's a game-changer, and I wouldn't trade without it!"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="profile"
            />
            <div className="flex items-center divide-x-2 divide-border">
              <div className="pr-3 font-medium">Micheal Gough</div>
              <div className="pl-3 text-sm font-light text-card-foreground/70">
                CEO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
