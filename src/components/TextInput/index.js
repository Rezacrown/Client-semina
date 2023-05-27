import React from "react";
import { Form } from "react-bootstrap";

export function TextInput({ name, value, type, onChange, placeholder, onKeyboard }) {
  return (
    <Form.Control
      type={type}
      name={name}
      value={value} // state
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyboard}
      autoComplete="on"
    />
  );
}


export function TextInputWithLabel({
  label,
  name,
  value, // state
  type,
  onChange,
  placeholder,
  onKeyboard,
})
{
  return (
    <Form.Group className="mb-2">
      <Form.Label>{label}</Form.Label>
      <TextInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyboard={onKeyboard}
      />
    </Form.Group>
  );
}
