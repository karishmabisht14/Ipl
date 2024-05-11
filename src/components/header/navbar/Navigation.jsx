import CompletedMatchesPage from "../../../pages/matches/completed matches/CompletedMatchesPage";
import UpcommingMatchesPage from "../../../pages/matches/upcoming matches/UpcomingMatchesPage";
import PlayersWrapper from "../../../pages/players/PlayersWrapper";
import TeamsWrapper from "../../../pages/teams/TeamsWrapper";
import HomePage from "../../../pages/home/HomePage";

export const items = [
  {
    key: "1",
    label: "Home",
    path: `/`,
    element: <HomePage />,
    isMenu: true,
    isPrivate: false,
  },
  {
    key: "2",
    label: "Matches",
    path: `/`,
    isMenu: true,
    isPrivate: false,
    submenu: [
      {
        key: "upcoming",
        label: "Upcoming Matches",
        path: `/matches/upcomingMatches`,
        element: <UpcommingMatchesPage />,
      },
      {
        key: "completed",
        label: "Completed Matches",
        path: `/matches/completedMatches`,
        element: <CompletedMatchesPage />,
      },
    ],
  },
  {
    key: "3",
    label: "Teams",
    path: `/teams`,
    element: <TeamsWrapper />,
    isMenu: true,
    isPrivate: false,
  },
  {
    key: "4",
    label: "Players",
    path: `/players`,
    element: <PlayersWrapper />,
    isMenu: true,
    isPrivate: false,
  },
];
