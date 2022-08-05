import * as React from 'react';

interface ISliderProps {
}

function Slider (props: ISliderProps) {
  return (
    <div>
      
    </div>
  );
}


// const inputs[]:any = []
// {  inputs?.map((slide) => {
//     return (
//       <Row className='mt-4'>
//         <Col md={4} className="d-flex justify-content-center">
//           <Image src='./1_black_palaco.jpg' style={{ maxWidth: "100%", width: "auto", height: '200px', objectFit: "cover" }} />
//         </Col>
//         <Col md={6}>
//           <Form>
//             {(Object.keys(slide) as (keyof typeof slide)[]).map((key) => {
//               return (
//                 <>
//                   <Form.Group className="mb-3" controlId="formBasicEmail" key={slide.id}>
//                     <Form.Label key={key} style={{ marginBottom: "3px" }}>{key}</Form.Label>
//                     <Form.Control key={key} type="email" placeholder="Enter email" style={{ marginBottom: "10px" }} value={slide[key] as string} />
//                   </Form.Group>
//                 </>
//               )
//             })}
//           </Form>
//         </Col>
//         <hr />
//       </Row>
//     )
//   }
// }