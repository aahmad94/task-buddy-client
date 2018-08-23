export const BASE_URL = "http://39d0984f.ngrok.io";
export const AUTH_HEADER = {
  'headers': {
    "Authorization": localStorage.getItem("_sms_app_session")
  }
};