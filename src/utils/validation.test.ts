import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidEmail, isValidAustralianPhone, validateEnquiry, EnquiryFormState } from './validation';

test('isValidEmail correctly identifies valid and invalid emails', () => {
  assert.equal(isValidEmail('support@southernagedcare.com.au'), true);
  assert.equal(isValidEmail('family.member@gmail.com'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail(''), false);
  assert.equal(isValidEmail('user@domain'), false);
});

test('isValidAustralianPhone handles Australian mobile and landline numbers', () => {
  assert.equal(isValidAustralianPhone('+61 423 644 313'), true);
  assert.equal(isValidAustralianPhone('0423 644 313'), true);
  assert.equal(isValidAustralianPhone('0423644313'), true);
  assert.equal(isValidAustralianPhone('(08) 8951 1234'), true);
  assert.equal(isValidAustralianPhone('12345'), false);
  assert.equal(isValidAustralianPhone(''), false);
});

test('validateEnquiry catches missing required fields and approves complete submissions', () => {
  const invalidForm: EnquiryFormState = {
    fullName: '',
    phone: '123',
    email: 'bad',
    suburb: '',
    careFor: '',
    serviceType: '',
    urgency: '',
    message: ''
  };

  const errors = validateEnquiry(invalidForm);
  assert.ok(errors.fullName);
  assert.ok(errors.phone);
  assert.ok(errors.email);
  assert.ok(errors.careFor);
  assert.ok(errors.serviceType);
  assert.ok(errors.message);

  const validForm: EnquiryFormState = {
    fullName: 'Eleanor Thompson',
    phone: '0423 644 313',
    email: 'eleanor@example.com.au',
    suburb: 'Desert Springs',
    careFor: 'family-member',
    serviceType: 'in-home-support',
    urgency: 'within-month',
    message: 'Looking for morning assistance for my father.'
  };

  const noErrors = validateEnquiry(validForm);
  assert.equal(Object.keys(noErrors).length, 0);
});
