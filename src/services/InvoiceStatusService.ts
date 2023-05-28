import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL } from '../constants/env';
import { InvoiceStatusModel } from '../types';

export const findAll = async (): Promise<AxiosResponse<InvoiceStatusModel[]>> =>
	await axios.get<InvoiceStatusModel[]>(`${API_BASE_URL}/api/invoicestatus`);