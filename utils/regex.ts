export const regexUrlValidation =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
export const regexImageFileValidation = /\.(gif|jpg|jpeg|tiff|png|webp)$/i;
export const komoAccountUsernameValidation =
  /^(?=.{6,30}$)(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$/i;
export const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
