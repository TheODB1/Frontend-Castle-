import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

const images_upload_handler = async (blobInfo, success, failure, progress) => {
  const formData = new FormData();
  formData.append('image', blobInfo.blob(), blobInfo.filename());
  try {
    const {
      data: { location }
    } = await axios.post(`${process.env.REACT_APP_BLOG_API}/uploads`, formData, {
      headers: { Authorization: localStorage.getItem('token') },
      onUploadProgress: ({ loaded, total }) => progress((loaded / total) * 100)
    });
    console.log(location);
    success(location);
  } catch (error) {
    console.log(error);
    failure(error);
  }
};

const TextEditor = ({ onChange }) => {
  return (
    <Editor
      apiKey={process.env.REACT_APP_TINY_MCE_API_KEY}
      init={{
        height: 300 ,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        images_upload_handler
      }}
      onEditorChange={newValue => onChange(newValue)}
    />
  );
};

export default TextEditor;