import sequelize from "sequelize";
import {
  Conflict,
  Created,
  NotFound,
  Removed,
  ReturnResponse,
  Updated,
} from "../../helper/responseHandeler";
import models from "../models/index";
const Role = models.Role;
const Op = sequelize.Op;

class roleServices {
  constructor() {}

  async roles(req) {
    try {
      const role = await Role.findAll({
        attributes: ["id", "role"],
        order: [["id", "ASC"]],
      });
      return ReturnResponse(role);
    } catch (err) {
      console.log(err.message);
    }
  }

  async getById(req) {
    const { params } = req;
    try {
      const role = await Role.findByPk(params.id);
      if (role && role.dataValues) {
        return ReturnResponse(role);
      } else {
        return NotFound();
      }
    } catch (err) {
      return Conflict();
    }
  }

  async create(req) {
    const { body } = req;
    try {
      const created = await Role.create(body);
      if (created) {
        return Created(created);
      } else {
        return Conflict();
      }
    } catch (err) {
      return Conflict();
    }
  }

  async update(req) {
    const { params, body } = req;
    try {
      const role = await Role.findByPk(params.id);
      if (role && role.dataValues) {
        const roles = await Role.update(
          {
            role: body.role,
            description: body.description,
            status: body.status,
            updatedAt: Date.now(),
          },
          { where: { id: params.id } }
        );
        if (roles) {
          return Updated();
        } else {
          return Conflict();
        }
      } else {
        return NotFound();
      }
    } catch (err) {
      return Conflict();
    }
  }

  async delete(req) {
    const { params } = req;
    try {
      const role = await Role.findByPk(params.id);
      if (role && role.dataValues) {
        const remove = await Role.destroy({ where: { id: params.id } });
        if (remove) {
          return Removed(remove[1]);
        } else {
          return Conflict();
        }
      } else {
        return NotFound();
      }
    } catch (err) {
      return Conflict();
    }
  }
}
export default new roleServices();
