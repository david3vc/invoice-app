import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { InvoiceModel } from '../types';
import { FetchError, isFetchError } from '../utils/AxiosHelper';
import { InvoiceService } from '../services';
import { toastError, toastSuccess, toastWarning } from '../utils/ToastHelper';
import { APP_ERROR_MESSAGE, APP_SUCCESS_MESSAGE, APP_WARNING_MESSAGE } from '../constants';

const useDeleteInvoice = (): UseMutationResult<InvoiceModel, FetchError<InvoiceModel>, number> => {
	return useMutation({
		mutationFn: async (id: number) =>
			await InvoiceService.eliminar(id).then(res => res.data),
		onError: error => {
			if (isFetchError(error)) {
				toastWarning(error.response?.data?.message ?? APP_WARNING_MESSAGE);
			} else toastError(APP_ERROR_MESSAGE);
		},
		onSuccess: () => {
			toastSuccess(APP_SUCCESS_MESSAGE);
		},
	});
};

export default useDeleteInvoice;
