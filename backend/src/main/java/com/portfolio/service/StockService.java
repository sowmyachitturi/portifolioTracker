package com.portfolio.service;

import com.portfolio.model.Stock;
import com.portfolio.repository.StockRepository;
import com.portfolio.exception.StockNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    // CRUD operations using the repository

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Stock updateStock(Long id, Stock stock) {
        Optional<Stock> existingStock = stockRepository.findById(id);
        if (existingStock.isPresent()) {
            Stock updatedStock = existingStock.get();
            updatedStock.setName(stock.getName());
            updatedStock.setSymbol(stock.getSymbol());
            updatedStock.setQuantity(stock.getQuantity());
            updatedStock.setPrice(stock.getPrice());
            return stockRepository.save(updatedStock);
        } else {
            throw new StockNotFoundException("Stock with ID " + id + " not found.");
        }
    }

    public void deleteStock(Long id) {
        Optional<Stock> stock = stockRepository.findById(id);
        if (stock.isPresent()) {
            stockRepository.delete(stock.get());
        } else {
            throw new StockNotFoundException("Stock with ID " + id + " not found.");
        }
    }

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public double calculatePortfolioValue() {
        List<Stock> stocks = stockRepository.findAll();
        double totalValue = 0;
        for (Stock stock : stocks) {
            totalValue += stock.getQuantity() * stock.getPrice();
        }
        return totalValue;
    }

    // Custom queries

    public Optional<Stock> findStockBySymbol(String symbol) {
        return stockRepository.findBySymbol(symbol);
    }

    public List<Stock> findStocksByName(String name) {
        return stockRepository.findByName(name);
    }

    public List<Stock> findStocksByQuantityGreaterThan(int quantity) {
        return stockRepository.findByQuantityGreaterThan(quantity);
    }

    public void deleteStockBySymbol(String symbol) {
        stockRepository.deleteBySymbol(symbol);
    }

    public List<Stock> findByPriceGreaterThan(double price) {
        return stockRepository.findByPriceGreaterThan(price);
    }
}
