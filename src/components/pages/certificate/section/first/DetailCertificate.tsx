import ReactDOM from 'react-dom';
import { elementHtmlSelect } from '../../../../../helpers/helpers';
import { BoxButton, BoxContent, ButtonClose, DetailCertificateStyles, IconClose, ImageSample } from '../../../../../styles/cert/detail_certificate';
import IconCloseCert from '../../../../../assets/icon/icon-close-cert.svg'
import { CertificateModalProps } from '../../../../../interface/certProps';
export default function DetailCertificate({imageCertificate, switchModalCertificate}:CertificateModalProps) {
    const modalCertHTML = document.getElementById('certificate');
  return ReactDOM.createPortal(
    <DetailCertificateStyles>
        <BoxContent>
            <BoxButton>
                <ButtonClose onClick={switchModalCertificate}>
                    <IconClose src={IconCloseCert}/>
                </ButtonClose>
            </BoxButton>
            <ImageSample src={imageCertificate}/>
        </BoxContent>
    </DetailCertificateStyles>,
    elementHtmlSelect(modalCertHTML,'certificate' )
  )
}
