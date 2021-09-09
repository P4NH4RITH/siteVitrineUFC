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
        className="container card"
        style={{ height: "480px", width: "640px" }}
      >
        <form className="form-group" onSubmit={sendEmail}>
          <div className="form-style">
            <label for="name_field" className="form-control">
              Votre nom et prénom
            </label>
            <input
              type="text"
              className="name_field"
              name="name"
              required
            ></input>
            <div className="form-style ">
              <label for="_replyto" className="form-control">
                Votre email
              </label>
              <input
                type="email"
                className="_replyto"
                name="_replyto"
                required
              ></input>
            </div>
            <div className="form-style ">
              <label for="message" className="form-control">
                Votre Message
              </label>
              <textarea className="textarea_message" name="message"></textarea>
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
