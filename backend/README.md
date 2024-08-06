# Backend API Documentation

Welcome to the Backend API documentation! Below, you'll find detailed information about the available endpoints, including the request and response formats.



## Ativos (Assets)

### List All Assets
**GET** - `/assets`

**Response:**
- **Status:** `200 OK`
- **Body:**
    ```json
    {
        "assets": [
            {
                "id": 1,
                "name": "Ativo 1",
                "totalSensors": 0
            }
        ]
    }
    ```

### Create a New Asset
**POST** - `/assets`

**Request:**
- **Body:**
    ```json
    {
        "name": "Ativo 1"
    }
    ```

**Response:**
- **Status:** `201 Created`
- **Body:**
    ```json
    {
        "message": "Ativo criado com sucesso!"
    }
    ```

### Delete an Asset
**DELETE** - `/assets/{assetId}`

**Response:**
- **Status:** `204 No Content`



## Sensores (Sensors)

### List All Sensors of an Asset
**GET** - `/assets/{assetId}/sensors`

**Response:**
- **Status:** `200 OK`
- **Body:**
    ```json
    {
        "sensors": [
            {
                "id": 1,
                "name": "Sensor 1",
                "assetId": 1,
                "totalCollections": 0
            }
        ]
    }
    ```

### Create a New Sensor for an Asset
**POST** - `/assets/{assetId}/sensors`

**Request:**
- **Body:**
    ```json
    {
        "name": "Sensor 1"
    }
    ```

**Response:**
- **Status:** `201 Created`
- **Body:**
    ```json
    {
        "message": "Sensor criado com sucesso!"
    }
    ```

### Delete a Sensor
**DELETE** - `/assets/{assetId}/sensors/{sensorId}`

**Response:**
- **Status:** `204 No Content`



## Coletas (Collections)

### List All Collections for a Sensor
**GET** - `/assets/{assetId}/sensors/{sensorId}/collections`

**Response:**
- **Status:** `200 OK`
- **Body:**
    ```json
    {
        "collections": [
            {
                "id": 1,
                "date": "2024-08-05T21:38:00.000Z",
                "value": 1,
                "sensorId": 1
            },
            {
                "id": 2,
                "date": "2024-08-12T21:38:00.000Z",
                "value": 5,
                "sensorId": 1
            },
            {
                "id": 3,
                "date": "2024-08-19T21:38:00.000Z",
                "value": 7,
                "sensorId": 1
            }
        ]
    }
    ```

### Create a New Collection for a Sensor
**POST** - `/assets/{assetId}/sensors/{sensorId}/collections`

**Request:**
- **Body:**
    ```json
    {
        "value": 300,
        "date": "2024-08-11T10:35:45.848Z"
    }
    ```

**Response:**
- **Status:** `201 Created`
- **Body:**
    ```json
    {
        "message": "Coleta criada com sucesso!"
    }
    ```

### Delete a Collection
**DELETE** - `/assets/{assetId}/sensors/{sensorId}?date={Date}`

**Response:**
- **Status:** `204 No Content`
