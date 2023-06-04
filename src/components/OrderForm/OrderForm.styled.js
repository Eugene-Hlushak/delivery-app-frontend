import { Form, Field } from "formik";
import styled from "styled-components";

export const CustomerForm = styled(Form)`
  position: relative;
  width: 400px;
  margin-bottom: 10px;
  margin-right: 15px;
  padding: 20px;

  border: 1px solid white;
`;

export const FormLabel = styled.label`
  margin-bottom: 20px;
`;

export const LabelTitle = styled.span`
  width: 100px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 20px;
`;

export const FormInput = styled(Field)`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 10px;
`;

export const Submit = styled.button`
  /* position: absolute;
  right: 0;
  bottom: -60px; */
  padding: 10px;
  height: 50px;
  width: 150px;
  display: block;
  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: border-color 0.25s;
  background-color: bisque;

  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
