import { styled } from "@mui/system";
import { Card, Button } from "@mui/material";
export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: "400px",
  border: `3px solid ${theme.palette.primary.darkT}`,
  borderBottomRightRadius: "50px 20px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: "1px 2px 5px 2px rgba(0,0,0,0.5)",
}));
