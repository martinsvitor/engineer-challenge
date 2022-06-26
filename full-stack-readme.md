# Full Stack engineer challenge

You need to implement both the frontend and backend for the following user story. Please, make sure all of the acceptance criteria are met.

## User story

### As a user, I want to be able to view the content of a policy, search and filter policies by their data.

- When a filter is applied, I want to see the filtered information on the same table.
- When a filter is applied, I want to be able to clear the current filter, this action will display the original information.
- I should be able to see and filter the policy's family members information.

### Acceptance criteria

- Show only ACTIVE and PENDING policies. // Done
- Do not display any results if there are no matches. // Done
- The name search should return results matching the name of the customer or any of their family members. // Done
- The family members should be stored on a separate table that is linked to the policy. // Done
- Clearing the search should return the table to its original state. // Done
