import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';



export const AddRoomCard = () => {
    return (
        <Card sx={{ width: 120, height: 120 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'inherit' }}>
                <AddIcon sx={{ fontSize: 30, color: "grey" }} />
            </Box>
        </Card >
    );
}