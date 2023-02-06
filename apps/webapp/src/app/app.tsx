import { Card, CardContent } from "@mui/material"
import clsx from "clsx"
import React from "react"

// import { SnackbarListener } from "../components/global/snackbar-listener/snackbar-listener"
// import { TodosPage } from "../pages/todos-page/todos-page"
import { useAppStyles } from "./app.styles"

export const App = () => {
  const classes = useAppStyles()

  return (
    <div>
      {/* <SnackbarListener />
      <TodosPage /> */}
      <Card>
        <CardContent>
        </CardContent>
      </Card>
    
    </div>
  )
}
