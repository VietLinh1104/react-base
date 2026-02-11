# TransactionControllerApi

All URIs are relative to *http://localhost:8081*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTransaction**](#createtransaction) | **POST** /api/transaction | Khởi tạo giao dịch|
|[**getAllTransactions**](#getalltransactions) | **GET** /api/transaction | Lấy danh sách giao dịch phân trang|
|[**getDetailTransactionById**](#getdetailtransactionbyid) | **GET** /api/transaction/{id} | Lấy chi tiết giao dịch|
|[**updateTransaction1**](#updatetransaction1) | **PUT** /api/transaction/{id} | Cập nhật giao dịch|

# **createTransaction**
> MainInfoWrapper createTransaction(createTransactionRequest)


### Example

```typescript
import {
    TransactionControllerApi,
    Configuration,
    CreateTransactionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionControllerApi(configuration);

let createTransactionRequest: CreateTransactionRequest; //

const { status, data } = await apiInstance.createTransaction(
    createTransactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTransactionRequest** | **CreateTransactionRequest**|  | |


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

# **getAllTransactions**
> ListTransactionWrapper getAllTransactions()


### Example

```typescript
import {
    TransactionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionControllerApi(configuration);

let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)

const { status, data } = await apiInstance.getAllTransactions(
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 10|


### Return type

**ListTransactionWrapper**

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

# **getDetailTransactionById**
> TransactionsWrapper getDetailTransactionById()


### Example

```typescript
import {
    TransactionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getDetailTransactionById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TransactionsWrapper**

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

# **updateTransaction1**
> MainInfoWrapper updateTransaction1(transactionRequest)


### Example

```typescript
import {
    TransactionControllerApi,
    Configuration,
    TransactionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TransactionControllerApi(configuration);

let id: string; // (default to undefined)
let transactionRequest: TransactionRequest; //

const { status, data } = await apiInstance.updateTransaction1(
    id,
    transactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionRequest** | **TransactionRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


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

