import React, { useState } from 'react';
import { HueSlider, LightnessSlider } from 'react-slider-color-picker'
import { Color } from 'react-slider-color-picker/dist/interfaces';



export const ColorPicker = ({ handleSliderChange, isRgb }: { handleSliderChange: any, isRgb?: boolean }) => {

    const [color, setColor] = useState<Color>({ h: 56, s: 100, l: 50, a: 1 })

    const handleChangeColor = (newColor: Color) => {
        handleSliderChange(newColor)
        setColor(newColor)
    }

    return (
        <>
            <LightnessSlider handleChangeColor={handleChangeColor} color={color} />
            {isRgb ? <HueSlider handleChangeColor={handleChangeColor} color={color} /> : null}
        </>

    )
}