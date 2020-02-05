# README

## Algorithm

- Use a map to calculate balances between people.
- Use dfs to clear the balance for each account and calculate the minimal transactions.
  - For each dfs call
    - `findUnbalanced` finds the first unbalanced index.
    - If no unbalanced index, it means all debts are settled. So just return `nTransactions`.
    - If there is an unbalanced index, we create a transaction between unbalanced and rest of unbalanced.
    - After creating transaction, use another dfs call to calculate minimal transactions.
    - Finally we compare all return results and return the minimal.
- `if (balances[unbalanced] * balances[i] > 0) continue;` this is used to ensure that transaction is created only between positive one and negative one.
