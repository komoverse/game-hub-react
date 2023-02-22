import { Box, Grid } from '@mui/material';

import LegalContainer from './LegalContainer';
import {
  StyledBodyText,
  StyledSubheading,
  StyledUnorderedList,
} from './styles';

const LegalPolicy = () => {
  return (
    <LegalContainer title="PRIVACY POLICY" updatedDate="March, 2022">
      <>
        <Grid container spacing={2} mt={4}>
          <Grid item md={4} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <StyledSubheading>1.</StyledSubheading>
              <StyledSubheading>
                DEFINITIONS AND INTERPRETATION
              </StyledSubheading>
            </Box>
          </Grid>
          <Grid item md={8} sx={{ textAlign: 'justify' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>1.1</StyledBodyText>
              <Box>
                <StyledBodyText>
                  In this Privacy Policy:“We”, “we”, “our”, “us”, “Us” means
                  Komoverse (Komodo Metaverse) and its related corporations.
                </StyledBodyText>
                <StyledBodyText>
                  “You”, “you”, “Your”, “your” means the persons to whom this
                  Privacy Policy applies.
                </StyledBodyText>
                <StyledBodyText>
                  “Personal Data” means any data which can be used to identify a
                  natural person.
                </StyledBodyText>
                <StyledBodyText>
                  “Service Providers” means our third-party publishers,
                  advertisers, vendors, business partners and contractors
                  whether former, current, or prospective.
                </StyledBodyText>
                <StyledBodyText>
                  “Services” means our products, services, content, features,
                  technologies or functions offered on websites, applications
                  and services operated by us or our Service Providers.
                </StyledBodyText>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item md={4} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <StyledSubheading>2.</StyledSubheading>
              <StyledSubheading>YOUR CONSENT</StyledSubheading>
            </Box>
          </Grid>
          <Grid item md={8} sx={{ textAlign: 'justify' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>2.1</StyledBodyText>
              <Box>
                <StyledBodyText>
                  This privacy policy applies to any individual’s personal data
                  which is in our possession or under our control, and shall
                  govern your use of the Services. This privacy policy is in
                  addition to the other terms and conditions which may apply in
                  respect of your use of such Services.
                </StyledBodyText>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>2.2</StyledBodyText>
              <Box>
                <StyledBodyText>
                  You are deemed to have accepted this privacy policy when you
                  provide us with personal data or otherwise sign up for, access
                  or use any of our Services.
                </StyledBodyText>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>2.3</StyledBodyText>
              <Box>
                <StyledBodyText>
                  Notwithstanding the foregoing, you may withdraw your consent
                  for us to collect, use or disclose your personal data, but
                  this may affect our ability to provide you with the Services.
                  We will not be liable for any failure to provide you with any
                  Services if such failure is due to your consent being
                  withdrawn or your personal data being erased at your written
                  request.
                </StyledBodyText>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item md={4} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <StyledSubheading>3.</StyledSubheading>
              <StyledSubheading>COLLECTION OF PERSONAL DATA</StyledSubheading>
            </Box>
          </Grid>
          <Grid item md={8} sx={{ textAlign: 'justify' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>3.1</StyledBodyText>
              <Box>
                <StyledBodyText>
                  We may from time to time collect your personal data in order
                  to provide you with the Services and also to improve your
                  experience. Such personal data may include: general
                  identification and contact information (for example, name,
                  address, email address, telephone number, age, date of birth,
                  gender, username, password, etc);
                </StyledBodyText>
                <StyledUnorderedList>
                  <li>
                    financial information and account details (for example, bank
                    account numbers, credit card numbers, assets, liabilities,
                    salary, etc);
                  </li>
                  <li>
                    information from cookies, pixel tags, web beacons and
                    similar technologies;
                  </li>
                  <li>
                    images, photographs, closed-circuit television (CCTV)
                    footage, voice recordings and electronic communications;
                  </li>
                  <li>
                    data about the pages you access, your Internet protocol
                    address, your device unique identifier, your device type,
                    your geo-location information, your mobile network
                    information, referral URL, statistics on page views, and
                    other information automatically sent to us by your device or
                    your service provider; and
                  </li>
                  <li>other information you may provide us with</li>
                </StyledUnorderedList>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>3.2</StyledBodyText>
              <Box>
                <StyledBodyText>
                  Your personal data may be collected:
                </StyledBodyText>
                <StyledUnorderedList>
                  <li>
                    automatically (for example, when your device or service
                    provider automatically sends us that data);
                  </li>
                  <li>
                    from you (for example, when you submit a web form to us, add
                    or update your account information, participate in
                    discussions, chats or dispute resolutions, or correspond
                    with us); and
                  </li>
                  <li>
                    from third parties (for example, from social media sites).
                  </li>
                </StyledUnorderedList>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item md={4} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <StyledSubheading>4.</StyledSubheading>
              <StyledSubheading>USE OF PERSONAL DATA</StyledSubheading>
            </Box>
          </Grid>
          <Grid item md={8} sx={{ textAlign: 'justify' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>4.1</StyledBodyText>
              <Box>
                <StyledBodyText>
                  Core Business Purpose. We may use your personal data to:
                </StyledBodyText>
                <StyledUnorderedList>
                  <li>
                    provide you with our Services; measure the performance of
                    our Services; monitor the Services provided by or made
                    available through us;
                  </li>
                  <li>
                    determine your geographic location, provide localized or
                    targeted content, provide you with customized or
                    personalized recommendations or content, determine your
                    Internet service provider, respond to any inquiries,
                    requests, queries or feedback; optimize our selection and
                    recommendation algorithms and delivery;
                  </li>
                  <li>
                    communicate with you (such as by email, text messaging,
                    online messaging, push notifications) to assist you with
                    operational requests such as password reset requests;
                  </li>
                  <li>verify your identity; conduct due diligence checks;</li>
                  <li>
                    prevent, detect and investigate fraud or other potentially
                    prohibited or illegal activities; to detect, prevent and
                    remediate any violations of our policies or terms and
                    conditions;
                  </li>
                  <li>
                    address or investigate any complaints, claims or disputes;
                  </li>
                  <li>handle requests for data access or correction;</li>
                  <li>
                    analyze and understand our users; improve our services
                    (including our user interface experiences); participate in
                    industry exercises and studies;
                  </li>
                  <li>
                    coach employees and Service Providers; monitor for quality
                    assurance;
                  </li>
                  <li>enforce any obligations owed to us;</li>
                  <li>seek professional advice, such as legal advice;</li>
                  <li>
                    prepare and maintain financial reporting, regulatory
                    reporting, management reporting, risk management, audit and
                    record keeping purposes;
                  </li>
                  <li>
                    enable any actual or proposed assignee, transferee,
                    participant or sub-participant of our rights, business or
                    obligations to evaluate any proposed transaction; negotiate
                    a business transaction, including (but not limited to) any
                    financing, merger, acquisition or liquidation;
                  </li>
                  <li>
                    manage our infrastructure and business operations (including
                    information technology infrastructure) and complying with
                    internal policies and procedures;
                  </li>
                  <li>
                    conduct due diligence enquiries and comply with enforcement
                    of tax, sanctions or prevention or detection of money
                    laundering, terrorism financing or other unlawful
                    activities;
                  </li>
                  <li>
                    comply with all applicable laws, regulations, rules,
                    directors, orders, instructions and requests from any
                    authorities (whether local or foreign), including any
                    regulatory, governmental, tax and law enforcement
                    authorities or other authorities; and
                  </li>
                  <li>
                    any other purpose specifically provided for in any
                    particular product or service offered by us or permitted or
                    required by law or the relevant authorities.
                  </li>
                </StyledUnorderedList>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>4.2</StyledBodyText>
              <Box>
                <StyledBodyText>
                  Marketing Purpose. We may also use your personal data to:
                </StyledBodyText>
                <StyledUnorderedList>
                  <li>
                    offer you our Services (such as special offers, promotions,
                    contests or entitlements that may be of interest to you or
                    for which you may be eligible), via various modes of
                    communication such as email, short message service (SMS) and
                    push notifications; and
                  </li>
                  <li>
                    improve and personalize the Services, content and
                    advertisements. If you do not wish to receive marketing
                    communications from us or to participate in our
                    advertisement personalization program, please advise us.
                  </li>
                </StyledUnorderedList>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item md={4} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <StyledSubheading>5.</StyledSubheading>
              <StyledSubheading>
                DISCLOSURE AND TRANSFER OF PERSONAL DATA
              </StyledSubheading>
            </Box>
          </Grid>
          <Grid item md={8} sx={{ textAlign: 'justify' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>5.1</StyledBodyText>
              <Box>
                <StyledBodyText>
                  We may from time to time disclose your personal data to any of
                  our employees, personnel, our Service Providers or to third
                  parties, whether located in Singapore or elsewhere, in order
                  to carry out the purposes set out above. When we disclose your
                  personal data to such persons, we will require that they also
                  comply with this Privacy Policy.
                </StyledBodyText>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>5.2</StyledBodyText>
              <Box>
                <StyledBodyText>
                  We may transfer, store, process and/or deal with your personal
                  data in compliance with applicable data protection or privacy
                  laws.
                </StyledBodyText>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item md={4} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <StyledSubheading>6.</StyledSubheading>
              <StyledSubheading>RETENTION</StyledSubheading>
            </Box>
          </Grid>
          <Grid item md={8} sx={{ textAlign: 'justify' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>6.1</StyledBodyText>
              <Box>
                <StyledBodyText>
                  Your personal data is retained for so long as the purpose for
                  which it was collected remains and until it is no longer
                  necessary for any other legal or business purposes.
                </StyledBodyText>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item md={4} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <StyledSubheading>7.</StyledSubheading>
              <StyledSubheading>ACCESS AND CORRECTION</StyledSubheading>
            </Box>
          </Grid>
          <Grid item md={8} sx={{ textAlign: 'justify' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>7.1</StyledBodyText>
              <Box>
                <StyledBodyText>
                  You may request access or make corrections to your personal
                  data held by us, but we may charge a fee for processing your
                  request for access.
                </StyledBodyText>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>6.2</StyledBodyText>
              <Box>
                <StyledBodyText>
                  If you believe that any personal data we have of yours is
                  inaccurate, incomplete or out of date, please advise us. We
                  will endeavour to respond within a reasonable time and, where
                  necessary, promptly correct any personal data found to be
                  inaccurate, incomplete or out of date.
                </StyledBodyText>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item md={4} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <StyledSubheading>8.</StyledSubheading>
              <StyledSubheading>
                COOKIES AND RELATED TECHNOLOGIES
              </StyledSubheading>
            </Box>
          </Grid>
          <Grid item md={8} sx={{ textAlign: 'justify' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>8.1</StyledBodyText>
              <Box>
                <StyledBodyText>
                  When you access or use our Services, we may store some data on
                  your device using technologies such as a cookie or other local
                  storage provided by your browser or application (collectively,
                  the “Cookies”). Such data is stored on your device to enable
                  us to
                </StyledBodyText>
                <StyledUnorderedList sx={{ listStyleType: 'lower-roman' }}>
                  <li>provide the Services;</li>
                  <li>recognise, identify or authenticate you;</li>
                  <li>customise our Services for you;</li>
                  <li>provide advertising;</li>
                  <li>provide our measurements and reporting; and</li>
                  <li>fulfil the other purposes set out above.</li>
                </StyledUnorderedList>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>8.2</StyledBodyText>
              <Box>
                <StyledBodyText>
                  You are free to decline or block our Cookies (insofar as your
                  browser or application permits), but this may interfere with
                  the provision of our Services and you may not be able to use
                  certain features or functions of our Services. We will not be
                  liable for any failure to provide any Services to you if such
                  failure is due to our Cookies being declined or blocked.
                </StyledBodyText>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>8.3</StyledBodyText>
              <Box>
                <StyledBodyText>
                  We may also use other technologies (such as a pixel tag or web
                  beacon) for the purposes set out above.
                </StyledBodyText>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item md={4} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <StyledSubheading>9.</StyledSubheading>
              <StyledSubheading>
                CHANGES TO THIS PRIVACY POLICY
              </StyledSubheading>
            </Box>
          </Grid>
          <Grid item md={8} sx={{ textAlign: 'justify' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>9.1</StyledBodyText>
              <Box>
                <StyledBodyText>
                  We may from time to time amend this Privacy Policy by posting
                  a revised version of this Privacy Policy on our Site. We will
                  provide you with notice on the Site or via email. The revised
                  version shall take effect from the published effective date.
                  If you continue to use our Services after the notice period,
                  you will be deemed to have consented to the amendments made in
                  such revised version.
                </StyledBodyText>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item md={4} sx={{ textAlign: 'left' }}>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <StyledSubheading>10.</StyledSubheading>
              <StyledSubheading>CONTACT US</StyledSubheading>
            </Box>
          </Grid>
          <Grid item md={8} sx={{ textAlign: 'justify' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <StyledBodyText>10.1</StyledBodyText>
              <Box>
                <StyledBodyText>
                  For any questions or notice regarding your personal data,
                  please contact our data protection officer at
                  contact@komoverse.io
                </StyledBodyText>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </>
    </LegalContainer>
  );
};

export default LegalPolicy;
