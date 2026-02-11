# UserTaskResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskKey** | **number** |  | [optional] [default to undefined]
**taskName** | **string** |  | [optional] [default to undefined]
**taskDefinitionId** | **string** |  | [optional] [default to undefined]
**processDefinitionKey** | **number** |  | [optional] [default to undefined]
**processInstanceKey** | **number** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**assignee** | **string** |  | [optional] [default to undefined]
**transaction** | [**TransactionResponse**](TransactionResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserTaskResponse } from './api';

const instance: UserTaskResponse = {
    taskKey,
    taskName,
    taskDefinitionId,
    processDefinitionKey,
    processInstanceKey,
    state,
    assignee,
    transaction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
