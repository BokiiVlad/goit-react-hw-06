import { createSlice } from "@reduxjs/toolkit"

const contactSlise = createSlice({
    name: "contact",
    initialState: {
        contacts: {
            items: []
        }
    },
    reducers: {
        addContact(state, action) {
            return state.contacts.items.push(action.payload)
        },
        deleteContact(state, action) {
            state.contacts.items.filter((items) => items.id !== action.payload)
        }
    }



})
export const { addContact, deleteContact } = contactSlise.actions;
export default contactSlise.reducer;