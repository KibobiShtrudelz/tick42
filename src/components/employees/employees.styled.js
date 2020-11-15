import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;

  & > h3 {
    margin: 1rem 0;
  }

  & > div {
    margin-left: 1rem;
  }

  & > ol {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    & > div.employee-list-num {
      display: flex;
    }

    li {
      width: 100%;
    }
  }
`

export const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;

  select {
    width: 50%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0.2rem;
    border-radius: 0.2rem;
  }

  button {
    color: #fff;
    width: 3rem;
    border: none;
    outline: none;
    padding: 0.2rem;
    cursor: pointer;
    border-radius: 0.2rem;
    background-color: #5cdb95;
  }
`
