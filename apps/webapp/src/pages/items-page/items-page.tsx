import { Item } from "@mashedapp/models"
import { CircularProgress } from "@mui/material"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import ItemCard from "../../components/global/item-card"
import {
    useGetManyItemsQuery
} from "../../redux/endpoints/items-endpoints"
import { useItemsPageStyles } from "./items-page.styles"

interface Props { }

export const ItemsPage: React.FC<Props> = () => {
    //Page stype
    const classes = useItemsPageStyles()

    //Fetch Data
    const { data, isLoading: isGetAllItemsLoading } = useGetManyItemsQuery({ sort: ["id,ASC"] })
    const items = useSelector(() => (data as unknown as Item[]) || []);

    useEffect(() => {
    }, [])

    return (
        <>{console.log("items", items)}
            <div className={classes.cardContainer}>
                {isGetAllItemsLoading ? (<CircularProgress className={classes.getLoadingProgress} />)
                    : (items.map(item => (
                        <ItemCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            src={item.image}
                            price={item.price}
                            rating={item.rating}
                            isInCartInit={item.isInCart} />
                    )))
                }

            </div>
        </>
    )
}
