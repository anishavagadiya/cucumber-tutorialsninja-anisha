package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class SucessPage extends Utility {
    private static final Logger log = LogManager.getLogger(SucessPage.class.getName());
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Your Account Has Been Created!')]")
    WebElement yourAccountText;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement sucessContinue;

    public SucessPage() {
        PageFactory.initElements(driver, this);
    }
    public String verifyYourAccountMessage() {
        log.info("Verify your Account Message" + yourAccountText.toString());
        return getTextFromElement(yourAccountText);
    }

    public void clickOnSucessContinueButton() {
        log.info("Click on sucess continue button " + sucessContinue.toString());
        clickOnElement(sucessContinue);
    }
}
