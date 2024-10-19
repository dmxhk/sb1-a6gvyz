import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const PhotoUpload: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // TODO: Implement photo upload logic
    console.log('Uploading files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upload Photos</h2>
      <div {...getRootProps()} className={`border-2 border-dashed p-8 text-center cursor-pointer ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
    </div>
  );
};

export default PhotoUpload;