export class User {
  _id: String;
  first_name: String;
  last_name: String;
  gbc_number: Number;
  email: String;
  user_password: String;
}

export class UserLogin {
  _id: String;
  gbc_number: Number;
  user_password: String;
}
