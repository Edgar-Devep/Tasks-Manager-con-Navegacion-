import { useEffect, useState } from 'react';

function useLocalStorageItem(itemName, inicialValue) { // Se crea un hook personalizado para manejar el localStorage
  // este hook recibe dos parámetros, el nombre del item en el localStorage y el valor inicial que se le quiere asignar si no existe el item en el localStorage
  const [item, setItem] = useState(inicialValue) // inicializamos el estado de los todos con los todos parseados desde localStorage
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

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
          setItem(parsedItem);
        }
        setloading(false);
      } catch {
        setloading(false);
        setError(true)
      }
    }, 3000);  
    console.log('useLocalStorageItem se ejecutó');
    
  }, [])  // esto significa que el efecto se ejecutará una vez cuando el componente se monte y cada vez que cambie el valor de inicialValue o itemName

  const saveItem = (newItem) => { // función para guardar loos nuevos todos en el localStorage y actualizar el estado
    // usamos JSON.stringify para convertir el array de objetos a un string antes de guardarlo en localStorage
    // esto es necesario porque localStorage solo puede guardar strings
    // y usamos setTodos para actualizar el estado de los todos en la aplicación
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
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
