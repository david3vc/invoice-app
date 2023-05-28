import axios, { AxiosResponse } from 'axios';

import { LoginModel, SingupCreateModel, SingupResponseModel } from '../types';
import AuthModel from '../types/models/AuthModel';
import { API_BASE_URL } from '../constants/env';


export const login = async (payload: LoginModel): Promise<AxiosResponse<AuthModel>> =>
	await axios.post(`${API_BASE_URL}/api/usuario/login`, payload);

export const singup = async (payload: SingupCreateModel): Promise<AxiosResponse<SingupResponseModel>> =>
	await axios.post(`${API_BASE_URL}/api/usuario`, payload);