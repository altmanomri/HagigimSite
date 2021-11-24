import { useState, useEffect } from 'react';
import firebase from '../firebaseSource';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function SingleStoryComp(props) {

    const [story, setStory] = useState({
        title: "",
        story: "",
        img: ""
    });
    const { id } = useParams();

    console.log("this is the id", id)

    useEffect(async () => {
        //get data from server
        let story = await firebase.firestore().collection('stories').doc(id).get();

        let dataStory = story?._delegate?._document?.data?.value?.mapValue?.fields?.story.stringValue
        let dataTitle = story?._delegate?._document?.data?.value?.mapValue?.fields?.title.stringValue
        let dataImg = story?._delegate?._document?.data?.value?.mapValue?.fields?.img.stringValue

        setStory({ title: dataTitle, story: dataStory, img: dataImg })
    }, [])
    const params = {
        image: {
            src: story.img,
            alt: "Img",
            className: "imageLogo"
        },
        btn: {
            href: "/",
            variant: "contained",
            color: "primary",
            size: "large",
        }
    }

    return (
        <div className="storyDiv">
            <div className="flexDiv">
                <h1 >{story.title}</h1>
                <img {...params.image} />
            </div>
            <p className="bodyText">{story.story}</p>
            <Button {...params.btn} >
                חזרה לכל ההגיגים
            </Button>
        </div>
    )
}
export default SingleStoryComp;