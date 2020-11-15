import styled from 'styled-components'

import utils from '../../../utils'

export const Li = styled.li`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  & > div {
    &.employee-wrap {
      display: flex;
      cursor: pointer;
      justify-content: space-between;
    }
  }
`

export const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 0.5rem;
  margin: 1rem 0 1rem 2rem;
  ${() => utils.styleSnippets.box}
`

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;

  & > div {
    &.job-area-wrap {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-between;

      & > div.job-area-details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 0.3rem;
        margin-top: 1rem;
        ${() => utils.styleSnippets.box}

        & > span {
          :first-child {
            margin-right: 2rem;
          }
        }
      }
    }

    & > span {
      &.clickable {
        color: blue;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`

export const JobAreaWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
