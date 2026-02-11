# PartnerCounterpartyControllerApi

All URIs are relative to *http://localhost:8081*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllPartnerCounterpartyPage**](#getallpartnercounterpartypage) | **GET** /api/partner-counterparty | Lấy danh sách phân trang đối tác|

# **getAllPartnerCounterpartyPage**
> PartnerCounterpartyWrapper getAllPartnerCounterpartyPage()


### Example

```typescript
import {
    PartnerCounterpartyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PartnerCounterpartyControllerApi(configuration);

let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)

const { status, data } = await apiInstance.getAllPartnerCounterpartyPage(
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

**PartnerCounterpartyWrapper**

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

