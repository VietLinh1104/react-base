# ProcessControllerApi

All URIs are relative to *http://localhost:8081*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**startProcess**](#startprocess) | **POST** /process/create-transaction | Khởi tạo giao dịch|

# **startProcess**
> ProcessInstanceEventWrapper startProcess(createTransactionRequest)


### Example

```typescript
import {
    ProcessControllerApi,
    Configuration,
    CreateTransactionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProcessControllerApi(configuration);

let createTransactionRequest: CreateTransactionRequest; //

const { status, data } = await apiInstance.startProcess(
    createTransactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTransactionRequest** | **CreateTransactionRequest**|  | |


### Return type

**ProcessInstanceEventWrapper**

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

