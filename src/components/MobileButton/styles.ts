import styled from 'styled-components';

export const Container = styled.button`
  display:none;
  align-items:center;
  justify-content:center;
  border:none;
  background:transparent;
  width:3rem;
  height:3rem;
  border-radius:1.5rem;
  overflow: hidden;
  position: absolute;
  outline:none;
  transition: background-color 1s;
  right:2rem;

  &:hover, &:focus {
    background:rgb(243, 230, 248);
  }

  & > img {
    width:1rem;
    height:1rem;
  }

  & > .ripple {
    width: 20px;
    height: 20px;
    position: absolute;
    background: #D09BE5;
    display: block;
    content: "";
    border-radius: 9999px;
    opacity: 1;
    animation: 0.9s ease 1 forwards ripple-effect;
  }

  @keyframes ripple-effect {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(10);
      opacity: 0.375;
    }
    100% {
      transform: scale(35);
      opacity: 0;
    }
  }

  @media(max-width:768px) {
    display:flex;
  }
 
`;
