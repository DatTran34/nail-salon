import { Grid, Stack } from '@mui/material'
import React from 'react'
import modelImage from "../images/model2.png";
import ReviewStyle from "../styles/ReviewStyle";
import {reviews} from "../database/data";
import CustomizedButtons from './CustomizedButtons';
import {FaStar} from "react-icons/fa"
function Reviews() {
    const reviewStyle = ReviewStyle();
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <div className={reviewStyle.title}>What our beautiful customers say</div>
                <Stack position="relative" direction="row" justifyContent="center" pt={5}>
                    <img className={reviewStyle.image} src={`${modelImage}`} />
                    <CustomizedButtons type4>Explore</CustomizedButtons>
                </Stack>
            </Grid>
            <Grid item container spacing={3} height="100%" xs={12} md={6} mt={15}>
                {reviews.map(({name, img, comment, star}) => {
                    return <Grid item xs={12} >
                    <Stack direction="column" bgcolor="#ffffff" p={2}>
                        <Stack direction="row">
                            <img style={{width: "3rem", height: "3rem", borderRadius: "50px"}}src={img}/>
                            <Stack direction="column" px={2}>
                                <Stack pb={1} fontWeight="600">{name}</Stack>
                                <Stack direction="row">
                                    {[...Array(star).keys()].map(() => {
                                        return <FaStar style={{color: "#fec107"}}/>
                                    })}
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack pt={2} fontWeight="600">{`"${comment}"`}</Stack>
                    </Stack>
                </Grid>
                })}
            </Grid>
        </Grid>
    )
}

export default Reviews
