import React from 'react';
import { LightBulbCard } from './LightBulbCard';
import { Stack } from '@mui/system';
import { AddBulbCard } from './AddBulbCard';

export const ControlPanel = () => {
    return (
        <Stack direction="row" spacing={5}>
            <LightBulbCard description='Pierwsza' />
            <LightBulbCard description='Druga' isRgb={true} />
            <AddBulbCard />
        </Stack>
    );
}