import { Formik, ErrorMessage } from "formik";

import { object, string, number } from "yup";
import { PropTypes } from "prop-types";
import {
  CustomerForm,
  FormInput,
  FormLabel,
  LabelTitle,
  Submit,
} from "./OrderForm.styled";
import { sendOrder } from "../../../services/sendOrder";

const OrderForm = ({ order, totalPrice, setOrder }) => {
  const formInitialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const validationSchema = object({
    name: string().required(),
    email: string().email().required(),
    phone: number().required(),
  });

  const submitOrder = async (values, { resetForm }) => {
    const completedOrder = {
      customer: { ...values },
      order: { ...order },
      totalPrice,
    };

    sendOrder(completedOrder);
    setOrder([]);
    resetForm();
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={validationSchema}
      onSubmit={submitOrder}
    >
      <CustomerForm>
        <FormLabel>
          <LabelTitle>Name</LabelTitle>
          <FormInput type="text" name="name" />
          <ErrorMessage name="name" />
        </FormLabel>

        <FormLabel>
          <LabelTitle>Phone</LabelTitle>
          <FormInput type="tel" name="phone" />
          <ErrorMessage name="phone" />
        </FormLabel>
        <FormLabel>
          <LabelTitle>Email</LabelTitle>
          <FormInput type="email" name="email" />
          <ErrorMessage name="email" />
        </FormLabel>
        <FormLabel>
          <LabelTitle>Address</LabelTitle>
          <FormInput type="address" name="address" />
          <ErrorMessage name="address" />
        </FormLabel>

        <Submit type="submit">Submit</Submit>
      </CustomerForm>
    </Formik>
  );
};
OrderForm.propTypes = {
  order: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  setOrder: PropTypes.func.isRequired,
};
export default OrderForm;
