import { PracticeFormPage } from "../pageObjects/practiceFormPage";
describe("Final Task specs", () => {
  it("Practice Form", () => {
    PracticeFormPage.visit();
    const name = "John",
      lastName = "Doe",
      email = "johndoe@gmail.com",
      phoneNumber = "2873645629",
      pic = "cypress/files/pic.jpg",
      address = "Main Street 2-1";
    PracticeFormPage.nameField.type(name);
    PracticeFormPage.lastNameField.type(lastName);
    PracticeFormPage.emailField.type(email);
    PracticeFormPage.genderRadioBtn.click();
    PracticeFormPage.userNumber.type(phoneNumber);
    PracticeFormPage.clickDateField.click();
    PracticeFormPage.selectYear.select("1930");
    PracticeFormPage.selectMonth.select("February");
    PracticeFormPage.selectDay.click();
    PracticeFormPage.setSubjects.type("Economics{enter}");
    PracticeFormPage.setHobbies.click();
    PracticeFormPage.uploadPicture.selectFile(pic);
    PracticeFormPage.currentAddress.type(address);
    PracticeFormPage.selectState.click();
    PracticeFormPage.chooseState("NCR");
    PracticeFormPage.selectCity.click();
    PracticeFormPage.chooseCity("Delhi");
    PracticeFormPage.submitBtn.click();
    //Validate
    PracticeFormPage.validateLabels.should("contain.text", name);
    PracticeFormPage.validateLabels.should("contain.text", lastName);
    PracticeFormPage.validateLabels.should("contain.text", email);
    PracticeFormPage.validateLabels.should("contain.text", "Male");
    PracticeFormPage.validateLabels.should("contain.text", phoneNumber);
    PracticeFormPage.validateLabels.should("contain.text", "28 February,1930");
    PracticeFormPage.validateLabels.should("contain.text", "Economics");
    PracticeFormPage.validateLabels.should("contain.text", "Music");
    PracticeFormPage.validateLabels.should("contain.text", "pic.jpg");
    PracticeFormPage.validateLabels.should("contain.text", address);
    PracticeFormPage.validateLabels.should("contain.text", "NCR Delhi");
  });
});
