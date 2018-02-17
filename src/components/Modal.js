import React,{Component} from 'react';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';


export default class MyModal extends Component{
   render(){
      const { text,onRequestClose } = this.props;
      return (
        <div className="container myModal">
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.SlideFromRight}>
            <div className="myModal-title">
              <h4 className="text-white"> Login  </h4>
            </div>
            <h1>{text}</h1>
            <button className="btn btn btn-dark" onClick={ModalManager.close}>OK</button>
         </Modal>
        </div>
      );
   }
}
