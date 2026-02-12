// src/api/index.ts
import axiosInstance from "@/lib/axios";
import { apiConfig } from "./config";

import {
    CostCenterControllerApi,
    DepartmentsControllerApi,
    PartnerCounterpartyControllerApi,
    TransactionControllerApi,
    AuthControllerApi,
    UsersControllerApi,
    DdlControllerApi,
    ProcessControllerApi,
    UserTaskControllerApi,
    AttachmentManagementApi
} from "@/api/generated/api";

export const attachmentApi = new AttachmentManagementApi(
    apiConfig,
    undefined,
    axiosInstance
);

export const processApi = new ProcessControllerApi(
    apiConfig,
    undefined,
    axiosInstance
);

export const userTaskApi = new UserTaskControllerApi(
    apiConfig,
    undefined,
    axiosInstance
);

export const ddlApi = new DdlControllerApi(
    apiConfig,
    undefined,
    axiosInstance
);

export const costCenterApi = new CostCenterControllerApi(
    apiConfig,
    undefined,
    axiosInstance
);

export const usersApi = new UsersControllerApi(
    apiConfig,
    undefined,
    axiosInstance
);

export const authApi = new AuthControllerApi(
    apiConfig,
    undefined,
    axiosInstance
);

export const departmentApi = new DepartmentsControllerApi(
    apiConfig,
    undefined,
    axiosInstance
);

export const partnerApi = new PartnerCounterpartyControllerApi(
    apiConfig,
    undefined,
    axiosInstance
);

export const transactionApi = new TransactionControllerApi(
    apiConfig,
    undefined,
    axiosInstance
);
