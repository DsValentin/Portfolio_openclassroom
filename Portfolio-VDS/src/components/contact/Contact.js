import React from "react";
import "./contact.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const schema = yup
    .object({
      name: yup
        .string()
        .max(50)
        .required("Merci de rentrer votre nom et prénom"),
      email: yup
        .string()
        .email("Merci de rentrer une adresse mail valide")
        .max(255)
        .required("Merci de rentrer une adresse mail"),
      message: yup.string().required("Merci de rentrer un message"),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    alert("😀 Merci pour votre message, il sera traité au plus vite 😀");
    const templateId = "template_m5rkrog";
    const serviceId = "service_u6f8eb9";
    sendFeedback(serviceId, templateId, {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      reply_to: data.email,
    });
    reset();
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "user_BzMk7Qd4PRBXxrEDc")
      .then((res) => {
        console.log("success", res.status, res.text);
      })
      .catch((err) => {
        console.error("Erreur lors de l'envoi de l'email :", err);
      });
  };

  return (
    <div>
      <h1 className="h1-contact">Formulaire de Contact</h1>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-content">
          <label htmlFor="name" className="label-contact">
            Nom et Prénom :
          </label>
          <input
            className="input-contact"
            type="text"
            id="name"
            name="name"
            placeholder="Nom et Prénom"
            autoComplete="name"
            {...register("name")}
          />
          {errors.name && <p id="c-yup">{errors.name.message}</p>}

          <label htmlFor="email" className="label-contact">
            Adresse mail :
          </label>
          <input
            className="input-contact"
            type="email"
            id="email"
            name="email"
            placeholder="exemple@gmail.com"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && <p id="c-yup">{errors.email.message}</p>}

          <label htmlFor="subject" className="label-contact">
            Sujet :
          </label>
          <select
            className="select-contact"
            id="subject"
            name="subject"
            autoComplete="off"
            {...register("subject")}
          >
            <option value="questions">Questions</option>
            <option value="autre">Autre</option>
          </select>

          <label htmlFor="message" className="label-contact">
            Message :
          </label>
          <textarea
            className="message-contact"
            id="message"
            name="message"
            placeholder="Merci de renseigner vos questions ou commentaires"
            autoComplete="off"
            cols="20"
            rows="10"
            {...register("message")}
          ></textarea>
          {errors.message && <p id="c-yup">{errors.message.message}</p>}

          <button className="button-contact" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
