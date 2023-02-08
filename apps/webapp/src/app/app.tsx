import { Card, CardContent } from "@mui/material"
import clsx from "clsx"
import React from "react"
import { ItemsPage } from "../pages/items-page/items-page"

import { useAppStyles } from "./app.styles"

export const App = () => {
  const classes = useAppStyles()

  return (
    <div>

      <ItemsPage/>
    </div>
  )
}
