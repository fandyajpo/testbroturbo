import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const BackendFetch = async (url: string, r: AxiosRequestConfig) => {
  axios.defaults.withCredentials = true;
  try {
    const rr = await axios(url, r);
    return {
      status: true,
      data: rr.data,
      statusText: rr,
      code: rr.status,
    };
  } catch (e) {
    if (e instanceof AxiosError) {
      return {
        status: false,
        data: e.response?.data?.message?.data,
        config: e.config,
        code: e.response,
      };
    }
    return { status: false, data: e };
  }
};

export const NextFetch = async (url: string, r: AxiosRequestConfig) => {
  axios.defaults.withCredentials = true;
  try {
    const rr = await axios(url, r);
    return {
      status: true,
      data: rr.data,
      statusText: rr,
      code: rr.status,
    };
  } catch (e) {
    if (e instanceof AxiosError) {
      return {
        status: false,
        data: e.response?.data?.message?.data,
        config: e.config,
        code: e.response,
      };
    }
    return { status: false, data: e };
  }
};
