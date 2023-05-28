import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { InvoiceModel, InvoicePeticion } from '../types';
import { FetchError } from '../utils/AxiosHelper';
import { InvoiceService } from '../services';

const useGetInvoicesByUser = (): UseMutationResult<InvoiceModel[], FetchError<InvoiceModel[]>, InvoicePeticion> => {
	return useMutation({
		mutationFn: async (payload: InvoicePeticion) =>
			await InvoiceService.findByUser(payload).then(res => res.data),
	});
};

export default useGetInvoicesByUser;
