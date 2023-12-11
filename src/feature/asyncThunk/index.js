import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchUrl} from "../../services/categories";

export const getCategoryApi = createAsyncThunk(
	"category/getCategoryApi",
	async (url) => await fetchUrl(url)
);
export const getProductsApi = createAsyncThunk(
	"product/getProductsApi",
	async (url) => await fetchUrl(url)
);
