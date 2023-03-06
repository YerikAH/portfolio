import ReactDOM from 'react-dom';
import { elementHtmlSelect } from '../../../../../helpers/helpers';
import { BoxButton, BoxContent, ButtonClose, DetailCertificateStyles, ImageSample } from '../../../../../styles/cert/detail_certificate';
import { CertificateModalProps } from '../../../../../interface/certProps';
import IconCloseCert from '../../../../images/IconCloseCert';
export default function DetailCertificate({imageCertificate, switchModalCertificate}:CertificateModalProps) {
    const modalCertHTML = document.getElementById('certificate');
  return ReactDOM.createPortal(
    <DetailCertificateStyles>
        <BoxContent>
            <BoxButton>
                <ButtonClose onClick={switchModalCertificate}>
                    <IconCloseCert/>
                </ButtonClose>
            </BoxButton>
            <ImageSample src={imageCertificate}/>
        </BoxContent>
    </DetailCertificateStyles>,
    elementHtmlSelect(modalCertHTML,'certificate' )
  )
}
