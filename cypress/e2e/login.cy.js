import LoginPage from "../pages/LoginPage";
import MakeAppointment from "../pages/MakeAppointmentPage";

describe('Login functionality', () => {
  const loginpage = new LoginPage();
  const makeAppointment = new MakeAppointment();

  it('login with valid credentials', () => {
    loginpage.loginToKura("John Doe", "ThisIsNotAPassword");
    makeAppointment.validLogin();
  })

  it('login with invalid credentials', () => {
    loginpage.loginToKura("Wrong", "invalid");
    loginpage.invalidAssertion();
  })
})