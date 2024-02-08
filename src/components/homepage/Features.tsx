import { AiOutlineStar } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaBitcoin, FaChartArea, FaUserCircle } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";

const features = [
  {
    title: "Trending Coins",
    description:
      "Stay informed about the latest trends in the market by exploring a curated list of trending coins, helping you identify potential opportunities.",
    icon: ({ className }: { className: string }) => (
      <IoIosTrendingUp className={className} />
    ),
  },
  {
    title: "Watchlist Crypto Coins",
    description:
      "Create and manage your personalized watchlist of crypto coins, keeping a close eye on your selected assets.",
    icon: ({ className }: { className: string }) => (
      <AiOutlineStar className={className} />
    ),
  },
  {
    title: "Crypto Coin Charts",
    description:
      "Access detailed and interactive charts for crypto coins, allowing you to analyze historical data and make informed decisions.",
    icon: ({ className }: { className: string }) => (
      <FaChartArea className={className} />
    ),
  },
  {
    title: "Coin Exchange Data",
    description:
      "Access real-time data from various coin exchanges, ensuring you have up-to-the-minute information on prices, trading volumes, and more.",
    icon: ({ className }: { className: string }) => (
      <BsCurrencyExchange className={className} />
    ),
  },
  {
    title: "Account",
    description:
      "Manage and personalize your account settings, including preferences, security features, and notifications.",
    icon: ({ className }: { className: string }) => (
      <FaUserCircle className={className} />
    ),
  },
  {
    title: "Detailed Coin Info",
    description:
      "Explore comprehensive information about individual crypto coins, including market cap, circulating supply, historical performance, and more.",
    icon: ({ className }: { className: string }) => (
      <FaBitcoin className={className} />
    ),
  },
];

const Features = () => {
  return (
    <section className="bg-primary dark:bg-slate-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
        <div className="max-w-screen-md rounded-2xl">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-medium text-primary">
            Designed for Crypto enthusiasts like you
          </h2>
          <p className="text-secondary text-base">
            Here at CrypTrack we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        <div className="mt-8 lg:mt-16 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((feature, i) => (
            <div key={i} className="rounded-xl p-4 border dark:border-gray-700">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-700">
                {
                  <feature.icon className="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-primary-300" />
                }
              </div>
              <h3 className="mb-2 text-xl font-medium dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
