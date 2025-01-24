// import { TextField, TextFieldProps } from "@mui/material"
import { useField } from "@unform/core";
import { Textarea, TextareaProps } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";


type IVTextFieldProps = TextareaProps & {
    name: string;
    customChange?: (value: any) => any;
}

export const VTextArea = ({ name, customChange, ...rest }: IVTextFieldProps) => {

    const {
        fieldName,
        registerField,
        defaultValue,
        error,
        clearError
    } = useField(name);

    const [value, setValue] = useState(defaultValue || '');

    const handleChange = useCallback(
      (value: any) => {
        if (!!customChange && !!value) {
          setValue(customChange?.(value));
        } else {
          setValue(value);
        }
      },
      [customChange]
    );

    useEffect(() => {
        registerField({
            name: fieldName,
            getValue: () => value,
            setValue: (_, newValue) => handleChange(newValue),
        })
    }, [registerField, fieldName, value, handleChange])

    return (
      <Textarea
        {...rest}
        color={!!error ? "failure" : "gray"}
        helperText={error}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={() => (error ? clearError() : undefined)}
        />
        
    );
}