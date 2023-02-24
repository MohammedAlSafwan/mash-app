import { Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

export const useItemsPageStyles = makeStyles((theme: Theme) => ({
  inCartBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    background: "#802d65",
    width: "50px",
    height: "50px",
    zIndex: 10,
    borderRadius: "50%",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    alignItems: "flex-start",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    height: "350px",
  },
  itemContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    margin: "0px",
  },
  layover: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    margin: "0px",
  },
  cartItemLayover: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    margin: "0px",
  },
  cardMediaImage: {
    width: "200px",
    height: "200px",
  },
  getLoadingProgress: {
    justifySelf: "center",
  },
}))
