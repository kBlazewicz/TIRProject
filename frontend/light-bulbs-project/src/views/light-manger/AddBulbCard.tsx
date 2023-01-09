import React from 'react';
import { Card } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';



export const AddBulbCard = () => {
    return (
        <Card sx={{ width: 200, height: 320 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'inherit' }}>
                <AddIcon sx={{ fontSize: 40, color: "grey" }} />
            </Box>
        </Card >
    );
}