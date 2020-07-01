import React, { useEffect } from 'react';

//import { Table } from 'semantic-ui-react';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import { useSelector, useDispatch } from 'react-redux';
import {fetchCursosPorIdModulo} from '../cursosDuck';

import ListaCursos from './ListaCursos';
import FormularioCurso from "./botones-dialogos/FormularioCurso";


export default function TablaCursos(props){
    const { idModulo } = props;
    const { nombreModulo } = props;

    const listadoCursos  = useSelector(store => store.cursos.listadoCursos);

    const dispatch = useDispatch();

    useEffect(()=>{
        // hacer aquí el fetching de los cursos
        console.log("Fechign para este id: " + idModulo);
        dispatch(fetchCursosPorIdModulo(idModulo));
        
    }, [idModulo, dispatch]);

    if(idModulo==null)
        return null;

    return (
        <div>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Semestre</TableCell>
                            <TableCell>Profesor(es)</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            listadoCursos.map((curso) => <ListaCursos key={curso.id} curso={curso} nombreModulo = {nombreModulo} idModulo={idModulo}/>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <FormularioCurso esModoEditar={false} cursoParaEditar={{}} nombreModulo={nombreModulo} idModulo={idModulo} />
        </div>
    )

}
