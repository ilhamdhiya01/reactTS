import Todo from './components/Todo';

function App() {
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });
  // const onChangeHandler = (event: any) => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // };
  // const submit = (event: any) => {
  //   event.preventDefault();
  //   console.log(form);
  // };
  return (
    <div className='App flex justify-center items-center antialiased min-h-screen'>
      <div className='max-w-md w-full'>
        <Todo />
        {/* <form onSubmit={submit}>
          <Card>
            <Card.Title>Form register</Card.Title>
            <Card.Body>
              <div className='border p-2 rounded-lg space-y-2 mb-2'>
                <p className='text-xs'>Nama : {form.name}</p>
                <p className='text-xs'>Email : {form.email}</p>
                <p className='text-xs'>Password : {form.password}</p>
              </div>
              <div className='mb-6 space-y-2'>
                <Label htmlFor='name' value='Name' />
                <Input value={form.name} onChange={onChangeHandler} name='name' id='name' />
              </div>
              <div className='mb-6 space-y-2'>
                <Label htmlFor='email' value='Email' />
                <Input value={form.email} onChange={onChangeHandler} name='email' id='email' />
              </div>
              <div className='mb-6 space-y-2'>
                <Label htmlFor='password' value='Password' />
                <Input value={form.password} onChange={onChangeHandler} type='password' name='password' id='password' />
              </div>
            </Card.Body>
            <Card.Footer>
              <Button type='submit' className='p-2 bg-black flex items-center gap-2 text-white rounded-md [&svg]:stroke-1'>
                <IconBrandGithub />
                Sign Up
              </Button>
            </Card.Footer>
          </Card>
        </form> */}
      </div>
    </div>
  );
}

export default App;
