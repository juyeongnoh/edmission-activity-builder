# API 문서

## 개요

User와 Activity의 CRUD를 구현한 엔드포인트입니다.

| 메서드 | 이름                  | 인증 여부 | 비고               |
| ------ | --------------------- | --------- | ------------------ |
| POST   | `/api/auth/register`  | -         | 회원가입           |
| POST   | `/api/auth/login`     | -         | 로그인             |
| GET    | `/api/users/profile`  | O         | 사용자 정보        |
| GET    | `/api/activities`     | O         | Activity 목록 조회 |
| GET    | `/api/activities/:id` | O         | 단일 Activity 조회 |
| POST   | `/api/activities`     | O         | Activity 생성      |
| PUT    | `/api/activities/:id` | O         | Activity 수정      |
| DELETE | `/api/activities/:id` | O         | Activity 삭제      |

## 인증

대부분의 엔드포인트는 JWT 인증이 필요합니다.
Authorization header에 다음 내용을 추가해주세요.

```
Authorization: Bearer <your_jwt_token>
```

## 회원 기능

### 1. 회원가입

회원가입을 수행합니다.

**Endpoint:** `POST /auth/register`

**Authentication:** Not required

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "your_password"
}
```

**Success Response (201 Created):**

```json
{
  "message": "회원가입 성공",
  "userId": 1
}
```

**Error Responses:**

- **400 Bad Request** - 이메일 또는 비밀번호 누락

```json
{
  "message": "이메일과 비밀번호를 모두 제공해야 합니다."
}
```

- **409 Conflict** - 이메일 중복

```json
{
  "message": "이미 존재하는 이메일입니다."
}
```

---

### 2. 로그인

로그인하여 JWT 토큰을 발급받습니다.

**Endpoint:** `POST /auth/login`

**Authentication:** Not required

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "your_password"
}
```

**Success Response (200 OK):**

```json
{
  "message": "로그인 성공",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**

- **400 Bad Request** - 이메일 또는 비밀번호 누락

```json
{
  "message": "이메일과 비밀번호를 모두 제공해야 합니다."
}
```

- **401 Unauthorized** - 잘못된 인증 정보

```json
{
  "message": "잘못된 이메일 또는 비밀번호입니다."
}
```

---

### 3. 사용자 정보

현재 로그인한 사용자의 프로필 정보를 조회합니다.

**Endpoint:** `GET /users/profile`

**Authentication:** Required

**Success Response (200 OK):**

```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "createdAt": "2025-11-30T10:00:00.000Z",
    "updatedAt": "2025-11-30T10:00:00.000Z"
  }
}
```

**Error Responses:**

- **401 Unauthorized** - 토큰 없음 또는 유효하지 않음

```json
{
  "message": "인증 토큰이 필요합니다."
}
```

- **404 Not Found** - 사용자를 찾을 수 없음

```json
{
  "message": "사용자를 찾을 수 없습니다."
}
```

---

## Activity 기능

### 4. Activity 목록 조회

현재 로그인한 사용자의 모든 Activity를 조회합니다.

**Endpoint:** `GET /activities`

**Authentication:** Required

**Success Response (200 OK):**

```json
{
  "activities": [
    {
      "id": 1,
      "userId": 1,
      "name": "Math Club President",
      "category": "Academic",
      "tier": "Tier 1",
      "description": "Led a team of 20 students in organizing math competitions",
      "hoursPerWeek": 10,
      "isLeadership": true,
      "order": 0,
      "createdAt": "2025-11-30T10:00:00.000Z",
      "updatedAt": "2025-11-30T10:00:00.000Z"
    }
  ]
}
```

**Notes:**

- Activities are sorted by the `order` field in ascending order

---

### 5. 단일 Activity 조회

특정 Activity의 상세 정보를 조회합니다.

**Endpoint:** `GET /activities/:id`

**Authentication:** Required

**URL Parameters:**

- `id` (integer): Activity ID

**Success Response (200 OK):**

```json
{
  "activity": {
    "id": 1,
    "userId": 1,
    "name": "Math Club President",
    "category": "Academic",
    "tier": "Tier 1",
    "description": "Led a team of 20 students in organizing math competitions",
    "hoursPerWeek": 10,
    "isLeadership": true,
    "order": 0,
    "createdAt": "2025-11-30T10:00:00.000Z",
    "updatedAt": "2025-11-30T10:00:00.000Z"
  }
}
```

**Error Responses:**

- **404 Not Found** - 활동을 찾을 수 없음

```json
{
  "message": "활동을 찾을 수 없습니다."
}
```

---

### 6. Activity 생성

새로운 Activity를 생성합니다.

**Endpoint:** `POST /activities`

**Authentication:** Required

**Request Body:**

```json
{
  "name": "Math Club President",
  "category": "Academic",
  "tier": "Tier 1",
  "description": "Led a team of 20 students in organizing math competitions",
  "hoursPerWeek": 10,
  "isLeadership": true,
  "order": 0
}
```

**Field Validations:**

- `name`: Required (string)
- `category`: Required (string)
- `tier`: Required (string)
- `description`: Required (string, max 150 characters recommended)
- `hoursPerWeek`: Required (integer, 0-40)
- `isLeadership`: Required (boolean)
- `order`: Optional (integer, defaults to 0)

**Success Response (201 Created):**

```json
{
  "message": "활동 생성 성공",
  "activity": {
    "id": 1,
    "userId": 1,
    "name": "Math Club President",
    "category": "Academic",
    "tier": "Tier 1",
    "description": "Led a team of 20 students in organizing math competitions",
    "hoursPerWeek": 10,
    "isLeadership": true,
    "order": 0,
    "createdAt": "2025-11-30T10:00:00.000Z",
    "updatedAt": "2025-11-30T10:00:00.000Z"
  }
}
```

---

### 7. Activity 수정

기존 활동을 수정합니다.

**Endpoint:** `PUT /activities/:id`

**Authentication:** Required

**URL Parameters:**

- `id` (integer): Activity ID

**Request Body:**

```json
{
  "name": "Math Club President - Updated",
  "category": "Academic",
  "tier": "Tier 1",
  "description": "Updated description",
  "hoursPerWeek": 15,
  "isLeadership": true,
  "order": 0
}
```

**Success Response (200 OK):**

```json
{
  "message": "활동 수정 성공",
  "activity": {
    "id": 1,
    "userId": 1,
    "name": "Math Club President - Updated",
    "category": "Academic",
    "tier": "Tier 1",
    "description": "Updated description",
    "hoursPerWeek": 15,
    "isLeadership": true,
    "order": 0,
    "createdAt": "2025-11-30T10:00:00.000Z",
    "updatedAt": "2025-11-30T11:00:00.000Z"
  }
}
```

**Error Responses:**

- **404 Not Found** - 활동을 찾을 수 없음

```json
{
  "message": "활동을 찾을 수 없습니다."
}
```

---

### 8. Activity 삭제

활동을 삭제합니다.

**Endpoint:** `DELETE /activities/:id`

**Authentication:** Required

**URL Parameters:**

- `id` (integer): Activity ID

**Success Response (200 OK):**

```json
{
  "message": "활동 삭제 성공"
}
```

**Error Responses:**

- **404 Not Found** - 활동을 찾을 수 없음

```json
{
  "message": "활동을 찾을 수 없습니다."
}
```

---

## Common Error Responses

### 401 Unauthorized

토큰이 없거나 유효하지 않을 때 반환됩니다.

```json
{
  "message": "인증 토큰이 필요합니다."
}
```

또는

```json
{
  "message": "유효하지 않은 토큰입니다."
}
```

### 500 Internal Server Error

서버 내부 오류가 발생했을 때 반환됩니다.

```json
{
  "message": "서버 오류가 발생했습니다."
}
```
