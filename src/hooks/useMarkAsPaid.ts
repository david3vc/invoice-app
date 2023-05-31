import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { InvoiceModel } from '../types';
import { FetchError, isFetchError } from '../utils/AxiosHelper';
import { InvoiceService } from '../services';
import { toastError, toastSuccess, toastWarning } from '../utils/ToastHelper';
import { APP_ERROR_MESSAGE, APP_SUCCESS_MESSAGE, APP_WARNING_MESSAGE } from '../constants';

const useMarkAsPaid = (): UseMutationResult<InvoiceModel, FetchError<InvoiceModel>, number> => {
	return useMutation({
		mutationFn: async (id: number) =>
			await InvoiceService.markAsPaid(id).then(res => res.data),
		onError: error => {
			// console.log(error);
			if (isFetchError(error)) {
				// console.log(error.response?.data);
				toastWarning(error.response?.data?.message ?? APP_WARNING_MESSAGE);
			} else toastError(APP_ERROR_MESSAGE);
		},
		onSuccess: () => {
			toastSuccess(APP_SUCCESS_MESSAGE);
			// void queryClient.invalidateQueries({ queryKey: [PAGINATED_SEARCH] });
			// void queryClient.invalidateQueries({ queryKey: [FIND_BY_ID] });
		},
	});
};

export default useMarkAsPaid;
