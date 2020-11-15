import styled from 'styled-components'

export const Wrap = styled.div`
  & > h3 {
    margin: 1rem 0;
  }

  & > div {
    margin-left: 1rem;

    & > ol > li {
      list-style: none;
      margin-bottom: 1rem;
    }
  }
`
