import React, { FC } from "react";
import { StyledInput, SearchBoxWrapper, SearchIcon } from "./SearchBox.styles";

export type SearchBoxProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export const SearchBox: FC<SearchBoxProps> = ({
  placeholder,
  onChange,
  value,
}) => {
  return (
    <SearchBoxWrapper>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchIcon />
    </SearchBoxWrapper>
  );
};
