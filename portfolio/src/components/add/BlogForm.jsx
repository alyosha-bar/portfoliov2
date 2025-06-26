import React, { useState } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';


// Change state to match my docs
// set up image file uplaods properly
// Add tags data


const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [shortContent, setShortContent] = useState('');
  const [fullContent, setFullContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [publishDate, setPublishDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = '';
    //   if (imageFile) {
    //     const storageRef = ref(storage, `blog-images/${Date.now()}-${imageFile.name}`);
    //     await uploadBytes(storageRef, imageFile);
    //     imageUrl = await getDownloadURL(storageRef);
    //   }

      const blogData = {
        title,
        subtitle,
        shortContent,
        fullContent,
        imageUrl,
        publishDate,
        createdAt: new Date()
      };

      await addDoc(collection(db, 'blogs'), blogData);

      alert('Blog posted successfully!');
    } catch (error) {
      console.error('Error uploading blog:', error);
      alert('Failed to upload blog.');
    }
  };

  return (
    <>
    <div className="link-container">
        <Link className="back-link" to="/"> Home </Link>
    </div>

    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Create Blog Post</h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
        required
      />

      <input
        type="text"
        placeholder="Subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        style={styles.input}
        required
      />

      <textarea
        placeholder="Text part 1"
        value={shortContent}
        onChange={(e) => setShortContent(e.target.value)}
        style={styles.textarea}
        required
      />

      <textarea
        placeholder="Text part 2"
        value={fullContent}
        onChange={(e) => setFullContent(e.target.value)}
        style={styles.textarea}
        required
      />

      <input
        type="file"
        onChange={(e) => setImageFile(e.target.files[0])}
        style={styles.file}
      />

      <input
        type="date"
        value={publishDate}
        onChange={(e) => setPublishDate(e.target.value)}
        style={styles.input}
        required
      />

      <button type="submit" style={styles.button}>Publish</button>
    </form>
    </>

  );
};

const styles = {
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    minHeight: '100px'
  },
  file: {
    fontSize: '1rem'
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s'
  }
};

export default BlogForm;
