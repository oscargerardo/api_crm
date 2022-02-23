import {useNavigate} from 'react-router-dom'

const Cliente = ({cliente,handelEliminar}) => {
    const {nombre,empresa,email,telefono,notas,id} = cliente;

    const navigate = useNavigate();

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-3">{nombre}</td>
            <td className="p-3">
                <p><span className="text-gray-800 uppercase font-bold">Email: </span> {email}</p>
                <p><span className="text-gray-800 uppercase font-bold">Tel: </span> {telefono}</p>
            </td>
            <td className="p-3">{empresa}</td>
            <td className="p-3">
                <button
                    type="button"
                    onClick={()=>navigate(`/clientes/${id}`)}
                    className='bg-yellow-500 hover:bg-yellow-600 block w-full text-whit p-2 uppercase font-bold text-xs mt-3'
                >Ver</button>
                <button
                    type='button'
                    onClick={()=>navigate(`/clientes/editar/${id}`)}
                    className='bg-blue-600 hover:bg-blue-700 block w-full text-whit p-2 uppercase font-bold text-xs mt-3'
                >Editar</button>
                <button
                className='bg-red-600 hover:bg-red-700 block w-full text-whit p-2 uppercase font-bold text-xs mt-3'
                    type='button'
                    onClick={()=>handelEliminar(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Cliente