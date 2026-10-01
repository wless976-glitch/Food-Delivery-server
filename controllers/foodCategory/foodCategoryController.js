import express from "express";
import { FoodCategory } from "../../schemas/category-schema.js";

export const foodCategoryControllerCreate = async (request, response) => {
  try {
    const { categoryName } = request.body;
    const category = await FoodCategory.create({
      categoryName,
    });
    response
      .status(201)
      .json({ message: "Category Created", category: category });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};

export const foodCategoryControllerReadAll = async (request, response) => {
  try {
    const category = await FoodCategory.find();
    response.status(200).json({
      message: "Food category read successfully",
      category: category,
    });
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
export const foodCategoryControllerRead = async (request, response) => {
  try {
    const category = await FoodCategory.find();
    response.status(200).json({
      message: "Food category read successfully",
      category: category,
    });
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
export const foodCategoryControllerUpdate = async (request, response) => {
  try {
    const { id, categoryName } = request.body;
    const updatedCategory = await FoodCategory.findByIdAndUpdate(
      id,
      {
        categoryName: categoryName,
      },
      {
        new: true,
      },
    );

    if (!updatedCategory) {
      return response.status(404).json({ message: "food category not found" });
    }

    response.json({
      message: "Food category updated successfully",
      category: updatedCategory,
    });

    response
      .status(200)
      .json({ message: "Updated", category: updatedCategory });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
export const foodCategoryControllerDelete = async (request, response) => {
  try {
    console.log("this is getting called");
    console.log(request.body);
    const { id } = request.body;
    console.log(id);
    const delCategory = await FoodCategory.findByIdAndDelete(id);
    if (!delCategory) {
      return response.status(404).json({ message: "food category not found" });
    }
    response.status(200).json({
      message: "Food category deleted successfully",
      category: delCategory,
    });
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
