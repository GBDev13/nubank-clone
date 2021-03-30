import styled from 'styled-components';

export const Container = styled.header`
  height:4rem;
  background:var(--white);
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 9;

  .navLinks {
    flex-grow: 1;
    overflow-x: auto;
    left: 0px;
    right: 0px;
    top: 64px;
    height: auto;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease-out 0s;
    padding: 0px;
    margin-left: 1.5rem;
    position: static;
    transform: translateY(0px);
    box-shadow: none;

    &::-webkit-scrollbar {
        display: none;
    }

    ul {
      flex-direction: row;
      align-items: center;
      white-space: nowrap;
      display: flex;

      li a {
        color:var(--text);
        font-size:1.2rem;
        
        &:hover{
          color:var(--hover)
        }

        &.active{
          color:var(--purple)
        }

        span{
          padding:2px 20px 4px;
          background:var(--light-purple);
          border-radius:1.5rem;
          display:inline-block;
          margin-left:.5rem;
          font-weight:500;
          color:var(--text2);
          font-size:1rem;

          &:hover{
            background:rgb(233, 210, 242);
          }
        }
      }

      li + li{
        a {
          padding-left: 1.5rem;
        }
      }
    }

    .loginMobile {
      display:none;
      width:4.5rem;
      &::after{
        content:'';
        width:0%;
        display:block;
        background:var(--purple);
        height:2px;
        transition:.2s;
      }

      &:hover::after{
        width:100%;
      }

      a {
        margin-top:1rem;
        display:flex;
        align-items:center;
        font-size:1.2rem;
        color:var(--purple);

        svg {
          width:20px;
          height:20px;
          margin-left:.5rem;
        }
      }
    }

    @media(max-width:768px) {
      flex-grow: 1;
      overflow-x: auto;
      background-color: rgb(255, 255, 255);
      position: absolute;
      left: 0px;
      right: 0px;
      top: 56px;
      height: calc(100vh - 56px);
      padding: 32px;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease-out 0s;
      will-change: transform;
      transform: translateY(-120vh);
      margin-left:0;

      &.active {
        transform: translateY(0px);
      }

      ul {
        flex-direction:column;
        align-items:flex-start;

        li + li {
          margin-top:1rem;
          a {
            padding-left:0;
          }
        }
        
      }

      .loginMobile{
        display:block;
      }
    }
  }

  .fade {
    height: 100%;
    margin-left: 1rem;
    position: relative;
    display:block;

    &::before{
      content: "";
      position: absolute;
      top: 0px;
      right: 100%;
      height: calc(100% - 1rem);
      box-shadow: rgb(255 255 255) -1rem 0px 0.625rem 0.5rem;
    }

    @media(max-width:768px){
      display:none;
    }
  }

  .loginDesk {
    &::after{
      content:'';
      width:0%;
      display:block;
      background:var(--purple);
      height:2px;
      transition:.2s;
    }

    &:hover::after{
      width:100%;
    }

    a {
      display:flex;
      align-items:center;
      font-size:1.2rem;
      color:var(--purple);

      svg {
        width:20px;
        height:20px;
        margin-left:.5rem;
      }
    }

    @media(max-width:768px){
      display:none;
    }

  }

  nav{
    height:4rem;
    padding: 0 2rem;
    display:flex;
    box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px;
    align-items: center;
    position: relative;
  }

  .logo {
    z-index:10;
    svg, a {
      width:40px;
      height:40px;
    }
  }

`;
