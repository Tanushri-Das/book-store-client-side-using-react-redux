import React, { useState, useEffect } from "react";
import * as S from "./styles";

const Tab = ({ children, onTabSelected }) => {
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    onTabSelected && onTabSelected(itemId);
  }, [itemId, onTabSelected]);

  return (
    <S.TabContainer>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          onClick: () => {
            setItemId(index);
          },
          selected: itemId === index,
        });
      })}
    </S.TabContainer>
  );
};

export default Tab;
