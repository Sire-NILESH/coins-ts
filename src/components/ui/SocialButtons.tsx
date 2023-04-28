import React from "react";
import { BsFacebook, BsGithub, BsReddit, BsTwitter } from "react-icons/bs";
import { IoLogoBitbucket } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdForum } from "react-icons/md";
import { BiLink } from "react-icons/bi";

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
{
  /* <BsFacebook></BsFacebook> */
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
      <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        {props.homePage ? (
          <SocialLink url={props.homePage} name="Home page">
            <AiFillHome
              className="w-[1.25rem] h-[1.25rem]"
              fillRule="evenodd"
              fill="currentColor"
            />{" "}
          </SocialLink>
        ) : null}

        {props.blockchain_site_url ? (
          <SocialLink url={props.blockchain_site_url} name="Blockchain page">
            <BiLink
              className="w-[1.25rem] h-[1.25rem]"
              fillRule="evenodd"
              fill="currentColor"
            />{" "}
          </SocialLink>
        ) : null}

        {props.officialForum_url ? (
          <SocialLink url={props.officialForum_url} name="Official forum page">
            <MdForum
              className="w-[1.25rem] h-[1.25rem]"
              fillRule="evenodd"
              fill="currentColor"
            />{" "}
          </SocialLink>
        ) : null}

        {props.facebook_username ? (
          <SocialLink
            url={`https://facebook.com/${props.facebook_username}`}
            name="Facebook page"
          >
            <BsFacebook
              className="w-5 h-5"
              fillRule="evenodd"
              fill="currentColor"
            />{" "}
          </SocialLink>
        ) : null}

        {props.twitter_username ? (
          <SocialLink
            url={`https://twitter.com/${props.twitter_username}`}
            name="Twitter page"
          >
            <BsTwitter
              className="w-5 h-5"
              fillRule="evenodd"
              fill="currentColor"
            />{" "}
          </SocialLink>
        ) : null}

        {props.subreddit ? (
          <SocialLink url={props.subreddit} name="Subreddit page">
            <BsReddit
              className="w-5 h-5"
              fillRule="evenodd"
              fill="currentColor"
            />{" "}
          </SocialLink>
        ) : null}

        {props.telegram_channel_identifier ? (
          <SocialLink
            url={`https://t.me/${props.telegram_channel_identifier}`}
            name="Telegram Page"
          >
            <FaTelegramPlane
              className="w-5 h-5"
              fillRule="evenodd"
              fill="currentColor"
            />{" "}
          </SocialLink>
        ) : null}

        {props.github_repo ? (
          <SocialLink url={props.github_repo} name="Github Repository">
            <BsGithub
              className="w-5 h-5"
              fillRule="evenodd"
              fill="currentColor"
            />{" "}
          </SocialLink>
        ) : null}

        {props.bitbucket_repo ? (
          <SocialLink url={props.bitbucket_repo} name="Bitbucket Repository">
            <IoLogoBitbucket
              className="w-5 h-5"
              fillRule="evenodd"
              fill="currentColor"
            />{" "}
          </SocialLink>
        ) : null}
      </div>
    </div>
  );
};

export default SocialButtons;
