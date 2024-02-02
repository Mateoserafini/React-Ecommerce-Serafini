import { useForm } from "react-hook-form"

const OrderForm = ({onSubmit}) => {
    const {register, handleSubmit, formState: {errors}} = useForm()

   return(
    <form onSubmit={handleSubmit((useData) =>{
        onSubmit(useData)
    })}>

        <label htmlFor="nombre">
            Nombre
        </label>
        <input type="text" 
        {...register("nombre",{required: true})}/>
        {errors.nombre && <span> El nombre es requerido </span>}

        <label htmlFor="correo">
            Correo
        </label>
        <input type="email" 
        {...register("correo",{required: true})}/>
         {errors.correo && <span> El email es requerido </span>}

        <label htmlFor="contacto">Contacto</label>
        <input type="tel" 
        {...register("contacto",{required: true})}/>
        {errors.contacto && <span> El telefono es es requerido </span>}

        <button type="submit">Enviar</button>
    </form>
   )
}

export default OrderForm