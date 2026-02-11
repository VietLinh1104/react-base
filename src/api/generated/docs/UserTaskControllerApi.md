# UserTaskControllerApi

All URIs are relative to *http://localhost:8081*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllTasks**](#getalltasks) | **GET** /api/v1/user-tasks | Lấy danh sách giao dịch phân trang|
|[**getDetailTransactionByTaskKey**](#getdetailtransactionbytaskkey) | **GET** /api/v1/user-tasks/{taskKey} | Lấy chi tiết giao dịch taskKey|
|[**updateTransaction**](#updatetransaction) | **PUT** /api/v1/user-tasks/action/{taskKey}/{processStatus} | Hành động giao dịch|

# **getAllTasks**
> UserTaskWrapper getAllTasks()


### Example

```typescript
import {
    UserTaskControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserTaskControllerApi(configuration);

let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)
let state: 'CREATING' | 'CREATED' | 'ASSIGNING' | 'UPDATING' | 'COMPLETING' | 'COMPLETED' | 'CANCELING' | 'CANCELED' | 'FAILED' | 'UNKNOWN_ENUM_VALUE'; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAllTasks(
    page,
    pageSize,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **state** | [**&#39;CREATING&#39; | &#39;CREATED&#39; | &#39;ASSIGNING&#39; | &#39;UPDATING&#39; | &#39;COMPLETING&#39; | &#39;COMPLETED&#39; | &#39;CANCELING&#39; | &#39;CANCELED&#39; | &#39;FAILED&#39; | &#39;UNKNOWN_ENUM_VALUE&#39;**]**Array<&#39;CREATING&#39; &#124; &#39;CREATED&#39; &#124; &#39;ASSIGNING&#39; &#124; &#39;UPDATING&#39; &#124; &#39;COMPLETING&#39; &#124; &#39;COMPLETED&#39; &#124; &#39;CANCELING&#39; &#124; &#39;CANCELED&#39; &#124; &#39;FAILED&#39; &#124; &#39;UNKNOWN_ENUM_VALUE&#39;>** |  | (optional) defaults to undefined|


### Return type

**UserTaskWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**500** | Internal server error |  -  |
|**404** | Data not found |  -  |
|**200** | Successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDetailTransactionByTaskKey**
> UserTaskTransactionWrapper getDetailTransactionByTaskKey()


### Example

```typescript
import {
    UserTaskControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserTaskControllerApi(configuration);

let taskKey: number; // (default to undefined)

const { status, data } = await apiInstance.getDetailTransactionByTaskKey(
    taskKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskKey** | [**number**] |  | defaults to undefined|


### Return type

**UserTaskTransactionWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**500** | Internal server error |  -  |
|**404** | Data not found |  -  |
|**200** | Successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTransaction**
> MainInfoWrapper updateTransaction(transactionRequest)


### Example

```typescript
import {
    UserTaskControllerApi,
    Configuration,
    TransactionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserTaskControllerApi(configuration);

let taskKey: number; // (default to undefined)
let processStatus: 'EMP_CREATED' | 'EMP_DRAFT' | 'EMP_SUBMITED' | 'ACC_RECEPTED' | 'ACC_RETURN' | 'ACC_REJECTED' | 'ACC_APPROVED' | 'RD_RECEPTED' | 'RD_RETURN' | 'RD_ACCEPTED' | 'CANCELED'; // (default to undefined)
let transactionRequest: TransactionRequest; //

const { status, data } = await apiInstance.updateTransaction(
    taskKey,
    processStatus,
    transactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionRequest** | **TransactionRequest**|  | |
| **taskKey** | [**number**] |  | defaults to undefined|
| **processStatus** | [**&#39;EMP_CREATED&#39; | &#39;EMP_DRAFT&#39; | &#39;EMP_SUBMITED&#39; | &#39;ACC_RECEPTED&#39; | &#39;ACC_RETURN&#39; | &#39;ACC_REJECTED&#39; | &#39;ACC_APPROVED&#39; | &#39;RD_RECEPTED&#39; | &#39;RD_RETURN&#39; | &#39;RD_ACCEPTED&#39; | &#39;CANCELED&#39;**]**Array<&#39;EMP_CREATED&#39; &#124; &#39;EMP_DRAFT&#39; &#124; &#39;EMP_SUBMITED&#39; &#124; &#39;ACC_RECEPTED&#39; &#124; &#39;ACC_RETURN&#39; &#124; &#39;ACC_REJECTED&#39; &#124; &#39;ACC_APPROVED&#39; &#124; &#39;RD_RECEPTED&#39; &#124; &#39;RD_RETURN&#39; &#124; &#39;RD_ACCEPTED&#39; &#124; &#39;CANCELED&#39;>** |  | defaults to undefined|


### Return type

**MainInfoWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**500** | Internal server error |  -  |
|**404** | Data not found |  -  |
|**200** | Successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

