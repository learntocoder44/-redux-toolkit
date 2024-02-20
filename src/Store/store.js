import { configureStore } from "@reduxjs/toolkit";

  import sliceReducer from './countSlice'
 
 const store=configureStore({

         reducer:{
               counter:sliceReducer,
         }
 })

 export default store;