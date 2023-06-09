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

export const find = async (id: number): Promise<AxiosResponse<InvoiceModel>> =>
	await axios.get<InvoiceModel>(`${API_BASE_URL}/api/invoice/${id}`);

export const edit = async (payload: InvoiceModel): Promise<AxiosResponse<InvoiceModel>> =>
	await axios.put<InvoiceModel>(`${API_BASE_URL}/api/invoice/${payload.id}`, payload);

export const markAsPaid = async (id: number): Promise<AxiosResponse<InvoiceModel>> =>
	await axios.get<InvoiceModel>(`${API_BASE_URL}/api/invoice/markaspaid/${id}`);

export const eliminar = async (id: number): Promise<AxiosResponse<InvoiceModel>> =>
	await axios.delete<InvoiceModel>(`${API_BASE_URL}/api/invoice/${id}`);