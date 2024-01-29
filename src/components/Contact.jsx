import { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    console.log("email sent");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hm37obs",
        "template_s3ixxzg",
        form.current,
        "YGb0Wd2rqSPSCs3oF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="mt-20">
      <h2>{t("contactTitle")}</h2>
      <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div>

      <div className="mt-14">
        <form
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input
            type="text"
            name="user_name"
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea name="message" />
          <input
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
}
