import { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { toast } from "react-toastify";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const FirestoreTesting = () => {
    const { postDocument, loading, getCollection, deleteDocument, updateDocument } = useFirestore();
    const [returnvalue, setReturnvalue] = useState(null);
    const [collection, setCollection] = useState('');
    const [documentId, setDocumentId] = useState('');
    const [document, setDocument] = useState({});
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [columns, setColumns] = useState([])

    const onOperationComplete = (response) => {
        if (!response[0]) return toast.error('No se encontraron datos');
        setReturnvalue(response);
        try {
            setColumns(Object.keys(response[0]))
        } catch (e) {
            setColumns([])
        }
        console.log(response)
    }

    const handlePost = async () => {
        postDocument(collection, document).then((response) => {
            onOperationComplete([response])
        }).catch((error) => {
            toast.error(error.message);
        });

    };

    const handleGet = async () => {
        getCollection(collection).then(response => {
            onOperationComplete(response)
        }).catch(err => {
            toast.error(err.message)
        })
    }

    const handleAddItem = (key, value) => {
        if (!key) return toast.error('Llave es requerida');
        if (!value) return toast.error('Valor es requerido');
        setDocument({ ...document, [key]: value });
    };

    const handleDelete = async () => {
        deleteDocument(collection, documentId).then((response) => {
            onOperationComplete([response])
            handleGet()
        }).catch((error) => {
            toast.error(error.message);
        });
    }

    const handleUpdate = async () => {
        updateDocument(collection, documentId, document).then((response) => {
            onOperationComplete([response])
        }).catch((error) => {
            toast.error(error.message);
        });
    }


    const handleIdChange = (e) => {
        const value = e.target.value
        setDocumentId(value)
        if (collection && value) {
            getCollection(`${collection}/${value}`).then(response => {
                if (response.length > 0) {
                    setDocument(response[0])
                }
            }).catch(err => {
                toast.error(err.message)
            })
        }
    }


    return (
        <Grid container spacing={2} style={{ margin: 20 }}>
            <Grid item sm={11} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <TextField
                    label="Nombre de la colección"
                    value={collection}
                    onChange={(e) => setCollection(e.target.value)}
                    inputProps={{ style: { backgroundColor: '#575756' } }}
                />
                <Button variant="contained" onClick={handleGet}>Consultar colección</Button>
            </Grid>

            <Grid item sm={11} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <TextField
                    label="Id del documento"
                    value={documentId}
                    onChange={handleIdChange}
                    inputProps={{ style: { backgroundColor: '#575756' } }}
                />
                <Button variant="contained" onClick={handleDelete}>Eliminar documento</Button>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button variant="contained" onClick={() => setKey('')}>
                                    <DeleteIcon />
                                </Button>
                            </InputAdornment>
                        ),
                        style: { backgroundColor: '#575756' }
                    }}
                    label="Llave"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button variant="contained" onClick={() => setValue('')}>
                                    <DeleteIcon />
                                </Button>
                            </InputAdornment>
                        ),
                        style: { backgroundColor: '#575756' }
                    }}
                    label="Valor"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}

                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={() => handleAddItem(key, value)}>Añadir item</Button>
            </Grid>
            <Grid item xs={12} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <p>
                    Documento
                </p>
                {
                    Object.keys(document).map((key, index) => (
                        <div
                            key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%", margin: 10 }}>
                            <label key={index}>{key}</label>
                            <TextField
                                InputProps={{
                                    style: { backgroundColor: '#575756' }
                                }}
                                label={key}
                                value={document[key]}
                                onChange={(e) => setDocument({
                                    ...document,
                                    [key]: e.target.value
                                })}

                            />
                        </div>
                    ))
                }
            </Grid>

            <Grid item xs={11} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <Button variant="contained" onClick={handlePost}>Guardar documento</Button>
                <Button variant="contained" onClick={() => setDocument({})}>Limpiar documento</Button>
                <Button variant="contained" onClick={handleUpdate}>Actualizar documento</Button>
            </Grid>
            <Grid item xs={12} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                {
                    loading ? <p>Cargando...</p> : <p>Completado</p>
                }
            </Grid>

            <Grid item xs={11} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <p>
                    Datos retornados
                </p>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {
                                    columns?.map((item, index) => (
                                        <TableCell key={index}>
                                            {item}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                returnvalue?.map((item, index) => (
                                    <TableRow key={index}>
                                        {columns?.map(key => (
                                            <TableCell key={key}>
                                                {item[key]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};

export default FirestoreTesting;
