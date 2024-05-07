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
    component: <HomePage />,
    isMenu: true,
    isPrivate: false,
  },
  {
    key: "2",
    label: "matches",
    path: `/`,
    component: <HomePage />,
    isMenu: true,
    isPrivate: true,
    submenu: [
      {
        key: "upcoming",
        label: "upcoming",
        path: `/upcomingMatches`,
        component: <CompletedMatchesPage />,
      },
      {
        key: "completed",
        label: "completed",
        path: `/completedMatches`,
        component: <UpcommingMatchesPage />,
      },
    ],
  },
  {
    key: "3",
    label: "teams",
    path: `/teams`,
    component: <TeamsWrapper />,
    isMenu: true,
    isPrivate: false,
  },
  {
    key: "4",
    label: "players",
    path: `/players`,
    component: <PlayersWrapper />,
    isMenu: true,
    isPrivate: false,
  },
];
