import axios, { AxiosInstance } from "axios";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export const _axios: AxiosInstance = axios.create({
  baseURL,
});

_axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

_axios.interceptors.request.use(
  (request) => {
    request.headers["x-api-key"] = "SANN_BOOKS";

    if (request.headers) {
      request.headers["x-api-key"] = "SANN_BOOKS";
      // const token = _AuthApi.getToken();

      // if (token) {
      //   request.headers.Authorization = `Bearer ${token}`;
      // }

      if (
        !(request.data instanceof FormData) &&
        !request.headers["Content-Type"]
      ) {
        request.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
    }

    return request;
  },
  (error) => Promise.reject(error)
);

_axios.interceptors.response.use(
  function (response) {
    if (response?.config?.url?.includes("/auth/check-email")) {
      return response;
    }

    // Skip success toast for specific route
    if (
      response?.config?.url?.includes(
        "/settings/columns-order/categories/title"
      )
    ) {
      return response;
    }

    const url = response?.config?.url;

    switch (response?.config?.method) {
      case "post":
      case "put":
      case "patch":
      case "delete":
        if (url !== "/settings/users/lang/change") {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: { position: "fixed", zIndex: 100000 },
          });
        }
        break;
      default:
        break;
    }

    return response;
  },
  function (error) {
    if (
      error.response?.status === 403 &&
      error.response?.data?.message === "Subscription Expired"
    ) {
      return Promise.reject(error);
    }

    // Skip error toast for specific 500 error message
    if (
      error.response?.status === 500 &&
      error.response?.data?.message ===
        "No query results for model [App\\Models\\ColumnOrder]."
    ) {
      return Promise.reject(error);
    }

    switch (error?.response?.status) {
      case 404:
      case 409:
        toast.error(
          error.response?.data?.message || "An unexpected error occurred",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        break;
      case 500:
        // General 500 error handling (excluding the specific case above)
        if (
          error.response?.data?.message !==
          "No query results for model [App\\Models\\ColumnOrder]."
        ) {
          toast.error(
            error.response?.data?.message || "An unexpected error occurred",
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
        break;
      case 400:
      case 422:
        if (!error?.response?.data) {
          toast.error("An unexpected error occurred. Please try again later");
        } else if (
          error.response.data.errors &&
          typeof error.response.data.errors === "object"
        ) {
          Object.values(error.response.data.errors).forEach(
            (errorMessages: any) => {
              if (Array.isArray(errorMessages)) {
                errorMessages.forEach((errorMessage) => {
                  toast.error(`${errorMessage}`);
                });
              } else {
                toast.error(`${errorMessages}`);
              }
            }
          );
        } else if (typeof error.response.data.message === "string") {
          toast.error(`${error.response.data.message}`);
        }
        break;
      case 401:
        // _AuthApi.destroyToken();

        const message = error?.response?.data?.message;

        toast.error(message || "Unauthorized", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        if (message !== "Invalid credentials") {
          window.location.pathname = "/";
        }
        break;
      case 403:
        const apiMessage = error?.response?.data?.message;
        const nativeMessage = error?.message;

        if (apiMessage === "Two-Factor Authentication is not enabled") {
          break;
        }

        toast.error(apiMessage || nativeMessage || "Forbidden", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        break;
      default:
        toast.error(
          error.response?.data?.message || "An unexpected error occurred",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        break;
    }
    return Promise.reject(error);
  }
);
