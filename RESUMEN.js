console.log('hola');
// podemos correr en la terminal colocando node y se arrastra el archivo.js

//el método estático Date.now(), el cuál devuelve la cantidad de milisegundos transcurridos desde el primero de enero de 1970.

//toString(16); genera un numero hexadecimal

function newTodoId() {
  return Date.now().toString(16);
}

console.log(newTodoId());
 


//Devuelve el numero de milisegundos, ejemplo: 1668393426376


/*
En resumen:

:star: Cuando los componentes nietos de App no solo son nietos, sino también componentes hijos, podemos pasarles props directamente y mejorar su comunicación.

--

Casi siempre que llamamos a un componente... pos lo llamamos y ya. 😅


function App() {
  return (
    <TodoHeader />
  );
}

function TodoHeader() {
  return (
    <TodoCounter />
  );
}
Esto implica que para compartir el estado debemos pasar props y props y props por cada componente intermedio entre App y los componentes que realmente necesiten esas props en cualquier lugar de la jerarquía. 😓


function App() {
  const [state, setState] = React.setState(initialState);

  return (
    <TodoHeader state={state} setState={setState} />
  );
}

function TodoHeader({ state, setState }) {
  return (
    <header>
      <TodoCounter state={state} setState={setState} />
    </header>
  );
}
Pero otra forma de trabajar es que App no solo llame a sus componentes directamente hijos, sino que también llamen a los siguientes componentes en la jerarquía de la aplicación. :o


function App() {
  return (
    <TodoHeader>
      <TodoCounter />
    </TodoHeader>
  );
}

function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  );
}
Y esta nueva forma de trabajar implica que ya no tenemos que pasar props y props y props entre App y el resto de componentes para compartir el estado, sino que App puede comunicarse directamente con el componente que realmente necesita ese estado. 🤩


function App() {
  const [state, setState] = React.setState(initialState);

  return (
    <TodoHeader>
      <TodoCounter state={state} setState={setState} />
    </TodoHeader>
  );
}
:green_heart: Esta es la magia de la composición de componentes.
*/




/*
Antes de estudiar las render props debes conocer la composición de componentes. Las renders props vienen a ayudar a hacer una composición de componentes más limpia. Seguimos con todas las ventajas de usar composición de componentes. A partir de ahora podemos decir que tenemos 2 tipos de props: las props normales que reciben un valor o variable y por otro lado tenemos las props que contienen una función. Estas que contienen una función son las que nos interesan. Esta función devuelve un componente o un elemento que pudiera tener anidados más elementos y componentes. La sintaxis es la siguiente:


<MyHeader 
	render={ () => <myLogo type={ type } /> } 
/> 
La propiedad render(la cual puede tener cualquier otro nombre) es nuestra render prop, porque contiene una función que al ser llamada devuelve un componente. Entonces cumple todas las condiciones y solo falta llamarla desde el componente que la contiene:


function MyHeader( props ){
	return (
	<header className="header__styles">
		{ props.render() }
	</header>
	)
} 
Entonces podemos interpretar que las render props le dicen al componentes que renderizan(cual va a ser su contenido)
Otra forma de hacer esto es con las render functions y lo que cambia es que se declaran dentro del componente:


<MyHeader>
	{ () => <myLogo type={ type } /> } 
</MyHeader>
Y para acceder a lo que está dentro del componentes simplemente usamos props.children:


function MyHeader( props ){
	return (
	<header className="header__styles">
		{ props.children }
	</header>
	)
} 
Es prácticamente lo que hicimos con la composición de componentes y la propiedad children. ¡Usen render props y mejoren sus composiciones amigos :) !

*/




/*
React.Children y React.cloneElement
-- Para poder pasar propiedades especiales a los componentes hijos de nuestros componentes contenedores cuando hacemos composición.

-- Cuando enviamos más de un componente o elemento hijo al que use CloneElement, la app deja de funcionar y suelta un error. CloneElement necesita recibir un elemento de react, cuando children es más de un componente entonces tenemos un array, para esto existe React.Children que nos ayuda a que CloneElement entienda sin importar cuantos elementos vienen en el props.children.


function TodoHeader({ children, loading }) {
  //No importa si viene un elemento, o dos o null siempre nos devuelve un array

  return (
    <header>
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading: loading })
      )}
    </header> //Por cada child vamos a llamar a clone element.
  ); //Crear elemento a partir de otro (elemento, objeto con las props que queramos que tenga)
}
No son las herramientas más populares pero pueden ser muy útiles cuando queremos compartir una o ciertas props a los componentes hijos de un componente contenedor.

*/
