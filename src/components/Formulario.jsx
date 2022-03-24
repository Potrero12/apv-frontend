import React, { useState, useEffect } from 'react'
import usePacientes from '../hooks/usePacientes'
import Alerta from './Alerta'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState(Date.now())
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null);

    const [alerta, setAlerta] = useState({})

    const { guardarPaciente, paciente } = usePacientes();

    useEffect(() => {
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(new Date(paciente.fecha).toDateString())
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }

    }, [paciente])
    
    

    const handleSubmit = (e) => {
        e.preventDefault();

        //validar formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
        }

        guardarPaciente({nombre, propietario, email, fecha, sintomas, id});
        setAlerta({
            msg: 'Guardado Correctamente'
        });
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('');
    }

    const { msg } = alerta;

  return (
    
    <>
        <h2 className="font-black text-3xl text-center">Administrador de Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Añade tus pacientes y{' '}
            <span className="text-indigo-600 font-bold">Administralos</span>
          </p>

        {msg && <Alerta alerta={alerta} />}
        
        <form
            onSubmit={handleSubmit}
            className='bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md'
        >
            <div className='mb-5'>
                <label 
                    htmlFor='mascota'
                    className='text-gray-700 uppercase font-bold'
                >Nombre Mascota</label>
                <input 
                    type="text"
                    id="mascota"
                    name="mascota"
                    placeholder="Nombre Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label 
                    htmlFor='propietario'
                    className='text-gray-700 uppercase font-bold'
                >Nombre Propietario</label>
                <input 
                    type="text"
                    id="propietario"
                    name="propietario"
                    placeholder="Nombre Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label 
                    htmlFor='email'
                    className='text-gray-700 uppercase font-bold'
                >Correo electronico</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label 
                    htmlFor='fecha'
                    className='text-gray-700 uppercase font-bold'
                >Correo electronico</label>
                <input 
                    type="date"
                    id="fecha"
                    name="fecha"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label 
                    htmlFor='sintomas'
                    className='text-gray-700 uppercase font-bold'
                >Sintomas</label>
                <textarea 
                    id="sintomas"
                    name="sintomas"
                    placeholder='Describe Los Sintomas'
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                className='bg-indigo-600 w-full p-3 text-white 
                           hover:bg-indigo-700 cursor-pointer transition-colors 
                             rounded-md uppercase'
                value={id ? 'Guardar Cambios': 'Agregar Paciente'}
            />
        </form>
    </>
  )
}

export default Formulario