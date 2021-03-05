import React from "react";
import App from "./App";

class AppContainer extends React.Component {
  state = {
    dentist: [
      { firstname: "", surname: "", phone: "", email: "" }]
  }

  addDentist = (state, firstname, surname, phone, email) => {
    state = { ...this.state.dentist }
    newState = addDentist(state, "Toos", "Trekker", "06-12345678", "toos@tandartspraktijkbvt.nl")
    this.setState({ newState })
  }

  render() {
    return (
      <App />
    )
  }
};
export default AppContainer;