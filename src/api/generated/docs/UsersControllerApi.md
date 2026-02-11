# UsersControllerApi

All URIs are relative to *http://localhost:8081*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**me**](#me) | **GET** /api/user/me | |

# **me**
> UserInfoResponse me()


### Example

```typescript
import {
    UsersControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersControllerApi(configuration);

const { status, data } = await apiInstance.me();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserInfoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**500** | Internal Server Error |  -  |
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

