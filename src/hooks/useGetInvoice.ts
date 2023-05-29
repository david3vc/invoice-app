import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { InvoiceModel } from '../types';
import { InvoiceService } from '../services';
import { FetchError } from '../utils/AxiosHelper';

const useGetInvoice = (id: number): UseQueryResult<InvoiceModel, FetchError<InvoiceModel>> => {
	return useQuery<InvoiceModel, FetchError<InvoiceModel>>({
		queryKey: ['useGetInvoice'],
		queryFn: async () => await InvoiceService.find(id).then(res => res.data),
		retry: 0,
		refetchOnWindowFocus: false,
	});
};

export default useGetInvoice;
