import React from 'react';
import { Stack } from '@mui/system';
import { RoomCard } from './RoomCard';
import { AddRoomCard } from './AddRoomCard';

export const RoomPanel = () => {
    return (
        <Stack direction="row" spacing={5}>
            <RoomCard description='Pierwszy' />
            <RoomCard description='Drugi' />
            <AddRoomCard></AddRoomCard>
        </Stack>
    );
}