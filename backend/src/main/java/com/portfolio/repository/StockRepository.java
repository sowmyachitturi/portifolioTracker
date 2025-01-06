package com.portfolio.repository;

import com.portfolio.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository

public interface StockRepository extends JpaRepository<Stock, Long> {
    List<Stock> findByName(String name);
    List<Stock> findByQuantityGreaterThan(int quantity);
    void deleteBySymbol(String symbol);
    List<Stock> findByPriceGreaterThan(double price);  // Fixed method name
    // List<Stock> findStocksWithPriceGreaterThan(double price);
    Optional<Stock> findBySymbol(String symbol);
}