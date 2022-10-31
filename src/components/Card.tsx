function Card(props: any) {
  const { children } = props;
  return <div className='rounded-lg overflow-hidden bg-white border border-slate-300'>{children}</div>;
}

function Title(props: any) {
  const { children } = props;
  return (
    <div className='border-b border-slate-300 p-4'>
      <h2>{children}</h2>
    </div>
  );
}

function Footer(props: any) {
  const { children } = props;
  return <div className='p-4 bg-slate-100 border-t border-slate-300'>{children}</div>;
}

function Body(props: any) {
  const { children } = props;
  return <div className='p-4 bg-white'>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
