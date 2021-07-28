import { CardActionArea, CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import './SingleStoryDiv.css';


function SingleStoryCardComp(props) {

    let item = props.stories;
    let imgUrl = item.img
    let id = item.id

    function linkTo(id) {
        <Link to={"/SingleStoryComp" + id} />
    }

    return (

        <Card story={item} className="singleStoryDiv">
            <CardMedia className="cardMedia"
                component="img"
                alt="letters"
                height="180px"
                width="120px"
                image={imgUrl}
            />
            <div className="bottomPartCard">
                <h3> {item.title} </h3>
                <Typography className="TypographyText">
                    {props.stories.story}
                </Typography>
            <Link to={"/SingleStoryComp/" + id} className="continueButton">
                <Button size="large" color="primary" onClick={linkTo} >
                    המשך...
                </Button>
            </Link>
            </div>
            {/* </CardActionArea> */}
        </Card>

    )
}
export default SingleStoryCardComp;