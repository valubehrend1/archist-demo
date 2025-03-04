import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

import apiClient from "../utils/apiClient";
import ApiResults from "./ApiResults";

// Contenedor principal con fondo degradado
const GradientContainer = styled(Grid)(() => ({
  minHeight: "100vh",
  width: "100%",
  flexDirection: "column",
  background: "linear-gradient(0deg, #B3A3F9 0%, #6A52CE 100%)",
  padding: "60px",
}));

// Contenedor para la sección de carga
const UploadBox = styled(Box)(({ theme }) => ({
  marginTop: "40px",
  width: "70%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

// Botón para subir archivo (archivo "Choose a file")
const FileSelectButton = styled(Button)(() => ({
  backgroundColor: "#382B5F",
  color: "white",
  marginTop: "20px",
  marginBottom: "20px",
  textTransform: "initial",
  boxShadow: "none",
  padding: "10px 30px",
  fontWeight: 300,
}));

// Botón para "Upload"
const UploadButton = styled(Button)(() => ({
  backgroundColor: "#2E1A47",
  color: "white",
  width: "100%",
  // Ajusta el ancho a auto para que no ocupe todo el espacio
  marginTop: "20px",
  padding: "10px",
  fontSize: "16px",
  textTransform: "initial",
  fontWeight: 300,
  "&:hover": {
    backgroundColor: "#1B1030",
  },
}));

// Select estilizado
const StyledSelect = styled(Select)({
  background: "white",
  width: "100%",
  marginTop: "20px",
});

// FormControl con gap para el primer select
const FormControlWithGap = styled(FormControl)({
  display: "flex",
  gap: "30px",
  width: "100%",
});

// Texto en negrita para resaltar (equivalente al span inline)
const StrongText = styled("span")({
  fontWeight: 900,
});

const MetadataUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState("English");
  const [collectionName, setCollectionName] = useState("GND");
  const [data, setData] = useState(null);

  const [open, setOpen] = React.useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);

  const features = [
    "Map concepts to thesauri like the Library of Congress Subject Headings, Gemeinsame Normdatei (GND), and more.",
    "Extract highly relevant keywords for each section and the entire document, prioritized by relevance to enhance search and categorization.",
    "Summarize the core content of your documents to improve discoverability and enable quick insights."
  ];

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Por favor, selecciona un archivo antes de subirlo.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("collection_name", collectionName);
    formData.append("summary_language", language);

    try {
      const response = await apiClient.post("http://190.19.111.100:8002/archist/pipeline", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setData(response.data);
      setOpen(true);
    } catch (error) {
      console.error("Error al subir archivo:", error);
      alert("Error al subir archivo");
    }
  };

  useEffect(() => {
    if (data && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);


  return (
    <GradientContainer container>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          File uploaded successfully
        </Alert>
      </Snackbar>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" color="white" fontWeight={600}>
          Metadata API trial
        </Typography>
        <Typography variant="h3" color="white" fontWeight={700}>
          Automated Indexing
        </Typography>
        <Typography variant="body1" color="white" mt={2}>
          With aureka's AI, cultural heritage institutions can speed up indexing time and provide a better access to their holdings.
        </Typography>
        <Typography variant="body1" color="white" mt={2}>
          Works for:{" "}
          <StrongText>
            ebooks, journals, interview transcripts, manuscripts
          </StrongText>{" "}
          - basically all digitized texts.
        </Typography>

        <UploadBox>
          <Typography variant="h4" fontWeight={600} color="white">
            Upload a text file
          </Typography>
          <FileSelectButton variant="contained" component="label">
            Choose a file
            <input
              type="file"
              hidden
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </FileSelectButton>
          {file && (
            <Typography color="white" mt={1}>
              {file.name}
            </Typography>
          )}
          <Typography variant="body1" color="white" mt={1}>
            The demo supports only txt and PDF files, the productive version can adjust to you needed formats.
          </Typography>
          <FormControlWithGap>
            <StyledSelect
              value={language}
              onChange={(e) => setLanguage(e.target.value as string)}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="German">German</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="Italian">Italian</MenuItem>
              <MenuItem value="Portuguese">Portuguese</MenuItem>
            </StyledSelect>
          </FormControlWithGap>
          <FormControl fullWidth>
            <StyledSelect
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value as string)}
            >
              <MenuItem value="GND">GND</MenuItem>
              <MenuItem value="LCSH">
                LCSH
              </MenuItem>
            </StyledSelect>
          </FormControl>
          <UploadButton variant="contained" onClick={handleUpload}>
            Upload
          </UploadButton>
        </UploadBox>

        <Box sx={{ mt: 6 }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', mb: index < features.length - 1 ? 2 : 0 }}
            >
              <CheckCircleRoundedIcon sx={{ color: "white", fontSize: 25 }} />
              <Typography variant="body1" fontWeight={300} color="white" ml={1}>
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
      <Box ref={resultsRef}>
        {data && (
          <ApiResults data={data} />
        )}
      </Box>
    </GradientContainer>
  );
};
export default MetadataUpload;
