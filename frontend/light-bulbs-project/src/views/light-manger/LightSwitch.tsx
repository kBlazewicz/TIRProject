import { Switch } from '@mui/material';
import { Stack } from '@mui/system';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import React from 'react';

export const LightSwitch = ({ handleSwitchChange }: { handleSwitchChange: any }) => {

    const handleChange = () => {
        handleSwitchChange();
    }

    return (
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <PowerSettingsNewIcon fontSize="small" />
            <Switch onChange={handleChange} />
        </Stack>
    );
}
