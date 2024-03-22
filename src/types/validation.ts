import {Message, MultipleFieldErrors, Ref,Control,FieldValues} from "react-hook-form";

export interface FieldError  {
    type: string
    ref?: Ref
    types?: MultipleFieldErrors
    message?: Message
}


// TODO(MAR) : trying to add type to { @react-form-hook } control
export interface FieldValue {
    [key: string]: any;
}
export interface FieldsControl<TFieldValues extends FieldValue> extends Control<TFieldValues> {
}
