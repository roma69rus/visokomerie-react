import * as React from 'react';
import { DefaultCreateModal } from '../modals/defaultCreateModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { createSlide } from '../../../http/sliderAPI';

export interface ICreateSliderModalProps {
  onHide: () => void;
  show: boolean;
}

export function CreateSliderModal(props: ICreateSliderModalProps) {

  const [isVideo, setIsVideo] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('')
  const [btnText, setBtnText] = useState<string>('')
  // const [order, setOrder] = useState<string>('')
  const [files, setFiles] = useState<File>()

  const addSlide = () => {
    const formData = new FormData()
    formData.append('isVideo', isVideo.toString())
    formData.append('url', url)
    formData.append('btn_txt', btnText)
    formData.append('image', files as File)


    createSlide(formData).then((data) => {
      console.log(data)
      setIsVideo(false)
      setUrl('')
      setBtnText('')
      props.onHide()
    })
    // createSlide({ isVideo: isVideo, url, btn_text: btnText, image: files as File}).then((data) => {
    //   console.log(data)
    //   setIsVideo(false)
    //   setUrl('')
    //   setBtnText('')
    //   props.onHide()
    // })
    

  }

  const setFilesHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files != null) {
      setFiles(evt.target.files[0]); //error
      console.log("files", files)
      console.log("evt.target.files", evt.target.files)
    }
    
  };

  // const handleImageChange = ({ currentTarget: {files}, }: React.ChangeEvent<HTMLInputElement>) => {
  //     if (files && files.length) {
  //       setFiles(files);
  //     }
  // }

  return (
    <DefaultCreateModal
      show={props.show}
      onHide={props.onHide}
      title='Create slide'
      onSave={addSlide}
    >
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="IsVideo"
          checked={isVideo || false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsVideo(e.target.checked)}

        />
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Control
            type="file"
            size="sm"
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            //   if (e.target.files && e.target.files.length) {
            //     // setFile(existing => [...existing, ...e.currentTarget.files]);
            //     // setFiles(e.currentTarget.files as FileList); 
            //     setFiles(e.currentTarget.files as FileList); 
            //     console.log() 
            //   }
            // }}
            onChange={setFilesHandler}
          /> 
        </Form.Group>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">URL</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={url}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">BUTTON TEXT</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={btnText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBtnText(e.target.value)}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: "10px" }}>
          <InputGroup.Text id="inputGroup-sizing-sm">ORDER</InputGroup.Text>
          <Form.Control
            disabled
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          // value={btnText}
          // onChange={(e:React.ChangeEvent<HTMLInputElement>) => setBtnText(e.target.value)}
          />
        </InputGroup>
      </Form>
    </DefaultCreateModal>
  );
}
