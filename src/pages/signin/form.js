import React from 'react';

import {Form} from 'react-bootstrap';

import SButton from "./../../components/Button/index";
import { TextInputWithLabel } from "../../components/TextInput";

const SForm = ({form, isLoading, handleSubmit, handleChange}) => {
    return (
      <Form>
        <TextInputWithLabel
          label="Email Address"
          name="email"
          onChange={handleChange}
          value={form.email}
          placeholder="email"
          type="email"
        />

        <TextInputWithLabel
          label="password"
          name="password"
          placeholder="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          // autocomplete={'on'}
        />
        <SButton
          loading={isLoading}
          disabled={isLoading}
          variant="primary"
          action={handleSubmit}
        >
          SignIN
        </SButton>
      </Form>
    );
}

export default SForm;
