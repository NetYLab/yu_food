package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.entity.*;
import com.example.demo.repository.*;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    public List<Restaurant> getRestaurantsByCategory(String tag) {
        return restaurantRepository.findByCategory(tag);
    }

    public Restaurant getRestaurantById(int id) {
        System.out.println("서비스 getRestaurantById 호출됨: " + id);
        return restaurantRepository.findById(id).orElse(null);
    }
    
    public List<Restaurant> getTop10RestaurantsByCategory(String rtag) {
        return restaurantRepository.findTop10ByRtagOrderByRstarDesc(rtag);
    }
    public List<Restaurant> findTop10ByTagAndLocation(String tag, String location) {
        return restaurantRepository.findTop10ByRtagAndRlocOrderByRstarDesc(tag, location);
    }

    @Transactional
    public Restaurant createRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    @Transactional
    public Restaurant updateRestaurant(int restaurantId, Restaurant restaurantDetails) {
        Optional<Restaurant> restaurant = restaurantRepository.findById(restaurantId);
        if (restaurant.isPresent()) {
            Restaurant existingRestaurant = restaurant.get();
            existingRestaurant.setRname(restaurantDetails.getRname());
            existingRestaurant.setAddr(restaurantDetails.getAddr());
            existingRestaurant.setPhone(restaurantDetails.getPhone());
            existingRestaurant.setRloc(restaurantDetails.getRloc());
            // 필요한 다른 필드들도 여기에 추가
            return restaurantRepository.save(existingRestaurant);
        }
        return null;
    }

    @Transactional
    public boolean deleteRestaurant(int restaurantId) {
        Optional<Restaurant> restaurant = restaurantRepository.findById(restaurantId);
        if (restaurant.isPresent()) {
            restaurantRepository.delete(restaurant.get());
            return true;
        }
        return false;
    }
    
 // 페이징 처리된 레스토랑 필터링 로직 추가
    public Page<Restaurant> getRestaurantsByCategoryAndLocation(String category, String location, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("rname").ascending()); // 이름순 정렬
        return restaurantRepository.findByRtagAndRloc(category, location, pageable);
    }
    public List<Restaurant> searchRestaurants(String query) {
        return restaurantRepository.searchByKeywordOrRname(query);
    }
}