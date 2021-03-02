import React from 'react';
import "./styles.css"

const Images = () => {
    return (
        <>
            <div className="img1">
                <img className="animation" src="https://media.gettyimages.com/photos/young-boy-student-dressed-as-nerd-holding-books-picture-id526470051?s=2048x2048" alt="slide1" />
            </div>
            <div className="img2">
                <img className="animation" src="https://media.gettyimages.com/photos/sri-lankan-school-children-in-classroom-picture-id618872146?s=2048x2048" alt="slide2" />
            </div>
            <div className="img3">
                <img className="animation" src="https://media.gettyimages.com/photos/cute-schoolgirl-smiling-balancing-stack-of-books-on-the-head-at-picture-id1049281412?s=2048x2048" alt="slide3" />
            </div>
            <div className="img4">
                <img className="animation" src="https://cdn.pixabay.com/photo/2017/09/02/10/31/learn-2706897_1280.jpg" alt="slide4" />
            </div>        
        </>
    );
};

export default Images;