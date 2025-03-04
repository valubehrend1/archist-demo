import React from 'react';

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Typography, Box, Button } from "@mui/material";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


const GradientContainer = styled(Grid)(() => ({
  width: "100%",
  backgroundColor: "#B3A3F9",
  padding: "60px",
}));

const CardContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  alignItems: 'center',
  [theme.breakpoints.down("md")]: {
    marginTop: "40px",
  },
}));

const Card = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "80%",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "white",
  height: "70%",
}));

const ContactButton = styled(Button)(() => ({
  backgroundColor: "#2E1A47",
  color: "white",
  marginTop: "20px",
  padding: "10px 35px",
  fontSize: "16px",
  textTransform: "initial",
  fontWeight: 300,
  "&:hover": {
    backgroundColor: "#1B1030",
  },
}));

const PayForUse: React.FC = () => {
  const features = [
    "Get free queries to test the API and integration.",
    "Keyword assignment at 0.3 USD per 1,000 words.",
    "Summarisation costs 0.1 USD per 1,000 words.",
    "Discount for large collections.",
  ];

  return (
    <GradientContainer container>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" color="white" fontWeight={600}>
          Straitghforward Pricing        </Typography>
        <Typography variant="h3" color="white" fontWeight={700}>
          Pay for use
        </Typography>
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
      <CardContainer item xs={12} md={6} >
        <Card>
          <Typography variant="h4" fontWeight={700}>
            Get in touch with us
          </Typography>
          <ContactButton variant='contained'>Contact us</ContactButton>
        </Card>
      </CardContainer>
    </GradientContainer>
  );
};

export default PayForUse;
