// dependencies --------------------------------------------------
import React, { Children } from "react"
// storybook dependencies --------------------------------------------------
import { Meta, StoryFn } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import { size } from "lodash"
// component --------------------------------------------------
import { PbLightbox } from "../components"
import { PbLightboxProps } from "../components/PbLightbox/PbLightbox"


const defaultParams: PbLightboxProps = {
        children: undefined,

        isLightboxVisible: true,

        title: undefined,
        titleSize: "1.5rem",
        titleAlignment: "center",
        titleColor: undefined,
        titleDivMargin: undefined,
        titleDivPadding: undefined,

        message: undefined,
        messageSize: "1rem",
        messageAlighment: "center",
        messageColor: undefined,
        messageDivMargin: undefined,
        messageDivPadding: "1em",


        wrapperFaddedBackground: true,
        wrapperFaddedBackgroundColor: "rgba(149, 149, 149, .3)",
        additionalWrapperClasses: undefined,

        padding: "1em",
        height: undefined,
        width: undefined,
        backgroundColor: "white",
        borderRadius: undefined,
        boxShadow: "0 0 2px 1px rgba(149, 149, 149, 1)",
        additionalLightboxClasses: undefined,

        popupType: "okay",

        btnAreaPadding: "1em 0 0 0",
        btnHorizontalAlignment: "center",
        btnVerticalAlignment: "center",
        btnGap: "1em",
        disableAllButtons: false,
        disableOkayButton: false,
        disableYesButton: false,
        disableNoButton: false,
        disableCancelButton: false,

        okayButtonText: "Okay",
        yesButtonText: "Yes",
        noButtonText: "No",
        cancelButtonText: "Cancel",

        okayButtonStatus: undefined,
        yesButtonStatus: undefined,
        noButtonStatus: undefined,
        cancelButtonStatus: undefined,
}
export default {
    title: "ReactComponentLibrary/PbLightbox",
    component: PbLightbox,
} as Meta<typeof PbLightbox>

const Template: StoryFn<typeof PbLightbox> = (args) => <PbLightbox {...args} />
// * popuptypes --------------------------------------------------
export const StandardOkType: StoryFn = Template.bind({})
const standartOkTypeArgs: PbLightboxProps = {
    ...defaultParams,
    title: "Lightbox",
    message: "This is the message within the lightbox.",
}
StandardOkType.args = { ...standartOkTypeArgs }

export const StandardYesNoType: StoryFn = Template.bind({})
const StandardYesNoTypeArgs: PbLightboxProps = {
    ...defaultParams,
    title: "Lightbox",
    message: "This is the message within the lightbox.",
    popupType: "yes_no"
}
StandardYesNoType.args = {...StandardYesNoTypeArgs}

export const StandardYesNoCancelType: StoryFn = Template.bind({})
const StandardYesNoCancelTypeArgs: PbLightboxProps = {
    ...defaultParams,
    title: "Lightbox",
    message: "This is the message within the lightbox.",
    popupType: "yes_no_cancel"
}
StandardYesNoCancelType.args = {...StandardYesNoCancelTypeArgs}
// * has children --------------------------------------------------
export const HasChildren: StoryFn = Template.bind({})
const HasChildrenArgs: PbLightboxProps = {
    ...defaultParams,
    title: "Lightbox with children.",
    message: "This message is within the content section, and below, are children components that were passed in to me.",
    children: <h1 style={{textAlign: "center"}} >This is a childed passed into the children props.</h1>    
}
HasChildren.args = {...HasChildrenArgs}

