import { AcademyLevel } from '@/types/resources';
import { COLOR } from '@/utils/globalVariable';

export const colorLevel = (level: string) => {
  switch (level) {
    case AcademyLevel.BEGINNER:
    case AcademyLevel.INTERMEDIATE:
      return COLOR.baseGreen;
    default:
      return COLOR.baseColorOrange;
  }
};
