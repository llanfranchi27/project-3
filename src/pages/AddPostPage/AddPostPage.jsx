import React, {useState, useRef, useEffect } from 'react';

export default function AddPostPage(props){
  const [invalidForm, setInvalidForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    breed: 'Mixed',
    age: '0'
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
      <h1>Add Post</h1>
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
            name="breed"
            value={ formData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pup's Age</label>
          <input
            className="form-control"
            name="age"
            value={ formData.age}
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
    </>
  );
  
}