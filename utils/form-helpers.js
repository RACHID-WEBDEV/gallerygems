import { FEEDBACK } from './constant';

export const showError = (hasErrors, feedBack) =>
  hasErrors && (feedBack === FEEDBACK.ALL || feedBack === FEEDBACK.ERROR);
export const showSuccess = (isValid, feedBack) =>
  isValid && (feedBack === FEEDBACK.ALL || feedBack === FEEDBACK.SUCCESS);
