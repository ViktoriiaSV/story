//1.Import react

import React from 'react';
import "./story.css";

//2.Create function or class of component

const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-Jut1FmAX9B_TP7kVPV48nMOOkc0RoNBmfAWPGVnq6tPu8YDwg";
const Story = ({name = "Default Name", time = 3, image = "DEFAULT_IMAGE"}) => {

//4.Write component layouts
//5.Think what props to receive and process them

return (
    <div className="story-wrapper">
         <img className="story-image" src={image} alt={name} /> 
         <div className="story-content">
         <a href="#" className="story-name">{name}</a>
         <div className="story-time">{time} h. ago</div>
         </div>
    </div>
)
};

//3.Export function 

export default Story;
