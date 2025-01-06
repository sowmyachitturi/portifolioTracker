# Portfolio Tracker

A comprehensive web application designed to help users manage their stock portfolios efficiently. Users can track holdings, update stock details, and analyze portfolio performance with real-time data.

---

## Key Features

- **Stock Management**: Add, edit, and delete stock holdings.
- **Real-Time Tracking**: Planned integration with an API to fetch live stock prices.
- **Intuitive Dashboard**: Displays key metrics and portfolio analytics.
- **Responsive Design**: Tailwind CSS ensures a mobile-friendly user interface.

---

## Technologies

**Frontend**
- React.js
- CSS
- Tailwind CSS

**Backend**
- Java Spring Boot
- MySQL

---

## Prerequisites

- Node.js and npm installed
- Java Development Kit (JDK) installed
- MySQL server running
- Maven installed

---

## Setup Instructions

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/SowmyaChitturi/portfolioTracker
   cd SowmyaChitturi-portfolioTracker/backend
   ```

2. Configure the MySQL database:
   Update the `application.properties` file under `src/main/resources/`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_tracker
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Build and run the backend:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   The backend runs at `http://localhost:8080`.

### Frontend

1. Change to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install required dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm start
   ```
   The frontend runs at `http://localhost:3000`.

---

## Running the Application

1. Start the backend (`http://localhost:8080`).
2. Start the frontend (`http://localhost:3000`).
3. Open `http://localhost:3000` in your browser to access the application.

---

## Directory Structure

```
SowmyaChitturi-portfolioTracker/
├── backend/
│   ├── pom.xml
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── portfolio/
│   │   │   │           ├── App.java
│   │   │   │           ├── controller/
│   │   │   │           │   └── StockController.java
│   │   │   │           ├── dto/
│   │   │   │           │   └── StockDTO.java
│   │   │   │           ├── exception/
│   │   │   │           │   ├── GlobalExceptionHandler.java
│   │   │   │           │   └── StockNotFoundException.java
│   │   │   │           ├── model/
│   │   │   │           │   └── Stock.java
│   │   │   │           ├── repository/
│   │   │   │           │   └── StockRepository.java
│   │   │   │           ├── service/
│   │   │   │           │   └── StockService.java
│   │   │   │           └── resources/
│   │   │   │               └── application.properties
│   │   ├── test/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── portfolio/
│   │   │   │           └── AppTest.java
```

---

## API Reference

### Endpoints

#### Retrieve All Stocks
- **URL**: `/api/stocks`
- **Method**: GET

#### Add a New Stock
- **URL**: `/api/stocks`
- **Method**: POST
- **Body**:
  ```json
  {
    "name": "Stock Name",
    "symbol": "SYM",
    "quantity": 10,
    "price": 100.50
  }
  ```

#### Update Stock Information
- **URL**: `/api/stocks/{id}`
- **Method**: PUT
- **Body**:
  ```json
  {
    "name": "Updated Name",
    "symbol": "USYM",
    "quantity": 20,
    "price": 150.75
  }
  ```

#### Remove a Stock
- **URL**: `/api/stocks/{id}`
- **Method**: DELETE

---

## Future Improvements

- Integration with real-time stock price APIs.
- Advanced portfolio analytics and visualizations.
- User authentication and role-based access control.

