import React from 'react';

import {Wrapper, Content, Text} from './HeroImage.styles';

// const HeroImage = (props) => (
//     <Wrapper image={props.image}>
//         <Content>
//             <Text>
//                 <h1>{props.title}</h1>
//                 <p>{props.text}</p>
//             </Text>
//         </Content>
//     </Wrapper>
// )

const HeroImage = ({image, title, text}) => ( //this syntax makes it easier to call on each prop without having to "props." every time
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
)

export default HeroImage;