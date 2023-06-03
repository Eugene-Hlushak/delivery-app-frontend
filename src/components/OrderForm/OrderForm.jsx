import { Formik, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import { PropTypes } from "prop-types";
import {
  AddContactForm,
  FormInput,
  FormLabel,
  LabelTitle,
} from "./OrderForm.styled";
import { sendOrder } from "../../../services/sendOrder";

const OrderForm = ({ order, totalPrice }) => {
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
      user: { ...values },
      order: { ...order },
      totalPrice,
    };
    sendOrder(completedOrder);
    resetForm();
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={validationSchema}
      onSubmit={submitOrder}
    >
      <AddContactForm>
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

        <button type="submit">Submit</button>
      </AddContactForm>
    </Formik>
  );
};
OrderForm.propTypes = {
  order: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
export default OrderForm;