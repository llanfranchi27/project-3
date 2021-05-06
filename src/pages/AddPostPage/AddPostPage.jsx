import React, {useState, useRef, useEffect } from 'react';
import './AddPostPage.css'
export default function AddPostPage(props){
  const [invalidForm, setInvalidForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    text: 'Text',
    subject: 'Subject'
  })
  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    props.handleAddPost(formData);

  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
<div className="title">
      <h1>Add Post</h1>
      </div>
      <div className="form-div">
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Type your name (required)</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type something for your blog (required)</label>
          <input
            className="form-control"
            name="text"
            value={ formData.text}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            className="form-control"
            name="subject"
            value={ formData.subject}
            onChange={handleChange}
          />
        </div>
        <button onClick={() => console.log("The button is clicked")}
          type="submit"
          className="btn"
          disabled={invalidForm}
        >
          ADD POST
        </button>
      </form>
      </div>
    </>
  );
  
}