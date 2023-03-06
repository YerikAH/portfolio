import ReactDOM from 'react-dom';
import { elementHtmlSelect } from '../../../../../helpers/helpers';
import { BoxButton, BoxContent, ButtonClose, DetailCertificateStyles, IconClose, ImageSample } from '../../../../../styles/cert/detail_certificate';

export default function DetailCertificate() {
    const modalCertHTML = document.getElementById('certificate');
  return ReactDOM.createPortal(
    <DetailCertificateStyles>
        <BoxContent>
            <BoxButton>
                <ButtonClose>
                    <IconClose src={}/>
                </ButtonClose>
            </BoxButton>
            <ImageSample src=""/>
        </BoxContent>
    </DetailCertificateStyles>,
    elementHtmlSelect(modalCertHTML,'certificate' )
  )
}
