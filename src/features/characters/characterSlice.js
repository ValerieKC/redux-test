import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

const initialState={
  posts:[],
  status:"idle",
  error:null
}


const characterSlice=createSlice({
  name:"character",
  initialState,
  reducers:{

  }
})

export default characterSlice.reducer