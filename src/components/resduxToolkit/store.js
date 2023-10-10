import {configureStore} from '@reduxjs/toolkit'
import capsulSlice from './capsulSlice'

export const  myStore= configureStore({

    reducer:{
        capsul:capsulSlice,
    },
})