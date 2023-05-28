import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL } from '../constants/env';
import { InvoiceModel, InvoicePeticion } from '../types';
import { FetchResponse } from '../utils/AxiosHelper';

export const findAll = async (): Promise<AxiosResponse<InvoiceModel[]>> =>
	await axios.get<InvoiceModel[]>(`${API_BASE_URL}/api/invoice`);

export const create = async (payload: InvoiceModel): Promise<FetchResponse<InvoiceModel>> =>
	await axios.post<InvoiceModel>(`${API_BASE_URL}/api/invoice`, payload);

export const findByUser = async (payload: InvoicePeticion): Promise<AxiosResponse<InvoiceModel[]>> =>
	await axios.post<InvoiceModel[]>(`${API_BASE_URL}/api/invoice/listarinvoicesporusuario`, payload);