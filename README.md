# Hosted at <a href="https://comparamais.herokuapp.com/" target="_blank">https://comparamais.herokuapp.com/</a>

# Multi-step Form

Create a multi-step form with fields & validation rules.

# Summary

- Each step of the form (except for the last one) must have a Next button.

- Once the user clicks on the Next button, if the fields are filled out correctly (based on the defined validation rules below), they’d go to the next step.

- Otherwise, they’d see the respective error message.

- Additionally, each step (except for the first one) must have a Back button to let the users go back to the previous step - if they need to edit their input.

- The last step (step 6), should have a dummy Submit button, which simply takes the users to a “Thank You” page (no need to post the form data).

- The “Thank You” page should display all the data user has entered in a tabular format. It should also have an Edit button, which takes the user back to beginning of the form, where they can edit their data from Step 1.

- Here are the fields you need to create for each step of the form.

# Form Step 1

Field: A text field with label “Postal Code”, to get user’s postal code - in this format: 0000-000 (Ex: 2190-889)
Validation rules: required, format=0000-000

    Buttons: Next


# Form Step 2

Field: A slider control <input type="range"> which allows the user to select a monetary value between €10,000 and €50,000.

    It would be great if you display the user’s selected value next to the slider.

The slider step should be 500 (10500, 11000, 11500, 12000, …)

Validation rules: required, number, => €10,000 and <= €50,000

    Buttons: Next, Back

# Form Step 3

Field: A select box to get the user’s employment status, with these options:

    Employed
    Self-employed
    Unemployed
    Retired

Validation rules: required

    Buttons: Next, Back

# Form Step 4

Field: A group of radio buttons to let the user opt for a free consultation, with these options:

    I want a free consultation
    I don’t want free consultation

Validation rules: required

    Buttons: Next, Back

    If the user chooses “I want free consultation”, they will go to step 5 to choose the method of communication; otherwise they’ll go to step 6.

    Note: If the user chooses “I don’t need free consultation” and go directly to step 6, the back button on step 6 should take them back to step 4, not 5.

# Form Step 5

Field: A group of radio buttons to let the user choose their preferred way of communication - with these options:

    Call me
    Email me

Validation rules: required

    Buttons: Next, Back

# Form Step 6

This is the last step, and it contains three fields to get the user’s personal information.

Field: Full name
Validation rules: required, string

Field: Email Address
Validation rules: required, email

Field: Phone Number
Validation rules: required, number

Field: A checkbox with this label “I read and agree to the terms and conditions.”
Validation rules: required to check

    Buttons: Back, Submit


# Requirements

1. You can use Vue, Angular, React or any other library/framework you prefer.
2. You can use Sass or pure CSS to style the form and the page (use your imagination)
3. The form should store the data (in the browser’s storage) even if the user refreshes or leaves the page.
4. Display a progress bar at the top of the form to let the users know how many steps are left.
5. The form should be responsive and acessible across different devices.
6. Don’t allow the user to submit the form if they haven’t checked the checkbox on Step 6.

# Good to Haves (not mandatory)

On each step, emit a Custom JavaScript Event named viewPage with a simple object like so:

{
   page: first-page
}

–
That’s it!
Good luck!