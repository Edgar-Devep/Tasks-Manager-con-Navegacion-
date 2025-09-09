import { useEffect, useReducer, useState } from 'react';

function useLocalStorageItem(itemName, inicialValue) { // Se crea un hook personalizado para manejar el localStorage
  // este hook recibe dos parámetros, el nombre del item en el localStorage y el valor inicial que se le quiere asignar si no existe el item en el localStorage

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
        }

      case actionTypes.save :
        return {
          ...state,
          item: action.paylod
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
    dispache({ type: actionTypes.success, paylod: parsedItem})
  }

  const onSave = (newItem) => {
    dispache({ type: actionTypes.save, paylod: newItem })
  }

  //const [item, setItem] = useState(inicialValue) // inicializamos el estado de los todos con los todos parseados desde localStorage
  //const [loading, setloading] = useState(true);
  //const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);// obtenemos el valor de localStorage con la clave 'TAREAS_V1' que es donde guardamos los todos
        let parsedItem;// declaramos una variable para guardar los todos parseados desde el localStorage

          if(!localStorageItem) { // si no hay nada en localStorage con la clave 'TAREAS_V1' significa que es la primera vez que se carga la aplicación
          // entonces inicializamos el localStorage con un array vacío y asignamos parsedItem a un array vacío para actualizar localStorage y el estado de los todos
          localStorage.setItem(itemName, JSON.stringify(inicialValue)); // usamos JSON.stringify para convertir el array vacío a un string y guardarlo en localStorage
          parsedItem = inicialValue;
          } else {
          parsedItem = JSON.parse(localStorageItem); // si ya hay algo en localStorage con la clave 'TAREAS_V1' lo parseamos a un array de objetos          
        }
        onSuccess(parsedItem)
      } catch {
        onError()
      }
    }, 1000);  
    console.log('useLocalStorageItem se ejecutó');
    
  }, [])  // esto significa que el efecto se ejecutará una vez cuando el componente se monte y cada vez que cambie el valor de inicialValue, itemName o sicroniza

  useEffect(() => { // efecto para sincronizar el estado con cambios en el localStorage desde otras pestañas del navegador
  const onStorageChange = (event) => { // función que se ejecuta cuando se detecta un cambio en el localStorage
    if (event.key === itemName) { // verificamos que el cambio sea en el item que nos interesa esto se logra comparando la clave del item que cambió con el nombre del item que estamos manejando en este hook osea event.key es la clave del item que cambió en el localStorage y itemName es la clave del item que estamos manejando en este hook
      try {
        const newItem = JSON.parse(event.newValue); // parseamos el nuevo valor del item que cambió porque event.value viene como string y necesitamos convertirlo a un array de objetos
        onSave(newItem); // actualizamos el estado con el nuevo valor parseado
      } catch {
        onError();// si hay un error al parsear el nuevo valor, seteamos el estado de error a true
      }
    }
  };
  
  window.addEventListener('storage', onStorageChange); // agregamos un listener para detectar cambios en el localStorage con el evento 'storage' y pasamos la función onStorageChange como callback

  return () => {
    window.removeEventListener('storage', onStorageChange); // limpiamos el listener cuando el componente se desmonte (deja de existir en el DOM) para evitar fugas de memoria quiere decir limpiamos todo para que no quede escuchando cambios en el localStorage cuando el componente ya no está en el DOM
  };
}, [itemName]); // el efecto se ejecuta una vez cuando el componente se monta y cada vez que cambia el valor de itemName


  const saveItem = (newItem) => { // función para guardar loos nuevos todos en el localStorage y actualizar el estado
    // usamos JSON.stringify para convertir el array de objetos a un string antes de guardarlo en localStorage
    // esto es necesario porque localStorage solo puede guardar strings
    // y usamos setTodos para actualizar el estado de los todos en la aplicación
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

// const todoDefault = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Terminar Curso', completed: false },
//   { text: 'Ver Peliculas', completed: true },
//   { text: 'Cambiar Aceite', completed: false },
// ];

//  localStorage.saveItem('TAREAS_V1', JSON.stringify(todoDefault));
