import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL } from '../constants/env';
import { PaymentTermModel } from '../types';

export const findAll = async (): Promise<AxiosResponse<PaymentTermModel[]>> =>
	await axios.get<PaymentTermModel[]>(`${API_BASE_URL}/api/paymentterm`);