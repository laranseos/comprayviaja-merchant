import { createContext, useReducer, useEffect } from 'react'

const initial_state = {
    option: localStorage.getItem('option') || false,
}

export const OptionContext = createContext(initial_state);

const OptionReducer = (state, action) => {
   switch (action.type) {
      case 'SET_OPTION':
         return {
           option : action.payload,
         }
   }
}

export const OptionProvider = ({ children }) => {

   const [state, dispatch] = useReducer(OptionReducer, initial_state);

//    useEffect(() => {
//     // Save option to localStorage
//     localStorage.setItem('option', state.option);
//   }, [state.option]);

  useEffect(() => {
    // Retrieve option from localStorage on component mount
    const savedOption = localStorage.getItem('option');
   //  if (savedOption) {
   //    dispatch({ type: 'SET_OPTION', payload: savedOption });
   //  }
  }, []);

   return <OptionContext.Provider value={{
      option : state.option,
      dispatch,
   }}>
      {children}
   </OptionContext.Provider>
}