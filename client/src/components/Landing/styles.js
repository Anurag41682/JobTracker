import { styled } from "@mui/system";
import { Card, Button } from "@mui/material";
export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary[200],
  border: `3px solid ${theme.palette.primary[700]}`,
  borderBottomRightRadius: "50px 20px",
  width: "280px", // Default fixed width

  [theme.breakpoints.up("sm")]: {
    width: "300px", // Set a fixed width for 'sm' and larger screens
  },

  [theme.breakpoints.up("md")]: {
    width: "400px", // Set a fixed width for 'md' and larger screens
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary[500],
  boxShadow: "1px 2px 5px 2px rgba(0,0,0,0.5)",
}));
