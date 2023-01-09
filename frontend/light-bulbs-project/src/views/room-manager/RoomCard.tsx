import React from 'react';
import BedIcon from '@mui/icons-material/Bed';
import { Card, CardContent, CardHeader } from '@mui/material';

export const RoomCard = ({ description }: { description: any }) => {
    return (
        <Card sx={{ width: 120, height: 120 }}>
            <CardHeader subheader={description} />
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BedIcon />
            </CardContent>
        </Card >
    );
}