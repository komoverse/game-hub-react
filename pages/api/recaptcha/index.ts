// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { recaptchaSecretKey } from '@/helper/env';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
};

const recaptchaApi = 'https://www.google.com/recaptcha/api/siteverify?';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const body = req.body;
    const { data } = await axios.post(
      `${recaptchaApi}secret=${recaptchaSecretKey}&response=${body.token}`
    );

    if (data.success) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ success: false });
  }
}
