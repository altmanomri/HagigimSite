import React from 'react'
import './Books.css';
import { CardMedia, Link } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function BookCard(props) {
    const topHeader = props.topHeader
    const text = props.text
    const btnText= props.btnText
    const imageScr= props.imageScr
    const hrefLink= props.hrefLink
    return (
        <Card className="bookCard">
            <CardMedia className="cardMedia"
                component="img"
                alt="bookImg"
                height="300px"
                width="200px"
                image={imageScr}
            />
            <div className="box">
                <h3>{topHeader}</h3>
                <Typography className="TypographyBooksText">
                        {text}
                </Typography>
                {/* <CardActionArea> */}
                <div className="imgButtonDiv">
                    <div className="bookButton">
                        <Button
                            variant="outlined"
                            color="primary"
                            target="_blank"
                            href={hrefLink}>
                            {btnText}
                        </Button>
                    </div>
                    <img src={imageScr}
                        alt="bookImg"
                        height="17%"
                        width="12%" />
                </div>
            </div>
        </Card>

    )
}
