import styled from 'styled-components';

interface FormProps{
  error:string;
  success:boolean;
  hasValue:string;
}

const borderColor = (props) => {
  if (props.error) {
    return 'var(--error)';
  }else if (props.success) {
    return 'var(--success)';
  }else {
    return 'rgba(17, 17, 17, 0.2)';
  }
}

export const Container = styled.div<FormProps>`
  justify-self: center;
  grid-area: 3 / 1 / span 2 / span 4;

  @media(min-width: 768px) {
    place-self: flex-end;
    grid-area: 2 / 4 / auto / span 3;
  }

  @media(min-width: 1152px) {
    align-self: auto;
    grid-area: 1 / 9 / auto / span 4;
  }

  > div {
    width:100%;
    
    .formContent {
      position: relative;
      padding: 1.5rem;
      border-radius: 1rem;
      background-color: var(--white);
      max-width: 20.625rem;
      margin: auto;

      @media (min-width: 768px){
        margin-right: 0px;
      }

      h3 {
        font-weight:600;
        color:var(--text3);
        margin: 0 0 2rem;

        @media (min-width: 768px){
          font-size: 1.5rem;
          line-height: 1.32;
        }
      }

      > div {
        font-size: 1rem;
        max-width: 100%;
        padding: 1rem 0px;
        position: relative;
        min-height: 96px;

        label {
          cursor: pointer;
          position: absolute;
          display: block;
          color: var(--text);
          font-weight: 400;
          top:${props => props.hasValue ? '0px' : '26px'};
          font-size: ${props => props.hasValue ? '.8rem' : '1rem'};
          pointer-events: none;
          transition:.2s;
        }

        input {
          width:100%;
          padding: .5rem 1.5rem .5rem 0;
          border:0;
          border-bottom: 1px solid;
          border-color: ${props => borderColor(props)};
          color: ${props => borderColor(props)};
          font-weight:600;
          font-size:1.125rem;
          line-height:1.5rem;

          &:focus + label{
            font-size:.8rem;
            top:0px;
          }
        }

        span svg {
          width:16px;
          height:16px;
          position:absolute;
          top:26px;
          right:0;
        }

        p {
          color: var(--error);
          margin-top: 0.5rem;
          display: block;
          position: absolute;
          font-size: 1rem;
          font-weight:500;
        }

      }

      button {
        background: ${props => props.error || !props.hasValue ? 'rgba(17, 17, 17, 0.1)' : 'var(--purple)'};
        border:0;
        height:3rem;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 1.125rem;
        border-radius:6.25rem;
        color:${props => props.error || !props.hasValue ? 'rgba(17, 17, 17, 0.2)' : 'var(--white)'};
        font-size:1.2rem;
        cursor: ${props => props.error || !props.hasValue ? 'not-allowed' : 'pointer'};
    
        svg {
          width:16px;
          height:16px;
          path {
            fill:${props => props.error || !props.hasValue ? 'rgba(17, 17, 17, 0.2)' : 'var(--white)'};
          }
        }
      }

    }
  }
`;
