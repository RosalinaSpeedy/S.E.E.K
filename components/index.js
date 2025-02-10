import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";
import LogoutButton from "./common/header/LogoutButton";
import SeekIcon from "./common/header/SeekIcon";
import MainHeader from "./common/header/MainHeader";
import HomeButton from "./common/footer/HomeButton";
import MainFooter from "./common/footer/MainFooter";

// home screen
import Welcome from "./home/welcome/Welcome";
import Nearbyjobs from "./home/nearby/Nearbyjobs";
import Popularjobs from "./home/popular/Popularjobs";
import RoundedSquareButton from "./home/navigation/RoundedSquareButton";
import MainMenu from "./home/navigation/MainMenu";
import Quotes from "./home/quotes/Quotes"

// clocks
import Tracker from "./clocks/Tracker";
import AddictionTitle from "./clocks/AddictionTitle";
import ProgressLegend from "./clocks/ProgressLegend";
import RelapseButton from "./clocks/RelapseButton";
import ClockChangeButtons from "./clocks/ClockChangeButtons";
import TrackerCalendar from "./clocks/TrackerCalendar";

// journal
import AddButton from "./journal/AddButton";
import JournalEntries from "./journal/JournalEntries";
import NewEntryInput from "./journal/NewEntryInput";
import NewEntryTitle from "./journal/NewEntryTitle";
import JournalTitle from "./journal/JournalTitle";
import SaveButton from "./journal/SaveButton";
import CancelButton from "./journal/CancelButton";

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";

export {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard,
  LogoutButton,
  RoundedSquareButton,
  MainMenu,
  Quotes,
  HomeButton,
  SeekIcon,
  MainFooter,
  MainHeader,
  Tracker,
  ProgressLegend,
  AddictionTitle,
  RelapseButton,
  ClockChangeButtons,
  TrackerCalendar,
  AddButton,
  JournalEntries,
  JournalTitle,
  NewEntryTitle,
  NewEntryInput,
  SaveButton,
  CancelButton
};
