import { Request, Response } from "express";
import customerModel from "../models/customerModel";

export const getCustomer = async (req: Request, res: Response) => {
  try {
    const customers = await customerModel.find();

    res.status(200).json(customers);
  } catch (error) {
    console.log(error);
  }
};

export const saveCustomer = async (req: Request, res: Response) => {
  const { name, gmail, age } = req.body;

  try {
    const newCustomer = new customerModel({
      name,
      gmail,
      age,
    });

    const savedCustomer = await newCustomer.save();
    res.status(201).json({ message: "Customer saved!", data: savedCustomer });
  } catch (error) {
    res.status(500).json("customer save failed!");
    console.log(error);
  }
};

// import { Request, Response } from "express";

// export const getCustomer = async (req: Request, res: Response) => {
//   res.status(200).json("Customer getAll sucess!");
// };
