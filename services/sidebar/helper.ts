import { ISidebarMenuItem } from '@/types/general';

export const dataTransformer = (data: any): ISidebarMenuItem[] => {
  if (!data) {
    return [];
  }

  return Object.keys(data).map((key) => {
    return {
      header: key,
      items: data[key].map((item: any) => {
        return {
          title: item.game_name,
          image: item.logo_image_url,
          url: item.game_id,
          startTime: item.start_time || item.mint_start_date,
          endTime: item.end_time || item.mint_end_date,
          ...item,
        };
      }),
    };
  });
};
