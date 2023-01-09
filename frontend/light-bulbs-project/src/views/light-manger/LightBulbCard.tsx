import React, { useState } from 'react';
import { LightSwitch } from './LightSwitch';
import { ColorPicker } from './ColorPicker';
import { Color } from 'react-slider-color-picker/dist/interfaces';
import './LightBulb.css';
import { Card, CardContent, CardHeader } from '@mui/material';

export const LightBulbCard = ({ description, isRgb }: { description: string, isRgb?: boolean }) => {
    const grey: Color = { h: 49, s: 22, l: 90, a: 1 }
    const yellow: Color = { h: 56, s: 100, l: 50, a: 1 }

    const [isToggledOn, setIsToggledOn] = useState<boolean>(false);
    const [color, setColor] = useState<Color>(grey)
    const [lastColor, setLastColor] = useState<Color>(yellow)


    const handleSwitchChange = () => {
        if (isToggledOn) {
            setColor(grey)
            setIsToggledOn(false)
        } else {
            setColor(lastColor)
            setIsToggledOn(true)
        }
    }

    const handleSliderChange = (color: Color) => {
        setLastColor(color)
        if (isToggledOn) {
            setColor(color)
        }
    }

    return (

        <Card sx={{ width: 200, height: 320 }}>
            <CardHeader subheader={description} />
            <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Bulb color={color}></Bulb>
                <LightSwitch handleSwitchChange={handleSwitchChange}></LightSwitch>
                <ColorPicker handleSliderChange={handleSliderChange} isRgb={isRgb} />
            </CardContent>
        </Card >
    );
}


const Bulb = ({ color }: { color: Color }) => {
    return (
        <div className='bulb' >
            <div style={{ borderRadius: '50%', backgroundColor: `hsl(${color.h} ${color.s}% ${color.l}%)`, width: '100%', height: '100%' }}>
            </div>
            <img src="https://ledlightinginfo.com/wp-content/uploads/2020/05/light-bulb-2604119_1920-e1596979511644.png"
                alt="image" style={{ display: 'block', margin: 'auto', width: '70%', height: '70%' }} />
        </div>
    );
};
