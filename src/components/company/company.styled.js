import styled from 'styled-components'

export const Wrap = styled.div`
  padding: 1rem;

  h1 {
    cursor: pointer;
    font-size: 1.2rem;

    :hover {
      opacity: 0.5;
      transition: opacity 500ms;
    }
  }

  .active {
    color: orange;
  }
`
