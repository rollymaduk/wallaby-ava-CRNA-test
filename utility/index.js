import loadAssetsAsync from './loadAssets';
import prepareUiProvider from './prepare_ui_provider';
import { payment } from '../constants';

export {
    loadAssetsAsync,
    prepareUiProvider,
};

export const formatPaymentStatus = (status, dueDate) => {
  let result;
  switch (status) {
    case 'pending':
      result = `${payment.messages.PAYMENT_PENDING} ${dueDate}`;
      break;
    case 'overdue':
      result = `${payment.messages.PAYMENT_OVERDUE} ${dueDate}`;
      break;
    default:
      result = `${payment.messages.PAYMENT_SETTLED} ${dueDate}`;
  }
  return result;
};
