import { Formik, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import {
  AddContactForm,
  FormInput,
  FormLabel,
  //   CheckboxContainer,
  LabelTitle,
  //   CheckboxLabel,
  //   CheckboxLabelNoMarginRight,
  //   Container,
} from "./OrderForm.styled";

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

  const submitOrder = (values, { resetForm }) => {
    const completedOrder = {
      user: { ...values },
      order: { ...order },
      totalPrice,
    };
    console.log(completedOrder);
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

        {/* <CheckboxContainer>
          <LabelTitle>Cathegory</LabelTitle>
          <Container>
            <CheckboxLabel>
              <FormInput type="checkbox" name="cathegory" value="Friends" />
              Friends
            </CheckboxLabel>
            <CheckboxLabelNoMarginRight>
              <FormInput type="checkbox" name="cathegory" value="Family" />
              Family
            </CheckboxLabelNoMarginRight>
            <CheckboxLabel>
              <FormInput type="checkbox" name="cathegory" value="Vip" />
              Vip
            </CheckboxLabel>
            <CheckboxLabelNoMarginRight>
              <FormInput type="checkbox" name="cathegory" value="Work" />
              Work
            </CheckboxLabelNoMarginRight>
          </Container>
        </CheckboxContainer> */}
        <button type="submit">Submit</button>
      </AddContactForm>
    </Formik>
  );
};

export default OrderForm;
