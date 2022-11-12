import models from '../app/models/index';

const RolePermission =  models.RolePermission;
const Permission = models.Permission


class Helper {
    constructor() {}

    checkPermission(roleId, permName) {
        return new Promise(
            (resolve, reject) => {
                Permission.findOne({
                    where: {
                        permission: permName
                    }
                }).then((perm) => {
                    RolePermission.findOne({
                        where: {
                            RoleId: roleId,
                            PermissionId: perm.id
                        }
                    }).then((rolePermission) => {
                        if(rolePermission) {
                            resolve(rolePermission);
                        } else {
                            reject({message: 'Forbidden'});
                        }
                    }).catch((error) => {
                        reject(error);
                    });
                }).catch(() => {
                    reject({message: 'Forbidden'});
                });
            }
        );
    }
}

export default new Helper();