

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({});


const state = {
    contacts: {
        items: []
    },
    filters: {
        name: ""
    }
};

export default state;
