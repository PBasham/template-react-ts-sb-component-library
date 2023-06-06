/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

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