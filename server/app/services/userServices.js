import sequelize from "sequelize";
import {
  ReturnResponse,
  AllUsers,
  ErrorResponse,
  NotFound,
  Updated,
} from "../../helper/responseHandeler";
import models from "../models/index";

const User = models.User;
const Role = models.Role;
const op = sequelize.Op;

class userServices {
  constructor() {}
  async users() {
    try {
      const users = await User.findAll(
        {
          attributes: ["id", "name", "email", "status", "createdAt"],
          order: [["id", "ASC"]],

          include: Role,
        },
        { where: { deletedAt: null } }
      );
      return ReturnResponse(users);
    } catch (err) {
      console.log(err.message);
      return ErrorResponse(err);
    }
  }

  async userById(Id) {
    try {
      const user = await User.findByPk(
        Id,
        { attributes: ["id", "name", "email", "status"], include: Role },
        { where: { deletedAt: null } }
      );
      return ReturnResponse(user);
    } catch (err) {
      console.log(err.message);
      return ErrorResponse(err);
    }
  }

  

  async editUser(users){
    try {
      const user = await User.findByPk(users.id);

      if(user && user.dataValues){
        const data = await User.update(
          {name:users.name,email:users.email,phone:users.phone,RoleId:users.RoleId,updatedAt: Date.now()},
          { where: { id: user.id } }
        )
        if (data) { 
          console.log("UPDATED III => ", data)
          return Updated();
        } else {
          return Conflict();
        }
      }
      else {
        return NotFound();
      }
    } catch (err) {
      console.log(err.message);
    }

  }

  async userStatusChange(req){
    try {
      const { id } = req.body;
      const user = await User.findByPk(id);
      if (user && user.dataValues) {
        const data = await User.update(
          { status: !user.status, updatedAt: Date.now() },
          { where: { id: id } }
        );
        if (data) {
          return Updated();
        } else {
          return Conflict();
        }
      } else {
        return NotFound();
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}
export default new userServices();
