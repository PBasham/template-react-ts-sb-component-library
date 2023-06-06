/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
// styling --------------------------------------------------
import "../../assets/styling/colors.css"
import "../../assets/styling/MyComponent.css"

interface MyComponentProps {
    label: string
}

const MyComponent: FC<MyComponentProps> = (props: MyComponentProps) => {
    const { label } = props
    return (
        <button>{label}</button>
    )
}

export default MyComponent