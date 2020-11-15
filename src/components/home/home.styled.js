import styled from 'styled-components'

export const Wrap = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;

  display: grid;
  grid-template-columns: minmax(10rem, 1fr) repeat(11, 1fr);
  grid-template-rows: repeat(12, auto);

  width: 100%;
  height: 100%;
`

export const NavigationSide = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;

  width: 100%;
  height: 100%;
`
