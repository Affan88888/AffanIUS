//signup file
"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import  Checkbox  from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';


export default function SignUp() {

    const {register, handleSubmit} = useForm();

    const [yourNameError, setYourNameError] = React.useState("");
    const [yourEmailError, setYourEmailError] = React.useState("");
    const [messageError, setMessageError] = React.useState("");

    const handleFormSubmit = (formData , any) =>{
        console.log('form data is', formData);
        let formDirty = false;
        if(!formData.yourName || !formData.yourName.length){
            setYourNameError("Name is required");
            formDirty = true;
        } else {
            setYourNameError("");
        }
        if(!formData.yourEmail || !formData.yourEmail.length){
            setYourEmailError("Email is required");
            formDirty = true;
        } else {
            setYourEmailError("");
        }
        if(!formData.message || !formData.message.length){
            setMessageError("Message is required");
            formDirty = true;
        } else {
            setMessageError("");
        }
        if(!formDirty){
            alert("Message sent!");
            return true;
        } else {
            alert("You need to fill in the forms!")
        }
    }

    return(
        <Container component="main" maxWidth="xs">
            <Box className="mx-auto bg-gray-900 rounded-md p-6 shadow-md" sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography className="text-4xl font-bold duration-300 hover:opacity-90">
                    Message Us
                </Typography>
                <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate sx={{ mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField className="bg-slate-700"
                            error={yourNameError && yourNameError.length ? true : false}
                            autoComplete="given-name"
                            required
                            fullWidth
                            id="yourName"
                            label="Your Name"
                            autoFocus
                            helperText={yourNameError}
                            {...register('yourName')}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField className="bg-slate-700"
                            error={yourEmailError && yourEmailError.length ? true : false}
                            required
                            fullWidth
                            id="yourEmail"
                            label="Your Email"
                            helperText={yourEmailError}
                            {...register('yourEmail')}
                            autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField className="bg-slate-700"
                        error={messageError && messageError.length ? true : false}
                            autoComplete="message"
                            required
                            fullWidth
                            id="message"
                            label="Message"
                            helperText={messageError}
                            {...register('message')}
                            autoFocus
                            />
                        </Grid>
                        <Button className="rounded-md hover:bg-blue-700 bg-slate-700"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2, mr: 6, ml: 6}}
                            >
                            Send the message
                        </Button>
                    </Grid>
                </Box>
            </Box>
        </Container>
        
    )

}
