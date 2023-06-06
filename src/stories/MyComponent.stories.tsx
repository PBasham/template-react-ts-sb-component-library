// dependencies --------------------------------------------------
import React from "react"
// storybook dependencies --------------------------------------------------
import { Meta, StoryFn } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import { size } from "lodash"
// component --------------------------------------------------
import MyComponent from "../components/MyComponent"

export default {
    title: "ReactComponentLibrary/MyComponent",
    component: MyComponent,
} as Meta<typeof MyComponent>

const Template: StoryFn<typeof MyComponent> = (args) => <MyComponent {...args} />

export const Standard: StoryFn = Template.bind({})
Standard.args = {
    label: "Press me",
}
export const ClickMe: StoryFn = Template.bind({})
ClickMe.args = {
    label: "Click Me!",
}

// export const Small: StoryFn = Template.bind({})
// Small.args = {
//     label: "Press me",
//     size: "sm",
//     customeStyles: {
//         borderRadius: "5px",
//     },
// }