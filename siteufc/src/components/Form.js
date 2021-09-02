import React from "react";
// import { FormspreeProvider } from "@formspree/react";
import { useForm } from "@formspree/react";
const [state, handleSubmit] = useForm("{form-key}");

function SignupForm() {
  const [state, handleSubmit] = useForm("signupForm");
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <button type="submit" disabled={state.submitting}>
        Sign up
      </button>
    </form>
  );
}
export default SignupForm;
