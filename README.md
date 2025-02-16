# Next.js 15: 500 Error Handling Regression

This repository demonstrates a regression in Next.js 15 related to error handling.  In Next.js 13, the following code worked as expected: a 500 error from an API route was caught, and an error message was displayed to the user.  However, in Next.js 15, the error is not handled properly, and the application appears to hang.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe that the application displays a blank screen or hangs instead of displaying the error message.

## Expected Behavior

The application should display the error message from the API route. 

## Actual Behavior

The application does not display the error message and may hang. 

## Possible Solutions

We are currently investigating solutions and will update this description as necessary.