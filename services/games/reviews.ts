import komoverseAxiosIns from '@/helper/headers';
import {
  DISLIKE_REVIEW,
  LIKE_REVIEW,
  REVIEW_GAME,
  REVIEW_INSERT,
} from '@/helper/url';
import { ReviewFormDto } from '@/types/game';

export const getListReviews = async (
  gameId: string,
  filter: string,
  sortyBy: string,
  page: number
) => {
  const params = `?sortBy=${sortyBy}&sort=desc&filter=${filter}&page=${page}`;
  const { data } = await komoverseAxiosIns.get(
    REVIEW_GAME.replace('{{game_id}}', gameId) + params
  );
  return data.data;
};

export const submitReview = async (gameId: string, query: ReviewFormDto) => {
  const params = `?game_id=${gameId}&ratting=${query.rating}&comment=${query.comment}`;
  const { data } = await komoverseAxiosIns.post(REVIEW_INSERT + params);
  return data.data;
};

export const likeReview = async (id: number) => {
  const { data } = await komoverseAxiosIns.post(
    LIKE_REVIEW.replace('{{game_review_id}}', id.toString())
  );
  return data.data;
};

export const disLikeReview = async (id: number) => {
  const { data } = await komoverseAxiosIns.post(
    DISLIKE_REVIEW.replace('{{game_review_id}}', id.toString())
  );
  return data.data;
};
