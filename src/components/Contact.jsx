import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const { t } = useTranslation();

  function handleNameChange(event) {
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/[^a-zA-Z\s-]/gi, "");
    setName(sanitizedValue);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Check if the name input is empty
    if (name.trim() === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }

    // Check if the email input is valid
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email.trim())) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    // Check if the subject input is empty
    if (subject.trim() === "") {
      setSubjectError(true);
    } else {
      setSubjectError(false);
    }

    // Check if the message input is empty
    if (message.trim() === "") {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  }

  return (
    <section className="mt-20">
      <h2>
        {t("contactTitle")}
      </h2>
      <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div>

      <div className="lg:flex lg:justify-between lg:mt-14">
        <div className="hidden lg:flex lg:w-2/5 lg:max-h-[465px] lg:justify-center">
          <img
            src="./images/avatar3.png"
            alt="avatar-3"
            className="w-full"
          />
        </div>

        <form
          className="mt-14 lg:mt-0 lg:w-1/2"
          id="contactForm"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-left font-SourceSansPro dark:text-white"
            >
              {t("contactNameLabel")}
            </label>
            <input
              type="text"
              className={`w-full border-solid border-2 p-3 rounded-lg font-SourceSansPro focus:font-SourceSansPro focus:outline-none dark:text-white ${
                nameError
                  ? "border-primaryRed"
                  : name !== ""
                  ? "border-green-500"
                  : ""
              } bg-primaryGrey/10 backdrop:blur-sm shadow-sm dark:focus:text-portfolio-background-color`}
              id="name"
              aria-describedby="nameError"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            {nameError && (
              <p
                className="text-left text-red-600 font-SourceSansPro"
                id="nameError"
                role="alert"
                aria-live="assertive"
              >
                Name cannot be empty
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mt-4 text-lg font-semibold text-left font-SourceSansPro dark:text-white"
            >
              {t("contactEmailLabel")}
            </label>
            <input
              type="email"
              className={`w-full border-solid border-2 p-3 rounded-lg font-SourceSansPro focus:font-SourceSansPro placeholder:font-SourceSansPro focus:outline-none placeholder:text-portfolio-primery-color-red bg-portfolio-primary-color-grey/10 backdrop:blur-sm shadow-sm dark:focus:text-portfolio-background-color dark:text-white ${
                emailError
                  ? "border-primaryRed"
                  : email !== ""
                  ? "border-green-500"
                  : ""
              } bg-primaryGrey/10 backdrop:blur-sm shadow-sm`}
              id="email"
              aria-describedby="emailError"
              name="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p
                className="text-left text-red-600 font-SourceSansPro"
                id="emailError"
                role="alert"
                aria-live="assertive"
              >
                Looks like this is not an email
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mt-4 text-lg font-semibold text-left font-SourceSansPro dark:text-white"
            >
              {t("contactSubjectLabel")}
            </label>
            <input
              type="text"
              className={`w-full border-solid border-2 p-3 rounded-lg font-SourceSansPro focus:font-SourceSansPro focus:outline-none bg-portfolio-primary-color-grey/10 backdrop:blur-sm shadow-sm dark:focus:text-portfolio-background-color dark:text-white ${
                subjectError
                  ? "border-primaryRed"
                  : subject !== ""
                  ? "border-green-500"
                  : ""
              } bg-primaryGrey/10 backdrop:blur-sm shadow-sm`}
              id="subject"
              aria-describedby="subjectError"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {subjectError && (
              <p
                className="text-left text-red-600 font-SourceSansPro"
                id="subjectError"
                role="alert"
                aria-live="assertive"
              >
                Subject cannot be empty
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mt-4 text-lg font-semibold text-left font-SourceSansPro dark:text-white"
            >
              {t("contactMessageLabel")}
            </label>
            <textarea
              aria-describedby="messageError"
              id="message"
              className={`w-full border-solid border-2 p-3 rounded-lg resize-none font-SourceSansPro focus:font-SourceSansPro focus:outline-none bg-portfolio-primary-color-grey/10 backdrop:blur-sm shadow-sm dark:focus:text-portfolio-background-color dark:text-white ${
                messageError
                  ? "border-primaryRed"
                  : message !== ""
                  ? "border-green-500"
                  : ""
              } bg-primaryGrey/10 backdrop:blur-sm shadow-sm`}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {messageError && (
              <p
                className="text-left text-red-600 font-SourceSansPro"
                id="messageError"
                role="alert"
                aria-live="assertive"
              >
                Message cannot be empty
              </p>
            )}
          </div>

          <button
            type="submit"
            className="block px-10 py-2 mt-6 text-lg font-semibold transition duration-300 ease-in-out rounded-md font-SourceSansPro text-background-color bg-primaryRed lg:px-20 hover:scale-105 dark:bg-[#3B82F6]"
          >
            {t("submitButton")}
          </button>
        </form>
      </div>
    </section>
  );
}
