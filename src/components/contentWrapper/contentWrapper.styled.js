import styled from 'styled-components'

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100%;
`
