import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  text-align: center;
  font-size: 16px;
  width: 100%;
  align-items: stretch;
`;

const selectedColor = "rgb(30,190,230)";
const defaultColor = "transparent";

export const TabItem = styled.div`
  background-color: white;
  width: 100%;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 2px solid
    ${(props) => (props.selected ? selectedColor : defaultColor)};
  font-weight: ${(props) => (props.selected ? 700 : 400)};
`;
