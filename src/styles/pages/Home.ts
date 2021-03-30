import styled from 'styled-components';

interface ImageSectionProps {
  background:string;
}

export const FormSection = styled.section`
  width:100%;
  background:var(--purple);
  margin-top:4rem;

  .main {
    display: grid;
    justify-content:stretch;
    gap:1.5rem 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 14rem 6rem 1fr;
    padding: 3rem 1rem;

    @media(min-width: 768px) {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: auto 1fr;
      padding:5rem 1.5rem;
      gap:3rem 1.5rem;
      height: calc(100vh - 4rem);
    }

    @media(min-width: 1152px) {
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 1fr;
      align-items:center;
      row-gap:0;
      padding:5rem 3rem;
    }

    .chamada{
      grid-column: 1 / span 4;

      h1 {
        margin: 0px 0px 1rem;
        font-weight: 600;
        font-size: 1.75rem;
        line-height: 1.16;
        color: var(--white);

        @media(min-width:768px) {
          font-size:3rem;
        }
      }

      a {
        color:var(--white);
        font-size: 1.125rem;
        display:block;
        width:12rem;

        svg {
          width:16px;
          height:16px;
          margin-left: 0.5rem;
          vertical-align:middle;
        }

        &::after{
          content:'';
          width:0%;
          display:block;
          background:var(--white);
          height:2px;
          transition:.2s;
        }
        
        &:hover::after{
          width:100%;
        }

      }
    }

    .phoneImage {
      background:url('/cellphone01.webp') no-repeat center;
      background-size:contain;
      align-self: stretch;
      grid-area: 2 / 1 / auto / span 4;
      margin: 1rem 0px 0px;
      
      @media (min-width: 768px){
        grid-column: 1 / span 4;
        margin: 0px 0px 2rem;
      }

      @media (min-width: 1152px){
        grid-area: 1 / 5 / auto / span 4;
        margin: 0px;
      }
    }

  }
`;

export const AccountSection = styled.section`
  background-color: rgb(245, 245, 245);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0px;
  position: relative;

  article {
    width:100%;
    max-width: 1328px;
    display:flex;

    @media (min-width: 1152px){
      min-height: calc(100vh - 56px);
    }
  }

  .content {
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 32px repeat(10, 1fr) 32px;
    grid-template-rows: 64px auto 64px auto 64px;

    @media(min-width:768px) {
      grid-template-columns: 64px repeat(10, 1fr) 64px;
      grid-template-rows: 64px 1fr 64px;
    }

    .copy {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      grid-area: 2 / 2 / auto / 12;

      @media(min-width:768px) {
        grid-area: 2 / 2 / auto / 7;
      }

      a h1{
        font-size:1.75rem;
        color:var(--purple);
        font-weight:600;
        margin:0;
        &:hover {
          text-decoration:underline;
        }

        @media(min-width: 768px) {
          font-size: 3rem;
        }
      }

      > h1 {
        color:var(--text3);
        font-size:1.75rem;
        line-height:1.15;
        font-weight:600;
        margin: 0px 0px 2rem;
        max-width:400px;

        @media(min-width: 768px) {
          font-size: 3rem;
        }
      }

      > a:last-child {
        color:var(--purple);
        font-size: 1.125rem;
        display:block;
        width:15rem;

        svg {
          width:16px;
          height:16px;
          margin-left: 0.5rem;
          vertical-align:middle;
          path{
            fill:var(--purple);
          }
        }

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

      }
    }

    picture {
      grid-area: 4 / 1 / 4 / 13;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;

      @media (min-width: 768px) {
        grid-area: 2 / 6 / 2 / 12;
      }

      img {
        width: 100%;
        height: 100%;
        max-height: 438px;
        max-width: 411px;

        @media (min-width: 768px) {
          max-height: 580.25px;
          max-width: 659px;
          object-fit: scale-down;
        }
      }

    }

    }
`;

export const CardSection = styled.section`
    display: flex;
    justify-content: center;
    padding: 0px;
    position: relative;

    article {
      display: flex;
      width: 100%;
      flex-direction: column;
      max-width: 1328px;

      @media (min-width: 1152px) {
        min-height: calc(100vh - 56px);
      }

      @media (min-width: 768px){
        flex-flow: row wrap;
      }

      .copy {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        position: relative;
        order: 1;
        align-items: flex-start;
        padding: 4rem 2rem;

        @media (min-width: 768px) {
          padding: 4rem;
          padding-right: 0px;
          width: 60%;
          order: unset;
        }

        a h1{
          font-size:1.75rem;
          color:var(--purple);
          font-weight:600;
          margin:0;
          &:hover {
            text-decoration:underline;
          }
          @media(min-width: 768px) {
            font-size: 3rem;
          }
        }

        > h1 {
          color:var(--text3);
          font-size:1.75rem;
          line-height:1.15;
          font-weight:600;
          margin: 0px 0px 2rem;
          @media(min-width: 768px) {
            font-size: 3rem;
          }
        }

        > a:last-child {
          color:var(--purple);
          font-size: 1.125rem;
          display:block;
          width:7rem;

          svg {
            width:16px;
            height:16px;
            margin-left: 0.5rem;
            vertical-align:middle;
            path{
              fill:var(--purple);
            }
          }

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

        }
        
      }

      .image {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        order:2;

        img {
          height: 450px;
          margin: 0px auto;
          display: block;
          object-fit: cover;
          width: auto;
          max-height: 100vh;

          @media (min-width: 1152px){
            width: unset;
            height: auto;
            max-height: 80vh;
          }
        }
      }

    }
`;

export const MobileSection = styled.section`
    display: flex;
    justify-content: center;
    padding: 0px;
    position: relative;
    background:var(--purple2);

    article {
      display: flex;
      width: 100%;
      flex-direction: column;
      max-width: 1328px;

      @media (min-width: 768px){
        flex-flow: row wrap;
      }

      @media (min-width: 1152px) {
        min-height: calc(100vh - 56px);
      }

      .copy {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        position: relative;
        order: 1;
        align-items: flex-start;
        padding: 4rem 2rem;

        @media (min-width: 768px) {
          padding: 4rem;
          padding-right: 0px;
          width: 60%;
          order: unset;
        }

        a h1{
          font-size:1.75rem;
          color: rgb(192, 147, 251);
          font-weight:600;
          margin:0;
          &:hover {
            text-decoration:underline;
          }
          @media(min-width: 768px) {
            font-size: 3rem;
          }
        }

        > h1 {
          color:var(--white);
          font-size:1.75em;
          line-height:1.15;
          font-weight:600;
          margin: 0px 0px 2rem;

          @media(min-width: 768px) {
            font-size: 3rem;
          }
        }

        > a:last-child {
          color:var(--white);
          font-size: 1.125rem;
          display:block;
          width:7rem;

          svg {
            width:16px;
            height:16px;
            margin-left: 0.5rem;
            vertical-align:middle;
            path{
              fill:var(--white);
            }
          }

          &::after{
            content:'';
            width:0%;
            display:block;
            background:var(--white);
            height:2px;
            transition:.2s;
          }
          
          &:hover::after{
            width:100%;
          }

        }
        
      }

      .image {
        overflow:hidden;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        position: relative;
        align-items: flex-start;
        padding: 0px;
        order: 2;

        @media (min-width: 360px) {
          padding: 0px;
          align-items:center;
          justify-content:center;
        }

        @media (min-width: 768px) {
          width: 40%;
          order: unset;
          padding: 64px;
          align-items: center;
        }

        img {
            margin: 0px auto;
            display: block;
            object-fit: cover;
            width: auto;
            max-height: 100vh;

          @media (max-width: 360px){
            height: 450px;
            width:100%;
            max-width:100%;
          }

          @media (min-width: 768px){
            height: unset;
            width: 100%;
          }

        }
      }

    }
`;

export const ImageSection = styled.section<ImageSectionProps>`
  background-color: rgb(101, 120, 136);
  display: flex;
  justify-content: center;
  padding: 0px;
  position: relative;

  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.background});

  article {
    display: flex;
    width: 100%;
    flex-direction: column;
    max-width: 1328px;

    @media (min-width: 1152px) {
      min-height: calc(100vh - 56px);
    }

    @media (min-width: 768px){
      flex-flow: row wrap;
    }

    .copy {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      position: relative;
      order: 1;
      align-items: flex-start;
      padding: 4rem 2rem;

      > h1 {
          color:var(--white);
          font-size:1.75rem;
          line-height:1.15;
          font-weight:600;
          margin: 0px 0px 2rem;

          @media(min-width: 768px) {
            font-size: 3rem;
          }
        }

        > a:last-child {
          color:var(--white);
          font-size: 1.125rem;
          display:block;
          width:13.5rem;

          svg {
            width:16px;
            height:16px;
            margin-left: 0.5rem;
            vertical-align:middle;
            path{
              fill:var(--white);
            }
          }

          &::after{
            content:'';
            width:0%;
            display:block;
            background:var(--white);
            height:2px;
            transition:.2s;
          }
          
          &:hover::after{
            width:100%;
          }

        }
    }
  }

`;

export const Footer = styled.footer`
  background:var(--text3);

  .footerNav {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 48px;
    border-bottom: 1px solid rgb(25, 25, 25);
    padding: 80px 24px;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      padding-left: 40px;
      padding-right: 40px;
    }

    @media screen and (min-width: 1152px) {
      padding-left: 56px;
      padding-right: 56px;
    }

    @media screen and (min-width: 1366px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 80px;
    }
  }

  .navItem {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      margin-bottom: 0px;
    }

    p {
      margin: 0px 0px 2rem;
      color: rgb(245, 245, 245);
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.32;

      &:nth-of-type(2) {
        margin: 0px;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.5;
      }
    }

    a {
      color: var(--white);
      margin: 0px;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.2;
      margin-bottom: 0.5rem;
      display:flex;
      align-items: center;

      > svg {
        width: 16px;
        height: 16px;
        margin-left: .5rem;
        path {
          fill: var(--white);
        }
      }
    }
    
  }

  .navItem.apps {
    a {
      svg {
        width:151px;
        height:56px;
      }
    }
  }

  .nuInfos {
    display: grid;
    row-gap: 40px;
    border-bottom: 1px solid rgb(25, 25, 25);
    padding: 80px 24px;

    @media screen and (min-width: 768px) {
      padding-left: 40px;
      padding-right: 40px;
    }

    @media screen and (min-width: 1152px) {
      grid-template-columns: 98px 9fr 2fr;
      padding-left: 56px;
      padding-right: 56px;
    }


    > svg {
      width:66px;
      path {
        fill:var(--white)
      }
    }

    p {
      padding:0;
      margin: 0px;
      color: rgb(245, 245, 245);
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.5;
    }

    .redes {
      @media screen and (min-width: 1152px){
        display: flex;
        justify-content: flex-end;
        margin-top: 0px;
      }

      a {
        align-self: center;

        & + a {
          margin-left: 2rem;
        }

        svg {
          width:20px;
          height:20px;
          path{
            fill:var(--white)
          }
        }

        &:focus {
          outline: var(--purple) solid 2px;
        }

        &:hover svg path{
          fill:var(--hover);
        }
      }

    }
  }

  .linguas {
    padding:2.5rem 1.5rem;

    @media screen and (min-width: 768px) {
      padding-left: 40px;
      padding-right: 40px;
    }

    @media screen and (min-width: 1152px) {
      padding-left: 56px;
      padding-right: 56px;
    }

    ul {
      display: flex;
      align-items: center;
      margin: 0px;
      padding: 0px;

      @media screen and (min-width: 768px) {
        justify-content: flex-end;
      }

      li {
        display: inline-block;
        padding-bottom: 3.75rem;
        
        & + li {
          margin-left:2.5rem;
        }

        a {
          display:flex;
          align-items: center;
          color: rgb(245, 245, 245);
          font-weight: 600;

          span {
            width: 18px;
            height: 18px;
            justify-content: center;
            border: 2.5px solid rgb(245, 245, 245);
            align-items: center;
            border-radius: 50%;
            display: flex;
            margin-right: 8px;

            &::before {
              content: "";
              display: block;
              height: 6px;
              width: 6px;
              border-radius: 50%;
              background-color: transparent
            }
            
            &.active::before {
              background-color: rgb(245, 245, 245);
            }

          }

          p {
            font-size: 1rem;
            line-height: 1.5;
            margin:0;
          }

          &:hover, &:focus {
            color:var(--hover);
            text-decoration:underline;
            span{
              border-color:var(--hover);
            }
            span::before, span:focus{
              background-color:var(--hover);
            }
          }
        }
      }
    }
  }
`;