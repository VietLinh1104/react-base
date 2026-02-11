# ProcessInstanceEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **number** |  | [optional] [default to undefined]
**tags** | **Set&lt;string&gt;** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**processInstanceKey** | **number** |  | [optional] [default to undefined]
**processDefinitionKey** | **number** |  | [optional] [default to undefined]
**bpmnProcessId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ProcessInstanceEvent } from './api';

const instance: ProcessInstanceEvent = {
    version,
    tags,
    tenantId,
    processInstanceKey,
    processDefinitionKey,
    bpmnProcessId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
