# Web Automation using Webdriver IO

In this script we would like to automate change Default OTP Method of our Privy Apps. Below is the step

### Step of Test Cases
1. Open Browser
2. Login with valid credentials
3. Go to change password page
4. Get current default OTP Method (from email to sms or vice versa)
5. Change OTP Method
6. Refresh browser
7. Verify if current OTP Method is changed

### Step to use this automation script

#### Preqrequisite
1. Already install Node.js
2. Already install npm
3. Chromedriver installed

#### 1. Clone this reqpo

``` sh
git clone https://github.com/AnjarTiyo/boilerplate-web-wdio.git
```

#### 2. Change directory

``` sh
cd wdio-web-auto
```

#### 3. Install dependencies

Open your code editor, and send this command on your directory

``` sh
npm install --save-dev
```

#### 4. Set your PrivyID to ENVIRONMENT VARIABLE

On your project directory send this on terminal

``` sh
export PRIVYID=<your_privy_id>
export PASSWORD=<your_password>
```

change `<your_privy_id>' and '<your_password>' to your trully privyID and password

Verify your PRIVYID and PASSWORD is successfully stored by sending this on your terminal:

``` sh
echo $PRIVYID
echo $PASSWORD
```

make sure the output is like this:

``` sh
<your_privy_id>
<your_password>
```

#### 5. Run test

Run this code

``` sh
npm run wdio
```

### Test Result

### Author
Anjar Tiyo Saputro