export interface ContainerProps {
  children?: JSX.Element | string;
}

const containerStyle = {
  width: "900px",
  marginLeft: "auto",
  marginRight: "auto",
};

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return <div style={containerStyle}>{children}</div>;
};
