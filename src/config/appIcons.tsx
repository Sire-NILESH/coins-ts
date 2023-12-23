import { CiViewBoard, CiViewTable } from "react-icons/ci";
import {
  BsCurrencyExchange,
  BsFacebook,
  BsGithub,
  BsReddit,
  BsTwitter,
} from "react-icons/bs";
import { BiLink, BiMedal, BiUser } from "react-icons/bi";
import { IoHomeOutline, IoLogoBitbucket } from "react-icons/io5";
import { HiOutlineIdentification } from "react-icons/hi";
import { FiLogIn, FiRefreshCw } from "react-icons/fi";
import { MdForum, MdTrendingUp } from "react-icons/md";
import {
  FaGithub,
  FaReact,
  FaTelegramPlane,
  FaUserCircle,
} from "react-icons/fa";
import { TbError404 } from "react-icons/tb";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";

type Props = {
  className?: string;
};

const appIcons = {
  home: <IoHomeOutline className="h-5 w-5" />,
  overview: <CiViewBoard className="h-5 w-5" />,
  tables: <CiViewTable className="h-5 w-5" />,
  topCoins: <BiMedal className="h-5 w-5" />,
  trending: <MdTrendingUp className="h-5 w-5" />,
  exchanges: <BsCurrencyExchange className="h-5 w-5" />,
  watchlist: <BiUser className="h-5 w-5" />,
  notFound: <TbError404 className="h-5 w-5" />,
  register: <HiOutlineIdentification className="h-5 w-5" />,
  login: <FiLogIn className="h-5 w-5" />,
  github: <FaGithub className="w-5 h-5" />,
  react: <FaReact className="text-sky-400 h-10 w-10" />,
  error: <RiErrorWarningLine className="h-10 w-10 text-red-500" />,
  Refresh: ({ className }: Props) => (
    <FiRefreshCw className={"text-secondary " + className} />
  ),
  user: (
    <FaUserCircle className="w-20 h-20 mx-2 rounded-full border border-primary mt-1 text-primary" />
  ),

  // social icons
  social_home: (
    <AiFillHome className="w-5 h-5" fillRule="evenodd" fill="currentColor" />
  ),
  social_link: (
    <BiLink className="w-5 h-5" fillRule="evenodd" fill="currentColor" />
  ),
  social_chatForum: (
    <MdForum className="w-5 h-5" fillRule="evenodd" fill="currentColor" />
  ),
  social_facebook: (
    <BsFacebook className="w-5 h-5" fillRule="evenodd" fill="currentColor" />
  ),
  social_twitter: (
    <BsTwitter className="w-5 h-5" fillRule="evenodd" fill="currentColor" />
  ),
  social_reddit: (
    <BsReddit className="w-5 h-5" fillRule="evenodd" fill="currentColor" />
  ),
  social_telegram: (
    <FaTelegramPlane
      className="w-5 h-5"
      fillRule="evenodd"
      fill="currentColor"
    />
  ),
  social_github: (
    <BsGithub className="w-5 h-5" fillRule="evenodd" fill="currentColor" />
  ),
  social_bitbucket: (
    <IoLogoBitbucket
      className="w-5 h-5"
      fillRule="evenodd"
      fill="currentColor"
    />
  ),
};

export default appIcons;
