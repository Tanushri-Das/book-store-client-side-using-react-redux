import React, { memo } from "react";
import * as S from "./styles";

const TabItem = memo(({ children, ...restProps }) => (
  <S.TabItem {...restProps}>{children}</S.TabItem>
));

export default TabItem;
