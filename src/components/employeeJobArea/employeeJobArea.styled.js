import styled from 'styled-components'

import utils from '../../utils'

export const Wrap = styled.div`
  padding: 1rem;
  margin: 1rem 0 0 1.5rem;
  ${() => utils.styleSnippets.box}

  .address-wrapper {
    max-width: 20rem;

    & > h3 {
      margin-bottom: 1rem;
    }

    & > div {
      display: flex;
      justify-content: space-between;
    }
  }
`
