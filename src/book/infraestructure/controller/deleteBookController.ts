import { Request, Response } from "express";
import { DeleteBookUseCase } from "../../application/deleteBookUseCase";
import { BookIdDTO } from "../validation/bookIdDTO";

export class DeleteBookController {
    constructor(readonly deleteBookUseCase: DeleteBookUseCase) { }

    async run(req: Request, res: Response) {
        const dto = new BookIdDTO(Number(req.params.id));

        try {
            const isDeleted = await this.deleteBookUseCase.run(dto);

            if (isDeleted) {
                return res.status(200).send({ status: "success", message: "Libro eliminado con éxito" });
            } else {
                return res.status(404).send({ status: "error", message: "Error al eliminar el libro" });
            }
        } catch (error: any) {
            return res.status(500).send({ status: "error", message: error.message });
        }
    }
}
