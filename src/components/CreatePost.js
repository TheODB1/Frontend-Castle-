import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import TextEditor from "./TextEditor";

const CreatePost = () => {
  const onSubmit = async (data) => {
    const body = {
      image: "/images/Hluboka-Castle-Czech-Republic.png",
      countInStock: 10,
      city: "Ahorn",
      country: "Germany",
      lon: " 14.4358",
      lat: " 49.0514",
    };

    try {
      const { data: newPost } = await axios.post(
        `${process.env.REACT_APP_BLOG_API}/api/castles`,
        {...body, ...data},
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      console.log(newPost);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ title: "" });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          className={errors.title ? "form-control is-invalid" : "form-control"}
          {...register("name", { required: true })}
        />
        {errors.name && (
          <div className="invalid-feedback">Name is required</div>
        )}
      </div>
      <div>
        <label htmlFor="price" className="form-label">
          Price:
        </label>
        <input
          className={errors.price ? "form-control is-invalid" : "form-control"}
          {...register("price", { required: true })}
        />
        {errors.price && (
          <div className="invalid-feedback">Price is required</div>
        )}
      </div>
      <Controller
        control={control}
        name="description"
        rules={{ required: "Description cannot be empty" }}
        render={({ field: { onChange } }) => <TextEditor onChange={onChange} />}
      />
      {errors.description && <div>{errors.description.message}</div>}
      <button className="btn btn-success" type="submit">
        Create post
      </button>
    </form>
  );
};

export default CreatePost;
