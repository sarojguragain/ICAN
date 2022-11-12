export const RegistrationValidation = {
  email: "required|email",
  password: "required",
  RoleId: "required|integer",
  remember: "required|boolean",
};
export const EditUserValidation ={
  email:"email",
  RoleId:"integer",
  remenber:"booleam",
}

export const LoginValidation = {
  email: "required|email",
  password: "required",
  remember: "required|boolean",
};

export const MenuValidation = {
  title: "required",
  toolTip: "required",
  type: "required|integer",
  orderNo: "required|integer",
  url: "required",
  parentId: "required|integer",
  level: "required|integer",
  status: "boolean",
};

export const MenuErrorMessage = {
  required: "You forgot to give a :attribute",
  email:"Email should be email format 'xyz@abcd.pqr'",
  integer: ":attribute should be number",
  boolean: ":attribute should be boolean",
};
