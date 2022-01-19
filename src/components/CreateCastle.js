import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import TextEditor from "./TextEditor";

const CreateCastle = () => {
  const onSubmit = async (data) => {
    const body = {   
     
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
      <div>
        <label htmlFor="image" className="form-label">
        Image:
        </label>
        <input
          className={errors.title ? "form-control is-invalid" : "form-control"}
          {...register("image", { required: true })}
        />
        {errors.name && (
          <div className="invalid-feedback">Image is required</div>
        )}
      </div>
      <div>
        <label htmlFor="countInStock" className="form-label">
        Count In Stock:
        </label>
        <input
          className={errors.title ? "form-control is-invalid" : "form-control"}
          {...register("countInStock", { required: true })}
        />
        {errors.name && (
          <div className="invalid-feedback">Count In Stock is required</div>
        )}
      </div><div>
        <label htmlFor="city" className="form-label">
        City:
        </label>
        <input
          className={errors.title ? "form-control is-invalid" : "form-control"}
          {...register("city", { required: true })}
        />
        {errors.name && (
          <div className="invalid-feedback">City is required</div>
        )}
      </div><div>
        <label htmlFor="country" className="form-label">
        Country:
        </label>
        <input
          className={errors.title ? "form-control is-invalid" : "form-control"}
          {...register("country", { required: true })}
        />
        {errors.name && (
          <div className="invalid-feedback">Country is required</div>
        )}
      </div><div>
        <label htmlFor="lon" className="form-label">
          Longitute:
        </label>
        <input
          className={errors.title ? "form-control is-invalid" : "form-control"}
          {...register("lon", { required: true })}
        />
        {errors.name && (
          <div className="invalid-feedback">Longitute is required</div>
        )}
      </div><div>
        <label htmlFor="lat" className="form-label">
          Latitute:
        </label>
        <input
          className={errors.title ? "form-control is-invalid" : "form-control"}
          {...register("lat", { required: true })}
        />
        {errors.name && (
          <div className="invalid-feedback">Latitute is required</div>
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
        Create Castle
      </button>
    </form>
  );
};

export default CreateCastle;
