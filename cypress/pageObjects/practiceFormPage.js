import { BasePage } from "./basePage";

export class PracticeFormPage extends BasePage {
  static get url() {
    return "/";
  }
  static get nameField() {
    return cy.get('[id="firstName"]');
  }
  static get lastNameField() {
    return cy.get("#lastName");
  }
  static get emailField() {
    return cy.get("#userEmail");
  }
  static get genderRadioBtn() {
    return cy.get('[value="Male"]');
  }
  static get userNumber() {
    return cy.get("#userNumber");
  }
  static get clickDateField() {
    return cy.get("#dateOfBirthInput");
  }
  static get selectYear() {
    return cy.get(".react-datepicker__year-select");
  }
  static get selectMonth() {
    return cy.get(".react-datepicker__month-select");
  }
  static get selectDay() {
    return cy.contains(
      ".react-datepicker__day:not(.react-datepicker__day--outside-month)",
      /^28$/,
    );
  }
  static get setSubjects() {
    return cy.get("#subjectsInput");
  }
  static get setHobbies() {
    return cy.get('[for="hobbies-checkbox-3"]');
  }
  static get uploadPicture() {
    return cy.get("#uploadPicture");
  }
  static get currentAddress() {
    return cy.get("#currentAddress");
  }
  static get selectState() {
    return cy.get('[class="css-19bb58m"]');
  }
  static chooseState(state) {
    cy.contains(state).click();
  }
  static get selectCity() {
    return cy.get('[id="react-select-4-input"]');
  }
  static chooseCity(city) {
    cy.contains(city).click();
  }
  static get submitBtn() {
    return cy.get("#submit");
  }
  static get validateLabels() {
    return cy.get('[class="table-responsive"]');
  }
}
