# AddressBook

## Installation

* Clone the repository
* Move `env.example` to `env` and adjust the variables accordingly
* `npm install`
* `npm run dev`

## Endpoints and Usage

* Test the API returning a welcome message
```
HTTP GET https://customaddressbook.herokuapp.com/api/v1/
````


### Users

* Create User
```
HTTP POST https://customaddressbook.herokuapp.com/api/v1/user/
{
  email: EMAIL,
  password: PASSWORD
}
```

### Auth
* Login User, returns the token
```
HTTP POST https://customaddressbook.herokuapp.com/api/v1/auth/
{
  email: EMAIL,
  password: PASSWORD
}
```

### Contacts
* Create Contact
```
HTTP POST https://customaddressbook.herokuapp.com/api/v1/contact/
{
  userId: USER_ID,
  name: CONTACT_NAME,
  phone: CONTACT_PHONE,
  address: CONTACT_ADDRESS,
  email: CONTACT_EMAIL
}
```