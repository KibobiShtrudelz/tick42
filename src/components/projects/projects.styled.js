import styled from 'styled-components'

export const Wrap = styled.div`
  & > h3 {
    margin: 1rem 0;
  }

  & > div {
    margin-left: 1rem;

    & > ol > li {
      display: flex;

      list-style: none;
      margin-bottom: 1rem;
    }
  }

  button.create-project-btn {
    color: #fff;
    border: none;
    outline: none;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.2rem;
    background-color: deepskyblue;
  }
`
