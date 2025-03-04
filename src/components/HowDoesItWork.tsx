import React from 'react';

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import screenshot from '../assets/screenshot-api-1.jpg';

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

const HowDoesItWork: React.FC = () => {
  const features = [
    "For large authority files used in archival and bibliographic indexing, vocabularies are transformed into mathematical representations of their semantic meaning using embeddings, enriched by the hierarchical relationships between terms. Each text fragment is analyzed, and the most relevant terms from the vocabulary are retrieved and ranked.",
    "For subject headings used in book indexing, a graph-based structure captures the hierarchy of terms. Large language models extract information from the text and navigate the vocabulary iteratively, identifying the most relevant nodes.",
    "Generative language models are optimized to capture the meaning of textual sources and summarize them concisely."
  ];

  return (
    <GradientContainer container>
      <CodeGridImageContainer item xs={12} md={6}>
        <CodeImage src={screenshot} alt="Screenshot API" />
      </CodeGridImageContainer>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" color="white" fontWeight={600}>
          Behind the curtains
        </Typography>
        <Typography variant="h3" color="white" fontWeight={700}>
          How does it works?
        </Typography>
        <Box sx={{ mt: 6 }}>
          <Typography variant="body1" fontWeight={300} color="white" mb={2}>
            Depending on the type of vocabulary, a tailored pipeline is applied.
          </Typography>
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
    </GradientContainer>
  );
};

export default HowDoesItWork;
