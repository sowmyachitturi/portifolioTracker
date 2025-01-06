# Simple Portfolio Tracker

This is a full-stack web application that allows users to manage their stock portfolio. Users can add, view, edit, and delete stock holdings, track the total portfolio value based on real-time stock prices, and view a dashboard displaying key portfolio metrics.

## Features

- **Add Stocks**: Input stock details such as name, symbol, quantity, and price.
- **Edit Stocks**: Modify existing stock information.
- **Delete Stocks**: Remove stocks from the portfolio.
- **Responsive UI**: The application is mobile-friendly and styled with Tailwind CSS.
- **Real-Time Stock Prices**: Fetches live stock prices using an API (integration planned).
- **Backend**: Built with Java Spring Boot and MySQL.

---

## Technologies Used

### Frontend
- React.js
- CSS
- Tailwind CSS

### Backend
- Java Spring Boot
- MySQL

---

## Prerequisites

- Node.js and npm installed
- Java Development Kit (JDK) installed
- MySQL installed and running
- Maven installed

---

## Getting Started

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/VighneshVejandla/portifolioTracker
   cd VighneshVejandla-portfolioTracker/backend
   ```

2. Configure the MySQL database:
   - Update the `application.properties` file located in `src/main/resources/` with your database credentials:
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

4. The backend will run on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. The frontend will run on `http://localhost:3000`.

---

## Running the Application

1. Ensure the backend is running (`http://localhost:8080`).
2. Start the frontend (`http://localhost:3000`).
3. Open your browser and navigate to `http://localhost:3000` to interact with the application.

---

## Backend Directory Structure

```
└── VighneshVejandla-portfolioTracker/
    └── backend/
        ├── pom.xml
        ├── src/
            ├── main/
                ├── java/
                    └── com/
                        └── portfolio/
                            ├── App.java
                            ├── controller/
                                └── StockController.java
                            ├── dto/
                                └── StockDTO.java
                            ├── exception/
                                ├── GlobalExceptionHandler.java
                                └── StockNotFoundException.java
                            ├── model/
                                └── Stock.java
                            ├── repository/
                                └── StockRepository.java
                            ├── service/
                                └── StockService.java
                            └── resources/
                                └── application.properties
            ├── test/
                └── java/
                    └── com/
                        └── portfolio/
                            └── AppTest.java
```

---

## API Endpoints

### Stock Management

1. **Get All Stocks**
   - URL: `/api/stocks`
   - Method: `GET`

2. **Add a Stock**
   - URL: `/api/stocks`
   - Method: `POST`
   - Body:
     ```json
     {
       "name": "Stock Name",
       "symbol": "SYM",
       "quantity": 10,
       "price": 100.50
     }
     ```

3. **Update a Stock**
   - URL: `/api/stocks/{id}`
   - Method: `PUT`
   - Body:
     ```json
     {
       "name": "Updated Name",
       "symbol": "USYM",
       "quantity": 20,
       "price": 150.75
     }
     ```

4. **Delete a Stock**
   - URL: `/api/stocks/{id}`
   - Method: `DELETE`

---


## Future Enhancements

- Integration with a real-time stock price API.
- Dashboard with advanced analytics.
- User authentication and authorization.

---
