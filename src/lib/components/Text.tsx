const h1Style = {
  fontSize: "36px",
};

export interface TextProps {
  children?: string;
}

export const Text = (props: TextProps) => {
  const { children } = props;
  return <a style={h1Style}>{children}</a>;
};
