/*========================================
        Import Dependencies
========================================*/
import React, { CSSProperties, FC, ReactNode } from 'react'
// components --------------------------------------------------
import { PbButton } from "@pbasham/pb-buttons"
// styling --------------------------------------------------
import "../../assets/styling/colors.css"
import "../../assets/styling/pbLightbox.css"

export interface PbLightboxProps {
    /** Passed reach children. */
    children?: ReactNode
    /** True will render the lightbox, false will render null */
    isLightboxVisible?: boolean
    /** Title that will dispaly for lightbox */
    title?: string
    /** fontSize for lightbox title, leave as empty string if you want to overwrite with css class */
    titleSize?: string
    /** Alignment for title in lightbox. Default is "center"  */
    titleAlignment?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent" | ""
    /** Color of title. leave as empty string if you want to overwrite with css class  */
    titleColor?: string
    /** Margin for title. */
    titleDivMargin?: string
    /** Padding for title. */
    titleDivPadding?: string

    /** Message to display inside of box. */
    message?: string
    /** fontSize for lightbox message, leave as empty string if you want to overwrite with css class  */
    messageSize?: string
    /** Alignment for message content in lightbox. Default is "center" */
    messageAlighment?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent" | ""
    /** Color for text in message */
    messageColor?: string
    /** Margin for Text in content of box. */
    messageDivMargin?: string
    /** Padding for Text in content of box. */
    messageDivPadding?: string

    /** True will display an overlay behind the popup. False will not. Defaul is true. */
    hasOverlayBackground?: boolean
    /** Color of the fadded background. Leave as empty string if you want to overwrite with css class. */
    overlayColor?: string
    /** Opacity of wrapper overlay */
    overlayOpacity?: string
    /** Send custom css class for page wrapper for lightbox. */
    additionalOverlayClasses?: string
    additionalWrapperClasses?: string

    /** Lightbox padding. Default 1em. */
    padding?: string
    /** Lightbox height */
    height?: string
    /** Lightbox width */
    width?: string
    /** Lightbox background Color */
    backgroundColor?: string
    /** Lightbox border radius */
    borderRadius?: string
    /** Box shadow for lightbox. */
    boxShadow?: string
    /** Send custom css classes down to the lightbox. */
    additionalLightboxClasses?: string

    /** Button layout for popup. Defauly is "okay" */
    popupType?: "okay" | "yes_no" | "yes_no_cancel"

    /** Padding for button area. */
    btnAreaPadding?: string
    /** Horizontal Alignment for button div. Leave as empty string to overwrite with css class. */
    btnHorizontalAlignment?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly" | ""
    /** Vertical Alignment for button div Leave as empty string to override with css class. */
    btnVerticalAlignment?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly" | ""
    /** Gap between buttons. Leave blank to overwrite wth css class. */
    btnGap?: string
    /** Boolean to disable buttons */
    disableAllButtons?: boolean
    /** Boolean to disable 'Okay' button */
    disableOkayButton?: boolean
    /** Boolean to disable 'Yes' button */
    disableYesButton?: boolean
    /** Boolean to disable 'No' button */
    disableNoButton?: boolean
    /** Boolean to disable 'Cancel' button */
    disableCancelButton?: boolean

    okayButtonText?: string
    yesButtonText?: string
    noButtonText?: string
    cancelButtonText?: string

    okayButtonStatus?: "ok" | "warning" | "attention" | "notification" | ""
    yesButtonStatus?: "ok" | "warning" | "attention" | "notification" | ""
    noButtonStatus?: "ok" | "warning" | "attention" | "notification" | ""
    cancelButtonStatus?: "ok" | "warning" | "attention" | "notification" | ""

    onOkayPress?: () => void
    onYesPress?: () => void
    onNoPress?: () => void
    onCancelPress?: () => void
}

const PbLightbox: FC<PbLightboxProps> = (props: PbLightboxProps) => {

    const {
        children,

        isLightboxVisible = true,

        title,
        titleSize,
        titleAlignment,
        titleColor,
        titleDivMargin,
        titleDivPadding,

        message,
        messageSize,
        messageAlighment,
        messageColor,
        messageDivMargin,
        messageDivPadding,

        hasOverlayBackground = true,
        overlayColor,
        overlayOpacity,
        additionalOverlayClasses,
        additionalWrapperClasses,

        padding,
        height,
        width,
        backgroundColor,
        borderRadius,
        boxShadow,
        additionalLightboxClasses,

        popupType,

        btnAreaPadding,
        btnHorizontalAlignment,
        btnVerticalAlignment,
        btnGap,
        disableAllButtons = false,
        disableOkayButton = false,
        disableYesButton = false,
        disableNoButton = false,
        disableCancelButton = false,

        okayButtonText = "Okay",
        yesButtonText = "Yes",
        noButtonText = "No",
        cancelButtonText = "Cancel",

        okayButtonStatus,
        yesButtonStatus,
        noButtonStatus,
        cancelButtonStatus,

        onOkayPress = () => console.log("Okay button has been clicked!"),
        onYesPress = () => console.log("Yes button has been clicked!"),
        onNoPress = () => console.log("No button has been clicked!"),
        onCancelPress = () => console.log("Cancel button has been clicked!"),

    } = props

    const wrapperColor = hasOverlayBackground ? overlayColor : ""

    const passedWrapperStyles: CSSProperties = {
    }
    const passedOverlayStyles: CSSProperties = {
        backgroundColor: wrapperColor,
        opacity: overlayOpacity,
    }
    const passedLightboxStyles: CSSProperties = {
        padding: padding,
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        boxShadow: boxShadow,
    }
    const passedTitleDivStyles: CSSProperties = {
        margin: titleDivMargin,
        padding: titleDivPadding,

        fontSize: titleSize,
    }
    const passedTitleStyles: CSSProperties = {
        color: titleColor,
    }
    const passedContentDivStyles: CSSProperties = {

    }
    const passedMessageDivStyles: CSSProperties = {
        margin: messageDivMargin,
        padding: messageDivPadding,

        fontSize: messageSize,
    }
    const passedMessageStyles: CSSProperties = {
        color: messageColor,
    }
    const passedButtonDivStyles: CSSProperties = {
        justifyContent: btnHorizontalAlignment,
        alignItems: btnVerticalAlignment,
        gap: btnGap,

        padding: btnAreaPadding,
    }

    const statusColorOk = "rgb(221, 255, 221)"
    const statusColorOkDark = "rgb(76, 175, 80)"
    const statusColorWarning = "rgb(255, 221, 221)"
    const statusColorWarningDark = "rgb(244, 67, 53)"
    const statusColorAttention = "rgb(255, 254, 204)"
    const statusColorAttentionDark = "rgb(255, 235, 59)"
    const statusColorNotification = "rgb(221, 255, 255)"
    const statusColorNotificationDark = "rgb(32, 150, 243)"

    const passedButtonStyles: CSSProperties = {
        // color
        //
    }

    // wrapper
    // box
    // header-div
    // p
    // content-div
    // p
    // button div
    // btn(s)

    const textAlignmentOptions = {
        "start": "text-align-start",
        "end": "text-align-end",
        "left": "text-align-left",
        "right": "text-align-right",
        "center": "text-align-center",
        "justify": "text-align-justify",
        "match-parent": "text-align-match-parent",
    }

    let titleTextAlignment = titleAlignment ? textAlignmentOptions[titleAlignment] : ""
    let messageTextAlignment = messageAlighment ? textAlignmentOptions[messageAlighment] : ""

    let overlayColorClass = hasOverlayBackground ? "wrapper-color" : "no-wrapper-color"

    if (isLightboxVisible) {
        return (
            <div
                className={`pb-lb lb-wrapper ${additionalWrapperClasses}`}
                style={{ ...passedWrapperStyles }}
            >
                <div className={`overlay ${overlayColorClass} ${additionalOverlayClasses}`} style={{ ...passedOverlayStyles }} />
                <div
                    className={`lb-box ${additionalLightboxClasses}`}
                    style={{ ...passedLightboxStyles }}
                >

                    <div
                        className={`lb-box-header-div ${titleTextAlignment}`}
                        style={{ ...passedTitleDivStyles }}
                    >
                        <p style={{ ...passedTitleStyles }} >{title}</p>
                    </div>

                    <div
                        className="lb-box-content-div"
                        style={{ ...passedContentDivStyles }}
                    >
                        <div className={`message-div ${messageTextAlignment}`}
                            style={{ ...passedMessageDivStyles }}
                        >
                            <p style={{ ...passedMessageStyles }} >{message}</p>
                        </div>

                        <div className="passedChildren-div">
                            {children}
                        </div>

                        <div className="btns-div"
                            style={{ ...passedButtonDivStyles }}
                        >
                            {popupType === "okay" ?
                                <PbButton
                                    label={okayButtonText}
                                    onClick={onOkayPress}
                                    size="sm"
                                    customeStyles={passedButtonStyles}
                                    btnStatus={okayButtonStatus}
                                    disabled={disableAllButtons || disableOkayButton}
                                />
                                :
                                popupType === "yes_no" ?
                                    <>
                                        <PbButton
                                            label={yesButtonText}
                                            onClick={onYesPress}
                                            size="sm"
                                            customeStyles={passedButtonStyles}
                                            btnStatus={yesButtonStatus}
                                            disabled={disableAllButtons || disableYesButton}
                                        />
                                        <PbButton
                                            label={noButtonText}
                                            onClick={onNoPress}
                                            size="sm"
                                            customeStyles={passedButtonStyles}
                                            btnStatus={noButtonStatus}
                                            disabled={disableAllButtons || disableNoButton}
                                        />
                                    </>
                                    :
                                    <>
                                        <PbButton
                                            label={yesButtonText}
                                            onClick={onYesPress}
                                            size="sm"
                                            customeStyles={passedButtonStyles}
                                            btnStatus={yesButtonStatus}
                                            disabled={disableAllButtons || disableYesButton}
                                        />
                                        <PbButton
                                            label={noButtonText}
                                            onClick={onNoPress}
                                            size="sm"
                                            customeStyles={passedButtonStyles}
                                            btnStatus={noButtonStatus}
                                            disabled={disableAllButtons || disableNoButton}
                                        />
                                        <PbButton
                                            label={cancelButtonText}
                                            onClick={onCancelPress}
                                            size="sm"
                                            customeStyles={passedButtonStyles}
                                            btnStatus={cancelButtonStatus}
                                            disabled={disableAllButtons || disableCancelButton}
                                        />
                                    </>
                            }
                        </div>

                    </div>
                </div>
            </div >
        )
    } else {
        return null
    }
}

export default PbLightbox