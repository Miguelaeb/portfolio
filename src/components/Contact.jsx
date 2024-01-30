import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mzbndqzn");

  if (state.succeeded) {
    return (
      <p className="mt-20">
        Thanks for your message, we will reply as soon as possible!
      </p>
    );
  }

  return (
    <section className="mt-20">
      <h2>{t("contactTitle")}</h2>
      <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div>

      <form
        className="mt-10 lg:mt-14"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <div>
            <label
              className="block text-lg font-semibold text-left font-SourceSansPro dark:text-white"
              htmlFor="firstName"
            >
              {t("contactNameLabel")}
            </label>
            <input
              className="w-full p-3 border-2 border-solid rounded-lg shadow-sm font-SourceSansPro focus:font-SourceSansPro focus:outline-none dark:text-white bg-primaryGrey/10 backdrop:blur-sm"
              id="firstName"
              type="text"
              name="firstName"
            />
            <ValidationError
              prefix="firstName"
              field="firstName"
              errors={state.errors}
            />
          </div>

          <div>
            <label
              className="block text-lg font-semibold text-left font-SourceSansPro dark:text-white"
              htmlFor="lastName"
            >
              {t("contactLastNameLabel")}
            </label>
            <input
              className="w-full p-3 border-2 border-solid rounded-lg shadow-sm font-SourceSansPro focus:font-SourceSansPro focus:outline-none dark:text-white bg-primaryGrey/10 backdrop:blur-sm"
              id="lastName"
              type="text"
              name="lastName"
            />
            <ValidationError
              prefix="lastName"
              field="lastName"
              errors={state.errors}
            />
          </div>

          <div>
            <label
              className="block text-lg font-semibold text-left font-SourceSansPro dark:text-white"
              htmlFor="email"
            >
              {t("contactEmailLabel")}
            </label>
            <input
              className="w-full p-3 border-2 border-solid rounded-lg shadow-sm font-SourceSansPro focus:font-SourceSansPro focus:outline-none dark:text-white bg-primaryGrey/10 backdrop:blur-sm"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label
              className="block mt-4 text-lg font-semibold text-left font-SourceSansPro dark:text-white"
              htmlFor="message"
            >
              {t("contactMessageLabel")}
            </label>

            <textarea
              className="w-full h-[200px] p-3 border-2 border-solid rounded-lg shadow-sm resize-none font-SourceSansPro focus:font-SourceSansPro focus:outline-none bg-portfolio-primary-color-grey/10 backdrop:blur-sm dark:text-white bg-primaryGrey/10"
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <button
          className="block px-10 py-2 mt-6 text-lg font-semibold transition duration-300 ease-in-out rounded-md font-SourceSansPro text-background-color bg-primaryRed lg:px-20 hover:scale-105 dark:bg-[#3B82F6]"
          type="submit"
          disabled={state.submitting}
        >
          {t("submitButton")}
        </button>
      </form>
    </section>
  );
}
