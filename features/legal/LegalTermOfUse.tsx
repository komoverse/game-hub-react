import Box from '@mui/material/Box';

import LegalContainer from './LegalContainer';
import {
  StyledBodyText,
  StyledSubheading,
  StyledUnorderedList,
} from './styles';

const LegalTermOfUse = () => {
  return (
    <LegalContainer title="TERMS OF USE" updatedDate="March, 2022">
      <>
        <Box sx={{ textAlign: 'justify' }} mt={4}>
          <StyledBodyText>
            Please read these terms of use carefully before accessing or using
            the Services as defined below or the Site as defined below. By
            accessing or using the Site or the Services, you are deemed to have
            read, understood, and accepted all of the terms and conditions
            contained in these terms of use and all other documents referenced
            herein. If you do not agree to the terms that follow hereafter,
            please do not access the Site or use the Services contained herein.
          </StyledBodyText>

          <StyledBodyText>
            These terms of use are between PT Komodo Legends Interaktif (KOML),
            a company incorporated in Indonesia, and you. References to “KOML”
            “we,” “our” or “us” are to KOML and references to “you” or “your“
            are to the person with whom KOML enters into these terms of use.
          </StyledBodyText>

          <StyledBodyText>
            You are prohibited from signing up for an account or using the Site
            as defined below or using the Services as defined below, if you are
            a citizen, national or resident, or located in, incorporated in, or
            otherwise organized, established in or under the control of:
          </StyledBodyText>
          <StyledUnorderedList sx={{ listStyleType: 'lower-roman' }}>
            <li>
              Balkans, Belarus, Burma, Cote D’Ivoire (Ivory Coast), Cuba,
              Democratic Republic of Congo, Iran, Iraq, Liberia, Myanmar, North
              Korea, South Sudan, Sudan, Syria, Zimbabwe;
            </li>
            <li>
              any State, country or other jurisdiction that is embargoed by the
              United States of America;
            </li>
            <li>
              any State, country or other jurisdiction where it would be illegal
              according to applicable law for you, by reason of your
              nationality, domicile, citizenship, residence or otherwise, to
              access or use the Services; or
            </li>
            <li>
              any State, country or other jurisdiction where the publication or
              availability of the Services is prohibited or contrary to local
              law or regulation, or could subject KOML to local registration or
              licensing requirements (together, the “restricted jurisdictions”).
            </li>
          </StyledUnorderedList>
          <StyledBodyText>
            KOML may, at its sole discretion, implement controls to restrict
            access to the Services in any of the restricted jurisdictions. If
            KOML determines that you are accessing the Services from any
            restricted jurisdiction, or have provided false representations as
            to your location, place of incorporation, establishment, citizenship
            or place of residence, KOML reserves the right to immediately close
            your account and liquidate any open positions.
          </StyledBodyText>
          <StyledBodyText>
            You acknowledge and agree that you are aware of the risks associated
            with transactions of digital assets and that you shall assume all
            risks related to the use of KOML’s Services and transactions of
            digital assets. KOML shall not be liable for any such risks or
            adverse outcomes that ensue.
          </StyledBodyText>
          <StyledBodyText>
            By accessing or using KOML’s Services in any way, you acknowledge
            that you accept and agree to be bound by these terms of use. If you
            do not agree, then do not access KOML’s Site or use KOML’s Services.
          </StyledBodyText>
        </Box>
      </>
    </LegalContainer>
  );
};

export default LegalTermOfUse;
