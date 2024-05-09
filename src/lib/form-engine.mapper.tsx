import { Box, Column, Row } from "@bolttech/frontend-foundations";
import { Input } from "@bolttech/atoms-input";

const Mapper = {
  row: {
    component: Row,
  },
  column: {
    component: Column,
  },
  box: {
    component: Box,
  },
  input: {
    component: Input,
  },
};

const formBuilderPropsMapping = {
  input: {
    getValue: "onChange",
    setValue: "value",
    setErrorMessage: "errorMessage",
    onBlur: "onBlur",
    onFocus: "onFocus",
  },
};

export { Mapper, formBuilderPropsMapping };
