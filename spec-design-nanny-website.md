# Requirement
We need to create a list of pet facilities and pet shops and connect them with potential users. We already have connections. The idea is similar to booking.com or Agoda page
# System analysis and design for booking nanny website
The website consists of 6 pages, a header and a footer
## 1. Landing page
The most important page, consists of 5 sections:
### 1.1. Booking section
Include a place to advertise, and a booking form for customers to book services. 
* To advertise the page: use a photo and a slogan.
* To book services: list of available services (confinement nanny, one time / ad hoc, recurring / long-term), date and time picker, enquiries (optional), in grid styles. User then can look at each nanny, see if someone is match, choose someone to see details (redirect to detail page). Then they can choose someone and click "book now"

(if signed in needed)
When a customer clicks this button, the system will ask if they have already signed up.

- if they've already signed up: the system will change to sign in form.
- if they've not: the system will change to sign up form, instructing them to create an account and come back to sign in form.

After signing in, the system will redirect to another page to choose the options. The options are a list of nannies, each with: id/passport id, name, age, experience, expertise, rating, and their available time. 
Then user can fill in form, with more detail about your booking (when to get baby to sleep, enquiries, etc...)

(if we don't need authentication)
A payment form will appear, showing that they should fill in a detail form (first name, last name, email address, id number, etc...), and button "send request". Their information will be saved in the system and they will be redirected to payment page.

* payment page: User will pay deposit and click button "send request"...

### 1.2. Instruction section
* Include a media highlighting how to book, a step-by step instruction
* The media should be a video or slideshow showing how to book services.
The instruction should have a title, and a paragraph showing each step’s detail. The steps are presented in a vertical direction.

### 1.3. Testimonials
A place to show the reviews from customers (mostly positive reviews). Should be shown as a slideshow of cards. Each card contains: image and name of customer, his review, his star rating.
### 1.4. List of service providers / Popular pet caregivers
Show the list of current nanny providers, in grid style.
### 1.5. Section for service provider
A place where a service provider can register and become a provider on our platform. Include a photo, title, description and button “become a nanny”. When a user clicks on this button, the page will change to a form to register: name, email, gender, date of birth, ID/passport number, photo, years of experience, certificate, pet friendly… and a button “Register”
When the user clicks on this button, all the information will be saved in the system.
## 2. Header
A logo redirect to home page
A menu: 
* Services (confinement nanny, one time / ad hoc, recurring / long-term)
* Pricing
* FAQ
* Contact / About us
* Become a nanny

## 3. Footer
Contain 4 sections:
* Section 1: a logo and link to social network
* Section 2: Quick links
* Section 3: services
* Section 4: information (phone, address…)

### 4. Service page
### 5. Account page
### 6. “Contact us” page + FAQ
