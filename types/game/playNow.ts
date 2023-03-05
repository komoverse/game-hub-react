type TGameOsType =
  | 'webGL'
  | 'windows_x86'
  | 'windows_x64'
  | 'windows_any'
  | 'linux_deb'
  | 'linux_rpm'
  | 'linux_source'
  | 'macOS'
  | 'android_apk'
  | 'google_play_store'
  | 'xbox_game_store'
  | 'playstation_store'
  | 'nintendo_store'
  | 'external_url';

export interface IPlayNow {
  id: number;
  game_id: string;
  type: TGameOsType;
  value: string;
  created_at: string;
  updated_at: string;
}
