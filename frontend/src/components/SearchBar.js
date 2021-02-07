import React, { useEffect, useState } from 'react'
import { Box, Container, TextField } from '@material-ui/core'
import axios from 'axios';
import ItemsList from './ItemsList'

const SearchBar = () => {
    const [q, setQ] = useState('')
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(50);

    const [items, setItems] = useState([])

    useEffect(() => {
        (async() => {
            const { data } = await axios.get('/api/search')
            setItems(data)
        })()
    }, [])

    const onChangeHandler = async e => {
        setQ(e.target.value)
        await axios.get('/api/search', { 
            params: {
                q: e.target.value
            }
        }).then(res => {
            setItems(res.data)
        })
        setPage(0)
    }

    return (
        <Container>
            <Box my={2}>
                <TextField
                    type='search'
                    id='search-query'
                    value={q}
                    onChange={onChangeHandler}
                    fullWidth
                    variant="outlined"
                />
            </Box>
            <Box my={2}>
                <ItemsList 
                    items={items}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                />
            </Box>
        </Container>
    )
}

export default SearchBar
