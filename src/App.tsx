import { useState } from 'react';
import SngularNumberImage from './assets/img/sngularNumber.png';
import { InputText } from './components/InputText';
import { SngularNumber } from './components/SngularNumber';


const Sngular = new SngularNumber()
export const App = () => {
  const [inputNumber, setInputNumber ] = useState<string>("")
  const [sngularNumber, setSngularNumber ] = useState<string>("")
  const [error, setError ] = useState<string>("")
  const calculateSngularNumber = () => {
      if (inputNumber !== "") {
          const number = parseInt(inputNumber)
          const sngularResult = Sngular.get_nth(number)
          if ( sngularResult !== undefined ) { 
            setSngularNumber(Sngular.get_nth(number)?.toString() || "")
          } else if ( sngularResult == undefined ) { 
            setSngularNumber("undefined")
          } else if ( sngularResult == Infinity ) { 
            setSngularNumber("Infinity")
          }
      } else {
        setError("Debes ingresar un número")
      }
  }
    
  const onInput = (newNumber: string) => {
    setInputNumber(newNumber)
    calculateSngularNumber()
  }
  return (
    <div className="container flex flex-col justify-center items-center m-10">
        <h1>El número Sngular</h1>
        <section className="container my-10">
          <h2 className="text-slate-900 font-bold text-3xl my-5">Descripción</h2>
          <p>
            El número Sngular fue creado con el único proposito de hacer sufrir a los desarrolladores menos experimentados.
          </p>
          <p>La definicion del número es la siguiente</p>
          <div className="flex justify-center items-center">
            <img src={ SngularNumberImage } className="w-full max-w-lg h-auto aspect-[8/1]" alt="Imagen de la formula Sngular" />
          </div>
        </section>
        <section className="container my-10">
          <p>
            Por sus propiedades y formulas que lo componen, el número Sngular se define para todo <span>n</span>, siendo n un número natural positivo. El número está indefinido para <span>n = 0</span> y <span>n = 1</span>.
            Ya que entre los componentes de su formula, se encuentra el calculo del número fibonacci recorrido en dos números a la derecha, siendo que fibonacci de 0 y -1 no existe.
          </p>
          <p>Los primeros números Sngulares son: undefined, undefined, Infinity, 105, 196, 198, 195, 187, 156.75, 138, 125.66666666666667, 95.73529411764706,
          </p>
        </section>
        <section className="container flex flex-col">
          <h2 className="text-slate-900 font-bold text-3xl my-5">A continuación, puede calcular el número Sngular de un número <span>n</span> dato</h2>
          <div className="m-5 flex gap-5">
            <div className="flex">
              <InputText onInput={ onInput } />
              <button className="bg-slate-900 text-white px-5 py-1 rounded-md hover:bg-slate-800 cursor-default" role="add-new-category" onClick={ calculateSngularNumber }>Calcular</button>
            </div>
            <div className="alert alert-error"> { error } </div>
          </div>
          <div className="w-full m-5 flex gap-5 text-2xl">
              <p>El número Sngular de <span>{ inputNumber }</span> es <span className="text-slate-600 font-bold">{ sngularNumber } </span></p>
          </div>
        </section>
    </div>
  )
}
