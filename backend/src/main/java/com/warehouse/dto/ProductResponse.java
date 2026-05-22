package com.warehouse.dto;

import com.warehouse.entity.Product;

public class ProductResponse {

    private Long id;
    private String name;
    private String maskedCode;
    private String category;
    private Double price;
    private Integer quantity;
    private String displayQuantity;
    private String stockStatus;

    public ProductResponse() {
    }

    public static ProductResponse from(Product product, String role) {
        ProductResponse response = new ProductResponse();
        response.id = product.getId();
        response.maskedCode = product.getMaskedCode();
        response.category = product.getCategory();
        response.price = product.getPrice();
        response.stockStatus = getStockStatus(product.getQuantity());

        if ("ADMIN".equals(role)) {
            response.name = product.getName();
            response.quantity = product.getQuantity();
            response.displayQuantity = product.getQuantity() != null ? product.getQuantity().toString() : "0";
        } else {
            response.name = null;
            response.quantity = null;
            response.displayQuantity = "SECURE";
        }

        return response;
    }

    private static String getStockStatus(Integer quantity) {
        if (quantity == null) {
            return "Unknown";
        }
        return quantity > 10 ? "In Stock" : "Low Stock";
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getMaskedCode() {
        return maskedCode;
    }

    public String getCategory() {
        return category;
    }

    public Double getPrice() {
        return price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public String getDisplayQuantity() {
        return displayQuantity;
    }

    public String getStockStatus() {
        return stockStatus;
    }

}