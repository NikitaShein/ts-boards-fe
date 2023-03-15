import { useEffect, useState } from "react";
import { Validations } from "./useInput";

const useInputValidation = (value: string, validations: Validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [minLengthError, setMinLenghtError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;

        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case "minLength":
          value.length < validations[validation]
            ? setMinLenghtError(true)
            : setMinLenghtError(false);
          break;
      }
    }
  }, [value]);

  return {
    isEmpty,
    emailError,
    maxLengthError,
    minLengthError,
  };
};

export default useInputValidation;
