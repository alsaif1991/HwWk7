import { User,Books,Loan } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { paramsschemaType } from '../zodschema/manageschema';
import { Request, Response } from "express";
import { prisma } from "../config/db";


export const getuser = async (req: Request, res: Response) => {
    try {
      const getusers = await prisma.user.findMany();
      return res.status(200).json(getusers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mrssage: "server Error !",
      });
    }
  };
  
  export const addusers = async (req: Request, res: Response) => {
    try {
      const newUser = req.body as User;
  
      await prisma.user.create({
        data: newUser,
      });
      return res.status(200).json({
        message: "user added !",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mrssage: "Error !",
      });
    }
  };





  export const getbooks = async (req: Request, res: Response) => {
    try {
      const getBook = await prisma.books.findMany();
      return res.status(200).json(getBook);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mrssage: "server Error !",
      });
    }
  };
  
  export const addbook = async (req: Request, res: Response) => {
    try {
      const bookadd = req.body as Books;
      await prisma.books.create({ data: bookadd });
  
      return res.status(201).json({
        message: "book has been added !",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mrssage: "server Error !",
      });
    }
  };





  export const getLoan = async (req: Request, res: Response) => {
    try {
      const allLoans = await prisma.loan.findMany();
      return res.status(200).json(allLoans);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
 
  export const addloan = async (req: Request, res: Response) => {
    try {
      const loanadd = req.body as Loan;
      await prisma.loan.create({ data: loanadd });
  
      return res.status(201).json({
        message: "loan has been  added",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error !",
      });
    }
  };
  
 
  export const lendbook = async (req: Request, res: Response) => {
    try {
      const {userid} = req.params as paramsschemaType;
  
      const getbookuser = await prisma.user.findUnique({
        
        where: {id_user:userid},
        select: {
          username: true,
          loan: true,
        },
      });
  
      return res.status(200).json(getbookuser);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "server error!",
      });
    }
  };
  




 