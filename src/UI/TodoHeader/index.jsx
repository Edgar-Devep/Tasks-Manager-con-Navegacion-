import { Children, cloneElement } from "react";

function TodoHeader({ children, loading }) {
  return (
    <header className="contenedor-header">
      { Children
        .toArray(children)
        .map(chil => cloneElement( chil, {loading })) } {/*aqui estamos utilizando Children.toArray para convertir los children en un array y luego map para recorrer cada child y clonar cada uno de ellos con la prop loading que viene del TodoHeader esto se hace porq si no pasammos Children y solo usamos cloneElement no funciona cuando hay mas de un child*/}
        
    </header>
  )
}

export { TodoHeader };