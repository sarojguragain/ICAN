import sequelize from "sequelize";
import models from "../models/index.js";
import bcrypt from "bcryptjs";
import {
  AleradyExist,
  NotFound,
  Created,
  Login,
  InvalidLogin,
  AllUsers,
  Updated,
  Removed,
  Conflict,
  
} from "../../helper/responseHandeler";
import { tokenGenerator, tokenVerify } from "../../helper/tokenGenerator";

const User = models.User;
const Role = models.Role;
const RolePermission = models.RolePermission;
const Op = sequelize.Op;

class authService {
  constructor() {}
  async login(req) {
    try {
      const { password, email } = req.body;

      let user = await User.findOne({ where: { email: email }, include: Role });
      if (!user) return NotFound();
      else {
        var passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) return InvalidLogin();
        else {
          var token = tokenGenerator(user);
          var TokenVerify = tokenVerify(token);
          if (!TokenVerify) return InvalidLogin();
          else {
            user.token = token;
            return Login(user);
          }
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  async registration(req) {
    try {
      const checkdata = await User.findOne({
        where: { email: req.body.email },
      });
      if (checkdata) return AleradyExist(checkdata);
      else {
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        let createdata = await User.create(req.body);
        if (createdata) {
          return Created(createdata);
        } else {
          return Conflict();
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  async changePassword(req) {
    const { password, conform_password, userId } = req.body;
    try {
      if (password && conform_password) {
        if (password == conform_password) {
          const user = await User.findByPk(userId);
          if (!user) return NotFound();
          else {
            const newPassword = bcrypt.hashSync(password, 8);
            const update = await User.update(
              { password: newPassword, updatedAt: Date.now() },
              { where: { id: userId } }
            );
            if (update) {
              return Created(user);
            } else {
              return Conflict();
            }
          }
        } else {
          // return InvalidCredentials()
          console.log("ERROR");
        }
      }
    } catch (err) {
      console.log("ERROR", err.message);
    }
  }
  async allUsers() {
    try {
      const users = await User.findAll(
        {
          attributes: ["id", "name", "email", "status", "createdAt"],
          order: [["id", "ASC"]],

          include: Role,
        },
        { where: { deletedAt: null } }
      );
      return AllUsers(users);
    } catch (err) {
      console.log(err.message);
    }
  }

  async changeUserStatus(req) {
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

  async removeUser(req) {
    try {
      const id = req.params.id;
      const user = await User.findByPk(id);
      if (user && user.dataValues) {
        const remove = await User.destroy({
          where: { id: id },
        });
        if (remove) {
         return Removed(remove[1])
        } else {
          return Conflict();

        }
      } else {
        return NotFound();
      }
    } catch (err) {
      console.log("ERROR");
    }
  }
}
export default new authService();
