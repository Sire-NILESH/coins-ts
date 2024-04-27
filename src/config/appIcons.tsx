import { AiFillHome, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiLink, BiLogOut, BiMedal, BiUser } from "react-icons/bi";
import {
  BsCalendar4Week,
  BsClock,
  BsCurrencyExchange,
  BsFacebook,
  BsGithub,
  BsReddit,
  BsTwitter,
} from "react-icons/bs";
import { CiViewBoard } from "react-icons/ci";
import {
  FaGithub,
  FaGoogle,
  FaReact,
  FaTelegramPlane,
  FaUserCircle,
} from "react-icons/fa";
import {
  FiArrowLeft,
  FiArrowRight,
  FiLogIn,
  // FiRefreshCw,
} from "react-icons/fi";
import { HiOutlineIdentification } from "react-icons/hi";
import {
  IoIosSearch,
  IoIosTrendingDown,
  IoIosTrendingUp,
} from "react-icons/io";
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoHomeOutline,
  IoLogoBitbucket,
} from "react-icons/io5";
import { MdClose, MdForum, MdRefresh, MdTrendingUp } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbError404 } from "react-icons/tb";
import { PiBinocularsLight } from "react-icons/pi";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

type Props = {
  className?: string;
};

const appIcons = {
  home: <IoHomeOutline className="h-5 w-5" />,
  overview: <CiViewBoard className="h-5 w-5" />,
  explore: <PiBinocularsLight className="h-5 w-5" />,
  topCoins: ({ className }: Props) => (
    <BiMedal className={"h-5 w-5 " + className} />
  ),
  trending: ({ className }: Props) => (
    <MdTrendingUp className={"h-5 w-5 " + className} />
  ),
  exchanges: ({ className }: Props) => (
    <BsCurrencyExchange className={"h-5 w-5 " + className} />
  ),
  watchlist: <BiUser className="h-5 w-5" />,
  notFound: <TbError404 className="h-5 w-5" />,
  register: <HiOutlineIdentification className="h-5 w-5" />,
  login: <FiLogIn className="h-5 w-5" />,
  logout: <BiLogOut className="h-5 w-5" />,
  github: <FaGithub className="w-5 h-5" />,
  google: <FaGoogle className="text-primary w-5 h-5" />,
  react: <FaReact className="text-blue-200 h-8 w-8 2xl:h-10 2xl:w-10" />,
  error: ({ className }: Props) => (
    <RiErrorWarningLine className={"h-10 w-10 text-red-500 " + className} />
  ),
  calendar: <BsCalendar4Week className="inline h-3 w-3 text-tertiary" />,
  clock: <BsClock className="inline h-4 w-4 text-tertiary" />,
  starOutline: (
    <AiOutlineStar className="pointer-events-none mx-auto h-4 w-4 text-tertiary" />
  ),
  starFill: (
    <AiFillStar className="pointer-events-none mx-auto h-4 w-4 text-yellow-500" />
  ),
  arrowRight: <FiArrowRight className="w-5 h-5" />,
  arrowLeft: <FiArrowLeft className="w-5 h-5" />,
  chevronDown: <IoChevronDownOutline className="w-5 h-5" />,
  chevronUp: <IoChevronUpOutline className="w-5 h-5" />,
  triangleUp: <RxTriangleUp className="text-green-600" />,
  triangleDown: <RxTriangleDown className="text-red-600" />,
  trendingDown: <IoIosTrendingDown className="w-5 h-5 text-red-500" />,
  trendingUp: <IoIosTrendingUp className="w-5 h-5 text-green-600" />,
  close: <MdClose className="w-5 h-5 text-white" />,
  Refresh: ({ className }: Props) => (
    <MdRefresh className={"text-foreground " + className} />
  ),
  Search: ({ className }: Props) => (
    <IoIosSearch className={"text-white " + className} />
  ),
  user_lg: (
    <FaUserCircle className="w-20 h-20 mx-2 rounded-full border border-primary mt-1 text-primary" />
  ),

  User: ({ className }: Props) => (
    <FaUserCircle className={"text-foreground " + className} />
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
