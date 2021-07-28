import { useState, useEffect } from 'react';
import firebase from '../firebaseSource';
import SingleStoryCardComp from './SingleStoryCardComp';
import '../App.css';


function AllStoriesComp(props) {

    const [stories, setStories] = useState([]);

    useEffect(async () => {
        //get all data from server
        let stories = await firebase.firestore().collection('stories').get();

        let tempStories = [];
        stories.forEach(singleStory => {
            let obj = {
                id: singleStory.id,
                title: singleStory.data().title,
                story: singleStory.data().story,
                img: singleStory.data().img
            }
            // console.log("story", obj)
            tempStories.push(obj);
        })
        setStories(tempStories);
    }, [])
    //show dynamic stories components 
    const renderStories = (stories = []) => {
        if (stories) {
            return stories.map((singleStory, id) => (
                <SingleStoryCardComp
                    key={id}
                    stories={singleStory}
                />
            ));
        }
    };
    return (
        <div className="AllStoriesDiv">
            <div className="renderDiv">
                {renderStories(stories)}
            </div>
        </div>
    )
}

export default AllStoriesComp;