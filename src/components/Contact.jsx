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
    <section className="mt-20">
      <h2>{t("contactTitle")}</h2>
      <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div>

      <div className="mt-14">
        <div className="mt-10 lg:mt-14 xl:mt-0">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validate={validate}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <label
                  className="block text-lg font-semibold text-left font-SourceSansPro dark:text-white"
                  htmlFor="name"
                >
                  {t("contactNameLabel")}
                </label>
                <Field
                  className="w-full p-3 border-2 border-solid rounded-lg shadow-sm font-SourceSansPro focus:font-SourceSansPro focus:outline-none dark:text-white bg-primaryGrey/10 backdrop:blur-sm"
                  type="text"
                  id="name"
                  name="name"
                />
                <ErrorMessage
                  className="text-left dark:text-white"
                  name="name"
                  component="div"
                />
              </div>

              <div>
                <label
                  className="block mt-4 text-lg font-semibold text-left font-SourceSansPro dark:text-white"
                  htmlFor="email"
                >
                  {t("contactEmailLabel")}
                </label>
                <Field
                  className="w-full p-3 border-2 border-solid rounded-lg shadow-sm font-SourceSansPro focus:font-SourceSansPro focus:outline-none dark:text-white bg-primaryGrey/10 backdrop:blur-sm"
                  type="email"
                  id="email"
                  name="email"
                />
                <ErrorMessage
                  className="text-left dark:text-white"
                  name="email"
                  component="div"
                />
              </div>

              <div>
                <label
                  className="block mt-4 text-lg font-semibold text-left font-SourceSansPro dark:text-white"
                  htmlFor="message"
                >
                  {t("contactMessageLabel")}
                </label>
                <Field
                  className="w-full p-3 border-2 border-solid rounded-lg shadow-sm resize-none font-SourceSansPro focus:font-SourceSansPro focus:outline-none bg-portfolio-primary-color-grey/10 backdrop:blur-sm dark:text-white bg-primaryGrey/10"
                  as="textarea"
                  id="message"
                  name="message"
                />
                <ErrorMessage
                  className="text-left dark:text-white"
                  name="message"
                  component="div"
                />
              </div>

              <button
                className="block px-10 py-2 mt-6 text-lg font-semibold transition duration-300 ease-in-out rounded-md font-SourceSansPro text-background-color bg-primaryRed lg:px-20 hover:scale-105 dark:bg-[#3B82F6]"
                type="submit"
              >
                {t("submitButton")}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}
