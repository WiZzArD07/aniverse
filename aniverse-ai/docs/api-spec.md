# AniVerse API Specification

## Base URL

http://localhost:5000

---

## Health Check

GET /health

### Response

```json
{
  "success": true,
  "status": "OK"
}
```

---

## Register

POST /api/auth/register

### Request

```json
{
  "name": "Aryan",
  "email": "aryan@example.com",
  "password": "password123"
}
```

---

## Login

POST /api/auth/login

### Request

```json
{
  "email": "aryan@example.com",
  "password": "password123"
}
```

---

## Profile

GET /api/users/profile

### Headers

Authorization: Bearer TOKEN
