import { styled } from "@mui/system";

export const StyledFooter = styled("div")(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  color: `${theme.palette.primary[800]}`,
  padding: "2.4vh",
  textAlign: "center",
  fontWeight: "bold",
  fontStyle: "italic",
}));

function Footer() {
  return (
    <>
      <StyledFooter>Made with &lt;3 by Anur4g</StyledFooter>
    </>
  );
}
export default Footer;
