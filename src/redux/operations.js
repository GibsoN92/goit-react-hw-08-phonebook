import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const client = axios.create({
  baseURL: "https://668eec82bf9912d4c93027d0.mockapi.io",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await client.get("/contacts/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, phone }, thunkAPI) => {
    try {
      console.log("Sending request to add contact:", { name, phone });
      const response = await client.post("/contacts/contacts", { name, phone });
      console.log("Response from server:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding contact:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async ({ contactId }, thunkAPI) => {
    try {
      const response = await client.delete(`/contacts/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
