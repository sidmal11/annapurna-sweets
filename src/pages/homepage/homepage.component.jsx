import React from "react";

import Directory from "../../components/directory/directory.component";

// import "./homepage.styles.scss";
import { HomePageContainer } from "./homepage.styles";

const HomePage = ({ history }) => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
