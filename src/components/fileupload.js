import React, {useState} from 'react';
import Button from '@mui/material/Button';

const  Fileupload = ({
  setIsloading, analyseCall
}) => {

  const [selectedFile,setSelectFile] = useState(null);


  const onFileUpload = () => {
    
    const formData = new FormData();
   
    formData.append(
      "file",
      selectedFile,
    );
   
    console.log(selectedFile);
   
    // call api
    setIsloading(true);
    analyseCall(formData);
  };
   
  return (
    <div>
      <Button>
        <div className='upload-button-btn'>
          <input type="file" className='upload-button' onChange={event => setSelectFile(event.target.files[0])} />
          {selectedFile ? selectedFile.name : "Select File"}
        </div>
      </Button>
      <Button variant="contained" onClick={event => onFileUpload()}>
        Analyse!
      </Button>
    </div>
  );
}

export default Fileupload;