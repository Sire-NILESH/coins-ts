import ReactHtmlParser from "react-html-parser";
import { CoinInfo } from "../../../typing";
import SocialButtons from "../ui/SocialButtons";

type Props = {
  coin: CoinInfo;
};

const CoinDescriptionAndSocials = ({ coin }: Props) => {
  return (
    <div className="block w-full md:w-[95%] space-y-2 mb-6 py-6 px-2 lg:px-4 mx-auto rounded-2xl">
      <div className="flex items-center">
        <div className="w-8 min-w-10 flex-shrink-0 mr-2 sm:mr-3">
          <img
            className="rounded-full bg-white"
            src={coin.image.small}
            width="40"
            height="40"
            alt={coin.name}
          />
        </div>
        <div className="flex space-x-3 items-center">
          <p className="font-medium text-primary text-2xl">{coin.name}</p>
          <p className="font-medium uppercase text-2xl text-tertiary">
            {" "}
            {coin.symbol}
          </p>
        </div>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
        {ReactHtmlParser(coin?.description.en.split(". ")[0])}.{" "}
        {ReactHtmlParser(coin?.description.en.split(". ")[1])}.
        {ReactHtmlParser(coin?.description.en.split(". ")[2])}.
        {ReactHtmlParser(coin?.description.en.split(". ")[3])}.
      </p>

      <SocialButtons
        homePage={coin.links.homepage[0]}
        blockchain_site_url={coin.links.blockchain_site[0]}
        officialForum_url={coin.links.official_forum_url[0]}
        facebook_username={coin.links.facebook_username}
        twitter_username={coin.links.twitter_screen_name}
        subreddit={coin.links.subreddit_url}
        github_repo={coin.links.repos_url.github[0]}
        bitbucket_repo={coin.links.repos_url.bitbucket[0]}
      />
    </div>
  );
};

export default CoinDescriptionAndSocials;
