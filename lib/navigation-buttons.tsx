import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faFileAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faHome} />
  },
  {
    label: "Posts",
    path: "/posts",
    icon: <FontAwesomeIcon icon={faCompass} />
  },
  {
    label: "About",
    path: "/about",
    icon: <FontAwesomeIcon icon={faUser} />
  },
  {
    label: "Resume",
    path: "/resume",
    icon: <FontAwesomeIcon icon={faFileAlt} />
  }
];

export default navButtons;