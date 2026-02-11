# AttachmentManagementApi

All URIs are relative to *http://localhost:8081*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAttachment**](#createattachment) | **POST** /api/attachments | Tạo mới attachment|
|[**deleteAttachment**](#deleteattachment) | **DELETE** /api/attachments/{id} | Xóa vĩnh viễn attachment|
|[**deleteSmart**](#deletesmart) | **DELETE** /api/attachments/{id}/smart | Xóa thông minh (Smart Delete)|
|[**getAllAttachments**](#getallattachments) | **GET** /api/attachments | Danh sách attachment phân trang|
|[**getAttachmentsByEntity**](#getattachmentsbyentity) | **GET** /api/attachments/entity/{entityId} | Lấy attachment theo thực thể|
|[**linkAttachmentToEntity**](#linkattachmenttoentity) | **POST** /api/attachments/{id}/link | Gán attachment vào thực thể|
|[**unlinkAttachment**](#unlinkattachment) | **DELETE** /api/attachments/{id}/link | Xóa liên kết|

# **createAttachment**
> AttachmentWrapper createAttachment(attachmentRequest)

Lưu thông tin file và có thể liên kết ngay với một entity

### Example

```typescript
import {
    AttachmentManagementApi,
    Configuration,
    AttachmentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentManagementApi(configuration);

let attachmentRequest: AttachmentRequest; //

const { status, data } = await apiInstance.createAttachment(
    attachmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentRequest** | **AttachmentRequest**|  | |


### Return type

**AttachmentWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**500** | Internal Server Error |  -  |
|**200** | Thành công |  -  |
|**400** | Dữ liệu đầu vào không hợp lệ |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAttachment**
> deleteAttachment()


### Example

```typescript
import {
    AttachmentManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentManagementApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAttachment(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**500** | Internal Server Error |  -  |
|**200** | Xóa thành công |  -  |
|**409** | Xung đột: File đang được sử dụng ở nơi khác |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSmart**
> deleteSmart()


### Example

```typescript
import {
    AttachmentManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentManagementApi(configuration);

let id: string; // (default to undefined)
let entityId: string; // (default to undefined)
let entityType: 'attachments' | 'cost_center' | 'departments' | 'entity_attachments' | 'partner_counterparty' | 'partner_type' | 'transaction_type' | 'transactions' | 'users'; // (default to undefined)

const { status, data } = await apiInstance.deleteSmart(
    id,
    entityId,
    entityType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|
| **entityType** | [**&#39;attachments&#39; | &#39;cost_center&#39; | &#39;departments&#39; | &#39;entity_attachments&#39; | &#39;partner_counterparty&#39; | &#39;partner_type&#39; | &#39;transaction_type&#39; | &#39;transactions&#39; | &#39;users&#39;**]**Array<&#39;attachments&#39; &#124; &#39;cost_center&#39; &#124; &#39;departments&#39; &#124; &#39;entity_attachments&#39; &#124; &#39;partner_counterparty&#39; &#124; &#39;partner_type&#39; &#124; &#39;transaction_type&#39; &#124; &#39;transactions&#39; &#124; &#39;users&#39;>** |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**500** | Internal Server Error |  -  |
|**200** | Xử lý thành công |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllAttachments**
> ListPageAttachmentWrapper getAllAttachments()

Lấy toàn bộ file đính kèm trên hệ thống

### Example

```typescript
import {
    AttachmentManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentManagementApi(configuration);

let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)

const { status, data } = await apiInstance.getAllAttachments(
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

**ListPageAttachmentWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**500** | Internal Server Error |  -  |
|**200** | Thành công |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAttachmentsByEntity**
> ListAttachmentWrapper getAttachmentsByEntity()


### Example

```typescript
import {
    AttachmentManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentManagementApi(configuration);

let entityId: string; // (default to undefined)
let entityType: 'attachments' | 'cost_center' | 'departments' | 'entity_attachments' | 'partner_counterparty' | 'partner_type' | 'transaction_type' | 'transactions' | 'users'; // (default to undefined)

const { status, data } = await apiInstance.getAttachmentsByEntity(
    entityId,
    entityType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|
| **entityType** | [**&#39;attachments&#39; | &#39;cost_center&#39; | &#39;departments&#39; | &#39;entity_attachments&#39; | &#39;partner_counterparty&#39; | &#39;partner_type&#39; | &#39;transaction_type&#39; | &#39;transactions&#39; | &#39;users&#39;**]**Array<&#39;attachments&#39; &#124; &#39;cost_center&#39; &#124; &#39;departments&#39; &#124; &#39;entity_attachments&#39; &#124; &#39;partner_counterparty&#39; &#124; &#39;partner_type&#39; &#124; &#39;transaction_type&#39; &#124; &#39;transactions&#39; &#124; &#39;users&#39;>** |  | defaults to undefined|


### Return type

**ListAttachmentWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**500** | Internal Server Error |  -  |
|**200** | Thành công |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **linkAttachmentToEntity**
> AttachmentWrapper linkAttachmentToEntity()


### Example

```typescript
import {
    AttachmentManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentManagementApi(configuration);

let id: string; // (default to undefined)
let entityType: 'attachments' | 'cost_center' | 'departments' | 'entity_attachments' | 'partner_counterparty' | 'partner_type' | 'transaction_type' | 'transactions' | 'users'; // (default to undefined)
let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.linkAttachmentToEntity(
    id,
    entityType,
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **entityType** | [**&#39;attachments&#39; | &#39;cost_center&#39; | &#39;departments&#39; | &#39;entity_attachments&#39; | &#39;partner_counterparty&#39; | &#39;partner_type&#39; | &#39;transaction_type&#39; | &#39;transactions&#39; | &#39;users&#39;**]**Array<&#39;attachments&#39; &#124; &#39;cost_center&#39; &#124; &#39;departments&#39; &#124; &#39;entity_attachments&#39; &#124; &#39;partner_counterparty&#39; &#124; &#39;partner_type&#39; &#124; &#39;transaction_type&#39; &#124; &#39;transactions&#39; &#124; &#39;users&#39;>** |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**AttachmentWrapper**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**500** | Internal Server Error |  -  |
|**200** | Gán thành công |  -  |
|**404** | Không tìm thấy Attachment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlinkAttachment**
> unlinkAttachment()


### Example

```typescript
import {
    AttachmentManagementApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentManagementApi(configuration);

let id: string; // (default to undefined)
let entityId: string; // (default to undefined)
let entityType: 'attachments' | 'cost_center' | 'departments' | 'entity_attachments' | 'partner_counterparty' | 'partner_type' | 'transaction_type' | 'transactions' | 'users'; // (default to undefined)

const { status, data } = await apiInstance.unlinkAttachment(
    id,
    entityId,
    entityType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **entityId** | [**string**] |  | defaults to undefined|
| **entityType** | [**&#39;attachments&#39; | &#39;cost_center&#39; | &#39;departments&#39; | &#39;entity_attachments&#39; | &#39;partner_counterparty&#39; | &#39;partner_type&#39; | &#39;transaction_type&#39; | &#39;transactions&#39; | &#39;users&#39;**]**Array<&#39;attachments&#39; &#124; &#39;cost_center&#39; &#124; &#39;departments&#39; &#124; &#39;entity_attachments&#39; &#124; &#39;partner_counterparty&#39; &#124; &#39;partner_type&#39; &#124; &#39;transaction_type&#39; &#124; &#39;transactions&#39; &#124; &#39;users&#39;>** |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**500** | Internal Server Error |  -  |
|**200** | Xóa liên kết thành công |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

