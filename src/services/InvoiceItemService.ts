import axios, { AxiosResponse } from "axios";
import { ItemListModel } from "../types";
import { API_BASE_URL } from "../constants/env";

export const eliminar = async (id: number): Promise<AxiosResponse<ItemListModel>> =>
	await axios.delete<ItemListModel>(`${API_BASE_URL}/api/invoiceitem/${id}`);