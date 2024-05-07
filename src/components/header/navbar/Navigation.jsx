import CompletedMatchesPage from "../../../pages/matches/completed matches/CompletedMatchesPage";
import UpcommingMatchesPage from "../../../pages/matches/upcoming matches/UpcomingMatchesPage";
import PlayersWrapper from "../../../pages/players/PlayersWrapper";
import TeamsWrapper from "../../../pages/teams/TeamsWrapper";
import HomePage from "../../../pages/home/HomePage";

export const items = [
  {
    key: "1",
    label: "home",
    path: `/`,
    element: <HomePage />,
    isMenu: true,
    isPrivate: false,
  },
  {
    key: "2",
    label: "matches",
    path: `/`,
    isMenu: true,
    isPrivate: true,
    submenu: [
      {
        key: "upcoming",
        label: "upcoming",
        path: `/matches/upcomingMatches`,
        element: <UpcommingMatchesPage />,
      },
      {
        key: "completed",
        label: "completed",
        path: `/matches/completedMatches`,
        element: <CompletedMatchesPage />,
      },
    ],
  },
  {
    key: "3",
    label: "teams",
    path: `/teams`,
    element: <TeamsWrapper />,
    isMenu: true,
    isPrivate: false,
  },
  {
    key: "4",
    label: "players",
    path: `/players`,
    element: <PlayersWrapper />,
    isMenu: true,
    isPrivate: false,
  },
];
