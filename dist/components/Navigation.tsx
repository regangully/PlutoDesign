import { Container } from "./Container";

const navigationStyle = {
  display: "flex",
  alignItems: "center",
  height: "60px",
  backgroundColor: "#131313",
  paddingLeft: "16px",
  paddingRight: "16px",
  color: "#FFF",
};

export interface NavigationProps {
  logo: string;
}

export const Navigation = () => {
  return (
    <div style={navigationStyle}>
      <Container>
        Daybreak
      </Container>
    </div>
  );
};
