import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Editor } from "@tinymce/tinymce-react";

export const CreatePost2 = () => {
  const editorRef = useRef(null);
  const onSubmit = (data) => {
      console.log(data)
      console.log(errors)
    // if (editorRef.current) {
    //   console.log(editorRef.current.getContent());
    // }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({title:'', body:''});
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input className="form-control"  {...register('title', { required: true })}/>
      </div>
      <Editor
        apiKey={process.env.REACT_APP_TINY_MCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        {...register('body', { required: true })}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button type="submit">Log editor content</button>
    </form>
  );
};
