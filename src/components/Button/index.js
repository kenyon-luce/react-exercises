import React from 'react';

import {Wrapper} from './Button.styles';

const Button = ({text, callback}) => (
    <Wrapper type="button" onclick={callback}>
        {text}
    </Wrapper>
);

export default Button;