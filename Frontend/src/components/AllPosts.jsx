import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import {
  Box,
    Card,
    CardContent,
    CardActions,
    Grid,
    InputAdornment,
    TextField,
    Typography,
    Container,
    Paper,
    CircularProgress,
  } from "@mui/material";
  import axios from "axios";
  import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState("");
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

const handleEdit = (id) => {
  navigate("/edit",{state:{id}});
}

    useEffect(() => {
      let timeoutId;
      
      const fetchPosts = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:8080/jobPosts/keyword/${query}`);    
          setPost(response.data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        } finally {
          setLoading(false);
        }
      };
      
      const fetchInitialPosts = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:8080/jobPosts`);
          setPost(response.data);
        } catch (error) {
          console.error('Error fetching initial posts:', error);
        } finally {
          setLoading(false);
        }
      }

      // Clear previous timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // If query is empty, fetch all posts immediately
      if (query.length === 0) {
        fetchInitialPosts();
      } 
      // If query has more than 2 characters, debounce the search
      else if (query.length > 2) {
        timeoutId = setTimeout(() => {
          fetchPosts();
        }, 500); // 500ms debounce delay
      }
      // If query is 1-2 characters, show empty results
      else {
        setPost([]);
        setLoading(false);
      }

      // Cleanup function
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, [query]);

      const handleDelete = (id) => {
        async function deletePost() {
          await axios.delete(`http://localhost:8080/jobPost/${id}`);
      }
      deletePost();
      window.location.reload();
      }

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: { xs: '20px 10px', md: '40px 20px' },
      pb: 6
    }}>
      <Container maxWidth="xl">
        {/* Search Section */}
        <Paper 
          elevation={8}
          sx={{ 
            p: 3, 
            mb: 4, 
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <TextField
            fullWidth
            placeholder="Search jobs by title or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
              endAdornment: loading && (
                <InputAdornment position="end">
                  <CircularProgress size={20} sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                fontSize: '1.1rem',
                '&:hover fieldset': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.main',
                  borderWidth: 2,
                },
              },
            }}
          />
          {query.length > 0 && query.length <= 2 && (
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary', fontStyle: 'italic' }}>
              Type at least 3 characters to search...
            </Typography>
          )}
        </Paper>

        {/* Job Cards Grid */}
        {loading && post === null ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
            <CircularProgress size={60} sx={{ color: 'white' }} />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {post && post.length > 0 ? (
            post.map((p) => {
              return (
                <Grid key={p.postId} item xs={12} sm={6} md={6} lg={4}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease-in-out',
                      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      {/* Job Title */}
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <WorkIcon sx={{ color: 'primary.main', mr: 1, fontSize: 28 }} />
                        <Typography        
                          variant="h5"
                          sx={{ 
                            fontWeight: 700,
                            color: '#1a1a1a',
                            fontSize: { xs: '1.3rem', md: '1.5rem' },
                            lineHeight: 1.2
                          }}
                        >
                          {p.postProfile}
                        </Typography>
                      </Box>

                      {/* Description */}
                      <Typography  
                        sx={{ 
                          color: '#555',
                          mb: 2.5,
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                          minHeight: '60px'
                        }} 
                        variant="body2"
                      >
                        {p.postDesc}
                      </Typography>

                      {/* Experience */}
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <BusinessCenterIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 20 }} />
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontWeight: 600,
                            color: '#333',
                            fontSize: '0.95rem'
                          }}
                        >
                          {p.reqExperience} {p.reqExperience === 1 ? 'year' : 'years'} of experience
                        </Typography>
                      </Box>

                      {/* Skills */}
                      <Box sx={{ mt: 2 }}>
                        <Typography 
                          sx={{ 
                            fontWeight: 600, 
                            mb: 1.5,
                            color: '#333',
                            fontSize: '0.9rem'
                          }} 
                          variant="body2"
                        >
                          Required Skills:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {p.postTechStack.map((s, i) => (
                            <Chip
                              key={i}
                              label={s}
                              size="small"
                              sx={{
                                backgroundColor: 'primary.light',
                                color: 'white',
                                fontWeight: 500,
                                '&:hover': {
                                  backgroundColor: 'primary.main',
                                }
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </CardContent>

                    {/* Action Buttons */}
                    <CardActions sx={{ 
                      p: 2, 
                      pt: 0, 
                      justifyContent: 'flex-end',
                      borderTop: '1px solid #e0e0e0',
                      background: '#fafafa'
                    }}>
                      <Tooltip title="Edit Job Post">
                        <IconButton 
                          onClick={() => handleEdit(p.postId)}
                          sx={{ 
                            color: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'primary.light',
                              color: 'white',
                              transform: 'scale(1.1)'
                            },
                            transition: 'all 0.2s'
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Job Post">
                        <IconButton 
                          onClick={() => handleDelete(p.postId)}
                          sx={{ 
                            color: 'error.main',
                            '&:hover': {
                              backgroundColor: 'error.light',
                              color: 'white',
                              transform: 'scale(1.1)'
                            },
                            transition: 'all 0.2s'
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <Grid item xs={12}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 3
                }}
              >
                <Typography variant="h6" sx={{ color: '#666' }}>
                  {query ? 'No jobs found matching your search.' : 'No job posts available.'}
                </Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
        )}
      </Container>
    </Box>
  )
}

export default Search