// const windowAuthProvider = (url: string) => {
//   const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
//   const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

//   const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
//   const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

//   const systemZoom = width / window.screen.availWidth;
//   const left = (width - 378) / 2 / systemZoom + dualScreenLeft
//   const top = (height - 600) / 2 / systemZoom + dualScreenTop

//   let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=378,height=570,left=${left},top=${top}`;
//   window.open(url, 'Komoverse Wallet', params)
// }

export const chooseLoginSocmed = () => {
  // const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  // const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
  // const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  // const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  // const systemZoom = width / window.screen.availWidth;
  // const left = (width - 378) / 2 / systemZoom + dualScreenLeft
  // const top = (height - 600) / 2 / systemZoom + dualScreenTop
  // let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=378,height=600,left=${left},top=${top}`;
  // window.open('/signin', 'Komoverse Wallet', params)
  // Router.push('/signin');
  // actionModalAuth.setModalAuth({ visible: false });
};
