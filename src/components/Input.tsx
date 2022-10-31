function Input(props: any) {
  const { type = 'text' } = props;
  return <input {...props} type={type} className='block rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-200 border-slate-400 transition duration-300' />;
}

export default Input;
