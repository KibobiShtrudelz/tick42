import styled from 'styled-components'

import utils from '../../../utils'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  list-style: circle;

  & > span {
    :first-child {
      cursor: pointer;
      margin-bottom: 0.5rem;
    }
  }
`

export const ProjectDetails = styled.div`
  padding: 1rem;
  margin-left: 2rem;
  ${() => utils.styleSnippets.box}

  & > div {
    display: flex;
    justify-content: space-between;

    width: 60%;

    :nth-of-type(3) {
      display: flex;
      flex-direction: column;

      & > strong {
        & > span {
          display: block;
          margin-bottom: 1rem;

          &.add {
            cursor: pointer;
            font-size: 0.9rem;
          }
        }
      }
    }

    & > form {
      display: flex;
      justify-content: space-between;

      width: 100%;
      padding: 0.5rem 0;

      input {
        border: none;
        min-width: 50%;
        padding: 0.3rem;
        border-radius: 0.2rem;
      }

      button {
        color: #fff;
        width: 100px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 0.2rem;
        background-color: deepskyblue;
      }
    }

    & > ol {
      margin-left: 1rem;

      li {
        display: flex;
        justify-content: space-between;

        & > div {
          & > .remove {
            color: #fff;
            border: none;
            outline: none;
            cursor: pointer;
            background-color: red;
            border-radius: 0.2rem;
            padding: 0.2rem 0.3rem;
          }
        }
      }
    }
  }
`
