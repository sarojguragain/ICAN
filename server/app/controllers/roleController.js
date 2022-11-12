import { RequestHandeler } from "../../helper/requestHandler";
import roleServices from "../services/roleServices";

class roleController {
  constructor() {}

  async roles(req, res) {
    const request = RequestHandeler(req);
    roleServices
      .roles(request)
      .then((data) => res.status(data.status).json(data))
      .catch((err) => err.message);
  }

  async getById(req, res) {
    const request = RequestHandeler(req);
    roleServices
      .getById(request)
      .then((data) => res.status(data.status).json(data))
      .catch((err) => err.message);
  }

  async create(req, res) {
    const request = RequestHandeler(req);
    roleServices
      .create(request)
      .then((data) => res.status(data.status).json(data))
      .catch((err) => err.message);
  }

  async update(req, res) {
    const request = RequestHandeler(req);
    roleServices
      .update(request)
      .then((data) => res.status(data.status).json(data))
      .catch((err) => err.message);
  }

  async delete(req, res) {
    const request = RequestHandeler(req);
    roleServices
      .delete(request)
      .then((data) => res.status(data.status).json(data))
      .catch((err) => err.message);
  }
}
export default new roleController();
