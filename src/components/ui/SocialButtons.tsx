import React from "react";
import appIcons from "../../config/appIcons";

interface IProps {
  homePage?: string;
  officialForum_url?: string;
  blockchain_site_url?: string;
  chat_url?: string;
  facebook_username?: string;
  twitter_username?: string;
  subreddit?: string;
  github_repo?: string;
  telegram_channel_identifier?: string;
  bitbucket_repo?: string;
  blockchain_site?: string;
  official_fork_url?: string;
}

const SocialLink = ({
  name,
  url,
  children,
}: {
  name: string;
  url: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    >
      {children}

      <span className="sr-only">{name}</span>
    </a>
  );
};

const SocialButtons: React.FC<IProps> = (props) => {
  return (
    <div>
      <div className="flex mt-5 space-x-6 sm:justify-center">
        {props.homePage ? (
          <SocialLink url={props.homePage} name="Home page">
            {appIcons.social_home}
          </SocialLink>
        ) : null}

        {props.blockchain_site_url ? (
          <SocialLink url={props.blockchain_site_url} name="Blockchain page">
            {appIcons.social_link}
          </SocialLink>
        ) : null}

        {props.officialForum_url ? (
          <SocialLink url={props.officialForum_url} name="Official forum page">
            {appIcons.social_chatForum}
          </SocialLink>
        ) : null}

        {props.facebook_username ? (
          <SocialLink
            url={`https://facebook.com/${props.facebook_username}`}
            name="Facebook page"
          >
            {appIcons.social_facebook}
          </SocialLink>
        ) : null}

        {props.twitter_username ? (
          <SocialLink
            url={`https://twitter.com/${props.twitter_username}`}
            name="Twitter page"
          >
            {appIcons.social_twitter}
          </SocialLink>
        ) : null}

        {props.subreddit ? (
          <SocialLink url={props.subreddit} name="Subreddit page">
            {appIcons.social_reddit}
          </SocialLink>
        ) : null}

        {props.telegram_channel_identifier ? (
          <SocialLink
            url={`https://t.me/${props.telegram_channel_identifier}`}
            name="Telegram Page"
          >
            {appIcons.social_telegram}
          </SocialLink>
        ) : null}

        {props.github_repo ? (
          <SocialLink url={props.github_repo} name="Github Repository">
            {appIcons.social_github}
          </SocialLink>
        ) : null}

        {props.bitbucket_repo ? (
          <SocialLink url={props.bitbucket_repo} name="Bitbucket Repository">
            {appIcons.social_bitbucket}
          </SocialLink>
        ) : null}
      </div>
    </div>
  );
};

export default SocialButtons;
