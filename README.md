# DustBusters Backend Readme

## Introduction

Welcome to the DustBusters Backend! This repository contains the server-side code for managing bookings, services, and reviews. The backend is deployed on Firebase. This Readme file will guide you through the key components and functionalities of the backend.

## Table of Contents

1. [Features](#features)
2. [API Endpoints](#api-endpoints)
3. [Component Tests](#component-tests)
4. [Getting Started](#getting-started)
5. [Support](#support)
6. [Contributing](#contributing)
7. [License](#license)

## Features <a name="features"></a>

### 1. CRUD API
   - Create, Read, Update, and Delete operations for bookings, services, and reviews.

### 2. Component Tests
   - Unit and integration tests to ensure the functionality of the backend.

## API Endpoints <a name="api-endpoints"></a>

### Bookings

- `GET /bookings`: Retrieve a list of all bookings.
- `GET /bookings/:id`: Retrieve a specific booking by ID.
- `POST /bookings`: Create a new booking.
- `PUT /bookings/:id`: Update an existing booking.
- `DELETE /bookings/:id`: Delete a booking.

### Services

- `GET /services`: Retrieve a list of all services.
- `GET /services/:id`: Retrieve a specific service by ID.
- `POST /services`: Create a new service.
- `PUT /services/:id`: Update an existing service.
- `DELETE /services/:id`: Delete a service.

### Reviews

- `GET /reviews`: Retrieve a list of all reviews.
- `GET /reviews/:id`: Retrieve a specific review by ID.
- `POST /reviews`: Create a new review.
- `PUT /reviews/:id`: Update an existing review.
- `DELETE /reviews/:id`: Delete a review.

## Component Tests <a name="component-tests"></a>

### Running Tests

To run the component tests, use the following command:

```bash
npm test
```

### Test Coverage

Test coverage is tracked using a code coverage tool. You can view the coverage report after running the tests.

## Getting Started <a name="getting-started"></a>

### Deployment

The backend is deployed on Firebase. You can access it at [https://your-firebase-app.firebaseapp.com](https://your-firebase-app.firebaseapp.com).

## Support <a name="support"></a>

If you encounter any issues or have questions about the backend, please contact our support team at [support@dustbusters.com](mailto:support@dustbusters.com).

## Contributing <a name="contributing"></a>

We welcome contributions from the community. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License <a name="license"></a>

This project is licensed under the [MIT License](LICENSE).

---

Thank you for contributing to DustBusters! We appreciate your efforts in helping us maintain a robust and reliable backend system. If you have any further questions or suggestions, please feel free to reach out. Happy coding!
