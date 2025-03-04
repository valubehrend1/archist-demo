import React from 'react';

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import screenshot from '../assets/output.webp';

const GradientContainer = styled(Grid)(() => ({
  width: "100%",
  background: "linear-gradient(-17deg, #6A52CE 0%, #2F216B 71%)",
  padding: "60px",
}));

const CodeGridImageContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    paddingBottom: "40px",
  },
}));

const CodeImage = styled('img')(({ theme }) => ({
  width: "90%",
  borderRadius: "10px",
  [theme.breakpoints.up("lg")]: {
    width: "80%",
  },
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
}));

const ItsCustomizable: React.FC = () => {
  return (
    <GradientContainer container>
      <CodeGridImageContainer item xs={12} md={6}>
        <CodeImage src={screenshot} alt="Screenshot API" />
      </CodeGridImageContainer>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" color="white" fontWeight={600}>
          It's Customizable
        </Typography>
        <Typography variant="h3" color="white" fontWeight={700}>
          Our AI with Your Vocabulary
        </Typography>
        <Typography variant="body1" fontWeight={300} color="white" sx={{ mt: 2 }}>
          Do you need to index with your own thesaurus? The modular architecture allows for fast customizations.
        </Typography>
      </Grid>
    </GradientContainer>
  );
};

export default ItsCustomizable;
