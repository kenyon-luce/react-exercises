import React from 'react';
import {Link} from 'react-router-dom';

import {Image} from './Thumb.styles';

const Thumb = ({image, movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb'/>
            {/*    notice how it changes the url by adding its id, also the image itself isn't displayed yet*/}
            </Link>
        ) : (
            <Image src={image} alt='movie-thumb'/>
        )}
    {/*    ^^This makes the thumbnails link to their own page, if they are not clickable for some reason we use ternary to just display the image normally without redirecting*/}
    </div>
)

export default Thumb;