package com.portfolio.controller;

import com.portfolio.dto.StockDTO;
import com.portfolio.model.Stock;
import com.portfolio.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@RestController
@RequestMapping("/api/stocks")
@CrossOrigin(origins = "http://localhost:3000")  // Allow React app to access the API
public class StockController {

    @Autowired
    private StockService stockService;

    @PostMapping
    public ResponseEntity<Stock> addStock(@Valid @RequestBody StockDTO stockDTO) {
        Stock stock = new Stock(stockDTO.getName(), stockDTO.getSymbol(), stockDTO.getQuantity(), stockDTO.getPrice());
        Stock createdStock = stockService.addStock(stock);
        return new ResponseEntity<>(createdStock, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Stock> updateStock(@PathVariable Long id, @Valid @RequestBody StockDTO stockDTO) {
        Stock stock = new Stock(stockDTO.getName(), stockDTO.getSymbol(), stockDTO.getQuantity(), stockDTO.getPrice());
        Stock updatedStock = stockService.updateStock(id, stock);
        return new ResponseEntity<>(updatedStock, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStock(@PathVariable Long id) {
        stockService.deleteStock(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<List<Stock>> getAllStocks() {
        List<Stock> stocks = stockService.getAllStocks();
        return new ResponseEntity<>(stocks, HttpStatus.OK);
    }

    @GetMapping("/portfolio-value")
    public ResponseEntity<Double> getPortfolioValue() {
        double portfolioValue = stockService.calculatePortfolioValue();
        return new ResponseEntity<>(portfolioValue, HttpStatus.OK);
    }
}
