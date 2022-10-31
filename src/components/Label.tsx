function Label(props: any) {
  const { value, children } = props;
  return <label {...props}>{value || children}</label>;
}
export default Label;