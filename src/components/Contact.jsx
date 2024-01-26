import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    if (!values.subject) {
      errors.subject = "Subject is required";
    }

    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Perform form submission logic here
    console.log("Form submitted successfully!", values);
    setSubmitting(false);
  };

  return (
    <section className="mt-20 ">
      <h2>{t("contactTitle")}</h2>
      <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div>

      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">{t("contactNameLabel")}</label>
            <Field
              type="text"
              id="name"
              name="name"
            />
            <ErrorMessage
              name="name"
              component="div"
            />
          </div>

          <div>
            <label htmlFor="email">{t("contactEmailLabel")}</label>
            <Field
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage
              name="email"
              component="div"
            />
          </div>

          <div>
            <label htmlFor="subject">{t("contactSubjectLabel")}</label>
            <Field
              type="text"
              id="subject"
              name="subject"
            />
            <ErrorMessage
              name="subject"
              component="div"
            />
          </div>

          <div>
            <label htmlFor="message">{t("contactMessageLabel")}</label>
            <Field
              as="textarea"
              id="message"
              name="message"
            />
            <ErrorMessage
              name="message"
              component="div"
            />
          </div>

          <button type="submit">{t("submitButton")}</button>
        </Form>
      </Formik>
    </section>
  );
}
