import React from "react";
import Formation from "./components/Formation";
import ProjectRow from "./components/ProjectRow";
import Divider from '@mui/material/Divider';
import Presentation from "./components/Presentation";

function App() {
  return (
    <div>
        <Divider>Présentation</Divider>
        <Presentation/>
        <Divider>Formation et Experience</Divider>
        <Formation/>
        <Divider>Projets</Divider>
        <ProjectRow />
    </div>
  );
}

export default App;
