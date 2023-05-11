import React from 'react';
import styles from '../../styles/azure-storage/azure-storage.module.scss';
import Upload from '../../components/Upload/Upload';

const AzureStorageUpload = () => {
  return (
    <section className={styles.container}>
      <Upload />
    </section>
  );
};

export default AzureStorageUpload;
