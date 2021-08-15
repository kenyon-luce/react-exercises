import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover; //centers image to fit within thumbnails
    border-radius: 20px;
    animation: animateThumb 0.5s;
    
    :hover {
        opacity: 0.8; //makes image lighter on hover
    }
    
    @keyframes animateThumb {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
`;