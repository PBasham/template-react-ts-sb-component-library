import React from "react";
import { render } from "@testing-library/react"

import MyComponent from "./MyComponent";

describe("Button", () => {
    test("renders the MyComponent componenet", () => {
        render(<MyComponent label="Press me!" />)
    })
})