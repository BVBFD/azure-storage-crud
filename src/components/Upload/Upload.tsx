/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Upload.module.scss';

const Todo = () => {
  const [blobServiceClientContainer, setBlobServiceClientContainer] = useState<unknown>();
  const [uploadStatus, setUploadStatus] = useState<boolean>(false);

  useEffect(() => {}, []);

  const handleUpload = () => {};

  const handleDelete = () => {};

  return (
    <div className={styles.todoRow}>
      <header>Image Title</header>
      {uploadStatus && (
        <Image
          alt="azure_logo"
          height={400}
          src="https://res.cloudinary.com/dewa3t2gi/image/upload/v1683160451/myportfolioblogproject/s85vgbf8nazcidfoscz7.gif"
          width={660}
        />
      )}
      <div className={styles.btnBox}>
        <button onClick={handleUpload} type="button">
          Upload
        </button>
        <button onClick={handleDelete} type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
