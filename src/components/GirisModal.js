import React from 'react'
import './GirisModal.css';
import {Modal} from "react-bootstrap";
import {BsTwitter} from "react-icons/bs"
import {GrClose} from "react-icons/gr"
import {FcGoogle} from "react-icons/fc"
import {BsApple} from "react-icons/bs"
const GirisModal = ({show,ModalState}) => {
  return (
    <div className='giris-modal'>
 <Modal size='lg' show={show} onHide={ModalState}>
    <div className='header-modal'>
        <button className='button-close-modal'><GrClose></GrClose></button>
        <BsTwitter className='header-icon-modal' size={30}></BsTwitter>
    </div>
    <h1 style={{textAlign: "center"}}>Twitter'a giriş yap</h1>
        <div className='modal-body'>
         
            <div className='buttons-giris-modal'> 
            <FcGoogle size={20}></FcGoogle>
            <span>Google ile oturum açın</span>
            </div>
            <div className='buttons-giris-modal'>
                <BsApple></BsApple>
                <strong>Apple ile giriş yap</strong>
            </div>
<div className='giris-modal-veya'>
    <span className='giris-modal-veya-span'>veya</span>
</div>
<input placeholder='Telefon numarası, e-posta veya kull...' className='giris-modal-input'></input>
<button className='buttons-giris-modal-black'> ileri</button>
<button className='button-giris-modal-white'><strong>Şifreni mi unuttun?</strong></button>
        </div>
        <div className='modal-giris-footer'>
            <span className='giris-modal-footer-span'>Henüz bir hesabın yok mu?</span>
        <a className='giris-modal-footer-a' href="url">Kaydol</a>
        </div>
        
      </Modal>

    </div>
  )
}
export default GirisModal;