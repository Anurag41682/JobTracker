import { fontSize, fontStyle, styled } from "@mui/system";
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

export const StyledFooter = styled("div")(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}` /* Background color of the footer */,
  color: `${theme.palette.primary.darkT}` /* Text color */,
  padding: "30px",
  textAlign: "center",
  borderTopLeftRadius: "50% 60px" /* Adjust the values as needed */,
  borderTopRightRadius: "50% 60px" /* Adjust the values as needed */,
  fontWeight: "bold",
  fontStyle: "italic",
}));
