import { useState } from "react";
import useInputValidation from "./useInputValidation";

export type Validations = {
  isEmpty?: boolean;
  isEmail?: boolean;
  minLength?: number;
  maxLength?: number;
};

const useInput = (initialValue: string, validations: Validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useInputValidation(value, validations);
  const onChange = (e: { target: { value: string } }) => {
    setDirty(true);
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    setValue,
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

export default useInput;
