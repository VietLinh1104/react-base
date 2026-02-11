# DdlControllerApi

All URIs are relative to *http://localhost:8081*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDDLTransactionDetail**](#getddltransactiondetail) | **GET** /api/ddl | Lấy danh sách DDL giao dịch|

# **getDDLTransactionDetail**
> DDLWrapper getDDLTransactionDetail()


### Example

```typescript
import {
    DdlControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DdlControllerApi(configuration);

const { status, data } = await apiInstance.getDDLTransactionDetail();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**DDLWrapper**

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

