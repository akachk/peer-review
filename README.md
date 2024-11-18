# **Code Review Practice Project**

Welcome to the **Code Review Practice Project**! This repository is designed to assess and practice code review skills,
focusing on technical accuracy, collaboration, and constructive feedback.

---

## **Style Guide**

To ensure code consistency and maintainability, adhere to the following coding standards.

### **1. General Code Standards**

- **Readability**: Write code that is easy to understand. Use meaningful names for components, props, and functions.
- **Modularity**: Split logic into small, reusable components or hooks.
- **Comments**: Use comments sparingly to explain "why" rather than "what."
- **Formatting**: Ensure proper indentation and consistent formatting using tools like `Prettier` and `ESLint`.

### **2. Naming Conventions**

- **Variables and Constants**:
    - Use `camelCase` for variables and functions.
    - Use `PascalCase` for components.
    - Use `UPPER_SNAKE_CASE` for constants.

```tsx
const MAX_ITEMS = 100;
const userId = 42;

function fetchUserData(userId: number): Promise<User> {
  return api.get(`/users/${userId}`);
}
```

- **File Names**:
    - Use `camelCase` for filenames and directories.
    - Use `PascalCase` for components filenames and directories.

### **3. Component Structure**

- **Logic components**: Focus on managing state, data fetching, and business logic. They should not include UI-related
  code.
- **View components**: Responsible only for rendering the UI. They receive data and callbacks via props and avoid
  internal state unless necessary for UI behavior.

This separation allows for better testability, reusability, and maintainability.

---

#### **Structure Overview**

```plaintext
src/
|-- components/
|   |-- UserCard
|   |   |-- UserCard.tsx
|   |   |-- index.ts
|-- containers/
|   |-- UserContainer/
|   |   |-- UserContainer.tsx
|   |   |-- useUserData.ts
|   |   |-- index.ts
```

- `components/` : Contains presentational components that define the structure and style of the UI.
- `containers/` Smart components that connect logic with view components.

#### **Logic Components**

##### **Characteristics**

- Manage state, side effects, and interactions with APIs.
- Use custom hooks to encapsulate and share logic.
- Do not include any JSX related to the visual structure.

---

##### **Example: Custom Hook**

```tsx
import { useState, useEffect } from "react";
import { fetchUserData } from "../services/api";

export const useUserData = (userId: number) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUserData(userId)
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
};
```

---

##### **Example: View-Only Header Component**

```tsx
import React from "react";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <header style={{ backgroundColor: "#f4f4f4", padding: "16px" }}>
    <h1>{title}</h1>
  </header>
);
```

---

### **4. Error Handling**

Remember to handle errors gracefully and provide feedback to users when something goes wrong:

```tsx
const fetchUserData = async (userId: number): Promise<User | null> => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
```

---

## **Best Practices**

### **1. Collaboration**

- **Respectful Feedback**: Use positive, constructive language when providing feedback.
- **Focus on Team Standards**: Prioritize team conventions over personal preferences.
- **Conflict Resolution**: Use objective data (benchmarks, docs) to back up arguments.

---

### **2. Pull Request Guidelines**

- **Size**: Keep PRs focused on a single task or feature.

- **Description**: Provide clear details about the changes:

```csharp
[Feature] Add UserProfile component

- Implement UserProfile component with props for name and age
- Include unit tests for rendering
```

- **Pre-Review Checks**:
    - Ensure code is linted and formatted.
    - Add or update unit tests as necessary.
    - Double-check that your code meets all style guide requirements.

### **2. Pull Request Guidelines**

Before approving a PR, confirm:

- The code functions correctly and is thoroughly tested.
- The solution is scalable and follows team conventions.
- All edge cases are addressed.

---

## Repository Rules

### Branching

- Use the `feature/branch-name` convention for new features.
  Example: `feature/add-user-profile`.

### Commits

- Attach relevant issue numbers.
- Write clear and descriptive commit messages.
- Use the present tense: "Add feature" not "Added feature."
- Limit the first line to 72 characters.
- Attach screenshots or GIFs for visual changes.

Example: `git commit -m "#123 Add user profile component `

---

## Code Review Example Scenarios

Here are some scenarios you may encounter during a review:

### Scenario 1: Code that works but is not reusable

Code Example:

```tsx
function add(a: number, b: number, c?: number) {
  if (c) return a + b + c;
  return a + b;
}
```

#### Suggested Feedback:

- This function works, but it's flexible. If you need to support more parameters in the future, this function would
  require significant modifications. Instead of using an `if` statement, we can rewrite the function to handle the
  parameters dynamically, using the rest parameters (spread operator) to handle an arbitrary number of arguments.

```tsx
const add = (...args: number[]): number => {
  return args.reduce((sum, num) => sum + num, 0);
};
```

### Scenario 2: Inconsistent Naming

Code Example:

```tsx
const fetch_user_data = (id: number) => {
  // logic
};
```

#### Suggested Feedback:

- "The naming convention here doesn't align with our camelCase standard for functions. Please rename to `fetchUserData`
  for consistency."

### Scenario 3: Handling Disagreements

If the author disagrees with a suggestion, calmly explain the rationale behind the feedback:

- "I understand your perspective, but aligning with the team's conventions will make the code more maintainable in the
  long run. Would you be open to discussing this further?"

---

## Example Pull Request Feedback

When leaving feedback:

- Be specific and actionable:

```plaintext
The `UserProfile` component is functional, but we could improve reusability by splitting the `useUserData` hook into a separate file.
```

- Avoid vague or unhelpful comments:

```plaintext 
This code is messy. Please clean it up.
```

## Conflict Resolution
If conflicts arise during a review:
1. Clearly explain your reasoning, referencing documentation or project conventions.
2. Seek input from other team members if needed.
3. Escalate unresolved issues to the team lead or project manager.

---
Thank you for contributing to this project and maintaining high standards! If you have questions, feel free to reach out to the project maintainer.