import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Container,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WorkIcon from '@mui/icons-material/Work';
const initial = { postId:"",postProfile: "", reqExperience: 0, postTechStack: [], postDesc:"" };


const Create = () => {
  const skillSet = [
    {
      name: "Javascript"
    },
    {
      name: "Java"
    },
    {
      name: "Python"
    },
    {
      name: "Django"
    },
    {
      name: "Rust"
    }
  ];

  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/jobPost",form)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
      navigate('/');
    };


  const { postId, postProfile, reqExperience, postDesc } = form;

  const handleChange = (e) => {
    const skill = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setForm({...form , postTechStack : [...form.postTechStack, skill]});
    } else {
      setForm({...form , postTechStack : form.postTechStack.filter(s => s !== skill)});
    }
  }

  

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      py: 5,
      px: { xs: 2, sm: 3 }
    }}>
      <Container maxWidth="md">
        <Card 
          elevation={8}
          sx={{ 
            borderRadius: 4,
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.98)'
          }}
        >
          <Box sx={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            p: 3,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2
          }}>
            <AddCircleIcon sx={{ fontSize: 32 }} />
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Create New Job Post
            </Typography>
          </Box>

          <CardContent sx={{ p: 4 }}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                  type="number"
                  label="Post ID"
                  variant="outlined"
                  value={postId}
                  onChange={(e) => setForm({ ...form, postId: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <TextField
                  type="text"
                  required
                  label="Job Profile / Title"
                  variant="outlined"
                  value={postProfile}
                  onChange={(e) => setForm({ ...form, postProfile: e.target.value })}
                  InputProps={{
                    startAdornment: (
                      <WorkIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <TextField
                  type="number"
                  required
                  label="Years of Experience Required"
                  variant="outlined"
                  value={reqExperience}
                  onChange={(e) => setForm({ ...form, reqExperience: e.target.value })}
                  inputProps={{ min: 0 }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <TextField
                  type="text"
                  required
                  multiline
                  rows={4}
                  label="Job Description"
                  variant="outlined"
                  value={postDesc}
                  onChange={(e) => setForm({ ...form, postDesc: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <Divider sx={{ my: 1 }} />

                <Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#333' }}>
                    Required Skills
                  </Typography>
                  <FormGroup>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skillSet.map(({ name }, index) => (
                        <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                              id={`custom-checkbox-${index}`}
                              name={name}
                              value={name}
                              onChange={handleChange}
                              sx={{
                                color: 'primary.main',
                                '&.Mui-checked': {
                                  color: 'primary.main',
                                },
                              }}
                            />
                          }
                          label={name}
                          sx={{
                            '& .MuiFormControlLabel-label': {
                              fontWeight: 500,
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </FormGroup>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<AddCircleIcon />}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(102, 126, 234, 0.4)',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  Create Job Post
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Create