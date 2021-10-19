import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from '../../config/axios';

export default function CreatePost() {
    const [error, setError] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setIsSubmit(true);
        setError(false);
        try {
            const res = await axios.post(`/posts`, {
                title: data.get('title'),
                description: data.get('description'),
            });
            res.data && window.location.reload();
        } catch (error) {
            setError(true);
            setIsSubmit(false);
        }

    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Write
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        id="title"
                        label="Title"
                        name="title"
                        margin="normal"
                        fullWidth
                        autoFocus
                    />
                    <TextField
                        id="description"
                        label="Description"
                        name="description"
                        margin="normal"
                        fullWidth
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isSubmit}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>
                    {error && <Typography align="center" style={{ color: 'red' }}>Something went wrong!</Typography>}
                </Box>
            </Box>
        </Container>
    );
}
