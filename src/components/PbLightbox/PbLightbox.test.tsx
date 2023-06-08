import React from "react";
import { render } from "@testing-library/react"

import PbLightbox from "./PbLightbox";

describe("Button", () => {
    test("renders the MyComponent componenet", () => {
        render(<PbLightbox label="Press me!" />)
    })
})