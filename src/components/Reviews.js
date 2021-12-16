import { Grid, Stack } from '@mui/material'
import React from 'react'
import modelImage from "../images/model2.png";
import ReviewStyle from "../styles/ReviewStyle";
import {avatarCustomers} from "../database/images";
import CustomizedButtons from './CustomizedButtons';
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
            <Grid item container xs={12} md={6}>
                <Grid item xs={12}>
                    <Stack direction="column" bgcolor="#ffffff">
                        <Stack direction="row">
                            <img/>
                            <Stack direction="column">
                                <div>Name</div>
                                <div>star</div>
                            </Stack>
                        </Stack>
                        <div>“They do an awesome job especially with dip powder gel”</div>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Reviews
