import {ChangeEvent, useState} from "react";

export function useForm(inputValues: any) {
    const [values, setValues] = useState(inputValues);

    const handleChange = (event: ChangeEvent) => {
        const {value, name} = event.target as HTMLTextAreaElement;
        setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
}
