import { Request, Response } from "express";
import { CodeModel } from "../models/code";

export const saveCode = async (req: Request, res: Response) => {
  const { fullCode } = req.body;
  try {
    const newCode = await CodeModel.create({
      fullCode: fullCode,
    });
    return res.status(201).send({ url: newCode._id, status: "saved" });
  } catch (error) {
    return res.status(500).send({ error: "Error on saving code" });
  }
};

export const loadCode = async (req: Request, res: Response) => {
  const { urlId } = req.body;

  try {
    const existingCode = await CodeModel.findById(urlId);
    if (!existingCode) {
      return res.status(404).send("code not found");
    }
    return res.status(200).send({ fullCode: existingCode.fullCode });
  } catch (error) {
    return res.status(500).send({ error: "Error loading Code" });
  }
};
