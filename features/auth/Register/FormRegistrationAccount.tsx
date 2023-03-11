import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { recaptchaSiteKey } from '@/helper/env';
import useRegistrationAccount from './hooks/useRegistrationAccount';
import { RegistrationCustomInput } from './InputForm/styles';
import RegistrationInput from './InputForm/RegistrationInput';
import RegistrationSelect from './InputForm/RegistrationSelect';

const FormRegistrationAccount = () => {
  const {
    submit,
    register,
    isSubmitting,
    errors,
    getValues,
    isValid,
    recaptchaRef,
    isRecaptchaValid,
    onValidateRecaptcha,
    onExpiredRecaptcha,
  } = useRegistrationAccount();

  const isFormValid = isValid && isRecaptchaValid;

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Image
        src="/logo.svg"
        alt="komoverse-logo"
        height={66}
        width={138}
        priority={true}
      />
      <Typography variant="h4" fontSize={28} fontWeight={500}>
        REGISTER
      </Typography>

      <form onSubmit={submit}>
        <RegistrationInput
          id="komo_username"
          label="Username"
          helper="6-30 characters. Accept only alphanumeric, dot (.), underscore (_)"
          error={errors['komo_username']}
        >
          <RegistrationCustomInput {...register('komo_username')} />
        </RegistrationInput>
        <RegistrationInput id="email" label="Email" error={errors['email']}>
          <RegistrationCustomInput {...register('email')} />
        </RegistrationInput>

        <RegistrationInput
          id="password"
          label="Password"
          error={errors['password']}
        >
          <RegistrationCustomInput type="password" {...register('password')} />
        </RegistrationInput>

        <RegistrationInput
          id="confirm_password"
          label="Confirm Password"
          error={errors['confirm_password']}
        >
          <RegistrationCustomInput
            type="password"
            {...register('confirm_password')}
          />
        </RegistrationInput>

        <RegistrationInput
          id="country_code"
          label="Country"
          error={errors['country_code']}
        >
          <RegistrationSelect
            input={<RegistrationCustomInput {...register('country_code')} />}
          />
        </RegistrationInput>

        <Box sx={{ marginTop: '16px' }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey}
            onChange={onValidateRecaptcha}
            onExpired={onExpiredRecaptcha}
          />
        </Box>
        <Box>
          <FormControlLabel
            id="is_agree_to_policy"
            control={<Checkbox {...register('is_agree_to_policy')} />}
            label={
              <Typography variant="body2" fontSize={12}>
                I agree to Privacy{' '}
                <Link href="/term-of-use" target="_blank">
                  Policy
                </Link>{' '}
                and{' '}
                <Link href="/policy" target="_blank">
                  Terms of Use
                </Link>
              </Typography>
            }
          />
          <FormControlLabel
            id="game_newsletter_subscribe"
            control={<Checkbox {...register('game_newsletter_subscribe')} />}
            label={
              <Typography variant="body2" fontSize={12}>
                Subscribe to Game Patch and Announcement Mailing List
              </Typography>
            }
          />
        </Box>
        <LoadingButton
          type="submit"
          variant="contained"
          size="medium"
          fullWidth
          disabled={!isFormValid}
          loading={isSubmitting}
          sx={{
            marginTop: '8px',
            color: '#fff',
            background:
              'radial-gradient(293.74% 1431.43% at -18.64% -62.88%, #99EC13 0%, #088F2E 63.54%, #054D19 100%)',
            borderRadius: 2,
          }}
        >
          Register
        </LoadingButton>
      </form>
    </Box>
  );
};

export default FormRegistrationAccount;
