import React from "react";
import emailjs from "emailjs-com";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s8nj6zn",
        "template_6pvpimr",
        e.target,
        "user_xFSBWWwoxzpf4iXMnc02B"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h3 className="form-title">formulaire d'inscription</h3>
      <div
        className="container card form-bcg"
        style={{ height: "480px", width: "640px" }}
      >
        <form className="form-group" onSubmit={sendEmail}>
          <div className="form-style">
            <label for="name_field" className="form-control">
              Votre nom et prénom
            </label>
            <input
              type="text"
              className="name_field w-100"
              name="name"
              rows="3"
              required
            ></input>
            <div className="form-style ">
              <label for="_replyto" className="form-control">
                Votre email
              </label>
              <input
                type="email"
                className="_replyto w-100"
                name="_replyto"
                rows="3"
                required
              ></input>
            </div>
            <div className="form-style ">
              <label for="message" className="form-control w-100">
                Votre Message
              </label>
              <textarea
                className="textarea_message w-100"
                name="message"
                rows="5"
              ></textarea>
            </div>
            <div className="form-style "></div>
            <button
              type="submit"
              className="form-button form-control btn btn-success"
            >
              c'est parti !
            </button>
          </div>
          <div className="upload"></div>
        </form>
      </div>
    </div>
  );
};

export default Mailer;
