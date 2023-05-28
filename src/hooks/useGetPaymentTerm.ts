import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { PaymentTermModel } from '../types';
import { PaymentTermService } from '../services';
import { FetchError } from '../utils/AxiosHelper';

const useGetPaymentTerm = (): UseQueryResult<PaymentTermModel[], FetchError<PaymentTermModel>> => {
	return useQuery<PaymentTermModel[], FetchError<PaymentTermModel>>({
		queryKey: ['useGetPaymentTerm'],
		queryFn: async () => await PaymentTermService.findAll().then(res => res.data),
		retry: 0,
		refetchOnWindowFocus: false,
	});
};

export default useGetPaymentTerm;
