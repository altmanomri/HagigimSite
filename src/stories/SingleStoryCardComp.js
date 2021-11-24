import { CardActionArea, CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import './SingleStoryDiv.css';
import strings from "../utils/strings/strings";


function SingleStoryCardComp(props) {

    let item = props.stories;
    let imgUrl = item.img
    let id = item.id

    function linkTo(id) {
        <Link to={"/SingleStoryComp" + id} />
    }

    return (
        <Card story={item} className="singleStoryDiv">
            <Link to={"/SingleStoryComp/" + id}>
                <CardMedia className="cardMedia"
                    component="img"
                    alt="letters"
                    height="180px"
                    width="120px"
                    image={imgUrl}
                />
            </Link>
            <Link to={"/SingleStoryComp/" + id} className="continueButton">
                <div className="bottomPartCard">
                    <h3> {item.title} </h3>
                    <Typography className="TypographyText">
                        {props.stories.story}
                    </Typography>
                    <Button size="large" color="primary" /*onClick={linkTo}*/ >
                        {strings.continue}
                    </Button>
                </div>
            </Link>
        </Card>
    )
}
export default SingleStoryCardComp;