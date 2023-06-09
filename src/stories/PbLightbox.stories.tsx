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
        titleSize: undefined,
        titleAlignment: "center",
        titleColor: undefined,
        titleDivMargin: undefined,
        titleDivPadding: undefined,

        message: undefined,
        messageSize: undefined,
        messageAlighment: "center",
        messageColor: undefined,
        messageDivMargin: undefined,
        messageDivPadding: undefined,


        hasOverlayBackground: true,
        overlayColor: undefined,
        overlayOpacity: undefined,
        additionalOverlayClasses: "",
        additionalWrapperClasses: "",

        padding: undefined,
        height: undefined,
        width: undefined,
        backgroundColor: undefined,
        borderRadius: undefined,
        boxShadow: undefined,
        additionalLightboxClasses: "",

        popupType: "okay",

        btnAreaPadding: undefined,
        btnHorizontalAlignment: undefined,
        btnVerticalAlignment: undefined,
        btnGap: undefined,
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
// * alignment --------------------------------------------------
export const TitleAlignmentLeft: StoryFn = Template.bind({})
const TitleAlignmentLeftArgs: PbLightboxProps = {
    ...defaultParams,
    title: "Lightbox with children.",
    message: "This message is within the content section, and below, are children components that were passed in to me.",
    titleAlignment: "left"
}
TitleAlignmentLeft.args = {...TitleAlignmentLeftArgs}

export const TitleAlignmentCenter: StoryFn = Template.bind({})
const TitleAlignmentCenterArgs: PbLightboxProps = {
    ...defaultParams,
    title: "Lightbox with children.",
    message: "This message is within the content section, and below, are children components that were passed in to me.",
    titleAlignment: "center"    
}
TitleAlignmentCenter.args = {...TitleAlignmentCenterArgs}

export const TitleAlignmentRight: StoryFn = Template.bind({})
const TitleAlignmentRightArgs: PbLightboxProps = {
    ...defaultParams,
    title: "Lightbox with children.",
    message: "This message is within the content section, and below, are children components that were passed in to me.",
    titleAlignment: "right"    
}
TitleAlignmentRight.args = {...TitleAlignmentRightArgs}
// message alignment
export const MessageAlignmentLeft: StoryFn = Template.bind({})
const MessageAlignmentLeftArgs: PbLightboxProps = {
    ...defaultParams,
    title: "Lightbox with children.",
    message: "This message is within the content section, and below, are children components that were passed in to me.",
    messageAlighment: "left"
}
MessageAlignmentLeft.args = {...MessageAlignmentLeftArgs}

export const MessageAlignmentCenter: StoryFn = Template.bind({})
const MessageAlignmentCenterArgs: PbLightboxProps = {
    ...defaultParams,
    title: "Lightbox with children.",
    message: "This message is within the content section, and below, are children components that were passed in to me.",
    messageAlighment: "center"    
}
MessageAlignmentCenter.args = {...MessageAlignmentCenterArgs}

export const MessageAlignmentRight: StoryFn = Template.bind({})
const MessageAlignmentRightArgs: PbLightboxProps = {
    ...defaultParams,
    title: "Lightbox with children.",
    message: "This message is within the content section, and below, are children components that were passed in to me.",
    messageAlighment: "right"    
}
MessageAlignmentRight.args = {...MessageAlignmentRightArgs}

export const MessageAlignmentJustify: StoryFn = Template.bind({})
const MessageAlignmentJustifyArgs: PbLightboxProps = {
    ...defaultParams,
    title: "Lightbox with children.",
    message: "This message is within the content section, and below, are children components that were passed in to me.",
    messageAlighment: "justify"    
}
MessageAlignmentJustify.args = {...MessageAlignmentJustifyArgs}
