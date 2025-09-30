import { useEffect, useReducer } from 'react';

function useLocalStorageItem(itemName, inicialValue) { 

  // Adaptando useReducer

    const actionTypes =  {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE'
  }

   const reducer = (state, action) => {
    switch(action.type) {
      case actionTypes.error :
        return {
          ...state,
          loading: false,
          error: true,
        }
      case actionTypes.success :
        return {
          ...state,
          loading: false,
          item: action.payload
        }

      case actionTypes.save :
        return {
          ...state,
          item: action.payload
        }
    }
  }

  const ValueInicial = {
    item: inicialValue,
    loading: true,
    error: false,
  }

  const [state, dispache] = useReducer(reducer, ValueInicial);
  const {
    item,
    loading,
    error,
  } = state  
  
  const onError = () => {
    dispache({ type: actionTypes.error })
  } 

  const onSuccess = (parsedItem) => {
    dispache({ type: actionTypes.success, payload: parsedItem})
  }

  const onSave = (newItem) => {
    dispache({ type: actionTypes.save, payload: newItem })
  }

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;// declaramos una variable para guardar los todos parseados desde el localStorage

          if(!localStorageItem) { 
          localStorage.setItem(itemName, JSON.stringify(inicialValue)); // usamos JSON.stringify para convertir el array vacío a un string y guardarlo en localStorage
          parsedItem = inicialValue;
          } else {
          parsedItem = JSON.parse(localStorageItem); 
        }
        onSuccess(parsedItem)
      } catch {
        onError()
      }
    }, 1000);  
    console.log('useLocalStorageItem se ejecutó');
    
  }, []) 

  useEffect(() => { 
  const onStorageChange = (event) => { 
    if (event.key === itemName) { 
      try {
        const newItem = JSON.parse(event.newValue); 
        onSave(newItem); // actualizamos el estado con el nuevo valor parseado
      } catch {
        onError();// si hay un error al parsear el nuevo valor, seteamos el estado de error a true
      }
    }
  };
  
  window.addEventListener('storage', onStorageChange); 

  return () => {
    window.removeEventListener('storage', onStorageChange); 
  };
}, [itemName]); 

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    onSave(newItem);
  }

  return {
    item, // retornamos un array con el estado de los todos y la función para guardarlos
    saveItem,// de esta manera podemos usar este hook en cualquier componente de la aplicación para manejar el localStorage de los todos
    loading,
    error
  }   
}

export { useLocalStorageItem }

