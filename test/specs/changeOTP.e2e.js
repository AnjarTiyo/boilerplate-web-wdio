const env = require('dot-env')
const chaiExpect = require('chai').expect

const BASE_URL = "https://app.privy.id"
let method;
const privyId = process.env.PRIVYID 
const password = process.env.PASSWORD

describe('Feature: Change Default OTP Method', () => {
    it('Input privy Id', async () => {
        // 1. Open browser and maximize
        await browser.url(BASE_URL)
        await browser.fullscreenWindow()

        // 2. Login with valid credentials
        await browser.$('input[name="user[privyId]"').setValue(privyId)
        await browser.keys("\uE007")
        await browser.$("#tag-lg001").click()
        await browser.$("#__BVID__6").setValue(password)
        await browser.$("#tag-lg001").click()

        // 3. Assert succesful login
        await expect(browser).toHaveUrlContaining("dashboard")

        // 4. Goto change password page
        await browser.url(BASE_URL + '/settings/change-password')

        // 5. Change default otp method, get current method first than change the other way (from sms to email or vice versa)
        await browser.$('#v-security-0__BV_toggle_').click()

        const currentOtpMethod = await browser.$('#v-security-0__BV_toggle_').getText()

        if(currentOtpMethod === "Send OTP via SMS") {
            method = "Email"
        } else {
            method = "SMS"
        }
        await browser.$("aria/Send OTP via " + method).click()

        // 6. Refresh browser after OTP changed
        await browser.refresh()
        
        // 7. Verify if default OTP was changed
        const otpMethod = await browser.$('#v-security-0__BV_toggle_').getText()
        await chaiExpect(otpMethod).to.be.eql("Send OTP via " + method)
    })
})
