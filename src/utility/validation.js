// const TODAY = new Date();

let CURRENT_YEAR = new Date().getFullYear();
let LAST_100_YEAR = CURRENT_YEAR - 100;

//////////////////Function For Validating Email
function validation({
  firstName,
  lastName,
  email,
  gender,
  password,
  date,
  month,
  year,
}) {
  // eslint-disable-next-line no-useless-escape
  let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.toLowerCase().match(validEmail)) {
    throw Error("Email Is Not Valid");
  } else if (password.length < 8) {
    throw new Error("Enter a Strong password");
  } else if (
    firstName.length < 3 ||
    lastName.length < 3 ||
    year < LAST_100_YEAR
  ) {
    throw new Error("Sign Up Information Not Complete");
  }

  return "Validation Passed";
}

export { validation };
