import styled from 'styled-components'

import utils from '../../../utils'

export const Wrap = styled.div`
  width: 40%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  margin: 1.5rem;
  ${() => utils.styleSnippets.box}

  & > span {
    &.close {
      width: 1rem;
      color: #fff;
      border: none;
      cursor: pointer;
      font-size: 0.5rem;
      border-radius: 50%;
      margin-bottom: 1rem;
      background-color: red;
      padding: 0.2rem 0.4rem;
    }
  }

  input {
    border: none;
    padding: 0.3rem;
    border-radius: 0.3rem;
    margin-bottom: 0.5rem;

    :disabled {
      color: #d1d1d1;
      background-color: #fff;
    }
  }

  button {
    color: #fff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    max-width: 10rem;
    border-radius: 0.3rem;
    background-color: #5cdb95;

    :disabled {
      background-color: grey;
    }
  }
`
