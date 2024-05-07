import React from "react";
import WrapperMovies from "../pages/movies/WrapperMovies";
import MovieArtistDetailWrapper from "../pages/movies/moviedetails/MovieDetailPage";
import EventWrapper from "../pages/events/EventWrapper";
import BookingConfirmed from "../pages/booking/bookingConfirmation/BookingConfirmed";
import ShowsPage from "../pages/booking/bookingPage/ShowsPage";
import ArtistWrapper from "../pages/artists/ArtistWrapper";
import SearchApp from "../pages/homepage/SearchBar";

export const navList = [
  {
    path: "/",
    name: "Home",
    element: <SearchApp />,
    isMenu: true,
    isPrivate: false,
  },
  // { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
  {
    path: "/movies",
    name: "Movies",
    element: <WrapperMovies />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/movie/:movieId",
    name: "Movie Details",
    element: <MovieArtistDetailWrapper />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/events",
    name: "Events",
    element: <EventWrapper />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/artist",
    name: "Artist",
    element: <ArtistWrapper />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/shows",
    name: "Shows",
    element: <ShowsPage />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/events/booking/event/:id",
    name: "Shows",
    element: <ShowsPage />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/bookingConfirmation",
    name: "BookingConfirmation",
    element: <BookingConfirmed />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/movies/booking/movies/:id",
    name: "Shows",
    element: <ShowsPage />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/bookingConfirmation",
    name: "BookingConfirmation",
    element: <BookingConfirmed />,
    isMenu: false,
    isPrivate: false,
  },
  // { path:     "/artist/:artistId",    name: "Artist",  element: <ArtistWrapper/>,      isMenu: false,    isPrivate: false  },
];
