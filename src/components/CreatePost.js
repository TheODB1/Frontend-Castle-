import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import TextEditor from './TextEditor';

const CreatePost = () => {
  const onSubmit = async data => {
    try {
      const { data: newPost } = await axios.post(`${process.env.REACT_APP_BLOG_API}/posts`, data, {
        headers: { Authorization: localStorage.getItem('token') }
      });
      console.log(newPost);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ title: '' });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='title' className='form-label'>
          Title:
        </label>
        <input
          className={errors.title ? 'form-control is-invalid' : 'form-control'}
          {...register('title', { required: true })}
        />
        {errors.title && <div className='invalid-feedback'>Title is required</div>}
      </div>
      <Controller
        control={control}
        name='body'
        rules={{ required: 'Body cannot be empty' }}
        render={({ field: { onChange } }) => <TextEditor onChange={onChange} />}
      />
      {errors.body && <div>{errors.body.message}</div>}
      <button className='btn btn-success' type='submit'>
        Create post
      </button>
    </form>
  );
};

export default CreatePost;