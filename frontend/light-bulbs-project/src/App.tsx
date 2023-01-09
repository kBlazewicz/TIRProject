import React from 'react';
import { ControlPanel } from './views/light-manger/ControlPanel';
import { RoomPanel } from './views/room-manager/RoomPanel';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* <ControlPanel></ControlPanel> */}
      <RoomPanel></RoomPanel>
    </Box>
  );
}

export default App;
