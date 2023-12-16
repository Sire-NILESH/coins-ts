import { CiViewBoard, CiViewTable } from "react-icons/ci";
import { BsCurrencyExchange } from "react-icons/bs";
import { BiMedal, BiUser } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineIdentification } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { MdTrendingUp } from "react-icons/md";
import { FaGithub, FaReact, FaUserCircle } from "react-icons/fa";
import { TbError404 } from "react-icons/tb";

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
  user: (
    <FaUserCircle className="w-20 h-20 mx-2 rounded-full border border-primary mt-1 text-primary" />
  ),
};

export default appIcons;
