import { AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material';
import { Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Rating, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from "react";
import noImage from '../../assets/no-image.png';
import { useItemsPageStyles } from '../../pages/items-page/items-page.styles';
import { useUpdateOneItemMutation } from '../../redux/endpoints/items-endpoints';
import { store } from '../../redux/store';
import { addItem, removeItem } from '../../redux/thunks-slice/cart-thunks-slice';

interface Props {
    id: string,
    src?: string,
    name?: string,
    price?: number,
    rating?: number,
    isInCartInit?: boolean,
}

export const ItemCard: React.FC<Props> = ({ id, src, name, price, rating, isInCartInit }) => {
    const classes = useItemsPageStyles();
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

    const dispatch = store.dispatch;
    const [componentRating, setRating] = useState(rating | 0)
    const [isInCart, setIsInCart] = useState(isInCartInit);

    const [updateItem, { isLoading: isUpdatingItem }] = useUpdateOneItemMutation()

    useEffect(() => {

    }, [])

    async function updateRating(event: React.SyntheticEvent<Element, Event>, newValue: number): Promise<void> {
        setRating(newValue);

        try {
            const payload = await updateItem({ id: id, item: { name: name, price: price, image: src, rating: newValue, isInCart: isInCart } }).unwrap();
            console.log('fulfilled', payload)
        } catch (error) {
            console.error('rejected', error);
        }
    }

    async function addToCart(event: React.MouseEvent<HTMLDivElement, MouseEvent>): Promise<void> {
        event.preventDefault();
        if (isInCart) {
            dispatch(removeItem({ id: id }))
        } else {
            dispatch(addItem({ id: id, name: name, price: price, image: src, rating: rating, isInCart: !isInCart }))
        }
        try {
            const payload = await updateItem({ id: id, item: { name: name, price: price, image: src, rating: rating, isInCart: !isInCart } }).unwrap();
            console.log('fulfilled', payload)
        } catch (error) {
            console.error('rejected', error);
        }
        setIsInCart(!isInCart);
    }

    return (
        <>
            <Card>
                {
                    (isInCart)
                        ? <Box component="div" className={classes.inCartBox}>
                            <Typography variant="subtitle2" fontSize={10} color="#e6e6e6">
                                In Cart
                            </Typography>
                        </Box>
                        : <></>
                }
                <CardActionArea className={classes.item}>
                    <CardMedia
                        component="img"
                        className={classes.cardMediaImage}
                        image={(!src || src.length === 0) ? noImage : `data:image/png;base64,${src}`} />
                    <CardContent className={classes.itemContent}>
                        <Typography gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {"$" + price}
                        </Typography>
                        <StyledRating
                            onChange={(event, newValue) => updateRating(event, newValue)}
                            defaultValue={0}
                            max={5}
                            precision={1}
                            value={componentRating}
                        />
                    </CardContent>
                    <IconButton
                        component="div"
                        aria-label="addShoppingCart"
                        onClick={(event) => addToCart(event)}>
                        {(isInCart)
                            ? <RemoveShoppingCart
                                fontSize='medium' />
                            : <AddShoppingCart
                                fontSize='medium' />
                        }
                    </IconButton>
                </CardActionArea>
            </Card>
        </>

    )
}

export default ItemCard;