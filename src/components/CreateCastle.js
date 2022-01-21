import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import TextEditor from "./TextEditor";

const CreateCastle = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    setValue,
  } = useForm({});

  const isImageUploaded = watch("image");

  const uploadImage = async (e) => {
    try {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      const {
        data: { location },
      } = await axios.post(
        `${process.env.REACT_APP_BLOG_API}/uploads`,
        formData,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      setValue("image", location);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmit = async (data) => {
    try {
      const { data: newPost } = await axios.post(
        `${process.env.REACT_APP_BLOG_API}/api/castles`,
        data,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      navigate(`/castle/${newPost._id}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <><br/><br/><br/>
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          alignItems: "flex-start"
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "30px",
            }}
          >
            <div>
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                className={
                  errors.title ? "form-control is-invalid" : "form-control"
                }
                {...register("name", { required: true })}
              />
              {errors.name && (
                <div className="invalid-feedback">Name is required</div>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "30px",
            }}
          >
            <div>
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                className={
                  errors.price ? "form-control is-invalid" : "form-control"
                }
                {...register("price", { required: true })}
              />
              {errors.price && (
                <div className="invalid-feedback">Price is required</div>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "30px",
            }}
          >
            <div>
              <label htmlFor="city" className="form-label">
                City:
              </label>
              <input
                className={
                  errors.title ? "form-control is-invalid" : "form-control"
                }
                {...register("city", { required: true })}
              />
              {errors.name && (
                <div className="invalid-feedback">City is required</div>
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "30px",
            }}
          >
            <div>
              <label htmlFor="country" className="form-label">
                Country:
              </label>
              <input
                className={
                  errors.title ? "form-control is-invalid" : "form-control"
                }
                {...register("country", { required: true })}
              />
              {errors.name && (
                <div className="invalid-feedback">Country is required</div>
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "30px",
            }}
          >
            <div>
              <label htmlFor="lon" className="form-label">
                Longitute:
              </label>
              <input
                className={
                  errors.title ? "form-control is-invalid" : "form-control"
                }
                {...register("lon", { required: true })}
              />
              {errors.name && (
                <div className="invalid-feedback">Longitute is required</div>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "30px",
            }}
          >
            <div>
              <label htmlFor="lat" className="form-label">
                Latitute:
              </label>
              <input
                className={
                  errors.title ? "form-control is-invalid" : "form-control"
                }
                {...register("lat", { required: true })}
              />
              {errors.name && (
                <div className="invalid-feedback">Latitute is required</div>
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "30px",
            }}
          >
            <div>
              <label htmlFor="image" className="form-label">
                Image:
              </label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "30px",
            }}
          >
            <input type="file" onChange={uploadImage} />
            <input
              hidden
              className={
                errors.title ? "form-control is-invalid" : "form-control"
              }
              {...register("image", { required: true })}
            />
            {errors.name && (
              <div className="invalid-feedback">Image is required</div>
            )}
          </div>

          {isImageUploaded && (
            <img src={isImageUploaded} alt="Preview castle" width="300px" />
          )}
        </div>

        <Controller
          control={control}
          name="description"
          rules={{ required: "Description cannot be empty" }}
          render={({ field: { onChange } }) => (
            <TextEditor onChange={onChange} />
          )}
        />
        {errors.description && <div>{errors.description.message}</div>}
      </div>

      <button className="btn btn-success" type="submit">
        Create Castle
      </button>
    </form></>
  );
};

export default CreateCastle;
