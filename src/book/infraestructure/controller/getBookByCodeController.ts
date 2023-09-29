import { Request, Response } from "express";
import { GetBookByCodeUseCase } from "../../application/getBookByCodeUseCase";
import { BookCodeDTO } from "../validation/bookCodeDTO";

export class GetBookByCodeController {
    constructor(readonly getBookByCodeUseCase: GetBookByCodeUseCase) { }

    async run(req: Request, res: Response) {
        const dto = new BookCodeDTO(req.params.code);

        try {
            const book = await this.getBookByCodeUseCase.run(dto);

            if (book) {
                return res.status(200).send({ status: "success", data: book });
            } else {
                return res.status(404).send({ status: "error", message: "Libro no encontrado" });
            }
        } catch (error: any) {
            return res.status(500).send({ status: "error", message: error.message });
        }
    }
}
